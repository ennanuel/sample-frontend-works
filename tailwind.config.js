/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./1/**/*.{html,js,jsx}",
    "./2/**/*.{html,js,jsx}",
    "./3/**/*.{html,js,jsx}",
    "./4/**/*.{html,js,jsx}",
    "./5/**/*.{html,js,jsx}",
    "./6/**/*.{html,js,jsx}",
    "./7/**/*.{html,js,jsx}",
    "./8/**/*.{html,js,jsx}",
    "./9/**/*.{html,js,jsx}",
    "./10/**/*.{html,js,jsx}",
    "./11/**/*.{html,js,jsx}",
    "./12/**/*.{html,js,jsx}",
    "./13/**/*.{html,js,jsx}",
    "./14/**/*.{html,js,jsx}",
    "./15/**/*.{html,js,jsx}",
    "./16/**/*.{html,js,jsx}",
    "./18/**/*.{html,js,jsx}",
    "./19/**/*.{html,js,jsx}",
    "./20/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': "Poppins"
      },
      animation: {
        'loading': "full-rotate 500ms linear infinite",
        'fadeIn': "fade-in 300ms ease-in-out"
      },
      keyframes: {
        "full-rotate": {
          "0%": {
            transform: "rotate(0deg)"
          },
          "100%": {
            transform: "rotate(360deg)"
          }
        },
        "fade-in": {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        }
      }
    },
  },
  plugins: [],
}

