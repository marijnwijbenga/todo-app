module.exports = {
  prefix: '',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Nunito"', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {
      outline: ["focus"],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
