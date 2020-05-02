const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts');

module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
})

module.exports = withFonts({
  webpack(config, options) {
    return config;
  }
});