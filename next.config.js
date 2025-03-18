/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.sanity.io'], // Allows Sanity images
    },
    experimental: {
      // appDir: true, // Ensure this is enabled for Next.js App Router
  },
    async rewrites() {
      return [
        {
          source: '/studio/:path*',
          destination: '/sanity/:path*', // Redirects requests to the Sanity Studio
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  