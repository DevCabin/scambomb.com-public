export default function ExtensionPage() {
  return (
    <div className="bg-[#0B1324] text-white antialiased font-montserrat">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">

        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            ScamBomb Chrome Extension
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Free scam detection right in your browser — analyze suspicious messages instantly.
          </p>
        </section>

        {/* Main Content */}
        <section className="prose prose-lg prose-invert max-w-none">

          {/* Intro */}
          <div className="mb-12 text-center">
            <p className="text-lg text-white/90 leading-relaxed">
              The ScamBomb Chrome Extension brings our powerful AI scam detection directly to your browser. No need to visit our website — check any suspicious email, text, or message with just a click.
            </p>
            <div className="mt-8">
              <a
                href="https://chrome.google.com/webstore/detail/scambomb/..."
                className="inline-block rounded-2xl px-8 py-4 font-semibold text-lg bg-[#F5C84C] text-[#0B1324] hover:bg-[#F5C84C]/90 transition-colors"
              >
                Get ScamBomb Extension
              </a>
            </div>
          </div>

          {/* How to Use */}
          <div className="bg-white/5 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#F5C84C]">How to Use</h2>
            <ol className="space-y-4 text-white/90">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F5C84C] text-[#0B1324] flex items-center justify-center font-bold">1</span>
                <div>
                  <strong>Install the Extension:</strong> Click the "Get ScamBomb Extension" button above to install from the Chrome Web Store.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F5C84C] text-[#0B1324] flex items-center justify-center font-bold">2</span>
                <div>
                  <strong>Find Suspicious Content:</strong> When you encounter a suspicious email, text, or message, highlight the text you want to check.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F5C84C] text-[#0B1324] flex items-center justify-center font-bold">3</span>
                <div>
                  <strong>Click the Extension Icon:</strong> Click the ScamBomb icon in your browser toolbar.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F5C84C] text-[#0B1324] flex items-center justify-center font-bold">4</span>
                <div>
                  <strong>Get Instant Analysis:</strong> Our AI will analyze the text and provide a clear assessment: safe, suspicious, or dangerous, with next steps.
                </div>
              </li>
            </ol>
          </div>

          {/* Features */}
          <div className="bg-white/5 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#F5C84C]">Extension Features</h2>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start gap-3">
                <span className="text-[#F5C84C] text-xl">✓</span>
                <span><strong>Instant Analysis:</strong> Get results in seconds, right in your browser.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F5C84C] text-xl">✓</span>
                <span><strong>Plain-English Explanations:</strong> No tech jargon — just clear, actionable advice.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F5C84C] text-xl">✓</span>
                <span><strong>Privacy-First:</strong> Your messages are analyzed locally and never stored.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F5C84C] text-xl">✓</span>
                <span><strong>Works Everywhere:</strong> Check emails, social media, texts — any text you encounter online.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F5C84C] text-xl">✓</span>
                <span><strong>Free Forever:</strong> No ads, no subscriptions, no limitations.</span>
              </li>
            </ul>
          </div>

          {/* Why Extension */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#F5C84C]">Why a Browser Extension?</h2>
            <p className="text-white/90 leading-relaxed mb-4">
              Scams happen everywhere online. Whether you're checking email, browsing social media, or reading news, suspicious messages can appear anywhere. The ScamBomb extension puts protection right where you need it — without leaving the page or opening a new tab.
            </p>
            <p className="text-white/90 leading-relaxed">
              It's like having a scam-detecting expert looking over your shoulder, ready to help whenever you need it.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-[#F5C84C]">Protect Yourself Today</h2>
            <p className="text-white/90 mb-8">
              Install the ScamBomb Chrome Extension and start checking suspicious messages instantly. It's free, fast, and effective.
            </p>
            <a
              href="https://chrome.google.com/webstore/detail/scambomb/..."
              className="inline-block rounded-2xl px-8 py-4 font-semibold text-lg bg-[#F5C84C] text-[#0B1324] hover:bg-[#F5C84C]/90 transition-colors"
            >
              Get ScamBomb Extension Now
            </a>
          </div>

        </section>

      </div>
    </div>
  );
}