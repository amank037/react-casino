/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'home-grey': '#4e4e4e',
        'head-grey': '#3e3e3e',
        'header-border-blue':'#0b6da8',
        'footer-grey': '#353535',
        'nav-gray': '#212121'
      },
    },
  },
  plugins: [],
}

