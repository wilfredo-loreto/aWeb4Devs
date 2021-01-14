const withSass = require('@zeit/next-sass')
const withFonts = require('nextjs-fonts')
module.exports = withSass(withFonts({
  webpack(config, options) {
   return config
  },
  cssModules: true,
  
}))
module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./components/generate-sitemap');
    }

    return config;
  }
};