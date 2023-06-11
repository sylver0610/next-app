//  @type {import('next').NextConfig} 
const path = require('path');
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],

  },
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.mdx/,
  //     use: [
  //       options.defaultLoaders.babel,
  //       {
  //         loader: '@mdx-js/loader',
  //         options: pluginOptions.options,
  //       },
  //     ],
  //   })

  //   return config
  // },
}

module.exports = nextConfig
