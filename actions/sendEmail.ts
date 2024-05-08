'use server'

import ContactFormEmail from '@/email/contact-form-email'
import { getErrorMessage, validateString } from '@/lib/utils'
import React from 'react'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
	'use server'
	const senderEmail = formData.get('senderEmail')
	const message = formData.get('message')

	// server-side validation
	if (!validateString(senderEmail, 500)) {
		return {
			error: 'Invalid sender email',
		}
	}
	if (!validateString(message, 5000)) {
		return {
			error: 'Invalid message',
		}
	}
	let data
	try {
		await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: 'info.dudnyk@gmail.com',
			subject: 'Portfolio Website | You received a message',
			reply_to: senderEmail as string,
			react: React.createElement(ContactFormEmail, {
				message: message as string,
				senderEmail: senderEmail as string,
			}),
		})
	} catch (error: unknown) {
		return {
			error: getErrorMessage(error),
		}
	}

	return {
		data,
	}
}
