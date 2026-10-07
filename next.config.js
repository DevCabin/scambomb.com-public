/** @type {import('next').NextConfig} */
const nextConfig = {
  // App router is now stable in Next.js 14, no experimental config needed

  // Ensure contentlayer runs during build
  experimental: {
    // This helps with static generation
    serverComponentsExternalPackages: ['contentlayer'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://www.clarity.ms https://link.msgsndr.com https://in.heycatch.ai",
              "worker-src 'self' blob:",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https: blob: https://www.facebook.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com https://connect.facebook.net https://www.facebook.com https://www.clarity.ms https://link.msgsndr.com https://api.leadconnectorhq.com https://backend.leadconnectorhq.com https://formspree.io https://tajftdwlkoljbkzxcrun.supabase.co https://vitals.vercel-insights.com https://in.heycatch.ai",
              "frame-src 'self' https://api.leadconnectorhq.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self' https://formspree.io",
            ].join('; '),
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/resources/ai-voice-cloning-survival-guide/download',
        destination: '/api/download-ai-voice-guide',
      },
      {
        source: '/resources/ai-voice-cloning-survival-guide/download/:path*',
        destination: '/api/download-ai-voice-guide',
      },
      {
        source: '/resources/is-this-a-scam-checklist',
        destination: '/resources/is-this-a-scam-checklist/index.html',
      },
      {
        source: '/resources/is-this-a-scam-checklist/',
        destination: '/resources/is-this-a-scam-checklist/index.html',
      },
      {
        source: '/download-ai-voice-guide',
        destination: '/api/download-ai-voice-guide',
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
      {
        source: '/ai-prompts',
        destination: '/ai-prompts/index.html',
      },
      {
        source: '/ai-prompts/',
        destination: '/ai-prompts/index.html',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/:l([a-z0-9])',
        destination: '/?utm_source=heycatch&utm_campaign=:l',
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
      {
        source: '/card',
        destination: 'https://app.scambomb.com?utm_source=biz_card_qr',
        permanent: true,
      },
      {
        source: '/premium-resources',
        destination: 'https://app.scambomb.com/premium-resources',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
