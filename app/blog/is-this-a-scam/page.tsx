import Link from 'next/link'
import ScamGuideOptIn from '../../../components/ScamGuideOptIn'

export const metadata = {
  title: 'Is This a Scam? How to Spot Fake Texts, Emails & Calls | ScamBomb',
  description: 'Got a weird text? Use this 10-second check to know if it’s a scam. Learn the five red flags, what to do next, and how to protect your family.',
}

export default function BlogPost() {
  return (
    <div className="py-16">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <div className="text-xs font-semibold tracking-widest text-yellow-300/80 mb-3">GUIDE</div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight">Is This a Scam? How to Instantly Spot Fake Texts, Emails &amp; Calls</h1>
          <p className="text-white/80 text-lg mb-5 leading-relaxed">Got a weird text? Use this 10-second check to know if it&apos;s a scam. Learn the five red flags, what to do next, and how to protect your family.</p>
          <time className="text-sm text-white/60" dateTime="2026-08-04">August 4, 2026</time>
        </header>

        <div className="prose prose-invert prose-lg max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-white/80 [&_p]:leading-relaxed [&_p]:mb-5 [&_li]:text-white/80 [&_li]:leading-relaxed">
          <p>You got a weird text. Maybe it&apos;s about a package you weren&apos;t expecting. Maybe it&apos;s a fraud alert from your bank. Maybe someone “accidentally” texted you and now they&apos;re being a little too friendly.</p>
          <p>Your gut says something&apos;s off. Here&apos;s the fastest way to know for sure—and what to do next.</p>
          <p>In 2024, Americans reported losing <strong>$470 million to scams that started with a text message</strong>. That&apos;s five times more than in 2020. And because most scams go unreported, the real number is almost certainly much higher.</p>
          <p>The good news: most scams follow the same playbook. Once you know the pattern, you can spot them in seconds.</p>

          <h2>The 10-Second Scam Check</h2>
          <p>Before you click, call, or reply, ask yourself these five questions. If you answer “no” to even one, stop. It&apos;s almost certainly a scam.</p>
          <h3>1. Did I expect this message?</h3>
          <p>Real companies don&apos;t send surprise texts about problems you didn&apos;t know existed. If you weren&apos;t expecting a delivery, a fraud alert, or a job offer, be suspicious.</p>
          <p>USPS, for example, does not send unsolicited text messages about package problems. The Postal Service only texts you if <em>you</em> signed up for Text Tracking or Informed Delivery.</p>
          <h3>2. Does it create urgency or fear?</h3>
          <p>Scammers want you to act before you think. Look for phrases like:</p>
          <ul><li>“Your account will be suspended in 24 hours.”</li><li>“Immediate action required.”</li><li>“You owe unpaid tolls. Pay now to avoid penalties.”</li><li>“Confirm now or lose your benefits.”</li></ul>
          <p>Real companies give you time. Scammers steal it from you.</p>
          <h3>3. Does it ask me to click a link or call a number?</h3>
          <p>This is the biggest red flag. Legitimate alerts rarely include links, and they never ask you to call a number provided in the message itself.</p>
          <p><strong>The one rule that protects you:</strong> If you&apos;re unsure, contact the company using a phone number or website you already know. Never use contact information in a suspicious message.</p>
          <h3>4. Is the sender&apos;s number or email slightly off?</h3>
          <p>Scammers are getting better at looking legitimate. But they often slip up:</p>
          <ul><li><code>USPS-delivery.net</code> instead of <code>USPS.com</code></li><li><code>Amazon-security.com</code> instead of <code>Amazon.com</code></li><li>A phone number that&apos;s one digit off from the real one</li><li>A “bank” text sent from a regular 10-digit number instead of the bank&apos;s official short code</li></ul>
          <p>When in doubt, open your browser and type the company&apos;s real website address manually. Don&apos;t trust links.</p>
          <h3>5. Does it ask for personal information or money?</h3>
          <p>Banks, the IRS, and Social Security will never text you asking for your password or PIN, full Social Security number, payment via gift card, wire transfer, or cryptocurrency, or remote access to your computer.</p>
          <p>If a message asks for any of these, it&apos;s a scam. Period.</p>
        </div>

        <ScamGuideOptIn />

        <div className="prose prose-invert prose-lg max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-white/80 [&_p]:leading-relaxed [&_p]:mb-5 [&_li]:text-white/80 [&_li]:leading-relaxed">
          <h2>What Scammers Look Like in 2024–2025</h2>
          <p>The Federal Trade Commission tracks thousands of scam reports every year. Five types of text scams accounted for about half of all reported losses in 2024.</p>
          <h3>Fake package delivery</h3>
          <p>You get a message saying there&apos;s a problem with a delivery—wrong address, unpaid fee, or failed attempt—with a link to “fix” it. The site looks like USPS, FedEx, or Amazon and asks for your address, credit card, or Social Security number.</p>
          <p><strong>The truth:</strong> USPS does not charge redelivery fees, and it doesn&apos;t send unsolicited texts with links.</p>
          <h3>Phony job opportunities</h3>
          <p>“Earn $500/day from home. No experience needed. Reply now.” The “job” may involve rating products, reshipping packages, or completing tasks. Eventually, they ask for an equipment fee or training deposit. The check they send will bounce—and sometimes they turn you into an unwitting money mule.</p>
          <h3>Fake fraud alerts</h3>
          <p>“Did you make this $1,499 purchase? Reply YES or NO.” Replying tells the scammer your number is active. They may then call pretending to be your bank and pressure you into moving money to a “safe” account—which is actually theirs.</p>
          <p><strong>The truth:</strong> Real fraud alerts will never ask you to move money. Call the number on the back of your card, not a number in the message.</p>
          <h3>Bogus unpaid tolls</h3>
          <p>These messages use a small, believable amount and a fake payment page to steal your card number. Real toll agencies send bills by mail first. Log into your toll account directly through its official website.</p>
          <h3>“Wrong number” texts</h3>
          <p>It starts innocently: “Hey, are we still on for coffee?” They apologize, keep chatting, and eventually mention an investment opportunity. This “pig butchering” scam fattens you up with friendship before the theft. No stranger who texts you by mistake needs to become your friend. Block and delete.</p>

          <h2>Text Scams—The Most Common Threat</h2>
          <p>Text messages are the perfect scam delivery system. We read them quickly, trust them more than email, and shortened links hide where they really lead.</p>
          <ul><li><strong>Shortened URLs</strong> like <code>bit.ly</code> or links with extra characters.</li><li><strong>Spoofed sender IDs</strong> that say “USPS” but came from a random number.</li><li><strong>Grammar and spelling mistakes.</strong></li><li><strong>The “wrong number” pivot</strong> from a friendly stranger to a money pitch.</li><li><strong>Requests to download apps</strong> outside the official Apple App Store or Google Play Store.</li></ul>
          <h3>How to report a scam text</h3>
          <ol><li>Forward it to <strong>7726 (SPAM)</strong> to help your wireless provider block similar messages.</li><li>Report it to the FTC at <a href="https://ReportFraud.ftc.gov">ReportFraud.ftc.gov</a>.</li><li>Use “Report Junk” in your messaging app.</li></ol>

          <h2>Email Scams—Visual Deception</h2>
          <p>Scammers copy real company logos, fonts, and colors perfectly. A professional-looking email is not proof it&apos;s real. Always verify through a separate channel.</p>
          <ul><li><strong>Hover before you click.</strong> Check the real web address without clicking.</li><li><strong>Check the sender address.</strong> Watch for lookalike domains such as <code>amaz0n.com</code>.</li><li><strong>Look for urgency and threats.</strong> Real companies don&apos;t threaten you via email.</li><li><strong>Be wary of attachments.</strong> A familiar account may have been hacked.</li></ul>

          <h2>Phone &amp; Voicemail Scams</h2>
          <p>Scammers can make a call appear to come from your area code, your bank, or a government agency. This is called spoofing.</p>
          <ul><li><strong>IRS imposters:</strong> The real IRS never calls demanding immediate payment or gift cards.</li><li><strong>Social Security scams:</strong> The SSA never suspends Social Security numbers or demands payment by phone.</li><li><strong>Tech support scams:</strong> Microsoft, Apple, and your ISP will not call unsolicited about a virus.</li><li><strong>Voicemail-to-text phishing:</strong> Real voicemail notifications come through your phone&apos;s built-in app, not a random link.</li></ul>
          <h3>What to do if you get a scam call</h3>
          <ol><li>Hang up. Don&apos;t press buttons or call back.</li><li>Block the number.</li><li>Report it at <a href="https://ReportFraud.ftc.gov">ReportFraud.ftc.gov</a>.</li></ol>

          <h2>What to Do If You Think It&apos;s a Scam</h2>
          <ol><li><strong>Stop.</strong> Don&apos;t click, call, or reply.</li><li><strong>Screenshot the message.</strong> You&apos;ll need it for reporting.</li><li><strong>Verify independently.</strong> Type the company&apos;s URL manually or find its number yourself.</li><li><strong>Delete and block.</strong></li><li><strong>Report it.</strong> Forward texts to 7726, file a report at ReportFraud.ftc.gov, and email USPS-related scams to <a href="mailto:spam@uspis.gov">spam@uspis.gov</a>.</li><li><strong>Warn your family.</strong> If you got it, they might too.</li></ol>

          <h2>What to Do If You Already Clicked</h2>
          <p>It happens. Scammers are good at what they do. Here&apos;s how to limit the damage.</p>
          <h3>If you clicked a link but didn&apos;t enter anything</h3>
          <ol><li>Close the browser immediately.</li><li>Clear your browser cache and cookies.</li><li>Run a malware scan.</li></ol>
          <h3>If you entered personal information</h3>
          <ol><li>Change your passwords, starting with email and bank accounts.</li><li>Contact your bank if you entered financial information.</li><li>Freeze your credit at Equifax, Experian, and TransUnion.</li><li>Report it at <a href="https://IdentityTheft.gov">IdentityTheft.gov</a> and ReportFraud.ftc.gov.</li><li>Monitor your accounts closely.</li></ol>
          <h3>If you gave remote access to your computer</h3>
          <ol><li>Disconnect from the internet.</li><li>Contact a trusted computer professional.</li><li>Change passwords from a different, clean device.</li><li>Check bank and credit card statements for unauthorized charges.</li></ol>

          <h2>Protect Your Family</h2>
          <p>Scammers target people you love—often because they assume seniors and teens may be less familiar with these tactics.</p>
          <h3>Seniors</h3>
          <p>Remind the seniors in your life: the government will never call and demand money; never give personal information unless you called using a trusted number; and prizes, refunds, or long-lost relatives with money are not what they seem.</p>
          <h3>Teens</h3>
          <p>Talk to teens about unexpected job offers, sending money to online-only acquaintances, and anyone pressuring them to invest in crypto or download an app.</p>

          <h2>Download the Free “Is This a Scam?” Checklist</h2>
          <p>Keep the 10-second scam check handy. Print it out, put it on your refrigerator, and share it with your parents. The printable one-pager includes:</p>
          <ul><li>The five-question scam check</li><li>What to do if you think it&apos;s a scam</li><li>What to do if you already clicked</li><li>The top five scams to watch for</li><li>Quick-reference contact numbers for USPS, IRS, SSA, and your bank</li></ul>
        </div>

        <ScamGuideOptIn />

        <div className="prose prose-invert prose-lg max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-white/80 [&_p]:leading-relaxed [&_p]:mb-5">
          <h2>Sources &amp; Further Reading</h2>
          <ul><li><a href="https://www.ftc.gov/news-events/data-visualizations/data-spotlight/2025/04/top-text-scams-2024">Federal Trade Commission: Top Text Scams of 2024</a></li><li><a href="https://consumer.ftc.gov/articles/how-recognize-and-report-spam-text-messages">FTC: How to Recognize and Report Spam Text Messages</a></li><li><a href="https://www.uspis.gov/news/scam-article/smishing-package-tracking-text-scams">U.S. Postal Inspection Service: Smishing</a></li><li><a href="https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts">FCC: Stop Unwanted Robocalls and Texts</a></li><li><a href="https://www.cisa.gov">CISA: Phishing Guidance</a></li></ul>
          <p><em>Last updated: August 1, 2026. Scam tactics change constantly. If you spot something we should add, email info@scambomb.com.</em></p>
        </div>

        <footer className="mt-12 pt-8 border-t border-white/10"><Link href="/blog" className="text-yellow-300 hover:text-yellow-400 underline underline-offset-4">← Back to all posts</Link></footer>
      </article>
    </div>
  )
}
