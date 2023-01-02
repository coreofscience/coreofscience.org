/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"brand-green": "rgb(var(--color-brand-green) / <alpha-value>)",
				"brand-yellow": "rgb(var(--color-brand-yellow) / <alpha-value>)",
				"brand-blue": "rgb(var(--color-brand-blue) / <alpha-value>)",
			}
		},
	},
	plugins: [],
}
