/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        vazirmatn : ['Vazirmatn']
      },
      colors:{
        secoundry : "#2951E0",
        fafafa : '#fafafa',
        primary:"rgba(75, 225, 163, 0.878)"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}

