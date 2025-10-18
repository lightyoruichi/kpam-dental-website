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
			{
				dental: {
					// Primary: Medical Blue - trust, professionalism, medical care
					primary: '#2563EB', // Medical Blue
					'primary-focus': '#1D4ED8', // Darker Blue
					'primary-content': '#FFFFFF',
					
					// Secondary: Dental Teal - health, cleanliness, tranquility
					secondary: '#0D9488', // Dental Teal
					'secondary-focus': '#0F766E', // Darker Teal
					'secondary-content': '#FFFFFF',
					
					// Accent: Health Green - growth, healing, vitality
					accent: '#10B981', // Health Green
					'accent-focus': '#059669', // Darker Green
					'accent-content': '#FFFFFF',
					
					// Neutral: Professional Gray - reliability, professionalism, balance
					neutral: '#6B7280', // Professional Gray
					'neutral-focus': '#4B5563', // Darker Gray
					'neutral-content': '#FFFFFF',
					
					// Base: Clean whites and light grays - cleanliness, sterility, medical safety
					'base-100': '#FFFFFF', // Pure white
					'base-200': '#F9FAFB', // Light gray
					'base-300': '#F3F4F6', // Medium light gray
					'base-content': '#111827', // Dark gray for readability
					
					// Status colors with medical-friendly tones
					info: '#3B82F6', // Medical blue
					success: '#10B981', // Health green
					warning: '#F59E0B', // Caution amber
					error: '#EF4444', // Medical red
					
					// Additional medical psychology colors
					'success-content': '#FFFFFF',
					'warning-content': '#FFFFFF',
					'error-content': '#FFFFFF',
					'info-content': '#FFFFFF',
				},
			},
		],
	},
};
