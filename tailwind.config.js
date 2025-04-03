/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundColor: {
      primary_first: '#495E57',
      primary_second: '#F4CE14',
      secondary_first: '#EE9972',
      secondary_second: '#FBDABB',
      highlight_first: '#EDEFEE',
      highlight_second: '#333333',
    },
    colors: {
      primary_first: '#495E57',
      primary_second: '#F4CE14',
      secondary_first: '#EE9972',
      secondary_second: '#FBDABB',
      highlight_first: '#EDEFEE',
      highlight_second: '#333333',
      white: '#FFFFFF'
    },
    lineHeight: {
      primary: 1.5,
    },
  },
  plugins: [],
}

