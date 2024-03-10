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
      }
    },
  },
  plugins: [],
}

