/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'mobile': '390px',
      'tablet': '810px',
      'desktop': '1200px',
      'md': '810px',
      'lg': '1200px',
      'xl': '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'var(--font-inter)', 'sans-serif'],
        heading: ['Satoshi', 'var(--font-inter)', 'sans-serif'],
      },
      colors: {
        bg: {
          page: '#F9F9F9',
          card: '#ffffff',
          dark: '#010309',
        },
        primary: '#e1443a',
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
      },
    },
  },
  plugins: [],
}