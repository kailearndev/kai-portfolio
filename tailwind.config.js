/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   daisyui: {
    themes: ["sunset","cupcake","synthwave"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Thêm Inter làm font sans mặc định
      },
      
    },
  },
  plugins: [
   animations,
    require('daisyui')
  ],
}

