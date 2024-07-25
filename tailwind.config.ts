import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},

		screens: {
			xs: { max: '425px' },

			sm: '640px',
			smMax: { max: '640px' },
			smMin: { min: '640px' },

			md: '768px',
			mdMax: { max: '768px' },
			mdMin: { min: '948px' },
			lgMax: { max: '948px' },

			lg: '1024px',

			xl: '1280px',

			'2xl': '1536px',
		},
	},
	plugins: [],
	darkMode: 'class',
}
export default config
