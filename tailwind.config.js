/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
				light: {
					background: '#F7F4F4',
					text: '#010E28',
					link: '#0D1A92',
				},
				sunset: {
					background: '#FDECD7',
					text: '#010E28',
					link: '#3749EC',
				},
				dark: {
					background: '#010E28',
					text: '#F9FBFF',
					link: '#FBFF48',
				},
			},
    },
  },
  plugins: [],
}

