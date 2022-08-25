/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.shopify.com", "storage.sg.content-cdn.io"],
  },
};

module.exports = nextConfig;
