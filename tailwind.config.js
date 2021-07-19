module.exports = {
  mode: 'jit',
  purge: ['./blocks/**/*.html'],
  darkMode: 'class',
  theme: {
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
