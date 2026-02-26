/** @type {import('next').NextConfig} */
const nextConfig = {
  // App router is now stable in Next.js 14, no experimental config needed

  // Ensure contentlayer runs during build
  experimental: {
    // This helps with static generation
    serverComponentsExternalPackages: ['contentlayer'],
  },
  async redirects() {
    return [
      {
        source: '/testing',
        destination: '/testing/index.html',
        permanent: false,
      },
      {
        source: '/scam-stories',
        destination: '/scam-stories/index.html',
        permanent: false,
      },
      {
        source: '/reports/older-adult-fraud-2024-2025',
        destination: '/reports/older-adult-fraud-2024-2025/index.html',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
