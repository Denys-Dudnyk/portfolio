'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import SubmitBtn from './submitBtn'
import { sendEmail } from '@/actions/sendEmail'
import { useFormStatus } from 'react-dom'
import toast from 'react-hot-toast'

export default function Contact() {
	const { ref } = useSectionInView('Contact')
	const { pending } = useFormStatus()

	return (
		<motion.section
			id='contact'
			ref={ref}
			className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
			viewport={{
				once: true,
			}}
		>
			<SectionHeading>Contact me</SectionHeading>

			<p className='dark:text-white/80 text-gray-700 -mt-6 '>
				Please contact me directly at{' '}
				<a className='underline' href='mailto:info.dudnyk@gmail.com'>
					info.dudnyk@gmail.com
				</a>{' '}
				or through this form.
			</p>

			<form
				className='dark:text-black/80 mt-10 flex flex-col'
				action={async formData => {
					const { data, error } = await sendEmail(formData)

					if (error) {
						toast.error(error)
						return
					}

					toast.success('Email sent successfully!')
				}}
			>
				<input
					className='dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none h-14 px-4 rounded-lg borderBlack '
					name='senderEmail'
					type='email'
					required
					maxLength={500}
					placeholder='Your email'
				/>
				<textarea
					className='dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100  dark:outline-none h-52 resize-none my-3 rounded-lg borderBlack p-4   transition-all '
					name='message'
					placeholder='Your message'
					required
					maxLength={5000}
				/>
				<SubmitBtn />
			</form>
		</motion.section>
	)
}
