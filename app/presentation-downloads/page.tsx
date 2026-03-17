const placeholderItems = [
  'Freebie #1 (Coming Soon)',
  'Freebie #2 (Coming Soon)',
  'Freebie #3 (Coming Soon)',
  'Freebie #4 (Coming Soon)',
];

export default function PresentationDownloadsPage() {
  return (
    <section className="bg-[#0B1324] text-white min-h-[calc(100vh-140px)]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center">Presentation Downloads</h1>
        <p className="mt-3 text-white/75 text-center">
          Thanks for attending! Free resources will be posted here.
        </p>

        <div className="mt-8 grid gap-4">
          {placeholderItems.map((item) => (
            <button
              key={item}
              type="button"
              className="w-full rounded-2xl border border-yellow-300/40 bg-yellow-300/10 px-5 py-4 text-left font-semibold text-yellow-200 hover:bg-yellow-300/20 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
