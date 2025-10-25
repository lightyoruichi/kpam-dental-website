/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'header': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'medical-blue': '#2563EB',
        'dental-teal': '#0D9488',
        'clean-white': '#FFFFFF',
        'professional-gray': '#6B7280',
        'health-green': '#10B981',
      }
    },
  },
  plugins: [require('daisyui')],
	daisyui: {
		themes: [
			// TEMPLATE 1: Alien (Fresh Green)
			{
				alien: {
					primary: '#32ac64', // Alien Green
					'primary-focus': '#2a9654',
					'primary-content': '#FFFFFF',
					secondary: '#54ca84', // Lighter Green
					'secondary-focus': '#3fb36d',
					'secondary-content': '#FFFFFF',
					accent: '#ddf4e6', // Light Green
					'accent-focus': '#c5eed9',
					'accent-content': '#1a6535',
					neutral: '#747474', // Greyscale
					'neutral-focus': '#393939',
					'neutral-content': '#FFFFFF',
					'base-100': '#FFFFFF',
					'base-200': '#fafafa',
					'base-300': '#f5f5f5',
					'base-content': '#191919',
					info: '#54ca84',
					success: '#32ac64',
					warning: '#fdca08',
					error: '#db255f',
				},
			},
			// TEMPLATE 2: Jellyfish (Cool Purple)
			{
				jellyfish: {
					primary: '#7a7add', // Jellyfish Purple
					'primary-focus': '#6868c7',
					'primary-content': '#FFFFFF',
					secondary: '#a2a2fc', // Light Purple
					'secondary-focus': '#8a8ae0',
					'secondary-content': '#FFFFFF',
					accent: '#ececfe', // Very Light Purple
					'accent-focus': '#dadafe',
					'accent-content': '#4f4f9a',
					neutral: '#747474', // Greyscale
					'neutral-focus': '#393939',
					'neutral-content': '#FFFFFF',
					'base-100': '#FFFFFF',
					'base-200': '#fafafa',
					'base-300': '#f5f5f5',
					'base-content': '#191919',
					info: '#a2a2fc',
					success: '#32ac64',
					warning: '#fdca08',
					error: '#db255f',
				},
			},
			// TEMPLATE 3: Papaya (Warm Orange)
			{
				papaya: {
					primary: '#de5c1c', // Papaya Orange
					'primary-focus': '#c84a16',
					'primary-content': '#FFFFFF',
					secondary: '#ff7b3a', // Light Orange
					'secondary-focus': '#ff6519',
					'secondary-content': '#FFFFFF',
					accent: '#ffe5d8', // Cream
					'accent-focus': '#ffc4a7',
					'accent-content': '#8a310a',
					neutral: '#747474', // Greyscale
					'neutral-focus': '#393939',
					'neutral-content': '#FFFFFF',
					'base-100': '#FFFFFF',
					'base-200': '#fafafa',
					'base-300': '#fff8dc',
					'base-content': '#191919',
					info: '#a2a2fc',
					success: '#32ac64',
					warning: '#fdca08',
					error: '#db255f',
				},
			},
		],
		defaultTheme: 'alien',
	},
};
