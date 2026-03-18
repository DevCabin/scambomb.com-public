export default function PresentationTriviaPage() {
  return (
    <section className="bg-[#0B1324] text-white min-h-[calc(100vh-140px)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold">Presentation Trivia</h1>
            <p className="mt-2 text-white/75">
              Quick-fire AI trivia companion slideshow.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/15 bg-black/30 overflow-hidden">
          <iframe
            src="/presentation-trivia.html"
            title="ScamBomb presentation trivia"
            className="w-full h-[75vh] md:h-[80vh]"
            allowFullScreen
          />
        </div>

        <div className="mt-5 flex justify-end">
          <a
            href="/presentation-live"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold border border-[#F5C84C] text-[#F5C84C] hover:bg-[#F5C84C]/10"
          >
            Back to Live Presentation
          </a>
        </div>
      </div>
    </section>
  );
}
