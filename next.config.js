/** @type {import('next').NextConfig} */
const nextConfig = {
  // App router is now stable in Next.js 14, no experimental config needed

  // Ensure contentlayer runs during build
  experimental: {
    // This helps with static generation
    serverComponentsExternalPackages: ['contentlayer'],
  },
  async rewrites() {
    return [
      {
        source: '/testing',
        destination: '/testing/index.html',
      },
      {
        source: '/scam-stories',
        destination: '/scam-stories/index.html',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/testing/index.html',
        destination: '/testing',
        permanent: true,
      },
      {
        source: '/scam-stories/index.html',
        destination: '/scam-stories',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
