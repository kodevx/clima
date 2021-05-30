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
        'darker-orange': '#ff6600', // Adding Custom Colors 

        /*  Light Theme Colors  */
        'btn-primary': '#4ACFAC',
        'bck-primary': '#FAC689',
        'bck-warning': '#EF4B56',
        'hover-btn': '#EEEEEE',

        /*  Dark Theme Colors  */
        'dark-black-primary': '#121212',
        'dark-black-secondary': '#1E1E1E',
        'dark-btn-primary': '#373737',
        'dark-btn-secondary': '#FAC68A',
        'dark-text-gray': '#808080',
        'dark-text-green': '#83DEC4',
        'dark-bck-warning': '#EF4B56',
        'dark-bck-header': '#1D1D1D',
        'dark-search-back': '#353535'
        
      },
      borderRadius: {
        // 'medium': '18px',
        'large': '26px'
      },
      textOpacity: {
        '52':'0.52',
      },
      backgroundOpacity: {
          '52':'0.52',
          '87':'0.87',
          '75':'0.75' 
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
