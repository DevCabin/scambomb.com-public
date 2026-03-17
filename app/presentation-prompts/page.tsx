export default function PresentationPromptsPage() {
  return (
    <section className="bg-[#0B1324] text-white min-h-[calc(100vh-140px)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold">Presentation Prompts</h1>
        <p className="mt-2 text-white/75">
          AI starter prompts for workshop attendees.
        </p>

        <div className="mt-6 rounded-2xl border border-white/15 bg-black/30 overflow-hidden">
          <iframe
            src="/presentation-prompts.html"
            title="ScamBomb presentation prompts"
            className="w-full h-[85vh]"
          />
        </div>
      </div>
    </section>
  );
}
