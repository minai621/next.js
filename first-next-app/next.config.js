/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.js/,
  //     use: [
  //       options.defaultLoaders.babel,
  //       // example
  //       // {
  //       //   loader: 'my-custom-loader',
  //       //   options: loaderOptions,
  //       // },
  //     ],
  //   });
  // },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com']
  }
};

module.exports = nextConfig;
