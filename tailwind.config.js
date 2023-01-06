/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./core/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      book: "480px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
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
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
