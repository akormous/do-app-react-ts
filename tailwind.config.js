/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'reef-gold': {
          '50': '#fcfde9',
          '100': '#f7fbc6',
          '200': '#f5f98f',
          '300': '#f5f54f',
          '400': '#f0e71f',
          '500': '#e0ce12',
          '600': '#c1a30d',
          '700': '#a9820f',
          '800': '#805e13',
          '900': '#6d4d16',
          '950': '#3f2809',
        },
      },
      fontSize: {
        'h1': '96px',
      },
      fontFamily: {
        display: "Red Hat Display, sans-serif",
        sans: "Inter, sans-serif"
      },
    },
  },
  plugins: [],
}

