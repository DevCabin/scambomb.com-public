import Link from 'next/link'

export const metadata = {
  title: 'Is This Text Really From My Bank? How to Check Safely',
  description: 'Learn how to check a bank fraud alert safely, what fake bank texts try next, and what to do after replying, clicking, or sharing account details.',
}

export default function BlogPost() {
  return (
    <div className="py-16"><article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <header className="mb-8"><div className="text-xs font-semibold tracking-widest text-white/60 mb-2">GUIDE</div><h1 className="text-3xl sm:text-4xl font-bold mb-4 uppercase">Is This Text Really From My Bank? How to Check Safely</h1><p className="text-white/80 text-lg mb-4">A calm, reliable way to check a possible bank alert—whether you are protecting yourself or helping a parent.</p><time className="text-sm text-white/60" dateTime="2023-11-12">November 12, 2023</time></header>
      <div className="prose prose-invert prose-lg max-w-none [&_h2]:uppercase [&_h3]:uppercase">
        <p><strong>The reliable check is independent verification:</strong> open your bank’s official app yourself, or call the number on the back of your card. Do not use a link, phone number, or reply option supplied by a suspicious text.</p>
        <p>A displayed sender name, short code, logo, polished grammar, urgency, or the presence or absence of a link cannot prove a message is genuine. Those details can be clues, but scammers can imitate or manipulate them. Verification through a channel you chose is the safer action.</p>
        <h2>A realistic fake fraud alert</h2><p>An illustrative scam might say: <em>“Did you authorize a $1,499 purchase? Reply YES to confirm or call the fraud department at 800-555-0199.”</em> The number and wording vary. The goal is to make you respond so the scammer can continue the conversation as a helpful “bank employee.”</p>
        <h2>What scammers may do next</h2><ul><li>Ask you to confirm your name, one-time code, PIN, password, or full card number.</li><li>Call from a number that appears to belong to your bank.</li><li>Tell you to move money to a “safe” account or buy gift cards.</li><li>Ask you to install remote-access software or stay on the phone while you log in.</li><li>Pressure you not to hang up or contact the bank independently.</li></ul><p>A real bank may contact customers about account activity, but a text’s appearance does not establish that it is real. Let the bank’s independently found app or phone number settle the question.</p>
        <h2>What information should you not provide in a text conversation?</h2><p>Do not send a password, PIN, full card number, online-banking login, Social Security number, or one-time verification code in response to an unexpected message. If someone asks you to move money “for protection,” stop and contact the bank through the app or the number on your card.</p>
        <h2>What to do if you already replied or clicked</h2>
        <h3>If you only replied</h3><p>Stop the conversation. Do not answer follow-up questions. Block and report the message, then check your account in the official app or call the bank independently.</p>
        <h3>If you clicked a link</h3><p>Close the page and do not download anything or enter more information. If you entered a password, change it through the bank’s official app or website and anywhere else you reused it.</p>
        <h3>If you shared account details or a verification code</h3><p>Call the bank immediately using the number on the back of your card. Tell them exactly what you shared, review recent activity, ask about securing the account, and monitor statements for unauthorized transactions.</p>
        <h3>If money was sent</h3><p>Contact the bank or payment provider immediately and ask whether the transaction can be stopped or reversed. Keep screenshots and report the incident to the FTC at <a href="https://ReportFraud.ftc.gov">ReportFraud.ftc.gov</a>.</p>
        <h2>A simple routine for an older adult or caregiver</h2><ol><li>Pause. No legitimate emergency is created by taking a minute to verify.</li><li>Say out loud: “I will open the bank app myself.”</li><li>Check for alerts in the official app, or call the number on the card.</li><li>Tell the bank what the text said and ask whether any action is needed.</li><li>Save a screenshot only for reporting, then block and delete the message.</li></ol>
        <h2>Next step</h2><p><Link href="/blog/is-this-a-scam">Use the general scam-check guide</Link> for the same stop-and-verify routine across texts, emails, and calls. ScamBomb can help assess a suspicious bank message or screenshot; it cannot verify a bank account or replace the bank’s fraud department.</p>
        <h2>Official guidance</h2><p><a href="https://consumer.ftc.gov/consumer-alerts/2025/04/unexpected-text-scam">FTC: Is that unexpected text a scam?</a></p>
      </div>
      <footer className="mt-12 pt-8 border-t border-white/10"><Link href="/blog" className="text-yellow-300 hover:text-yellow-400 underline underline-offset-4">← Back to all posts</Link></footer>
    </article></div>
  )
}
