/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        forest: '#2D4A1E',
        leaf: '#3D6828',
        terracotta: '#C4714A',
        amber: '#E8903A',
        gold: '#FAD55A',
        earth: '#8B6340',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        mono: ['monospace'],
      },
    },
  },
  plugins: [],
}
