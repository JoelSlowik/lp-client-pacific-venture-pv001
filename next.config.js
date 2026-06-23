/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'h3f5ivd9.b-cdn.net',
      },
    ],
  },
};
module.exports = nextConfig;
