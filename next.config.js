/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'placehold.co'],
    unoptimized: true,
  },
  // Adicione esta configuração para arquivos grandes
  webpack: (config) => {
    config.performance.maxAssetSize = 1024 * 1024 * 100; // 100MB
    config.performance.maxEntrypointSize = 1024 * 1024 * 100; // 100MB
    return config;
  },
}

module.exports = nextConfig 