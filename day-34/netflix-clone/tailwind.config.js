/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        netflixRed: '#E50914',
        netflixBlack: '#141414',
        testPink: '#ff00ff',
      },
    },
  },
  plugins: [],
}
