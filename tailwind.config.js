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
      fontSize: {
        ms: "10px",
      },
      colors: {
        primary: {
          light: "white",
          dark: "black",
          brand: "#5865F2",
        },
      },
    },
  },
  plugins: [],
};
