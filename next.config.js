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
        source: '/download-ai-voice-guide',
        destination: '/Ai-Voice-Clone-Survival-Guide-FINAL.pdf',
      },
      {
        source: '/resources/ai-voice-cloning-survival-guide/download',
        destination: '/Ai-Voice-Clone-Survival-Guide-FINAL.pdf',
      },
      {
        source: '/resources/ai-voice-cloning-survival-guide/download/:path*',
        destination: '/Ai-Voice-Clone-Survival-Guide-FINAL.pdf',
      },
      {
        source: '/jeff',
        destination: '/jeff.html',
      },
      {
        source: '/jeff/training',
        destination: '/jeff/training/index-v2.html',
      },
      {
        source: '/career-scam-case-study',
        destination: '/career-scam-case-study/index.html',
      },
      {
        source: '/career-scam-case-study/case-study',
        destination: '/career-scam-case-study/case-study.html',
      },
      {
        source: '/career-scam-case-study/landing',
        destination: '/career-scam-case-study/landing.html',
      },
      {
        source: '/career-scam-case-study/social-carousel',
        destination: '/career-scam-case-study/social-carousel.html',
      },
      {
        source: '/career-scam-case-study/victim-checklist',
        destination: '/career-scam-case-study/victim-checklist.html',
      },
      {
        source: '/career-scam-case-study/spot-the-scam',
        destination: '/career-scam-case-study/spot-the-scam.html',
      },
      {
        source: '/career-scam-case-study/print-guide',
        destination: '/career-scam-case-study/print-guide.html',
      },
      {
        source: '/career-scam-case-study/newsletter',
        destination: '/career-scam-case-study/newsletter.html',
      },
      {
        source: '/career-scam-case-study/poster-flyer',
        destination: '/career-scam-case-study/poster-flyer.html',
      },
    ]
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
      {
        source: '/resources/dont-let-a-text-steal-everything/index.html',
        destination: '/resources/dont-let-a-text-steal-everything',
        permanent: true,
      },
      {
        source: '/resources/phishing-link-survival-guide/index.html',
        destination: '/resources/phishing-link-survival-guide',
        permanent: true,
      },
      {
        source: '/live-presentation',
        destination: '/presentation-live',
        permanent: true,
      },
      {
        source: '/vcg',
        destination: 'https://www.scambomb.com/?utm_source=vcg_pdf',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
