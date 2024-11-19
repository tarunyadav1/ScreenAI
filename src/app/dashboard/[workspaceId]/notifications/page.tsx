'use client'

import { getNotifications } from '@/app/actions/user'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useQueryData } from '@/hooks/useQueryData'
import { User } from 'lucide-react'
import React from 'react'

type Props = {
	params: { workspaceId: string }
}

const formatDate = (date: string) => {
	const day = new Date(date).getDate()
	const suffix = (day: any) => {
		if (day > 3 && day < 21) return 'th'
		switch (day % 10) {
			case 1:
				return 'st'
			case 2:
				return 'nd'
			case 3:
				return 'rd'
			default:
				return 'th'
		}
	}

	return new Date(date)
		.toLocaleDateString('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		})
		.replace(/\d+/, day + suffix(day))
}

const Notifications = ({ params }: Props) => {
	const { data: notifications } = useQueryData(
		['user-notifications'],
		getNotifications
	)

	const { data: notification, status } = notifications as {
		status: number
		data: {
			image: string
			notification: {
				id: string
				userId: string | null
				content: string
				createdAt: string
			}[]
		}
	}
	// Group notifications by date
	const groupNotificationsByDate = () => {
		const groups = notification.notification.reduce((groups: any, item) => {
			const date = new Date(item.createdAt).toLocaleDateString('en-US', {
				month: 'long',
				day: 'numeric',
				year: 'numeric',
			})

			if (!groups[date]) {
				groups[date] = []
			}
			groups[date].push(item)
			return groups
		}, {})

		// Convert to array and sort by date (newest first)
		return Object.entries(groups).sort((a, b) => {
			return new Date(b[0]).getTime() - new Date(a[0]).getTime()
		})
	}

	const groupedNotifications = groupNotificationsByDate()

	console.log(groupedNotifications)

	if (status !== 200) {
		return (
			<div className="flex justify-center items-center h-full w-full">
				<p>No Notification</p>
			</div>
		)
	}

	return (
		<div className="flex flex-col">
			<h1 className=" text-3xl text-[#EAEAEA] tracking-tight mb-8">
				Notifications
			</h1>

			{groupedNotifications.map(([date, notifications]) => (
				<div key={date} className="mb-6">
					<h2 className="text-lg font-semibold text-[#EAEAEA] mb-3">{date}</h2>
					{notifications.map((n: any) => (
						<div
							key={n.id}
							className="border-2 flex gap-x-3 items-center rounded-lg p-3 mb-2">
							<Avatar>
								<AvatarImage src={notification.image} alt="@shadcn" />
								<AvatarFallback>
									<User />
								</AvatarFallback>
							</Avatar>
							<p>{n.content}</p>
						</div>
					))}
				</div>
			))}
		</div>
	)
}

export default Notifications
