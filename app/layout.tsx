import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import GoogleAnalytics from '../components/GoogleAnalytics'
import Header from '../components/Header'
import { SpeedInsights } from '@vercel/speed-insights/next'
import ConditionalGHLPoliteSlideIn from '../components/ConditionalGHLPoliteSlideIn'
import { AuthProvider } from '../components/AuthProvider'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'ScamBomb - Stop scams in one click',
  description: 'Paste any text, email, or SMS. ScamBomb checks red flags, explains the risk in plain English, and tells you exactly what to do next.',
  icons: {
    icon: '/scambomb-favicon-64.png',
    apple: '/ScamBomb-just-the-bomb.png',
    shortcut: '/scambomb-favicon-64.png',
  },
  other: {
    'facebook-domain-verification': 'tmq14fiwi4rwno7tljlobhqospl9ni',
    'msvalidate.01': '02A7E29601D8AB879E2CF59B2FCC4260',
  },
}

function UniversalFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-[1fr_0.7fr_0.7fr_1.5fr] gap-6 text-sm">
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-base uppercase tracking-wider">
            REPORT A <span className="text-[#F5C84C]">PROBLEM</span>
          </h4>
          <div className="mt-3">
            <a
              href="/contact"
              className="inline-block text-lg md:text-sm font-bold md:font-semibold rounded-xl px-4 py-3 md:px-3 md:py-2 bg-[#F5C84C] text-[#0B1324] hover:bg-[#F5C84C]/90"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-base mb-3">Products</h4>
          <ul className="mt-2 space-y-3 md:space-y-2 text-white/80">
            <li><a href="/#how" className="text-lg md:text-sm font-bold md:font-normal hover:text-white transition-colors">How it works</a></li>
            <li><a href="/#pricing" className="text-lg md:text-sm font-bold md:font-normal hover:text-white transition-colors">Pricing</a></li>
            <li><a href="/blog" className="text-lg md:text-sm font-bold md:font-normal hover:text-white transition-colors">Blog</a></li>
            <li><a href="/extension" className="text-lg md:text-sm font-bold md:font-normal hover:text-white transition-colors">Chrome Extension</a></li>
            <li><a href="/resources" className="text-lg md:text-sm font-bold md:font-normal hover:text-white transition-colors">Resources</a></li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-base mb-3">Company</h4>
          <ul className="mt-2 space-y-3 md:space-y-2 text-white/80">
            <li><a href="/about" className="text-lg md:text-sm font-bold md:font-normal hover:text-white transition-colors">About</a></li>
            <li><a href="/contact" className="text-lg md:text-sm font-bold md:font-normal hover:text-white transition-colors">Contact</a></li>
            <li><a href="/testing" className="text-lg md:text-sm font-bold md:font-normal hover:text-white transition-colors">Testing</a></li>
            <li><a href="/scam-stories" className="text-lg md:text-sm font-bold md:font-normal hover:text-white transition-colors">Story</a></li>
            <li><a href="/terms" className="text-lg md:text-sm font-bold md:font-normal hover:text-white transition-colors">Terms of Use</a></li>
            <li><a href="/extension-privacy" className="text-lg md:text-sm font-bold md:font-normal hover:text-white transition-colors">Extension Policy</a></li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-base mb-3">Newsletter</h4>
          <p className="text-white/90 text-sm md:text-xs font-semibold">
            🚨 Scammers are getting smarter every week. So are we.
          </p>
          <p className="mt-2 text-white/70 text-sm md:text-xs">
            Join thousands of families getting weekly scam alerts, real stories, and simple protection tips — straight to your inbox.
          </p>
          <div className="mt-4">
            <a
              href="https://featherstone.kit.com/3daabf1cc1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-lg md:text-sm font-bold md:font-semibold rounded-xl px-4 py-3 md:px-3 md:py-2 bg-[#F5C84C] text-[#0B1324] hover:bg-[#F5C84C]/90"
            >
              → Keep my family protected
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-white/60">
        <span>© {new Date().getFullYear()} ScamBomb.com — All rights reserved.</span>
        <span className="hidden sm:inline text-white/30">•</span>
        <a 
          href="https://www.facebook.com/profile.php?id=61585447685560" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-white/60 hover:text-[#F5C84C] transition-colors"
          aria-label="Follow ScamBomb on Facebook"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <span>Facebook</span>
        </a>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-montserrat bg-[#0B1324] text-white min-h-screen antialiased selection:bg-yellow-300/30 text-base sm:text-lg`}>
        <AuthProvider>
          <GoogleAnalytics measurementId="G-T61B4NX3J8" />
          <Header />
          <main id="main">
            {children}
          </main>
          <SpeedInsights />
          <UniversalFooter />
          <Analytics />
          <ConditionalGHLPoliteSlideIn />
        </AuthProvider>
      </body>
    </html>
  )
}
