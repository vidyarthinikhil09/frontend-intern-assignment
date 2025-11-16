// 1. Import the default colors from Tailwind
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // 2. Add the colors we need to our theme
      colors: {
        gray: colors.gray,
        blue: colors.blue,
        red: colors.red,
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}