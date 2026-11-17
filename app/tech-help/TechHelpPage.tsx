'use client'

import { FormEvent, useState } from 'react'

const brand = '#F5C84C'
const bookingLinks = {
  quick: 'https://calendly.com/featherstone-george/quick-tech-help',
  personal: 'https://calendly.com/featherstone-george/personal-tech-session',
}

const helpTopics = [
  ['Phones & tablets', 'iPhone, Android, settings, apps, notifications, and feeling more comfortable with your device.'],
  ['Computers & laptops', 'Slow computers, confusing messages, software questions, and everyday frustrations.'],
  ['Email & online accounts', 'Getting into email, organizing your inbox, spotting suspicious messages, and account settings.'],
  ['Photos, files & backups', 'Find, organize, share, and back up the photos and files that matter to you.'],
  ['Video calls & staying connected', 'Zoom, FaceTime, Google Meet, and the tools that help you stay close to family.'],
  ['Smart TVs, streaming & apps', 'Streaming services, subscriptions, apps, and common settings that feel confusing.'],
  ['Learning AI & new technology', 'ChatGPT and other new tools explained in plain English, with practical examples.'],
  ['Online safety & scam prevention', 'Warning signs in texts and emails, suspicious activity, and everyday online safety.'],
]

const faqs = [
  ['Do I have to be good with computers?', "Absolutely not! That's why we're here. Just explain what you're experiencing, and we'll work through it together."],
  ['Do you work with iPhones, Android phones, Windows computers, and Macs?', 'Yes. We can help with common questions and problems involving Apple, Android, Windows, and Mac devices. The exact assistance depends on the device and problem.'],
  ['How can you help if you are not physically here?', "Many problems can be addressed through a phone conversation, video call, or screen sharing. We'll guide you through it. If a repair or visit is needed, we'll explain that."],
  ['Is screen sharing safe?', 'We only use screen sharing when necessary, with your permission. You remain in control and can stop at any time. We will never ask for a password or financial information.'],
  ['Can you help recover a forgotten password?', "We can guide you through the service's official recovery process. You enter your own passwords and verification codes; we never need to know them."],
  ["What if you can't fix my problem?", "We'll make a reasonable effort and explain the available options. Some problems require a hardware repair, account provider, or in-person technician."],
  ['Can I book a session for my parent?', 'Yes. Family members can purchase a session for someone else. The person receiving assistance must agree to participate, and we respect their privacy.'],
  ['Do I need a membership?', 'No. You pay only for the individual session you choose. There is no monthly plan.'],
  ['Can you help me learn to use ChatGPT?', "Absolutely. We'll explain what it is, what it can and cannot do, and practical ways it may help in everyday life."],
  ['Is ScamBomb Tech Help available nationwide?', 'Because appointments are remote, we can assist customers across the United States, subject to availability and the type of problem.'],
]

function track(name: string) {
  if (typeof window !== 'undefined') {
    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag
    gtag?.('event', name)
  }
}

