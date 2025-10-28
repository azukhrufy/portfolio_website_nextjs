/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: {
    webpack5: true, // Explicitly enable Webpack 5
  },
};

module.exports = nextConfig;
