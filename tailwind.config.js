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
        parchment: '#F2EBD9',
        'deep-olive': '#2C3D1A',
        'carved-olive': '#4A6128',
        saddle: '#7A5C35',
        'warm-oak': '#C4A882',
        'light-wood': '#D4B896',
        'dark-wood': '#4A3520',
        ebony: '#3D3020',
      },
      fontFamily: {
        display: ['Alfa Slab One', 'Georgia', 'serif'],
        serif: ['Georgia', 'serif'],
        mono: ['monospace'],
      },
    },
  },
  plugins: [],
}
