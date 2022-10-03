/** @type {import('tailwindcss').Config} */

// const bodyFontFamily = '"Inter-Regular", sans-serif'
// const headingFontFamily = '"Sora-SemiBold", sans-serif'
// const headingBoldFontFamily = '"Sora-Bold", sans-serif'
// const leadFontFamily = '"Sora-Regular", sans-serif'
// const subHeadingFontFamily = '"DM-Mono-Regular", sans-serif'
// const subHeadingMediumFontFamily = '"DM-Mono-Medium", sans-serif'

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    // fontFamily: {
    //   sans: bodyFontFamily,
    //   heading: headingFontFamily,
    //   'heading-bold': headingBoldFontFamily,
    //   subheading: subHeadingFontFamily,
    //   'subheading-medium': subHeadingMediumFontFamily,
    //   lead: leadFontFamily,
    // },
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
    },
    extend: {
      // colors: {
      //   'semi-white': '#eee8e1',
      //   'dark-500': '#1b2022',
      //   'purple-400': '#AD8AFF',
      //   'purple-500': '#825AFF',
      //   'purple-600': '#6540da',
      //   'yellow-400': '#efd475',
      //   'yellow-500': '#edc94a',
      //   'yellow-600': '#d2b343',
      //   'sky-500': '#75a8ff',
      //   'sky-600': '#8eb8ff',
      //   'rose-400': '#fa6898',
      //   'rose-500': '#e35484',
      //   'red-500': '#e8002d',
      //   'green-500': '#249775',
      // },
    },
  },
  plugins: [],
};
