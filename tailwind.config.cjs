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
        'warm-gold': '#D4AF37',
        'deep-red': '#8B0000',
        'cream': '#F5F5DC',
        'charcoal': '#36454F',
        'sage': '#9CAF88',
      }
    },
  },
  plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				restaurant: {
					// Primary: Warm Gold - stimulates appetite, luxury, warmth
					primary: '#D4AF37', // Rich Gold
					'primary-focus': '#B8860B', // Darker Gold
					'primary-content': '#FFFFFF',
					
					// Secondary: Deep Burgundy - sophistication, appetite stimulation
					secondary: '#722F37', // Deep Burgundy
					'secondary-focus': '#8B0000', // Darker Burgundy
					'secondary-content': '#FFFFFF',
					
					// Accent: Warm Cream - comfort, cleanliness, appetite
					accent: '#F5E6D3', // Warm Cream
					'accent-focus': '#E6D3B7', // Slightly darker cream
					'accent-content': '#2C1810', // Dark brown for contrast
					
					// Neutral: Rich Brown - earthiness, reliability, warmth
					neutral: '#3C2415', // Rich Brown
					'neutral-focus': '#2C1810', // Darker Brown
					'neutral-content': '#F5E6D3', // Light cream
					
					// Base: Warm whites and creams - appetite stimulation, cleanliness
					'base-100': '#FEFCF8', // Warm white
					'base-200': '#F8F4E6', // Light cream
					'base-300': '#F0E6D3', // Medium cream
					'base-content': '#2C1810', // Dark brown for readability
					
					// Status colors with food-friendly tones
					info: '#4A90E2', // Soft blue
					success: '#7CB342', // Fresh green (like herbs)
					warning: '#FF8F00', // Warm orange (like citrus)
					error: '#D32F2F', // Rich red (like tomatoes)
					
					// Additional food psychology colors
					'success-content': '#FFFFFF',
					'warning-content': '#FFFFFF',
					'error-content': '#FFFFFF',
					'info-content': '#FFFFFF',
				},
			},
		],
	},
};
