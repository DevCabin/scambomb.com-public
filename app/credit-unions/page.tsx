import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scam Protection for Credit Unions | ScamBomb',
  description: 'Help credit union members recognize scams before money leaves their accounts with ScamBomb education, workshops, family resources, and scam-checking tools.',
}

const memberBenefits = [
  'Plain-English scam guides, family checklists, action plans, and downloadable resources',
  'A simple way to check suspicious texts, emails, links, and screenshots',
  'A danger assessment that explains the warning signs and recommends what to do next',
  'Calm, practical workshops delivered through Zoom or in person by request',
  'Optional monthly email updates about emerging scams and AI-enabled fraud',
]

const programBenefits = [
  {
    title: 'A trusted second opinion',
    body: 'Give members a resource they can consult while they are still deciding what to do—before they click, reply, or send money.',
  },
  {
    title: 'Less avoidable pressure',
    body: 'Better-informed members may help reduce avoidable calls, disputes, confusion, and pressure on frontline employees.',
  },
  {
    title: 'Protection families can share',
    body: 'Provide practical protection members can use personally and share with the family members who help protect them.',
  },
  {
    title: 'Visible community care',
    body: 'Show older adults and local families that your credit union is actively helping them respond to one of today’s most damaging financial threats.',
  },
]

const faqs = [
  {
    question: 'How does ScamBomb fit with our existing fraud-prevention work?',
    answer: 'ScamBomb supports existing fraud-prevention efforts by providing education and a first line of guidance before a member completes a potentially fraudulent transaction. It does not replace your fraud department.',
  },
  {
    question: 'Does ScamBomb need access to member accounts or transaction information?',
    answer: 'No. ScamBomb does not access member accounts, authorize transactions, or move money. It does not require access to account or transaction information to provide educational resources and scam-checking tools. Partnership access can be structured without the credit union sharing member personally identifiable information.',
  },
  {
    question: 'Can you provide a workshop for our members?',
    answer: 'Yes. Zoom workshops are available, and in-person presentations can be arranged by request.',
  },
  {
    question: 'Can we start with a pilot program?',
    answer: 'Yes. A credit union can begin with a defined member group, workshop, or education campaign and evaluate participation and feedback before discussing a broader rollout.',
  },
  {
    question: 'Who is ScamBomb designed for?',
    answer: 'ScamBomb is designed especially for older adults and the adult children and caregivers who help protect them, but its education and scam-checking tools can benefit members of any age.',
  },
]

