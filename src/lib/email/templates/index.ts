export const emailTemplates = {
	welcome: (username: string) => ({
		subject: 'Welcome to Our Platform!',
		html: `
        <div style="font-family: Arial, sans-serif;">
          <h1>Welcome ${username}! 👋</h1>
          <p>We're excited to have you on board.</p>
        </div>
      `,
	}),

	resetPassword: (resetLink: string) => ({
		subject: 'Reset Your Password',
		html: `
        <div style="font-family: Arial, sans-serif;">
          <h1>Password Reset Request</h1>
          <p>Click the link below to reset your password:</p>
          <a href="${resetLink}" style="background-color: #4CAF50; color: white; padding: 14px 20px; text-decoration: none; border-radius: 4px;">
            Reset Password
          </a>
          <p>If you didn't request this, please ignore this email.</p>
        </div>
      `,
	}),

	notification: (message: string) => ({
		subject: 'New Notification',
		html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Notification</h2>
          <p>${message}</p>
        </div>
      `,
	}),

	inviteToWorkspace: (workspaceName: string, invitationId: string) => ({
		subject: `${workspaceName} Workspace Invitation`,
		html: `
        <div style="font-family: Arial, sans-serif;">
          <h1>Invitation to ${workspaceName} Workspace</h1>
          <p>Click the link below to accept the invitation:</p>
          <a href="${process.env.NEXT_PUBLIC_HOST_URL}/invite/${invitationId}" style="padding: 5px 10px; border-radius: 10px;">Accept Invite</a>
        </div>
      `,
		text: `Accept Invite: ${process.env.NEXT_PUBLIC_HOST_URL}/invite/${invitationId}`,
	}),
}
