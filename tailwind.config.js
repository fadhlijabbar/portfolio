/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'plusjakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        'neutral-primary': '#333333',
        'neutral-secondary': '#686868',
        'neutral-border': '#DADADA',
        'neutral-menu': '#f1f1f1',
        'primary': '#B9C1E5',
        'primary-active': '#3462D9',
        'primary-dark': '#111111',
        'secondary-dark': '#252525',
        'light-secondary': '#BBBBBB',
        'secondary': '#4895EF',
        'accent': '#B5179E'
      },
      width: {
        '800': '800px',
      },
      rotate: {
        '360': '360deg',
      },
      animation: {
        'custom-ping': 'custom-ping 1s ease-in-out infinite',
      },
      keyframes: {
        'custom-ping': {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}