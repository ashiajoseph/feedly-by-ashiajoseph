module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'read_more' : '#5B5AC4'
      },
      width: {
        '78': '77%'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
