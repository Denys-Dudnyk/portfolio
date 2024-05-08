'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'
import { TbBrandFiverr } from 'react-icons/tb'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function Intro() {
	const { ref } = useSectionInView('Home', 0.5)
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

	return (
		<section
			ref={ref}
			id='home'
			className='scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0'
		>
			<div className='flex flex-col items-center justify-center z-10 relative'>
				<div className='relative'>
					<motion.div
						animate={{ opacity: 1, scale: 1 }}
						initial={{ opacity: 0, scale: 0 }}
						transition={{
							type: 'tween',
							duration: 0.2,
						}}
					>
						<Image
							src='/portrait.jpg'
							alt='Denys Dudnyk portrait'
							width={192}
							height={192}
							quality={95}
							priority={true}
							className='h-34 w-32 object-cover shadow-xl rounded-full border-[0.35rem] border-white'
						/>
					</motion.div>

					<motion.span
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'spring',
							stiffness: 125,
							delay: 0.1,
							duration: 0.7,
						}}
						className='text-4xl absolute bottom-0 right-0'
					>
						💻
					</motion.span>
				</div>
				<motion.h1
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					className='mb-10 mt-4 px-4 font-medium !leading-[1.5] sm:text-2xl'
				>
					<span className='font-bold'>Hello, I'm Denys Dudnyk.</span> I'm a{' '}
					<span className='font-bold'>
						Seasoned Front-end and Back-end developer
					</span>{' '}
					with{' '}
					<span className='font-bold'>
						strong Javascript skills and 2+ years
					</span>{' '}
					of experience. I have worked on a varying number of projects,
					developing personal and commercial products. Currently looking for a
					full-time job where I can apply and improve my knowledge.
				</motion.h1>

				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.1,
					}}
					className='flex flex-col sm:flex-row  items-center justify-center gap-2 px-4 text-lg font-medium'
				>
					<Link
						href='#contact'
						onClick={() => {
							setActiveSection('Contact')
							setTimeOfLastClick(Date.now())
						}}
						className='group hover:scale-110 hover:bg-gray-950 transition active:scale-105 outline-none focus:scale-110 bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full'
					>
						Contact me here{' '}
						<BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
					</Link>
					<a
						target='_blank'
						href='/Denys Dudnyk CV.pdf'
						download
						className='dark:bg-white/10 borderBlack cursor-pointer group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition'
					>
						Download CV{' '}
						<HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
					</a>
					<a
						target='_blank'
						href='https://www.instagram.com/dudnyk_d/'
						className='dark:bg-white/10 dark:text-white/60 cursor-pointer focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all bg-white px-4 py-4 text-gray-700 flex items-center gap-2 rounded-full '
					>
						<FaInstagram />
					</a>
					<a
						target='_blank'
						href='https://github.com/Denys-Dudnyk'
						className='dark:bg-white/10 dark:text-white/60 cursor-pointer focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition bg-white px-4 py-4 text-[1.35rem] text-gray-700 flex items-center gap-2 rounded-full'
					>
						<FaGithubSquare />
					</a>
				</motion.div>
			</div>
		</section>
	)
}
