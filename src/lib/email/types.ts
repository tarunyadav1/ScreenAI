export interface EmailPayload {
	to: string | string[]
	subject: string
	html: string
	from?: string
	cc?: string | string[]
	bcc?: string | string[]
	replyTo?: string
	attachments?: {
		filename: string
		content: Buffer
	}[]
}

export interface EmailResponse {
	success: boolean
	messageId?: string
	error?: string
}
