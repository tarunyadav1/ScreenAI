'use server'

import { resendClient } from '@/lib/email/resendClient'
import { emailTemplates } from '@/lib/email/templates'
import { client } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const onAuthenticateUser = async () => {
	try {
		const user = await currentUser()
		if (!user) {
			return { status: 403 }
		}

		const userExist = await client.user.findUnique({
			where: {
				clerkid: user.id,
			},
			include: {
				workspace: {
					where: {
						User: {
							clerkid: user.id,
						},
					},
				},
			},
		})

		if (userExist) return { status: 200, user: userExist }

		const newUser = await client.user.create({
			data: {
				clerkid: user.id,
				email: user.emailAddresses[0].emailAddress,
				firstname: user.firstName,
				lastname: user.lastName,
				image: user.imageUrl,
				studio: {
					create: {},
				},
				subscription: {
					create: {},
				},
				workspace: {
					create: {
						name: `${user.firstName}'s Workspace`,
						type: 'PERSONAL',
					},
				},
			},
			include: {
				workspace: {
					where: {
						User: {
							clerkid: user.id,
						},
					},
				},
				subscription: {
					select: {
						plan: true,
					},
				},
			},
		})

		if (newUser) return { status: 201, user: newUser }
		return { status: 400 }
	} catch (error) {
		console.error('Error while sign-in', error)
		return { status: 500 }
	}
}

export const getNotifications = async () => {
	try {
		const user = await currentUser()
		if (!user) return { status: 404, data: [] }

		const notifications = await client.user.findUnique({
			where: {
				clerkid: user.id,
			},
			select: {
				notification: {
					select: {
						id: true,
						userId: true,
						content: true,
						createdAt: true, // Add this line to select createdAt
					},
				},
				image: true,
				_count: {
					select: {
						notification: true,
					},
				},
			},
		})

		if (notifications && notifications.notification.length > 0) {
			return {
				status: 200,
				data: notifications,
			}
		}
		return { status: 404, data: [] }
	} catch (error) {
		console.error('Error while fetching notifications', error)
		return { status: 400, data: [] }
	}
}

export const searchUsers = async (query: string) => {
	try {
		const user = await currentUser()
		if (!user) return { status: 404 }

		const users = await client.user.findMany({
			where: {
				OR: [
					{ firstname: { contains: query } },
					{ email: { contains: query } },
					{ lastname: { contains: query } },
				],
				NOT: [{ clerkid: user.id }],
			},
			select: {
				id: true,
				subscription: {
					select: {
						plan: true,
					},
				},
				firstname: true,
				lastname: true,
				image: true,
				email: true,
			},
		})

		if (users && users.length > 0) {
			return { status: 200, data: users }
		}
		return { status: 404, data: undefined }
	} catch (error) {
		return { status: 500, data: undefined }
	}
}

export const inviteMembers = async (
	workspaceId: string,
	recieverId: string,
	email: string
) => {
	try {
		console.log(workspaceId, recieverId, email)
		const user = await currentUser()
		if (!user) return { status: 404 }
		const senderInfo = await client.user.findUnique({
			where: {
				clerkid: user.id,
			},
			select: {
				id: true,
				firstname: true,
				lastname: true,
			},
		})
		if (senderInfo?.id) {
			const workspace = await client.workSpace.findUnique({
				where: {
					id: workspaceId,
				},
				select: {
					name: true,
				},
			})
			if (workspace) {
				const invitation = await client.invite.create({
					data: {
						senderId: senderInfo.id,
						recieverId,
						workSpaceId: workspaceId,
						content: `You are invited to join ${workspace.name} Workspace, click accept to confirm`,
					},
					select: {
						id: true,
					},
				})

				await client.user.update({
					where: {
						clerkid: user.id,
					},
					data: {
						notification: {
							create: {
								content: `${user.firstName} ${user.lastName} invited ${senderInfo.firstname} into ${workspace.name}`,
							},
						},
					},
				})
				if (invitation) {
					const response = await resendClient.sendEmail({
						to: email,
						...emailTemplates.inviteToWorkspace(workspace.name, invitation.id),
					})

					if (response.success) {
						return { status: 200, data: '✅ Email send' }
					}
					return { status: 400, data: '❌ Email not send' }

					return { status: 200, data: 'Invite sent' }
				}
				return { status: 400, data: 'invitation failed' }
			}
			return { status: 404, data: 'workspace not found' }
		}
		return { status: 404, data: 'recipient not found' }
	} catch (error) {
		console.log(error)
		return { status: 400, data: 'Oops! something went wrong' }
	}
}

export const acceptInvite = async (inviteId: string) => {
	try {
		const user = await currentUser()
		if (!user) return { status: 404 }

		const invitation = await client.invite.findUnique({
			where: {
				id: inviteId,
			},
			select: {
				workSpaceId: true,
				reciever: {
					select: {
						clerkid: true,
					},
				},
			},
		})

		if (user.id !== invitation?.reciever?.clerkid) return { status: 401 }

		const acceptInvite = client.invite.update({
			where: {
				id: inviteId,
			},
			data: {
				accepted: true,
			},
		})

		const updateMember = client.user.update({
			where: {
				clerkid: user.id,
			},
			data: {
				members: {
					create: {
						workSpaceId: invitation.workSpaceId,
					},
				},
			},
		})

		const membersTransaction = await client.$transaction([
			acceptInvite,
			updateMember,
		])
		if (membersTransaction) return { status: 200, data: 'Invite accepted' }
		return { status: 400, data: 'Invite not accepted' }
	} catch (error) {
		return { status: 400, data: 'Oops! something went wrong' }
	}
}
