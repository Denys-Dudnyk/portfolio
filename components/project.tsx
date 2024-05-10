'use client'
import { motion, useTransform } from 'framer-motion'
import { projectsData } from '@/lib/data'
import { useScroll } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'

type ProjectProps = (typeof projectsData)[number]

export default function Project({
	title,
	description,
	tags,
	imageUrl,
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
				className='dark:bg-white/10 dark:hover:bg-white/20 dar:text-white rounded-lg cursor-pointer sm:group-even:pl-8 hover:bg-gray-200 transition group mb-3 sm:mb-8 last:mb-0 sm:h-[20rem] relative bg-gray-100 max-w-[60rem] border border-black/5 overflow-hidden sm:pr-8'
			>
				<div className=' sm:group-even:ml-[18rem] md:group-even:ml-[25rem] h-full flex flex-col pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]'>
					<h3 className='text-2xl font-semibold '>{title}</h3>
					<p className='dark:text-white/70 mt-2 leading-relaxed text-gray-700 '>
						{description}
					</p>
					<ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
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
				</div>
				<Image
					width={1000}
					height={1000}
					src={imageUrl}
					alt='Project I worked on'
					quality={95}
					className=' transition group-hover:scale-[1.25] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-10 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40 absolute top-8 -right-20 w-[30.25rem] rounded-t-lg shadow-2xl responsive xs:group-hover:scale-100 xs:group-hover:rotate-0 xs:group-hover:translate-y-0 xs:group-hover:-translate-x-0 xs:group-even:left-0 xs:group-even:right-0 xs:group-even:group-hover:rotate-0  xs:group-even:group-hover:translate-y-0 xs:group-even:group-hover:translate-x-0   smMax:group-even:left-0      mdMax:group-hover:scale-100 mdMax:group-hover:rotate-0 mdMax:group-hover:translate-y-0 mdMax:group-hover:-translate-x-0  mdMax:group-even:right-0 mdMax:group-even:group-hover:rotate-0  mdMax:group-even:group-hover:translate-y-0 mdMax:group-even:group-hover:translate-x-0'
				/>
			</section>
		</motion.div>
	)
}
