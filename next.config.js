/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/coming-soon',
        permanent: false,
      },
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
      {
        source: '/terms',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/privacy',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/cookies',
        destination: '/coming-soon',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
