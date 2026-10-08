import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/assisted-living' },
  title: 'Live AI Workshops for Assisted Living Communities | ScamBomb',
  description: 'Book a live, in-person AI workshop for your senior living community — hands-on AI basics for residents plus scam protection including AI voice-clone awareness. Events start at $500.',
  robots: { index: false, follow: false },
}

const presentations = [
  {
    title: 'AI for Everyday Life',
    length: 'About 90 minutes, hands-on',
    badge: 'Hands-on · Every attendee participates',
    points: [
      'A beginner-friendly, hands-on introduction to conversational AI (like ChatGPT).',
      'Every attendee practices: asking for help with a real task, improving the answer, and deciding what to share.',
      'Leave-behind: printed take-home guide, checklists, and one personal task to try at home.',
      'No experience or preparation needed — setup walked through step by step.',
    ],
  },
  {
    title: 'Avoiding AI Scams',
    length: 'About 60 minutes',
    badge: 'Includes AI voice-clone awareness',
    points: [
      "How today's scams actually work — grandparent calls, fake banks, AI voice clones, phishing texts.",
      "The AI voice-clone segment: how scammers fake a family member's voice, the red flags of a frantic call, and the verify-through-a-number-you-trust habit.",
      'Plain-English warning signs and practical next steps.',
      'Calm and empowering — never frightening.',
    ],
  },
]

const communityBenefits = [
  { title: 'Ready-made programming', body: "A memorable resident activity your activities team doesn't have to research, write, or present." },
  { title: 'Families are invited', body: 'Adult children see your community actively protecting their parent. Few events make that impression.' },
  { title: 'A public-event draw', body: 'Open it to the local community and give prospective families a reason to walk through your doors.' },
  { title: 'No preparation required', body: 'You provide a room, a screen, and Wi-Fi. We bring the presentation, materials, and hands-on help.' },
  { title: 'Marketing content built in', body: 'We provide a ready-made announcement you can drop into your newsletter and social media.' },
  { title: 'Visible community care', body: 'Demonstrate that your community addresses one of the most damaging threats facing older adults.' },
]

const togetherPoints = [
  'Residents leave calmer and more confident with technology.',
  'Adult children and caregivers learn the same practical habits — invited to attend.',
  'Families create shared safety habits before a crisis occurs.',
  'Your community is remembered as the one that took protection seriously.',
]

