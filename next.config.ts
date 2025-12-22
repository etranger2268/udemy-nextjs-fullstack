import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  cacheComponents: true,
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  output: 'standalone',

  typescript: {
    ignoreBuildErrors: false,
  },

  env: {
    // NOTE: Modify according to the project
    // NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  },

  images: {
    remotePatterns: [
      // NOTE: Modify according to the project
      // {
      //   protocol: 'https',
      //   hostname: 'cdn.example.com',
      // },
    ],
  },
};

export default nextConfig;
