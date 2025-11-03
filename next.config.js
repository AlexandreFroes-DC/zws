/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    webpackBuildWorker: false,
  },
  webpack: (config) => {
    config.optimization.runtimeChunk = 'single';
    return config;
  },
};

export default nextConfig;
