/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
      },
      spacing: {
        '100': '25rem',
        '50': '12.5rem',
      }
    },
  },
  plugins: [],
};