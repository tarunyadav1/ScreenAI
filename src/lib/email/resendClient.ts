import { Resend } from 'resend'
import { EmailPayload, EmailResponse } from './types'
import { emailTemplates } from './templates'

class ResendClient {
	private resend: Resend
	private defaultFrom: string

	constructor() {
		if (!process.env.RESEND_API_KEY) {
			throw new Error('RESEND_API_KEY is not defined')
		}

		this.resend = new Resend(process.env.RESEND_API_KEY)
		this.defaultFrom = process.env.EMAIL_FROM || 'hello@tarunyadav.xyz'
	}

	async sendEmail(payload: EmailPayload): Promise<EmailResponse> {
		try {
			const { data, error } = await this.resend.emails.send({
				from: payload.from || this.defaultFrom,
				to: payload.to,
				subject: payload.subject,
				html: payload.html,
				cc: payload.cc,
				bcc: payload.bcc,
				replyTo: payload.replyTo,
				attachments: payload.attachments,
			})

			if (error) {
				console.error('Resend API Error:', error)
				return {
					success: false,
					error: error.message,
				}
			}

			return {
				success: true,
				messageId: data?.id,
			}
		} catch (error) {
			console.error('Email sending failed:', error)
			return {
				success: false,
				error:
					error instanceof Error ? error.message : 'Unknown error occurred',
			}
		}
	}

	// Utility methods for common email types
	async sendWelcomeEmail(to: string, username: string): Promise<EmailResponse> {
		const template = emailTemplates.welcome(username)
		return this.sendEmail({
			to,
			...template,
		})
	}

	async sendPasswordResetEmail(
		to: string,
		resetLink: string
	): Promise<EmailResponse> {
		const template = emailTemplates.resetPassword(resetLink)
		return this.sendEmail({
			to,
			...template,
		})
	}

	async sendNotification(to: string, message: string): Promise<EmailResponse> {
		const template = emailTemplates.notification(message)
		return this.sendEmail({
			to,
			...template,
		})
	}
}

// Export as singleton
export const resendClient = new ResendClient()
