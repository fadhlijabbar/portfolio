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
        'primary': '#3A6DF1',
        'primary-active': '#3462D9',
      },
      width: {
        '800': '800px',
      },
      rotate: {
        '360': '360deg',
      }
    },
  },
  plugins: [],
}