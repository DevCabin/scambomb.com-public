export default function ExtensionPage() {
  const brandYellow = "#F5C84C";

  return (
    <div className="bg-[#0B1324] text-white antialiased font-montserrat">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">

        {/* Hero - Coming Soon */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            ScamBomb Chrome Extension
          </h1>
          <div className="text-6xl font-bold mb-4" style={{ color: brandYellow }}>
            🚀 COMING SOON! 🚀
          </div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Our Chrome extension is currently under review by the Chrome Web Store. Stay tuned for the easiest way to detect scams right in your browser!
          </p>
        </section>

        {/* Main Content */}
        <section className="prose prose-lg prose-invert max-w-none">

          {/* Status Update */}
          <div className="bg-white/5 rounded-2xl p-8 mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: brandYellow }}>⏳ Extension Status: Under Review</h2>
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              We're excited to bring you the ScamBomb Chrome Extension! Our team has submitted it to the Chrome Web Store for approval. This process typically takes 1-3 days, but can sometimes take longer depending on review queue volume.
            </p>
            <div className="text-4xl font-bold mb-4" style={{ color: brandYellow }}>
              COMING SOON!
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-white/5 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: brandYellow }}>What to Expect When It's Live</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⚡</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Instant Analysis</h3>
                  <p className="text-white/90">Get results in seconds, right in your browser.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🔒</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Privacy-First</h3>
                  <p className="text-white/90">Your messages are analyzed locally and never stored.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Works Everywhere</h3>
                  <p className="text-white/90">Check emails, social media, texts — any text you encounter online.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🆓</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Free Forever</h3>
                  <p className="text-white/90">No ads, no subscriptions, no limitations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4" style={{ color: brandYellow }}>COMING SOON!</h3>
              <p className="text-white/90">Chrome Extension Launch</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4" style={{ color: brandYellow }}>COMING SOON!</h3>
              <p className="text-white/90">Instant Scam Detection</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-4" style={{ color: brandYellow }}>COMING SOON!</h3>
              <p className="text-white/90">Privacy-First Protection</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-4" style={{ color: brandYellow }}>COMING SOON!</h3>
              <p className="text-white/90">Browser-Based Security</p>
            </div>
          </div>

          {/* Notification Signup */}
          <div className="bg-white/5 rounded-2xl p-8 mb-12 text-center">
            <h2 className="text-2xl font-bold mb-6" style={{ color: brandYellow }}>Get Notified When It's Ready!</h2>
            <p className="text-white/90 mb-8">
              Be the first to know when our Chrome extension is approved and available for download.
            </p>
            <div className="text-4xl font-bold mb-4" style={{ color: brandYellow }}>
              COMING SOON!
            </div>
            <p className="text-sm text-white/70">
              We'll send you an email as soon as the extension is live in the Chrome Web Store.
            </p>
          </div>

          {/* Alternative Solution */}
          <div className="bg-white/5 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: brandYellow }}>While You Wait...</h2>
            <p className="text-white/90 leading-relaxed mb-6 text-center">
              Don't let scammers wait! Use our web app for instant scam detection right now.
            </p>
            <div className="text-center">
              <a
                href={`https://app.scambomb.com/?safe_source=true&SBID=${crypto.randomUUID()}`}
                className="inline-block rounded-2xl px-8 py-4 font-semibold text-lg bg-[#F5C84C] text-[#0B1324] hover:bg-[#F5C84C]/90 transition-colors"
              >
                Try ScamBomb Web App Now
              </a>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="text-5xl mb-6">🚀</div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: brandYellow }}>COMING SOON!</h2>
            <p className="text-white/90 mb-8">
              The ScamBomb Chrome Extension is on its way. Get ready for the easiest way to detect scams online!
            </p>
            <div className="text-2xl font-bold" style={{ color: brandYellow }}>
              STAY TUNED! 🎯
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}
