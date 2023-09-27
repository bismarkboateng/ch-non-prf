/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        sora: ['Sora', 'sans-serif'],
        workSans: ['Work Sans', 'sans-serif']
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },

        slideRight: {
          '0%': { width: '0'},
          '100%': { width: '100%'}
        },
      },

      animation: {
        fadeIn: 'fadeIn 1s ease 2.5s',
        slideRight: 'slideRight 2s ease'

      }
    },
  },
  plugins: [],
}