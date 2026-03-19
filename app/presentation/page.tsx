export default function PresentationPostcardPage() {
  return (
    <section className="bg-[#0B1324] text-white min-h-[calc(100vh-140px)] py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-5">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            AI WORKSHOP POSTCARD
          </h1>
          <p className="mt-1 text-white/70">
            Landscape half-page promo (live at <span className="text-[#FFD700]">/presentation</span>)
          </p>
        </div>

        <article className="relative overflow-hidden rounded-2xl border border-[#FFD700]/40 bg-gradient-to-br from-[#0B1324] via-[#111B33] to-[#0B1324] shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-2 bg-[#F5C84C]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10">
              <p className="inline-block bg-[#F5C84C] text-[#0B1324] font-extrabold text-xs sm:text-sm tracking-[0.16em] px-3 py-1 rounded-sm">
                FRIDAY • TOMORROW • 6:00 PM CST
              </p>

              <h2 className="mt-5 font-extrabold uppercase leading-[0.95] tracking-tight text-[clamp(2rem,5vw,4.2rem)]">
                <span className="text-[#F0F2F5] block">GUIDE THE AI.</span>
                <span className="text-[#F5C84C] block">OR BE GUIDED BY IT.</span>
              </h2>

              <p className="mt-4 text-white/90 text-base sm:text-lg max-w-2xl">
                AI is showing up in school, work, and everyday decisions. Most people are using it without training.
              </p>

              <p className="mt-3 text-[#FFD700] font-semibold text-base sm:text-lg max-w-2xl">
                This workshop gives you real confidence fast — so you can ask better questions, get better answers,
                and stay in control.
              </p>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-[#0B1324]/70 border-t lg:border-t-0 lg:border-l border-white/15">
              <h3 className="text-[#F5C84C] text-xl sm:text-2xl font-extrabold uppercase tracking-tight">
                WHAT YOU'LL WALK AWAY WITH
              </h3>

              <ul className="mt-4 space-y-3 text-sm sm:text-base">
                <li className="flex gap-2">
                  <span className="text-[#FFD700]">✅</span>
                  <span><strong>CLARITY</strong> on what AI can and cannot do.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FFD700]">✅</span>
                  <span><strong>BETTER PROMPTS</strong> that produce useful output.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FFD700]">✅</span>
                  <span><strong>A SAFETY CHECKLIST</strong> to verify answers before acting.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FFD700]">✅</span>
                  <span><strong>HANDS-ON PRACTICE</strong> in a small, friendly group.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FFD700]">✅</span>
                  <span><strong>THE NEXT STEP</strong> into agent workflows (advanced day).</span>
                </li>
              </ul>

              <div className="mt-6 rounded-lg border border-[#FFD700]/35 bg-[#F5C84C] text-[#0B1324] p-4">
                <p className="font-extrabold uppercase text-sm tracking-wide">SMALL GROUP • LOCAL • BEGINNER FRIENDLY</p>
                <p className="mt-1 text-sm sm:text-base font-semibold">Led by George Featherstone</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
