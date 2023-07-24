/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px'
      },
      colors: {
          'deepOrange': '#ff5722',
          'darkOrange': '#d84315',
          'lightOrange': '#ffccbc',
          'black': '#10100E',
          'grey': '#616161',
          'white': '#fefefe',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      height: {
        layoutfull: "calc(100vh - 80px)"
      }
    },
  },
  plugins: [],
};