import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['9d7c-119-73-102-58.ngrok-free.app'],
  async redirects() {
    return [
      {
        source: '/services/seo',
        destination: '/services/search-engine-optimization',
        permanent: true,
      },
      {
        source: '/services/sem',
        destination: '/services/search-engine-marketing',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
