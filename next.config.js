/** @type {import('next').NextConfig} */
const nextConfig = {
  // App router is now stable in Next.js 14, no experimental config needed

  // Ensure contentlayer runs during build
  experimental: {
    // This helps with static generation
    serverComponentsExternalPackages: ['contentlayer'],
  },
}

module.exports = nextConfig
