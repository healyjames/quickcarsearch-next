/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/store',
        destination: '/coming-soon',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
