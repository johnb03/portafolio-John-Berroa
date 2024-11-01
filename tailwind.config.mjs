/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'primary__yellow' : '#FFC300' , 
			'secundary__black':' #000814',
			'white__text' : ' #f1f1f1f1',
			
			
		},
		fontFamily: {
			roboto: ['Roboto Mono','monospace'],
			gothic: ['League Gothic','sans-serif'],
		},
		extend: {
		

		},
	},
	plugins: [],
}
