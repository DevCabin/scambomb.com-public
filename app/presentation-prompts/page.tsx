export default function PresentationPromptsPage() {
  return (
    <section className="bg-[#0B1324] text-white min-h-[calc(100vh-140px)]">
      <iframe
        src="/presentation-prompts.html"
        title="ScamBomb presentation prompts"
        className="w-full min-h-[calc(100vh-140px)] border-0"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6 -mt-2">
        <div className="flex justify-end gap-3 flex-wrap">
          <a
            href="/presentation-live"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold border border-[#9BA3AF] text-[#F0F2F5] hover:bg-white/10"
          >
            Open Live Presentation
          </a>

          <a
            href="/presentation-ai-future"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10"
          >
            Open AI Future Deck
          </a>

          <a
            href="/presentation-jobs"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold border border-[#F5C84C] text-[#F5C84C] hover:bg-[#F5C84C]/10"
          >
            Open AI Jobs Report
          </a>

          <a
            href="/presentation-trivia"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold border border-[#3DDC84] text-[#3DDC84] hover:bg-[#3DDC84]/10"
          >
            Open Trivia Slideshow
          </a>
        </div>
      </div>
    </section>
  );
}
