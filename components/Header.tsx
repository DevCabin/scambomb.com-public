'use client';

import { useEffect, useState } from 'react';

function UniversalHeader() {
  const brandYellow = "#F5C84C";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sbid, setSbid] = useState('');

  useEffect(() => {
    setSbid(crypto.randomUUID());
  }, []);

  const trialHref = `https://app.scambomb.com/?safe_source=true${sbid ? `&SBID=${sbid}` : ''}`;

  return (
    <>
      {/* Skip link */}
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-yellow-300 focus:text-black focus:px-3 focus:py-2 focus:rounded-lg">
        Skip to content
      </a>

      {/* Top Announcement Bar - Simplified */}
      <a 
        href="#pricing" 
        className="block w-full bg-[#0B1324] border-b border-white/10 hover:border-white/20 transition-colors" 
        role="region" 
        aria-label="announcement"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 text-center text-sm text-white/80 hover:text-white">
          <span className="text-[#F5C84C] font-semibold">Save 18% with annual billing</span>
          <span className="hidden sm:inline mx-2">•</span>
          <span className="hidden sm:inline">Starting at $5/mo for seniors</span>
        </div>
      </a>

      {/* Main Header - Norton/Chase Style */}
      <header className="sticky top-0 z-40 bg-[#0B1324] border-b border-white/10 shadow-lg shadow-black/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Left - Text based matching app */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="group" aria-label="ScamBomb home">
                <div className="text-xl sm:text-2xl font-black tracking-wide">
                  <span className="text-white group-hover:text-white/90 transition-colors">SCAM</span>
                  <span className="text-[#F5C84C] group-hover:text-[#F5C84C]/90 transition-colors">B💣MB</span>
                </div>
              </a>
            </div>

            {/* Navigation - Center */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
              <a 
                className="text-white/80 hover:text-white text-sm font-medium transition-colors relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#F5C84C]" 
                href="/"
              >
                Home
              </a>
              <a 
                className="text-white/80 hover:text-white text-sm font-medium transition-colors relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#F5C84C]" 
                href="/extension"
              >
                Extension
              </a>
              <a 
                className="text-white/80 hover:text-white text-sm font-medium transition-colors relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#F5C84C]" 
                href="/#pricing"
              >
                Pricing
              </a>
              <a 
                className="text-white/80 hover:text-white text-sm font-medium transition-colors relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#F5C84C]" 
                href="/#faq"
              >
                FAQ
              </a>
              <a 
                className="text-white/80 hover:text-white text-sm font-medium transition-colors relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#F5C84C]" 
                href="/blog"
              >
                Blog
              </a>
            </nav>

            {/* CTA - Right */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={trialHref}
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#0B1324] bg-[#F5C84C] rounded-lg hover:bg-[#F5C84C]/90 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F5C84C] focus:ring-offset-2 focus:ring-offset-[#0B1324]"
              >
                Try Free
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-white/10 bg-[#0B1324]">
              <nav className="px-4 py-4 space-y-2" aria-label="Mobile Primary">
                <a 
                  className="block px-3 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors" 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  className="block px-3 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors" 
                  href="/extension" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Extension
                </a>
                <a 
                  className="block px-3 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors" 
                  href="/#pricing" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a 
                  className="block px-3 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors" 
                  href="/#faq" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </a>
                <a 
                  className="block px-3 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors" 
                  href="/blog" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </a>
                <a
                  href={trialHref}
                  className="block mt-4 px-3 py-3 text-center text-base font-semibold text-[#0B1324] bg-[#F5C84C] rounded-lg hover:bg-[#F5C84C]/90 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Try Free
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default UniversalHeader;