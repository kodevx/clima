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
         gray: colors.gray,
         coolGray: colors.coolGray,
         orange: colors.orange,
         lime: colors.lime,
         lightBlue: colors.lightBlue,

        'custom-greyish':'#042127',
        'darker-orange': '#ff6600' // Adding Custom Colors 
      },
      transform: ['hover', 'focus'],
      transitionProperty: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