export default function CreditUnionsPage() {
  return (
    <div className="bg-[#0B1324] text-white">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#F5C84C]">
                For credit unions and their members
              </p>
              <h1 className="max-w-4xl text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-white">HELP MEMBERS STOP SCAMS </span>
                <span className="text-[#F5C84C]">BEFORE MONEY MOVES</span>
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white/80 sm:text-2xl">
                ScamBomb gives older members and their families somewhere trustworthy to turn when a suspicious text, email, link, screenshot, phone call, or urgent payment request arrives.
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
                By combining plain-English education, practical family-protection resources, live workshops, and easy-to-use scam-checking software, ScamBomb helps credit unions reach members at the moment they are most vulnerable—before money leaves their accounts.
              </p>
              <a
                href="#partnership-form"
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#F5C84C] px-6 py-4 text-base font-bold text-[#0B1324] transition-colors hover:bg-[#F5C84C]/90 focus:outline-none focus:ring-2 focus:ring-[#F5C84C] focus:ring-offset-2 focus:ring-offset-[#0B1324]"
              >
                Discuss a Member Protection Program →
              </a>
            </div>

            <div className="rounded-3xl border border-[#F5C84C]/30 bg-gradient-to-br from-[#F5C84C]/15 to-white/[0.03] p-7 sm:p-9">
              <div className="mb-6 flex items-start justify-between gap-4">
                <span className="rounded-full bg-[#F5C84C] px-3 py-1 text-xs font-black uppercase tracking-wider text-[#0B1324]">
                  The moment that matters
                </span>
                <span className="text-3xl" aria-hidden="true">🛡️</span>
              </div>
              <p className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Members need a calm, trusted second opinion at the critical moment.
              </p>
              <ul className="mt-7 space-y-4 text-white/75">
                {['Before they click the link', 'Before they provide personal information', 'Before they transfer the money'].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-[#F5C84C]" aria-hidden="true">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why this matters */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5C84C]">The threat is personal</p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl">The scam often succeeds before the financial transaction ever begins.</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-white/75">
            <p>According to the FBI’s 2025 IC3 Annual Report, Americans over 60 reported more than $7.7 billion in total losses.</p>
            <p>Behind those numbers are members who believed they were helping a grandchild, protecting a compromised bank account, paying a legitimate business, accepting a job, or responding to someone they trusted.</p>
            <p>By the time a fraudulent payment reaches a credit union, the member may already be convinced that the request is legitimate. Scammers create urgency, impersonate trusted organizations, exploit family relationships, and increasingly use AI-generated voices, images, and messages to make their stories more believable.</p>
            <p className="text-sm text-white/50">Source: FBI 2025 IC3 Annual Report</p>
          </div>
        </div>
      </section>

      {/* What ScamBomb provides */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5C84C]">One layer of early intervention</p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl">Software, education, and practical resources</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">ScamBomb is more than a scam-checking application. It combines tools and education to help members recognize danger and take the next safe step.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#F5C84C]/30 bg-[#F5C84C] p-7 text-[#0B1324] md:col-span-2 lg:col-span-1">
              <p className="text-sm font-black uppercase tracking-wider">For members</p>
              <h3 className="mt-3 text-2xl font-black uppercase">A clear next step</h3>
              <p className="mt-4 leading-relaxed">Members can check suspicious texts, emails, links, and screenshots. ScamBomb provides a danger assessment, explains the warning signs, and recommends what to do next.</p>
            </div>
            {memberBenefits.map((benefit, index) => (
              <div key={benefit} className="rounded-2xl border border-white/10 bg-[#0B1324] p-7">
                <div className="text-2xl font-black text-[#F5C84C]">0{index + 1}</div>
                <p className="mt-4 leading-relaxed text-white/75">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program outcomes */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5C84C]">Why credit unions partner with ScamBomb</p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl">Protection members can actually use</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {programBenefits.map((benefit) => (
            <article key={benefit.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 sm:p-8">
              <h3 className="text-xl font-black uppercase text-[#F5C84C]">{benefit.title}</h3>
              <p className="mt-4 leading-relaxed text-white/75">{benefit.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Family relationship */}
      <section className="border-y border-white/10 bg-gradient-to-r from-[#F5C84C]/10 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5C84C]">Protection works better together</p>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl">Support the member and the family member helping them.</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-white/75">
              <p>Many older adults turn first to an adult child, caregiver, or trusted family member when something feels wrong. ScamBomb supports both sides of that relationship:</p>
              <ul className="space-y-3">
                {['Older adults receive calm, understandable guidance', 'Family members receive practical tools for evaluating suspicious situations', 'Families can create shared safety habits before a crisis occurs', 'Credit unions remain positioned as a trusted source of protection and education'].map((item) => (
                  <li key={item} className="flex gap-3"><span className="text-[#F5C84C]" aria-hidden="true">✓</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Boundaries and pilot */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5C84C]">Designed to complement your team</p>
            <h2 className="mt-4 text-2xl font-black uppercase sm:text-3xl">An additional layer of education and early intervention</h2>
            <p className="mt-5 leading-relaxed text-white/75">ScamBomb does not access member accounts, authorize transactions, move money, or replace your fraud department. It helps members recognize suspicious situations before they become completed transactions.</p>
            <p className="mt-5 leading-relaxed text-white/75">Partnership access can be structured without requiring the credit union to share members’ private banking information with ScamBomb.</p>
          </div>
          <div className="rounded-2xl border border-[#F5C84C]/30 bg-[#F5C84C] p-8 text-[#0B1324] sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em]">Start with a focused program</p>
            <h2 className="mt-4 text-2xl font-black uppercase sm:text-3xl">Evaluate interest before expanding</h2>
            <p className="mt-5 leading-relaxed">A ScamBomb program can begin with a defined group of members, an educational campaign, or a live workshop.</p>
            <ol className="mt-5 space-y-3 font-medium">
              {['ScamBomb access for participating members', 'A live Zoom or in-person educational workshop', 'Family-protection guides and downloadable resources', 'Member communications supporting the program', 'Measurement of participation, activation, engagement, confidence, and feedback'].map((item, index) => (
                <li key={item} className="flex gap-3"><span className="font-black">{index + 1}.</span><span>{item}</span></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Workshop proof */}
      <section className="bg-white/[0.03]">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <p className="text-4xl" aria-hidden="true">🎓</p>
          <h2 className="mt-5 text-3xl font-black uppercase tracking-tight sm:text-4xl">Calm education people can understand</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75">ScamBomb education has already been delivered through an in-person workshop and multiple Zoom presentations. Every presentation and resource is designed around the same principle: fraud education should be calm, practical, and understandable to people who do not consider themselves technology experts.</p>
          <p className="mt-5 text-lg leading-relaxed text-white/75">ScamBomb avoids technical jargon and unnecessary fear. Members learn what warning signs to watch for, what actions to avoid, and where to turn when they are unsure.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5C84C]">Questions credit unions ask</p>
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
        </div>
      </section>

      {/* Partnership form */}
      <section id="partnership-form" className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5C84C]">Start a conversation</p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl">Help your members take the next safe step.</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">Let’s discuss how ScamBomb could support your credit union’s fraud-prevention, member-education, and community-outreach efforts.</p>
            <p className="mt-5 text-sm leading-relaxed text-white/50">If you are not the person responsible for fraud education, community outreach, or member experience, we would appreciate being connected with the appropriate member of your team.</p>
          </div>

          <form
            action="https://formspree.io/f/xppablrr"
            method="POST"
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="credit-union-name" className="mb-2 block text-sm font-semibold text-white/90">Name <span className="text-[#F5C84C]">*</span></label>
                <input id="credit-union-name" name="name" type="text" autoComplete="name" required className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#F5C84C] focus:outline-none focus:ring-2 focus:ring-[#F5C84C]/40" />
              </div>
              <div>
                <label htmlFor="credit-union-email" className="mb-2 block text-sm font-semibold text-white/90">Email <span className="text-[#F5C84C]">*</span></label>
                <input id="credit-union-email" name="email" type="email" autoComplete="email" required className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#F5C84C] focus:outline-none focus:ring-2 focus:ring-[#F5C84C]/40" />
              </div>
              <div>
                <label htmlFor="credit-union-phone" className="mb-2 block text-sm font-semibold text-white/90">Phone <span className="text-[#F5C84C]">*</span></label>
                <input id="credit-union-phone" name="phone" type="tel" autoComplete="tel" required className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#F5C84C] focus:outline-none focus:ring-2 focus:ring-[#F5C84C]/40" />
              </div>
              <div>
                <label htmlFor="financial-institution" className="mb-2 block text-sm font-semibold text-white/90">Name of Financial Institution</label>
                <input id="financial-institution" name="financial_institution" type="text" autoComplete="organization" className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#F5C84C] focus:outline-none focus:ring-2 focus:ring-[#F5C84C]/40" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="credit-union-address" className="mb-2 block text-sm font-semibold text-white/90">Address</label>
                <input id="credit-union-address" name="address" type="text" autoComplete="street-address" className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#F5C84C] focus:outline-none focus:ring-2 focus:ring-[#F5C84C]/40" />
              </div>
              <div>
                <label htmlFor="best-time-to-contact" className="mb-2 block text-sm font-semibold text-white/90">Best time to contact</label>
                <input id="best-time-to-contact" name="best_time_to_contact" type="text" placeholder="e.g. Weekday mornings" className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#F5C84C] focus:outline-none focus:ring-2 focus:ring-[#F5C84C]/40" />
              </div>
              <div>
                <label htmlFor="best-method-of-contact" className="mb-2 block text-sm font-semibold text-white/90">Best method of contact</label>
                <select id="best-method-of-contact" name="best_method_of_contact" defaultValue="" className="w-full rounded-xl border border-white/15 bg-[#17233a] px-4 py-3 text-white focus:border-[#F5C84C] focus:outline-none focus:ring-2 focus:ring-[#F5C84C]/40">
                  <option value="" disabled>Select one</option>
                  <option value="email">Email</option>
                  <option value="call">Call</option>
                  <option value="text">Text</option>
                  <option value="in_person">In person</option>
                </select>
              </div>
            </div>
            <button type="submit" className="mt-6 w-full rounded-xl bg-[#F5C84C] px-6 py-4 font-bold text-[#0B1324] transition-colors hover:bg-[#F5C84C]/90 focus:outline-none focus:ring-2 focus:ring-[#F5C84C] focus:ring-offset-2 focus:ring-offset-[#0B1324]">
              Schedule a Brief Conversation →
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
