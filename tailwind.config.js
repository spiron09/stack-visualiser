const { margin } = require('tailwindcss/defaulttheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        Manrope: ['Manrope', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
      margin: {
        '62px': '62px'
      }
    },

    fontFamily: {
      'sans': ['Montserrat'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      'display': ['Oswald', ],
      'body': ['"Open Sans"'],
    },

    fontSize : {
      'xl' : '1.1rem'
    },

    
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}