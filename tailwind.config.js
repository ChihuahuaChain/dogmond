/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			BLUE: '#2252D6',
			BLUE64: '#2252D664',
			WHITE: '#FFFFFF',
			BLACK: '#000000',
			ORANGE: '#DB7C35',
			YELLOW: '#FFFD96',
			PINK: '#F4AAFF',
			GREEN: '#7BE5DB',
			PURPLE: '#6E04F5',
			PURPLE2: '#7000FF'
		},
		fontFamily: {
      single: ['"Single Day"', "sans-serif"],
      custom2: ["Custom-2", "sans-serif"],
    },
		extend: {}
	},
	plugins: []
};
