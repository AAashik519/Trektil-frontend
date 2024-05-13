// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":{
          "400":"#0077EC"
        },
        "secondary":{
          "400":"#F00033"
        },
        "bgPrimary":{
          "400":"#E8F3FF"
        },
        "bgSecondary":{
          "400":"#F0F6FF"
        }
      }
    },
   
  },
  plugins: [],
}