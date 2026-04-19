import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  webpack: (config) => {
    // Suppress the benign next-intl dynamic import Cache warning in dev console
    config.infrastructureLogging = {
      level: 'error',
    };
    return config;
  },
};

export default withNextIntl(nextConfig);
