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
      {
        source: '/services/orm',
        destination: '/services/online-reputation-management',
        permanent: true,
      },
      {
        source: '/services/cro',
        destination: '/services/conversion-rate-optimization',
        permanent: true,
      },
      {
        source: '/services/ecommerce-development',
        destination: '/services/shopify-ecommerce-development',
        permanent: true,
      },
      {
        source: '/industries/healthcare',
        destination: '/industries/healthcare-clinics',
        permanent: true,
      },
      {
        source: '/industries/restaurants-fb',
        destination: '/industries/restaurants-food-beverage',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/terms-of-service',
        destination: '/terms',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
