/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: () => [
    {
      source: "/results",
      destination: "/api/results",
    },
  ],
}

module.exports = nextConfig
