'use client'
import { motion, useTransform } from 'framer-motion'

import { projectsData } from '@/lib/data'
import { useScroll } from 'framer-motion'

import React, { useRef } from 'react'
import Link from 'next/link'

import { TbExternalLink } from 'react-icons/tb'
import ImageOrVideo from './imageOrVideo'

type ProjectProps = (typeof projectsData)[number]

export default function Project({
	title,
	description,
	tags,
	imageUrl,
	link,
}: ProjectProps) {
	const ref = useRef<HTMLElement>(null)

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	})

	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

	return (
		<motion.div
			style={{
				scale: scaleProgress,
				opacity: opacityProgress,
			}}
			className='group mb-3 sm:mb-8 last:mb-0 '
		>
			<section
				ref={ref}
				className='dark:bg-white/10 dark:hover:bg-white/20 dar:text-white rounded-lg cursor-pointer hover:bg-gray-200 transition group mb-3 sm:mb-8 last:mb-0 mdMin:h-[20rem] relative bg-gray-100 max-w-[60rem] lgMax:max-w-[35rem]  border border-black/5 overflow-hidden sm:pr-8'
			>
				<div className='  h-full flex flex-col pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 mdMin:max-w-[50%]'>
					<h3 className='text-2xl font-semibold  '>
						<Link
							href={link}
							target='_blank'
							className='flex items-center opacity-80 hover:opacity-100 transition-opacity'
						>
							{title} <TbExternalLink className='ml-1' />
						</Link>
					</h3>
					<p className='dark:text-white/70 mt-2 leading-relaxed text-gray-700 '>
						{description}
					</p>
					<ul className='flex flex-wrap mt-4 gap-2 '>
						{tags.map((tag, index) => {
							return (
								<li
									className='dark:text-white/70 bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'
									key={index}
								>
									{tag}
								</li>
							)
						})}
					</ul>
					<ImageOrVideo src={imageUrl} />
				</div>
			</section>
		</motion.div>
	)
}
