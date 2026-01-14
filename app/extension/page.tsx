export default function ExtensionPage() {
  const brandYellow = "#F5C84C";

  return (
    <div className="bg-[#0B1324] text-white antialiased font-montserrat">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">

        {/* Hero - Now Available */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            ScamBomb Chrome Extension
          </h1>
          <div className="text-6xl font-bold mb-4" style={{ color: brandYellow }}>
            🚀 NOW AVAILABLE! 🚀
          </div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get instant scam detection right in your browser! Our Chrome extension has been approved and is now live in the Chrome Web Store.
          </p>
          <div className="mt-8">
            <a
              href="https://chromewebstore.google.com/detail/scambomb-gmail-scanner/cmlmjbphbgcbaomeicbinbelfielkeab?authuser=0&hl=en"
              className="inline-block rounded-2xl px-8 py-4 font-semibold text-lg bg-[#F5C84C] text-[#0B1324] hover:bg-[#F5C84C]/90 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get the Chrome Extension →
            </a>
          </div>
        </section>

        {/* Main Content */}
        <section className="prose prose-lg prose-invert max-w-none">

          {/* Status Update */}
          <div className="bg-white/5 rounded-2xl p-8 mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: brandYellow }}>✅ Extension Status: Now Available!</h2>
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Great news! Our ScamBomb Chrome Extension has been approved by the Chrome Web Store and is now available for download. Get instant scam detection right in your Gmail inbox and across the web.
            </p>
            <div className="text-center mb-6">
              <a
                href="https://chromewebstore.google.com/detail/scambomb-gmail-scanner/cmlmjbphbgcbaomeicbinbelfielkeab?authuser=0&hl=en"
                className="inline-block rounded-2xl px-6 py-3 font-semibold text-lg bg-[#F5C84C] text-[#0B1324] hover:bg-[#F5C84C]/90 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Now →
              </a>
            </div>
          </div>

          {/* What You'll Get */}
          <div className="bg-white/5 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: brandYellow }}>What You'll Get</h2>
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

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4" style={{ color: brandYellow }}>Now Live!</h3>
              <p className="text-white/90">Chrome Extension Available</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4" style={{ color: brandYellow }}>Instant Analysis</h3>
              <p className="text-white/90">Results in seconds</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-4" style={{ color: brandYellow }}>Privacy-First</h3>
              <p className="text-white/90">Your data stays secure</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-4" style={{ color: brandYellow }}>Works Everywhere</h3>
              <p className="text-white/90">Gmail, social media, and more</p>
            </div>
          </div>

          {/* User Reviews & Support */}
          <div className="bg-white/5 rounded-2xl p-8 mb-12 text-center">
            <h2 className="text-2xl font-bold mb-6" style={{ color: brandYellow }}>Loved by Users</h2>
            <p className="text-white/90 mb-8">
              Join thousands of users who are now protected from scams with our Chrome extension. Your feedback helps us improve!
            </p>
            <div className="text-center mb-6">
              <a
                href="https://chromewebstore.google.com/detail/scambomb-gmail-scanner/cmlmjbphbgcbaomeicbinbelfielkeab?authuser=0&hl=en"
                className="inline-block rounded-2xl px-6 py-3 font-semibold text-lg bg-[#F5C84C] text-[#0B1324] hover:bg-[#F5C84C]/90 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leave a Review →
              </a>
            </div>
            <p className="text-sm text-white/70">
              Help others discover ScamBomb by rating us in the Chrome Web Store.
            </p>
          </div>

          {/* Web App Alternative */}
          <div className="bg-white/5 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: brandYellow }}>Prefer the Web App?</h2>
            <p className="text-white/90 leading-relaxed mb-6 text-center">
              Our web application offers the same powerful scam detection without needing to install anything. Perfect for one-time checks or when you're on a different device.
            </p>
            <div className="text-center">
              <a
                href={`https://app.scambomb.com/?safe_source=true&SBID=${crypto.randomUUID()}`}
                className="inline-block rounded-2xl px-8 py-4 font-semibold text-lg bg-[#F5C84C] text-[#0B1324] hover:bg-[#F5C84C]/90 transition-colors"
              >
                Try ScamBomb Web App →
              </a>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="text-5xl mb-6">🚀</div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: brandYellow }}>Ready to Get Protected?</h2>
            <p className="text-white/90 mb-8">
              Download the ScamBomb Chrome Extension today and start detecting scams instantly in your browser!
            </p>
            <div className="mb-6">
              <a
                href="https://chromewebstore.google.com/detail/scambomb-gmail-scanner/cmlmjbphbgcbaomeicbinbelfielkeab?authuser=0&hl=en"
                className="inline-block rounded-2xl px-8 py-4 font-semibold text-lg bg-[#F5C84C] text-[#0B1324] hover:bg-[#F5C84C]/90 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get the Extension Now →
              </a>
            </div>
            <div className="text-2xl font-bold" style={{ color: brandYellow }}>
              STAY SAFE! 🛡️
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}
