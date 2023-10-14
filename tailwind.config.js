import daisy from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        noto:['Noto Sans NKo Unjoined', 'sans-serif']
      },
      colors: {
        bana:{
          pink:'#ffdaff'
        }
      }
    },
  },
  plugins: [daisy],
}