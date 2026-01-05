'use client';

function UniversalHeader() {
  const brandYellow = "#F5C84C";

  return (
    <>
      {/* Skip link */}
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-yellow-300 focus:text-black focus:px-3 focus:py-2 focus:rounded-lg">Skip to content</a>

      {/* Top Announcement Bar */}
      <a href="#pricing" className="block w-full border-b border-white/10 hover:border-white/20 transition-colors" role="region" aria-label="announcement">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 text-center text-sm text-white/80 hover:text-white">
          Annual Plan: <strong style={{ color: brandYellow }}>Save 17% over Pro Plan!</strong> — Stop Scams Now!
        </div>
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3" aria-label="ScamBomb home">
              <Logo />
              <span className="sr-only">ScamBomb</span>
            </div>
            <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
              <a className="opacity-90 hover:opacity-100" href="/">Home</a>
              <a className="opacity-90 hover:opacity-100" href="/#how">How it works</a>
              <a className="opacity-90 hover:opacity-100" href="/#features">Features</a>
              <a className="opacity-90 hover:opacity-100" href="/#pricing">Pricing</a>
              <a className="opacity-90 hover:opacity-100" href="/#faq">FAQ</a>
              <a className="opacity-90 hover:opacity-100" href="/blog">Blog</a>
            </nav>
            <div className="flex items-center gap-2">
              <a
                href={`https://app.scambomb.com/?safe_source=true&SBID=${crypto.randomUUID()}`}
                className="ml-2 rounded-2xl px-6 py-3 border-2 font-semibold hover:bg-white/10"
                style={{ borderColor: brandYellow, color: brandYellow }}
              >
                Try Free!
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const imgSize = size === "sm" ? "h-10 w-32" : "h-12 w-40";
  return (
    <div className="flex items-center gap-2" role="img" aria-label="ScamBomb logo">
      <img
        src="/large_bomb_bg_min_2.png"
        alt="Bomb"
        style={{ width: '150px', height: '200px', position: 'relative', left: '45px', marginTop: '-35px' }}
      />
      <img
        src="/logo.png"
        alt="ScamBomb Logo"
        className={`${imgSize} object-contain`}
      />
    </div>
  );
}

export default UniversalHeader;
