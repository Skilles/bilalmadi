// @ts-check

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Enable React to support React JSX components.
	integrations: [react(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
	site: 'https://bilalmadi.com',
});
