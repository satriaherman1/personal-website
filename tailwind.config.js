module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '0.7rem',
        sm: '0.7rem',
        md: '2rem',
        lg: '2.4rem',
      },
    },
    // colors: {
    //   primary: {
    //     DEFAULT: '#284a99',
    //     dark: '#183270',
    //     light: '#4463ab',
    //   },
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