const faqs = [
  { question: 'What do we need to provide?', answer: 'A room with seating, a screen or projector, and Wi-Fi. We bring everything else — presentation, printed materials, and hands-on help.' },
  { question: 'Do residents need any experience or accounts?', answer: 'No. Setup is walked through step by step during the session, and one-on-one help is available.' },
  { question: 'Can families and the public attend?', answer: 'Yes — the events are designed as public community events. Families are encouraged to attend, and inviting the local community is a great way to showcase your programming.' },
  { question: 'How long are the presentations?', answer: '"AI for Everyday Life" runs about 90 minutes with a short break; "Avoiding AI Scams" runs about 60 minutes. Both can be scheduled the same day.' },
  { question: 'How does pricing work?', answer: 'Events start at $500 depending on audience size and format. Both sessions the same day are quoted together. No ongoing contract is required.' },
  { question: 'Does ScamBomb need access to resident information?', answer: 'No. Events are educational only and require no resident records, health information, or private data of any kind.' },
]
export default function AssistedLivingPage() {
  return (
    <div className="bg-[#0B1324] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#F5C84C]">
                For assisted living and senior living communities
              </p>
              <h1 className="max-w-4xl text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-white">BRING A LIVE AI WORKSHOP </span>
                <span className="text-[#F5C84C]">TO YOUR COMMUNITY</span>
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white/80 sm:text-2xl">
                Give your residents an engaging, hands-on afternoon with AI — and give their families real peace of mind.
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
                ScamBomb presenter George Featherstone delivers lively, plain-English sessions live at your community. You provide the room; we bring everything else. Public event format — invite residents, families, and even the local community.
              </p>
              <a href="#availability-form" className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#F5C84C] px-6 py-4 text-base font-bold text-[#0B1324] hover:bg-[#F5C84C]/90">
                Check Availability →
              </a>
            </div>
            <div className="rounded-3xl border border-[#F5C84C]/30 bg-gradient-to-br from-[#F5C84C]/15 to-white/[0.03] p-7 sm:p-9">
              <span className="rounded-full bg-[#F5C84C] px-3 py-1 text-xs font-black uppercase tracking-wider text-[#0B1324]">
                Which conversation?
              </span>
              <p className="mt-6 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Which conversation would your team rather have?
              </p>
              <div className="mt-7 space-y-4 text-white/75">
                <p>A family thanking you for the afternoon that helped protect their parent—or a heartbroken resident and family asking what can be done after the savings are gone?</p>
                <p className="font-semibold text-[#F5C84C]">Live, hands-on education is the most effective kind—and the most memorable event on your activities calendar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#F5C84C] text-[#0B1324]">
        <div className="mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-12 lg:px-8">
          <p className="text-xl font-black leading-tight sm:text-2xl">
            Did you know the average reported loss for a fraud victim over 60 was $38,500 in 2025?
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-[#0B1324]/80 sm:text-lg">
            According to the FBI&apos;s 2025 IC3 Annual Report, older Americans reported more than $7.7 billion in total losses.
          </p>
          <p className="mt-3 text-sm font-semibold text-[#0B1324]/70">
            Source: <a href="https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">FBI 2025 IC3 Annual Report</a>
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5C84C]">The threat is personal</p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl">The scam often succeeds before anyone on your team knows it happened.</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-white/75">
            <p>Behind the losses are older adults who believed they were helping a grandchild, protecting a bank account, or responding to someone they trusted.</p>
            <p>Scammers create urgency, impersonate family, and increasingly use AI-generated voices that sound exactly like a loved one. These calls reach senior living residents every day.</p>
            <p>Calm, regular education is the intervention point.</p>
          </div>
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5C84C]">Two live presentations</p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl">An engaging afternoon your residents will talk about</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">Delivered in person by George Featherstone, in lively plain English. Calm, practical, and understandable to people who do not consider themselves technology experts.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {presentations.map((presentation) => (
              <div key={presentation.title} className="rounded-2xl border border-white/10 bg-[#0B1324] p-8 sm:p-10">
                <span className="inline-block rounded-full bg-[#F5C84C]/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#F5C84C]">
                  {presentation.badge}
                </span>
                <h3 className="mt-4 text-2xl font-black uppercase text-white">{presentation.title}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/50">{presentation.length}</p>
                <ul className="mt-6 space-y-3 leading-relaxed text-white/75">
                  {presentation.points.map((point) => (
                    <li key={point} className="flex gap-3"><span className="text-[#F5C84C]" aria-hidden="true">✓</span><span>{point}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-white/60">
            Book one presentation or both the same day. Zoom sessions for families and staff are also available by request.
          </p>
        </div>
      </section>

        </div>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5C84C]">Why communities host these events</p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl">Programming that protects—and impresses families</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {communityBenefits.map((benefit) => (
            <article key={benefit.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 sm:p-8">
              <h3 className="text-xl font-black uppercase text-[#F5C84C]">{benefit.title}</h3>
              <p className="mt-4 leading-relaxed text-white/75">{benefit.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y border-white/10 bg-gradient-to-r from-[#F5C84C]/10 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5C84C]">Protection works better together</p>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl">Support the resident and the family member helping them.</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-white/75">
              <ul className="space-y-3">
                {togetherPoints.map((item) => (
                  <li key={item} className="flex gap-3"><span className="text-[#F5C84C]" aria-hidden="true">✓</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="event-pricing" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5C84C]">Designed to complement your team</p>
            <h2 className="mt-4 text-2xl font-black uppercase sm:text-3xl">Education only—no resident data needed</h2>
            <ul className="mt-5 space-y-3 leading-relaxed text-white/75">
              <li className="flex gap-3"><span className="text-[#F5C84C]" aria-hidden="true">✓</span><span>Presentations are educational only. ScamBomb does not access resident records, health information, or care plans.</span></li>
              <li className="flex gap-3"><span className="text-[#F5C84C]" aria-hidden="true">✓</span><span>Sessions do not replace your staff&apos;s judgment or your community&apos;s existing safety procedures.</span></li>
              <li className="flex gap-3"><span className="text-[#F5C84C]" aria-hidden="true">✓</span><span>Events can be hosted without sharing any resident private information with ScamBomb.</span></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[#F5C84C]/30 bg-[#F5C84C] p-8 text-center text-[#0B1324] sm:p-10">
            {/* PRICING-PLACEHOLDER */}
            <p className="text-sm font-black uppercase tracking-[0.2em]">Live in-person events</p>
            <p className="mt-4 text-4xl font-black uppercase sm:text-5xl">Start at $500*</p>
            <p className="mx-auto mt-5 max-w-md leading-relaxed">*Final quote depends on audience size and event format. Both presentations the same day quoted together. Simple, flat pricing — no ongoing contract required.</p>
          </div>
        </div>
      </section>
      <section className="bg-white/[0.03]">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">Calm education people can understand</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75">These sessions have been built and delivered as live senior workshops. Every presentation is calm, practical, and understandable to people who do not consider themselves technology experts—no jargon, no fear.</p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5C84C]">Questions communities ask</p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl">Frequently asked questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 open:border-[#F5C84C]/40">
              <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-white marker:hidden group-open:text-[#F5C84C]">
                <span>{faq.question}</span>
                <span className="float-right text-[#F5C84C] transition-transform group-open:rotate-45" aria-hidden="true">＋</span>
              </summary>
              <p className="mt-4 leading-relaxed text-white/70">{faq.answer}</p>
            </details>
          ))}
      <section id="availability-form" className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5C84C]">Check availability</p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl">Check availability for your community</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">Give your residents an event they&apos;ll talk about—and their families a reason to thank you. Tell us a little about your community and we&apos;ll follow up with dates and a simple quote.</p>
            <p className="mt-5 text-sm leading-relaxed text-white/50">If you are not the person responsible for activities, resident experience, or marketing, we would appreciate being connected with the right member of your team.</p>
          </div>
          <form action="https://formspree.io/f/xppablrr" method="POST" className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <input type="hidden" name="page" value="assisted-living" />
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="al-name" className="mb-2 block text-sm font-semibold text-white/90">Name <span className="text-[#F5C84C]">*</span></label>
                <input id="al-name" name="name" type="text" autoComplete="name" required className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#F5C84C] focus:outline-none focus:ring-2 focus:ring-[#F5C84C]/40" />
              </div>
              <div>
                <label htmlFor="al-email" className="mb-2 block text-sm font-semibold text-white/90">Email <span className="text-[#F5C84C]">*</span></label>
                <input id="al-email" name="email" type="email" autoComplete="email" required className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#F5C84C] focus:outline-none focus:ring-2 focus:ring-[#F5C84C]/40" />
              </div>
              <div>
                <label htmlFor="al-phone" className="mb-2 block text-sm font-semibold text-white/90">Phone <span className="text-[#F5C84C]">*</span></label>
                <input id="al-phone" name="phone" type="tel" autoComplete="tel" required className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#F5C84C] focus:outline-none focus:ring-2 focus:ring-[#F5C84C]/40" />
              </div>
              <div>
                <label htmlFor="al-community" className="mb-2 block text-sm font-semibold text-white/90">Community or Facility Name <span className="text-[#F5C84C]">*</span></label>
                <input id="al-community" name="community_name" type="text" autoComplete="organization" required className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#F5C84C] focus:outline-none focus:ring-2 focus:ring-[#F5C84C]/40" />
              </div>

        </div>
      </section>
              <div>
                <label htmlFor="al-role" className="mb-2 block text-sm font-semibold text-white/90">Your Role</label>
                <select id="al-role" name="role" defaultValue="" className="w-full rounded-xl border border-white/15 bg-[#17233a] px-4 py-3 text-white focus:border-[#F5C84C] focus:outline-none focus:ring-2 focus:ring-[#F5C84C]/40">
                  <option value="" disabled>Select one</option>
                  <option value="executive_director">Executive Director</option>
                  <option value="marketing">Marketing</option>
                  <option value="activities">Activities</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="al-presentations" className="mb-2 block text-sm font-semibold text-white/90">Which presentation(s)</label>
                <select id="al-presentations" name="presentations" defaultValue="" className="w-full rounded-xl border border-white/15 bg-[#17233a] px-4 py-3 text-white focus:border-[#F5C84C] focus:outline-none focus:ring-2 focus:ring-[#F5C84C]/40">
                  <option value="" disabled>Select one</option>
                  <option value="ai_everyday">AI for Everyday Life</option>
                  <option value="avoiding_scams">Avoiding AI Scams</option>
                  <option value="both">Both</option>
                </select>
              </div>
              <div>
                <label htmlFor="al-audience" className="mb-2 block text-sm font-semibold text-white/90">Estimated audience size</label>
                <select id="al-audience" name="audience_size" defaultValue="" className="w-full rounded-xl border border-white/15 bg-[#17233a] px-4 py-3 text-white focus:border-[#F5C84C] focus:outline-none focus:ring-2 focus:ring-[#F5C84C]/40">
                  <option value="" disabled>Select one</option>
                  <option value="under_20">Under 20</option>
                  <option value="20_40">20–40</option>
                  <option value="40_plus">40+</option>
                </select>
              </div>
              <div>
                <label htmlFor="al-best-time" className="mb-2 block text-sm font-semibold text-white/90">Best time to contact</label>
                <input id="al-best-time" name="best_time_to_contact" type="text" placeholder="e.g. Weekday mornings" className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#F5C84C] focus:outline-none focus:ring-2 focus:ring-[#F5C84C]/40" />
              </div>
              <div>
                <label htmlFor="al-best-method" className="mb-2 block text-sm font-semibold text-white/90">Best method of contact</label>
                <select id="al-best-method" name="best_method_of_contact" defaultValue="" className="w-full rounded-xl border border-white/15 bg-[#17233a] px-4 py-3 text-white focus:border-[#F5C84C] focus:outline-none focus:ring-2 focus:ring-[#F5C84C]/40">
                  <option value="" disabled>Select one</option>
                  <option value="email">Email</option>
                  <option value="call">Call</option>
                  <option value="text">Text</option>
                </select>
              </div>
            </div>
            <button type="submit" className="mt-6 w-full rounded-xl bg-[#F5C84C] px-6 py-4 font-bold text-[#0B1324] hover:bg-[#F5C84C]/90">
              Check Availability →
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}


      </section>

