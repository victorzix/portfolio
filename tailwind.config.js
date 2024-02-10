/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
    extend: {
      colors: {
        darkmode: {
          background: '#010E28',
          text: '#F9FBFF',
          link: '#FBFF48',
          button: '#FBFF48',
        },
        sunset: {
          background: '#FDECD7',
          text: '#010E28',
          link: '#3749EC',
          button: '#FCE2C1',
        },
        light: {
          background: '#F7F4F4',
          text: '#010E28',
          link: '#0D1A92',
          button: '#D9D9D9',
        },
      },
      fontFamily: {
				monda: ['Monda-regular'],
				'monda-bold': ['Monda-bold'],
				inter: ['Inter-bold'],
			},
    },
  },
};
