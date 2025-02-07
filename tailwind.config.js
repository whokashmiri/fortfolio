/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class", // Enables dark mode using "class" strategy

	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {

		colors: {
			"primary": "#1A1A19",
			"secondary": "#20201f",
			"accent": "#f9f9f8",
			"neutral": "#fefefe",
			"customGrey" :"f0fee7",
			"base-100" :"0e2d06",
			
			
		  },
	  },
	},
	plugins: [],
  }
  
  