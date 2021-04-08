const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        gothamLight: ['GothamLight'],
        gothamMedium: ['GothamMedium'],
        gothamBold: ['GothamBold'],
        lovelo: ['Lovelo']
      },
      colors: {
         teal: colors.teal,
         lightBlue: colors.lightBlue,
         cyan: colors.cyan,

        'darker-orange': '#ff6600' // Adding Custom Colors 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
