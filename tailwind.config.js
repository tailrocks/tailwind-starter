module.exports = {
  mode: 'jit',
  purge: [
    './blocks/**/*.html',
    './view/**/*.html',
    './view/**/*.eta'
  ],
  darkMode: 'class',
  theme: {
    debugScreens: {
      style: {
        backgroundColor: 'white',
        color: 'black',
        position: 'fixed',
        bottom: '5px',
        left: '5px',
        borderRadius: '3px',
      },
    },
    extend: {
      fontFamily: {
        tangerine: "'Tangerine'",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
