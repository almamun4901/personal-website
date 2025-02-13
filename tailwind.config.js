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
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))'
      },
      fontFamily:{
        monument: ['Monument Grotesk Mono', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
    },
  },
  plugins: [],
}