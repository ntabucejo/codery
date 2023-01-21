/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./core/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      book: "480px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
    },
    extend: {
      opacity: {
        fade: 0.6,
      },
      fontSize: {
        ms: "10px",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
      colors: {
        primary: {
          light: "#fafafa",
          dark: "#2e2e2e",
          brand: "#5865F2",
        },
      },
      animation: {
        'shake': "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
      },
      keyframes: {
        'shake': {
          "0%, 10%, 90%": {
            transform: "translate3d(-1px, 0,0)",
          },
          "20%,80%": {
            transform: "translate3d(2px,0,0)",
          },
          "30%,50%,70%": {
            transform: "translate3d(-4px,0,0)",
          },
          "40%,60%": {
            transform: "translate3d(4px,0,0)",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
