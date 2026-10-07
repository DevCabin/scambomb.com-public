import BlogSchema from '../../../components/BlogSchema'
import Link from 'next/link'
import RelatedPosts from '../../../components/RelatedPosts'
export const metadata = {
  alternates: { canonical: '/blog/three-questions-to-ask-before-you-click' },
  title: 'Three questions to ask before you click',
  description: 'A simple checklist to run through before clicking any link in an email or text message.',
}

export default function BlogPost() {
  return (
    <div className="py-16">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <BlogSchema
        title={'Three questions to ask before you click'}
        description={'A simple checklist to run through before clicking any link in an email or text message.'}
        url={'https://scambomb.com/blog/three-questions-to-ask-before-you-click'}
        datePublished={'2023-11-08'}
        dateModified={'2026-10-07'}
      />

        <header className="mb-8">
          <div className="text-xs font-semibold tracking-widest text-white/60 mb-2">
            HOW-TO
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Three questions to ask before you click</h1>
          <p className="text-white/80 text-lg mb-4">A simple checklist to run through before clicking any link in an email or text message.</p>
          <time className="text-sm text-white/60" dateTime="2023-11-08">
            Published November 8, 2023 · Updated October 7, 2026
          </time>
          <p className="mt-3 text-sm text-white/70">
            By <Link href="/author/george-featherstone" className="text-white/90 hover:text-white underline">George Featherstone</Link>
            <span className="mx-1 text-white/40">·</span>
            <span>AI-assisted draft, reviewed and edited by George Featherstone.</span>
          </p>

        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <h1>Three questions to ask before you click</h1>

          <p>Links in emails and texts can lead to dangerous websites. But you don't need to be a tech expert to stay safe. Just ask yourself these three questions.</p>

          <h2>1. Did I expect this message?</h2>

          <p>If you get an unexpected email about "your account" or "a package delivery," be suspicious. Legitimate companies don't send random alerts. If it's about something you actually ordered or have an account for, check your official account first.</p>

          <p>Scammers count on you being busy or distracted. A message that arrives "out of the blue" — a refund you never asked for, a delivery you didn't schedule, a job you didn't apply for — is almost always the opening move. The safest question is the simplest: <em>was I expecting to hear from this company at all?</em></p>

          <h2>2. Does the link match the company?</h2>

          <p>Hover over (don't click) the link. Does the URL match the company's official website? For example:</p>
          <ul>
            <li>Real: amazon.com/returns</li>
            <li>Fake: amaz0n-support.com/update</li>
          </ul>

          <p>Scammers use similar-looking domains to trick you. They swap letters (a zero for an "o"), add extra words ("-support", "-security", "-verify"), or use a different ending (.net instead of .com). On a phone, where you can't hover, the rule is even simpler: <strong>don't tap the link at all</strong> — open the company's app or type the address yourself.</p>

          <h2>A worked example</h2>

          <p>Here is the whole method on one message. Say you get a text that reads: <em>"USPS: Your package is on hold due to an unpaid redelivery fee. Confirm your address here: usps-redelivery-fee.com"</em></p>

          <p><strong>Question 1 — did you expect it?</strong> You didn't request tracking for any package, so no. That alone is enough to stop.</p>

          <p><strong>Question 2 — does the link match the company?</strong> No. The real USPS site is usps.com, and USPS does not send links in unsolicited tracking texts. "usps-redelivery-fee.com" is a lookalike domain built to fool you.</p>

          <p><strong>Question 3 — is it creating urgency?</strong> Yes — "on hold" and "unpaid fee" push you to act fast before your package is "returned." Three no's, or a no and a yes, and the answer is the same: do not click. Delete the text and check any package through the USPS app or usps.com directly.</p>

          <h2>3. Does it create urgency or fear?</h2>

          <p>Messages that say "Act now or lose access!" or "Your account will be suspended!" are red flags. Real companies give you time and don't threaten immediate consequences.</p>

          <p>Urgency is the scammer's main tool, because it short-circuits your judgment. "Pay within 24 hours," "Confirm now or lose your benefits," "Your card has been locked" — all designed to make you act before you think. If a message is pushing you to move <em>fast</em>, that's exactly when you should slow down.</p>

          <h2>Safe alternatives</h2>

          <p>Instead of clicking suspicious links:</p>
          <ul>
            <li>Type the company's website address directly into your browser</li>
            <li>Use their official app</li>
            <li>Call them using a number from their official website (not from the message)</li>
          </ul>

          <h2>What to do if you already clicked</h2>

          <p>Don't panic — but act now:</p>
          <ol>
            <li><strong>Close the page.</strong> Don't download anything, and don't enter any more information.</li>
            <li><strong>If you entered a password,</strong> change it on the real site, and anywhere else you reused it.</li>
            <li><strong>If you entered payment details,</strong> call your bank or card issuer using the number on the back of your card and tell them what happened.</li>
            <li><strong>If you're unsure what you entered,</strong> watch your account and report suspicious charges right away.</li>
          </ol>

          <h2>What the three questions don't catch</h2>

          <p>These three questions stop most scams, but not all of them. A message can pass all three and still be dangerous if:</p>
          <ul>
            <li>The sender's account was hacked — the message comes from a real friend or company, but a scammer is behind it.</li>
            <li>It's a "voice call" version of the same trick — someone calling to "verify" your account and asking for a code.</li>
            <li>You're being asked to move money or buy gift cards, even by someone who sounds legitimate.</li>
          </ul>

          <p>That's why the golden rule still applies even when things look right: <strong>never share a one-time code, password, or payment details with someone who contacted you first.</strong> Reach out through a channel you chose.</p>

          <h2>The three questions, in one glance</h2>

          <p>Keep this short version somewhere handy — on the fridge, or saved as a note on a parent's phone:</p>

          <ol>
            <li><strong>Was I expecting this?</strong> No → be suspicious.</li>
            <li><strong>Does the link (or number) really belong to the company?</strong> Doubt it → don't click it.</li>
            <li><strong>Am I being rushed or scared?</strong> Yes → slow down and verify another way.</li>
          </ol>

          <p>Answer "no" to question one, or "yes" to question three, and the safest move is the same every time: stop, and check through a channel you chose yourself — the official app, or the number on the back of your card.</p>

          <p>This checklist works for texts, emails, and even phone calls. The scammer changes the story — a package, a bank alert, a grandchild in trouble — but the playbook is the same: unexpected contact, a fake link or number, and pressure to act now. The questions stay the same because the scam does.</p>

          <h2>Bonus tip</h2>

          <p>If something feels off, it probably is. Trust your instincts and take the safe route. It's always better to take an extra minute than to rush into a mistake you can't undo.</p>
        </div>

        
      <RelatedPosts
        posts={[
    { slug: 'is-this-a-scam', title: 'Is This a Scam? How to Spot Fake Texts, Emails & Calls' },
    { slug: 'how-to-spot-fake-bank-texts-in-30-seconds', title: 'Is This Text Really From My Bank? How to Check Safely' },
    { slug: 'new-usps-delivery-scam-what-to-do', title: 'Does USPS Charge for Redelivery? How to Spot the Fake Fee Text' }
        ]}
      />

      <footer className="mt-12 pt-8 border-t border-white/10">
          <Link href="/blog" className="text-yellow-300 hover:text-yellow-400 underline underline-offset-4">
            ← Back to all posts
          </Link>
        </footer>
      </article>
    </div>
  )
}
