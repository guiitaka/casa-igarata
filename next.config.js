/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'placehold.co'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.performance.maxAssetSize = 1024 * 1024 * 100;
    config.performance.maxEntrypointSize = 1024 * 1024 * 100;
    return config;
  },
}

module.exports = nextConfig 