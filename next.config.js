// next.config.js
const withSass = require('@zeit/next-sass');
const withFonts = require('nextjs-fonts');


module.exports = withSass(withFonts({
    cssModules:true,

    webpack(config, options) {
    return config;
  },
  
}));