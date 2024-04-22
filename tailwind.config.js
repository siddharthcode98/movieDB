/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nav: "#0f2133",
        main: "#06121e",
        color1: "#dd003f",
        color2: "#dcf836",
        IconColor: "#fff",

        buttonBackgroundColor: "#dd003f",
      },
      fontFamily: {
        dosis: ["Dosis", "system - ui", "sans - serif"],
      },
    },
  },
  plugins: [],
};
