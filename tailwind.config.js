/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B3A6B',
          dark: '#122850',
          light: '#2a5fa0',
        },
        teal: {
          DEFAULT: '#5BB8C4',
          light: '#A8DDE4',
          pale: '#E8F7F9',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
