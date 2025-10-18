/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'header': ['Libertinus Sans', 'Georgia', 'serif'],
        'body': ['IBM Plex Mono', 'SF Mono', 'monospace'],
      },
    },
  },
  plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				dark: {
					primary: '#FFFFFF',
					'primary-focus': '#E6E6E6',
					'primary-content': '#000000',
					secondary: '#f000b8',
					'secondary-focus': '#bd0091',
					'secondary-content': '#ffffff',
					accent: '#37cdbe',
					'accent-focus': '#2aa79b',
					'accent-content': '#ffffff',
					neutral: '#3d4451',
					'neutral-focus': '#2a2e37',
					'neutral-content': '#ffffff',
					'base-100': '#121212',
					'base-200': '#1A1A1A',
					'base-300': '#2A2A2A',
					'base-content': '#A6ADBB',
					info: '#2094f3',
					success: '#009485',
					warning: '#ff9900',
					error: '#ff5724',
				},
			},
		],
	},
}; 