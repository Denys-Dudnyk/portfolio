import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'

const onlineCinemaImg = '/online-cinema.png'
const eduSKImg = '/edu-sk.png'
const sigmanit = '/sigmanit.png'

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},

	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const

export const experiencesData = [
	{
		title: 'Graduated Academy STEP',
		location: 'Ukraine, Poltava',
		description:
			'I graduated after 5 years of studying. Gained bose knowledge in each of the areas of IT. In particular: design, editing, sound processing, game creation, application creation (Backend and Frontend).',
		icon: React.createElement(FaReact),
		date: '2019',
	},
	{
		title: 'Graduated school',
		location: 'Ukraine, Poltava',
		description:
			'I graduated after 11 years of studying. Graduated from a physics and math class that allowed me to go on to university.',
		icon: React.createElement(LuGraduationCap),
		date: '2019',
	},
	{
		title: 'Student of UKF in Nitra',
		location: 'Slovakia, Nitra',
		description: "I'm studying Applied Informatics at UKF in Nitra",
		icon: React.createElement(LuGraduationCap),
		date: '2019 - present',
	},
	{
		title: 'htmllessons.io',
		location: 'Slovakia, Nitra',
		description:
			'I have studied courses on Web development and learned the technologies I needed for Front-end and Back-end development.',
		icon: React.createElement(CgWorkAlt),
		date: '2022 - present',
	},
] as const

export const projectsData = [
	{
		title: 'Online Cinema',
		description:
			'I was developing a website using React(Next JS) + NestJS. I created a fully functional online cinema with  authorization (with JWT tokens and passport.js) and an admin panel.',
		tags: [
			'React',
			'Next.js',
			'MongoDB',
			'Tailwind',
			'Nest.js',
			'TypeScript',
			'Redux Toolkit',
			'TanStack Query',
		],
		imageUrl: onlineCinemaImg,
	},
	{
		title: 'Education in Slovakia',
		description:
			'I was developing the frontend and backend parts. There was also implemented a multilingual feature on the website.',
		tags: ['React', 'TypeScript', 'Next.js', 'Nest.js', 'Tailwind', 'i18n'],
		imageUrl: eduSKImg,
	},
	{
		title: 'SIGMANIT',
		description:
			'I developed and maintained a website for the sale of chemical components.',
		tags: ['React', 'Next.js', 'Nest.js', 'Tailwind', 'Framer', 'Nodemailer'],
		imageUrl: sigmanit,
	},
] as const

export const skillsData = [
	'JavaScript',
	'React',
	'Next.js',
	'TypeScript',
	'Redux Toolkit',
	'React Query',
	'React Router Dom',
	'HTML5',
	'CSS3',
	'SCSS',
	'Git',
	'Tailwindcss',
	'Node.js',
	'Express.js',
	'Nest.js',
	'MongoDB',
	'JWT',
] as const
