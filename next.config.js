const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  const webpackConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.module.rules.push({
        test: /\.(glsl)$/,
        use: ['glslify-import-loader', 'raw-loader', 'glslify-loader'],
      });

      return config;
    },
  };

  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
  };

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...webpackConfig,
      ...nextConfig,
    };
  }

  return {
    ...webpackConfig,
    ...nextConfig,
  };
};
