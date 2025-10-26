// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
	site: 'https://yourdomain.com', // ⚠️ UPDATE THIS: Replace with your actual domain
	trailingSlash: 'never',
	integrations: [
		svelte(), 
		tailwind()
	],
	output: 'server',
	adapter: vercel(),
	server: {
		headers: {
			'X-Robots-Tag': 'index, follow',
			'X-Content-Type-Options': 'nosniff',
			'X-Frame-Options': 'DENY',
			'X-XSS-Protection': '1; mode=block',
			'Referrer-Policy': 'strict-origin-when-cross-origin'
		}
	}
});
