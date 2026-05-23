export const metadata = {
  title: 'Senior Tech Command Center — ScamBomb',
  description: 'Access the paid ScamBomb Senior Tech Command Center and AI Power Prompts Hub.',
}

export default function CommandCenterThankYouEntryPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-xs font-extrabold tracking-widest text-yellow-300">
            PAID RESOURCE ACCESS
          </div>

          <h1 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight">
            <span className="block text-white">YOUR COMPLETE</span>
            <span className="block text-yellow-300">SENIOR TECH COMMAND CENTER</span>
          </h1>

          <p className="mt-4 text-white/80 text-lg sm:text-xl max-w-2xl mx-auto">
            Guides, worksheets, and quick tips — all searchable, filterable, and printable.
          </p>
        </header>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            href="/thank-you/command-center/scambomb_senior_tech_mega_hub.html"
          >
            <div className="text-xs font-extrabold tracking-widest text-yellow-300">MAIN HUB</div>
            <div className="mt-2 text-xl font-extrabold uppercase">Open Command Center →</div>
            <div className="mt-2 text-white/70">
              Search everything by keyword. Filter by Foundation, Passwords, Wi-Fi, Computer, Worksheets, and Quick Tips.
            </div>
          </a>

          <a
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            href="/thank-you/command-center/scambomb_ai_prompts_hub.html"
          >
            <div className="text-xs font-extrabold tracking-widest text-yellow-300">BONUS HUB</div>
            <div className="mt-2 text-xl font-extrabold uppercase">Open AI Power Prompts →</div>
            <div className="mt-2 text-white/70">
              37 prompts with one-click copy + “Open in ChatGPT / Claude” links.
            </div>
          </a>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-sm font-extrabold tracking-widest uppercase text-white">HAVING TROUBLE GETTING IN?</h2>
          <ul className="mt-3 space-y-2 text-white/80">
            <li>
              <span className="font-bold text-yellow-300">1)</span> Use the full private link from your receipt/email (it contains access parameters).
            </li>
            <li>
              <span className="font-bold text-yellow-300">2)</span> Once you’re in, your browser will remember you for 30 days.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
