const DEV = process.env.NODE_ENV !== 'production';

const autoPrefixer = require('autoprefixer');
const cssMqpacker = require('css-mqpacker');
const postcssFontMagician = require('postcss-font-magician');
const cssNano = require('cssnano');

const plugins = [
  autoPrefixer,
  postcssFontMagician({
    variants: {
      'Roboto Condensed': {
        300: [],
        400: [],
        700: [],
      },
    },
    foundries: ['google'],
  }),
  cssMqpacker,
];

// Use only for production build
if (!DEV) {
  plugins.push(cssNano);
}

module.exports = {plugins};
