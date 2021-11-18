module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray-secondary': '#182133',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.7rem',
        sm: '0.7rem',
        md: '2rem',
        lg: '2.4rem',
      },
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
};
