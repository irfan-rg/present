/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': '#1A1F2C',
        'text': '#D4AF37',
        'secondary': '#F5F5F0',
        'secondary-text': '#8E9196',
      },
    },
  },
  plugins: [],
};