function scrollToQuestion(source: string) {
  track(source)
  document.getElementById('ask-first')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function bookSession(url: string, event: string) {
  track(event)
  window.open(url, '_blank', 'noopener,noreferrer')
}

export default function TechHelpPage() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function submitQuestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setError('')
    const form = event.currentTarget
    const data = new FormData(form)
    if (data.get('_gotcha')) return
    try {
      const response = await fetch('https://formspree.io/f/xblqgwal', { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      if (!response.ok) throw new Error('Form submission failed')
      setSubmitted(true)
      form.reset()
      track('tech_help_question_submit')
    } catch {
      setError('We could not send that just now. Please try again or use the Contact page.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="tech-help-page bg-[#F8F5EE] text-[#0B1324]">
      <section className="relative overflow-hidden bg-[#0B1324] text-white">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_75%_20%,#F5C84C_0,transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.04fr_.96fr] lg:px-10 lg:py-28">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#F5C84C]">Personal tech help from ScamBomb</p>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.06] tracking-tight sm:text-6xl">Real Tech Help. <span className="text-[#F5C84C]">From a Real Person.</span></h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white/85 sm:text-2xl">Phones, computers, email, and more. Friendly, patient technology help from someone who takes the time to explain things.</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">No confusing technical talk. No judgment. No pressure. Just real help, one step at a time.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button onClick={() => bookSession(bookingLinks.personal, 'tech_help_book_60_click')} className="rounded-xl bg-[#F5C84C] px-6 py-4 text-center text-base font-extrabold text-[#0B1324] shadow-lg shadow-yellow-400/20 transition hover:bg-[#ffe17c] focus:outline-none focus:ring-4 focus:ring-[#F5C84C]/40">Book a Tech Help Session</button>
              <button onClick={() => scrollToQuestion('tech_help_ask_question_click')} className="rounded-xl border-2 border-white/30 px-6 py-4 text-center text-base font-bold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/20">Not Sure? Ask Us First</button>
            </div>
            <p className="mt-6 text-sm text-white/60">Remote assistance from the comfort of your home. No subscriptions required.</p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border-8 border-white/10 shadow-2xl sm:min-h-[500px]">
            <img src="/tech-help-george.jpg" alt="George Featherstone, ScamBomb founder" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute bottom-5 left-5 rounded-xl bg-[#0B1324]/90 px-4 py-3 text-sm font-semibold text-white backdrop-blur-sm">Patient help. Plain English.</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10" id="what-we-help-with">
        <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9A7614]">What we can help with</p><h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">Whatever technology is giving you trouble, let&apos;s figure it out.</h2><p className="mt-5 text-lg leading-relaxed text-[#334155]">You do not need to know the technical name for your problem. Just tell us what is happening.</p></div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {helpTopics.map(([title, description], index) => <article key={title} className="rounded-2xl border border-[#0B1324]/10 bg-white p-6 shadow-sm"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5C84C] text-xl font-black text-[#0B1324]">{String(index + 1).padStart(2, '0')}</div><h3 className="text-xl font-extrabold">{title}</h3><p className="mt-3 text-base leading-relaxed text-[#475569]">{description}</p></article>)}
        </div>
        <div className="mt-9 rounded-2xl bg-[#0B1324] p-7 text-white sm:flex sm:items-center sm:justify-between sm:gap-8"><p className="text-lg leading-relaxed text-white/85">Don&apos;t see your problem listed? That&apos;s okay. Tell us what&apos;s going on, and we&apos;ll let you know whether we can help.</p><button onClick={() => scrollToQuestion('tech_help_ask_question_click')} className="mt-5 shrink-0 rounded-xl bg-[#F5C84C] px-5 py-3 font-extrabold text-[#0B1324] sm:mt-0">Ask About My Tech Problem</button></div>
      </section>

      <section className="bg-[#EAE5D9] px-5 py-16 sm:px-8 sm:py-24 lg:px-10" id="how-it-works"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9A7614]">How it works</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">Getting help is easy.</h2><p className="mt-5 text-lg leading-relaxed text-[#334155]">No complicated setup. No technical knowledge required.</p></div><div className="mt-10 grid gap-5 lg:grid-cols-3">{[['01', 'Choose your session', 'Select the amount of help you need and book a time that works for you. Not sure how long you need? Ask us first.'], ['02', 'We connect with you', 'At your appointment, we connect by phone or video call. When helpful, we can guide you through screen sharing. You remain in control.'], ['03', 'We work through it together', "We'll troubleshoot the problem, explain what's happening, and show you the steps in plain English. There is no need to feel rushed."]].map(([num, title, text]) => <div key={num} className="rounded-2xl bg-white p-7"><span className="text-5xl font-black text-[#D6A900]">{num}</span><h3 className="mt-5 text-2xl font-extrabold">{title}</h3><p className="mt-3 text-base leading-relaxed text-[#475569]">{text}</p></div>)}</div><p className="mx-auto mt-10 max-w-3xl text-center text-xl font-semibold leading-relaxed">Our goal is not just to solve today&apos;s problem. It is to help you feel more confident the next time you use your technology.</p></div></section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-24 lg:px-10" id="pricing"><div className="mx-auto max-w-7xl"><div className="mx-auto max-w-2xl text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9A7614]">Simple pricing</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">Straightforward help. Straightforward pricing.</h2><p className="mt-5 text-lg leading-relaxed text-[#475569]">No membership fees. No long-term commitments. Just the help you need, when you need it.</p></div><div className="mx-auto mt-10 grid max-w-5xl gap-5 lg:grid-cols-2">{[['QUICK TECH HELP', '$39', 'Up to 30 minutes', 'Perfect for one specific question or a smaller technology problem.', 'Book 30 Minutes — $39', 'tech_help_book_30_click', bookingLinks.quick], ['PERSONAL TECH SESSION', '$69', 'Up to 60 minutes', 'Our recommended option for troubleshooting, setup, personal instruction, or several smaller questions.', 'Book 60 Minutes — $69', 'tech_help_book_60_click', bookingLinks.personal]].map(([name, price, length, desc, label, event, url], index) => <article key={name} className={`relative rounded-3xl border-2 p-7 sm:p-9 ${index === 1 ? 'border-[#F5C84C] shadow-xl shadow-yellow-200/40' : 'border-[#0B1324]/10'}`}>{index === 1 && <span className="absolute -top-3 left-7 rounded-full bg-[#F5C84C] px-3 py-1 text-xs font-black uppercase tracking-wider">Recommended</span>}<p className="text-sm font-black tracking-[0.16em] text-[#9A7614]">{name}</p><div className="mt-4 text-5xl font-black">{price}</div><p className="mt-1 font-bold text-[#475569]">{length}</p><p className="mt-5 min-h-14 text-base leading-relaxed text-[#475569]">{desc}</p><ul className="mt-5 space-y-3 text-base text-[#334155]"><li>✓ Email and account help</li><li>✓ Phone, computer, or app questions</li><li>✓ Patient, plain-English instruction</li></ul><button onClick={() => bookSession(url, event)} className="mt-8 w-full rounded-xl bg-[#0B1324] px-5 py-4 font-extrabold text-white transition hover:bg-[#1c2b47]">{label}</button></article>)}</div><div className="mx-auto mt-9 max-w-3xl rounded-2xl bg-[#F8F5EE] p-6 text-center"><p className="font-extrabold">Not sure which session is right for you?</p><p className="mt-2 text-[#475569]">Tell us a little about your problem before booking. We&apos;ll help you choose.</p><button onClick={() => scrollToQuestion('tech_help_ask_question_click')} className="mt-4 rounded-xl border-2 border-[#0B1324] px-5 py-3 font-extrabold">Ask Us First</button><p className="mt-5 text-xs leading-relaxed text-[#64748B]">Sessions are remote and by appointment. Some hardware problems, internet outages, and other issues may require in-person help. Any additional session requires your approval.</p></div></div></section>

      <section className="bg-[#0B1324] px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-10"><div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5C84C]">Help for your parents, too</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">Someone patient to help Mom or Dad with technology.</h2><p className="mt-6 text-lg leading-relaxed text-white/75">You cannot always be there when a parent needs help with a phone, computer, or email. ScamBomb Tech Help gives your family another option: friendly, one-on-one assistance from someone who listens, explains, and helps your loved one feel comfortable.</p><p className="mt-5 text-lg leading-relaxed text-white/75">Whether you are across town or across the country, you can arrange a session for a parent or family member.</p><button onClick={() => bookSession(bookingLinks.personal, 'tech_help_book_60_click')} className="mt-8 rounded-xl bg-[#F5C84C] px-6 py-4 font-extrabold text-[#0B1324]">Book Help for a Family Member</button><p className="mt-5 text-sm text-white/55">The person receiving assistance must agree to the session. We respect their privacy and independence.</p></div><div className="overflow-hidden rounded-[2rem]"><img src="/tech-help-george.jpg" alt="George Featherstone, ScamBomb founder" className="h-[360px] w-full object-cover sm:h-[480px]" /></div></div></section>

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-10"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9A7614]">Why ScamBomb?</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">Technology shouldn&apos;t feel intimidating.</h2><p className="mt-6 text-lg leading-relaxed text-[#334155]">ScamBomb started with a simple mission: helping people recognize scams, avoid online fraud, and feel safer using technology. Sometimes the problem is not a scam. It is a password that will not work, a phone setting you cannot find, or a computer that refuses to cooperate.</p></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[['A real person', 'Personal assistance, not an endless collection of automated answers.'], ['Patient explanations', 'We explain what we are doing and why, without making you feel uncomfortable asking questions.'], ['Safety comes first', 'We believe technology help should be transparent, respectful, and secure.'], ['No unnecessary commitments', 'Book the help you need. There is no recurring subscription required.']].map(([title, text]) => <div key={title} className="rounded-2xl border border-[#0B1324]/10 bg-white p-6"><h3 className="text-xl font-extrabold">{title}</h3><p className="mt-3 text-base leading-relaxed text-[#475569]">{text}</p></div>)}</div></div></section>

      <section className="bg-[#EAE5D9] px-5 py-16 sm:px-8 sm:py-24 lg:px-10"><div className="mx-auto max-w-4xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9A7614]">Your safety matters</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">Safe, respectful technology assistance.</h2><p className="mt-6 text-lg leading-relaxed text-[#334155]">We understand that trusting someone with technology questions is a big deal. That is why we follow a few simple principles:</p><ul className="mt-7 grid gap-4 sm:grid-cols-2">{['You choose when to schedule an appointment.', 'We explain the cost before you pay.', 'We never ask for passwords or banking credentials.', 'When screen sharing is needed, you initiate it and remain in control.', "We won't ask you to log into financial accounts while sharing your screen.", 'We never call unexpectedly claiming your computer has a virus.', 'We will not pressure you into unnecessary software or services.'].map(item => <li key={item} className="flex gap-3 rounded-xl bg-white p-4 text-base leading-relaxed"><span className="font-black text-[#9A7614]">✓</span><span>{item}</span></li>)}</ul><div className="mt-8 rounded-2xl border-2 border-[#9A7614]/30 bg-[#F8F5EE] p-5 text-base leading-relaxed"><strong>If someone contacts you unexpectedly claiming to be ScamBomb Tech Help, do not grant access to your device.</strong> Visit <a className="font-bold text-[#806000] underline" href="/help">scambomb.com/help</a> to verify how to reach us.</div></div></section>

      <section className="bg-[#0B1324] px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-10"><div className="mx-auto max-w-4xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5C84C]">Frequently asked questions</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">Questions are welcome.</h2><div className="mt-10 divide-y divide-white/15 rounded-2xl border border-white/10 bg-white/[0.04] px-5 sm:px-8">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="cursor-pointer list-none pr-8 text-lg font-bold marker:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C84C]">{question}<span className="float-right text-2xl text-[#F5C84C] transition group-open:rotate-45" aria-hidden="true">＋</span></summary><p className="mt-3 max-w-3xl text-base leading-relaxed text-white/70">{answer}</p></details>)}</div></div></section>

      <section className="scroll-mt-8 bg-[#F5C84C] px-5 py-16 sm:px-8 sm:py-24 lg:px-10" id="ask-first"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><p className="text-sm font-black uppercase tracking-[0.2em] text-[#6C5100]">Start with a question</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">Not sure we can help? Just ask.</h2><p className="mt-6 text-lg leading-relaxed text-[#273246]">Tell us a little about the technology problem you are having. We will let you know whether it is something we can help with remotely and recommend the right next step.</p><div className="mt-7 rounded-2xl bg-[#0B1324] p-5 text-white"><p className="font-bold">Prefer to talk it through first?</p><p className="mt-2 text-sm leading-relaxed text-white/70">Send us a question and we will help you choose the right session. If you are ready, you can book a 30-minute or 60-minute appointment directly above.</p></div></div><form onSubmit={submitQuestion} className="rounded-3xl bg-white p-6 shadow-xl sm:p-8"><input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" /><input type="hidden" name="form_type" value="ScamBomb Tech Help question" /><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-bold">Name<input required name="name" type="text" autoComplete="name" className="mt-2 w-full rounded-xl border border-[#CBD5E1] px-4 py-3 text-base font-normal outline-none focus:border-[#0B1324] focus:ring-2 focus:ring-[#F5C84C]" /></label><label className="text-sm font-bold">Email<input required name="email" type="email" autoComplete="email" className="mt-2 w-full rounded-xl border border-[#CBD5E1] px-4 py-3 text-base font-normal outline-none focus:border-[#0B1324] focus:ring-2 focus:ring-[#F5C84C]" /></label></div><label className="mt-5 block text-sm font-bold">Phone <span className="font-normal text-[#64748B]">(optional)</span><input name="phone" type="tel" autoComplete="tel" className="mt-2 w-full rounded-xl border border-[#CBD5E1] px-4 py-3 text-base font-normal outline-none focus:border-[#0B1324] focus:ring-2 focus:ring-[#F5C84C]" /></label><label className="mt-5 block text-sm font-bold">What do you need help with?<textarea required name="problem" rows={5} className="mt-2 w-full rounded-xl border border-[#CBD5E1] px-4 py-3 text-base font-normal outline-none focus:border-[#0B1324] focus:ring-2 focus:ring-[#F5C84C]" placeholder="For your security, please do not include passwords, verification codes, or banking information." /></label><label className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-[#475569]"><input required type="checkbox" name="consent" value="yes" className="mt-1 h-5 w-5 accent-[#0B1324]" />I agree that ScamBomb may use these details to reply to my question. I will not include passwords, codes, or financial information.</label>{submitted ? <p role="status" className="mt-5 rounded-xl bg-green-50 p-4 font-bold text-green-800">Thanks — your question is on its way. We will be in touch.</p> : <button disabled={submitting} type="submit" className="mt-6 w-full rounded-xl bg-[#0B1324] px-6 py-4 font-extrabold text-white transition hover:bg-[#1c2b47] disabled:cursor-wait disabled:opacity-60">{submitting ? 'Sending…' : 'Send My Question'}</button>}{error && <p role="alert" className="mt-4 text-sm font-semibold text-red-700">{error}</p>}<p className="mt-4 text-center text-xs text-[#64748B]">We only collect what we need to respond. Never send a password or financial information.</p></form></div></section>

      <section className="bg-[#0B1324] px-5 py-16 text-center text-white sm:px-8 sm:py-24 lg:px-10"><div className="mx-auto max-w-3xl"><h2 className="text-3xl font-black sm:text-5xl">Let&apos;s make technology a little easier.</h2><p className="mt-6 text-xl leading-relaxed text-white/75">You do not have to figure everything out on your own. Friendly answers. Patient explanations. Real human help.</p><div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"><button onClick={() => bookSession(bookingLinks.personal, 'tech_help_book_60_click')} className="rounded-xl bg-[#F5C84C] px-6 py-4 font-extrabold text-[#0B1324]">Book Your Tech Help Session</button><button onClick={() => scrollToQuestion('tech_help_ask_question_click')} className="rounded-xl border-2 border-white/30 px-6 py-4 font-bold">Ask a Question First</button></div><p className="mt-8 text-sm text-white/50">ScamBomb Tech Help — Real People. Real Answers. Less Frustration.</p></div></section>
    </div>
  )
}
