const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack(config){
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    },
    {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    });
    return config;
  }
})
