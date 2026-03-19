export default function PresentationPostcardPage() {
  return (
    <section className="bg-[#0B1324] text-white min-h-[calc(100vh-140px)] py-4 sm:py-8 px-3 sm:px-6 lg:px-8 print:bg-white print:text-[#0B1324] print:p-0">
      <div className="mx-auto max-w-6xl print:max-w-none">
        <article className="relative overflow-hidden rounded-2xl border border-[#FFD700]/45 bg-gradient-to-br from-[#0B1324] via-[#111B33] to-[#0B1324] shadow-2xl print:rounded-none print:border-[#0B1324] print:shadow-none print:bg-white">
          <div className="absolute top-0 left-0 right-0 h-2 bg-[#F5C84C] print:h-3" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 print:grid-cols-12">
            <div className="md:col-span-7 print:col-span-7 p-5 sm:p-8 lg:p-10 print:p-8">
              <p className="inline-block bg-[#F5C84C] text-[#0B1324] font-extrabold text-xs sm:text-sm tracking-[0.14em] px-3 py-1 rounded-sm print:text-sm">
                FRIDAY • MARCH 20 • 6:00 PM CST
              </p>

              <h1 className="mt-4 sm:mt-5 font-extrabold uppercase leading-[0.95] tracking-tight text-[clamp(1.8rem,8vw,4.2rem)] print:text-[42px]">
                <span className="text-[#F0F2F5] print:text-[#0B1324] block">AI VOICE SCAMS ARE GETTING BETTER.</span>
                <span className="text-[#F5C84C] print:text-[#0B1324] block">YOUR DEFENSE CAN TOO.</span>
              </h1>

              <p className="mt-4 text-white/90 print:text-[#1F2937] text-base sm:text-lg leading-relaxed max-w-2xl">
                Scammers now use AI-cloned voices, urgency, and emotion to push people into fast decisions.
                It can fool smart people — especially when family is involved.
              </p>

              <p className="mt-3 text-[#FFD700] print:text-[#0B1324] font-bold text-base sm:text-xl leading-relaxed max-w-2xl uppercase">
                LEAVE WITH CALM CONFIDENCE, A CLEAR ACTION PLAN, AND THE SKILLS TO PROTECT YOURSELF AND THE PEOPLE YOU LOVE.
              </p>
            </div>

            <div className="md:col-span-5 print:col-span-5 p-5 sm:p-8 lg:p-10 print:p-8 bg-[#0B1324]/70 border-t md:border-t-0 md:border-l border-white/15 print:bg-[#F8F8FA] print:border-[#C7CDD9]">
              <h2 className="text-[#F5C84C] print:text-[#0B1324] text-xl sm:text-2xl font-extrabold uppercase tracking-tight">
                WHAT YOU'LL LEARN
              </h2>

              <ul className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed print:text-[15px]">
                <li className="flex gap-2">
                  <span className="text-[#FFD700] print:text-[#0B1324]">✅</span>
                  <span><strong>SPOT RED FLAGS FAST</strong> using the Five Signals of a scam.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FFD700] print:text-[#0B1324]">✅</span>
                  <span><strong>PROTECT FAMILY MEMBERS</strong> with a simple pause-check-confirm process.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FFD700] print:text-[#0B1324]">✅</span>
                  <span><strong>USE AI FOR DEFENSE</strong> to double-check suspicious messages and calls.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FFD700] print:text-[#0B1324]">✅</span>
                  <span><strong>FEEL EMPOWERED BY KNOWLEDGE</strong> and know exactly how to handle fraud.</span>
                </li>
              </ul>

              <div className="mt-6 rounded-lg border border-[#FFD700]/35 bg-[#F5C84C] text-[#0B1324] p-4 print:border-[#0B1324]/25">
                <p className="font-extrabold uppercase text-sm tracking-wide">COMMUNITY TRAINING • SENIOR FRIENDLY • PRACTICAL</p>
                <p className="mt-1 text-sm sm:text-base font-semibold">Led by George Featherstone</p>
                <p className="mt-1 text-xs sm:text-sm font-medium">SCAMBOMB.COM • GILMER, TX</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
