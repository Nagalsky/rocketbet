/** @type {import('tailwindcss').Config} */

const bodyFontFamily = '"Rubik-Regular", sans-serif';
const headingFontFamily = '"Rubik-Bold", sans-serif';
const mediumFontFamily = '"Rubik-Medium", sans-serif';
const semiBoldFontFamily = '"Rubik-SemiBold", sans-serif';

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: bodyFontFamily,
      heading: headingFontFamily,
      medium: mediumFontFamily,
      semibold: semiBoldFontFamily,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "540px",
      md: "770px",
      lg: "999px",
      xl: "1230px",
      "2xl": "1330px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        "dark-300": "#404f55",
        "dark-400": "#19262b",
        "dark-500": "#162226",
        "dark-600": "#202f35",
        "dark-700": "#212f35",
        "green-500": "#33c16c",
      },
    },
  },
  plugins: [],
};
