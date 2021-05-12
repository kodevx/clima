const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
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
         grey: colors.coolGray,
        'darker-orange': '#ff6600' // Adding Custom Colors 
      },
      transform: ['hover', 'focus']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
