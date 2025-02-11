/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      aspectRatio: {
        '5/6': '5 / 6',
        '2/3': '2 / 3',
        '3/4': '3 / 4'
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))'
      },
      fontFamily:{
        monument: ['Monument Grotesk Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}