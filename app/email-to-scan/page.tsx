export default function EmailToScanPage() {
  const brandYellow = "#F5C84C";

  return (
    <div className="bg-[#0B1324] text-white antialiased font-montserrat">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">

        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            ScamBomb Email-to-Scan:<br/>
            <span style={{ color: brandYellow }}>Get AI Analysis Delivered to Your Inbox</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Forward suspicious emails directly from your inbox and receive professional AI-powered scam analysis delivered right back to you.
          </p>
        </section>

        {/* Main Content */}
        <section className="prose prose-lg prose-invert max-w-none">

          {/* Intro */}
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold mb-6" style={{ color: brandYellow }}>The Magic of Email Forwarding</h2>
            <p className="text-lg text-white/90 leading-relaxed">
              ScamBomb's email-to-scan feature lets you forward suspicious emails directly from your inbox and receive professional AI-powered scam analysis delivered right back to you. No app needed, no website visits required - just forward and forget!
            </p>
          </div>

          {/* How It Works */}
          <div className="bg-white/5 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: brandYellow }}>How It Works (Super Simple)</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4" style={{ color: brandYellow }}>Step 1: Forward Any Suspicious Email</h3>
              <ul className="space-y-2 text-white/90 ml-4">
                <li>• Open a suspicious email in Gmail, Outlook, or any email client</li>
                <li>• Click "Forward" (usually looks like an arrow)</li>
                <li>• Send it to: <code className="bg-black/30 px-2 py-1 rounded" style={{ color: brandYellow }}>scam@scambomb.com</code></li>
                <li>• That's it! No subject line changes needed.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4" style={{ color: brandYellow }}>Step 2: AI Analysis Happens Automatically</h3>
              <ul className="space-y-2 text-white/90 ml-4">
                <li>• Our system receives your forwarded email instantly</li>
                <li>• Advanced AI analyzes the sender, subject, and content</li>
                <li>• Detects scam patterns, urgency tactics, and red flags</li>
                <li>• Takes about 10-15 seconds</li>
              </ul>
            </div>

            <div className="mb-0">
              <h3 className="text-xl font-semibold mb-4" style={{ color: brandYellow }}>Step 3: Get Results in Your Inbox</h3>
              <ul className="space-y-2 text-white/90 ml-4">
                <li>• Receive a detailed analysis email from ScamBomb</li>
                <li>• Clear verdict: SAFE ✅, UNSAFE 🚨, or UNKNOWN ⚠️</li>
                <li>• Threat level score (0-100%)</li>
                <li>• Step-by-step explanation in plain English</li>
                <li>• Specific next-action recommendations</li>
              </ul>
            </div>
          </div>

          {/* Real-World Example */}
          <div className="bg-white/5 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: brandYellow }}>Real-World Example</h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3" style={{ color: brandYellow }}>You Forward This Email:</h3>
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 font-mono text-sm">
                <div className="mb-2"><strong>Subject:</strong> URGENT: Your Bank Account Suspended</div>
                <div className="mb-2"><strong>From:</strong> security@bankofamerica-support.com</div>
                <div>Your account has been temporarily suspended due to suspicious activity.</div>
                <div>Click here immediately to verify: [fake-link]</div>
              </div>
            </div>

            <div className="mb-0">
              <h3 className="text-lg font-semibold mb-3" style={{ color: brandYellow }}>ScamBomb Replies With:</h3>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 font-mono text-sm">
                <div className="mb-2 font-bold text-xl" style={{ color: brandYellow }}>🚨 SCAMBOMB EMAIL ANALYSIS COMPLETE 🚨</div>
                <div className="mb-2"><strong>SCAM VERDICT:</strong> 🚨 UNSAFE</div>
                <div className="mb-2"><strong>Threat Level:</strong> 92%</div>
                <div className="mb-2"><strong>ANALYSIS DETAILS:</strong></div>
                <div className="ml-4">- Sender domain doesn't match official Bank of America</div>
                <div className="ml-4">- Creates false urgency ("immediately")</div>
                <div className="ml-4">- Links to unverified website</div>
                <div className="ml-4">- Requests action outside official banking app</div>
                <div className="mt-2"><strong>NEXT STEPS:</strong></div>
                <div className="ml-4">- Don't click the link. Open your bank's official website or app directly.</div>
                <div className="ml-4">- Call the number on the back of your card if concerned.</div>
                <div className="ml-4">- Report to: https://reportfraud.ftc.gov/</div>
              </div>
            </div>
          </div>

          {/* Why You'll Love This Feature */}
          <div className="bg-white/5 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: brandYellow }}>Why You'll Love This Feature</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: brandYellow }}>⚡ Zero Learning Curve</h3>
                <ul className="space-y-1 text-white/90 text-sm">
                  <li>• Works with any email client (Gmail, Outlook, Apple Mail, etc.)</li>
                  <li>• No special setup or configuration</li>
                  <li>• Same forwarding process you already know</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: brandYellow }}>🔒 Complete Privacy</h3>
                <ul className="space-y-1 text-white/90 text-sm">
                  <li>• Your forwarded emails are processed instantly and not stored</li>
                  <li>• Analysis results emailed directly to you</li>
                  <li>• No account creation or personal information required</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: brandYellow }}>🎯 Expert-Level Detection</h3>
                <ul className="space-y-1 text-white/90 text-sm">
                  <li>• Powered by GPT-4o-mini AI trained on millions of scam patterns</li>
                  <li>• Catches sophisticated phishing attempts</li>
                  <li>• Identifies subtle red flags humans might miss</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: brandYellow }}>📧 Perfect for Family & Friends</h3>
                <ul className="space-y-1 text-white/90 text-sm">
                  <li>• Forward suspicious emails from elderly parents</li>
                  <li>• Help friends check business emails</li>
                  <li>• Share analysis results with one click</li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold mb-3" style={{ color: brandYellow }}>🕒 Saves Precious Time</h3>
                <ul className="space-y-1 text-white/90 text-sm">
                  <li>• No need to copy-paste email content</li>
                  <li>• No switching between apps or websites</li>
                  <li>• Get comprehensive analysis while you continue working</li>
                </ul>
              </div>
            </div>
          </div>

          {/* When to Use It */}
          <div className="bg-white/5 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: brandYellow }}>When to Use It</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: brandYellow }}>Perfect For:</h3>
                <ul className="space-y-1 text-white/90 text-sm">
                  <li>• Suspicious bank or financial emails</li>
                  <li>• "You've won a prize" messages</li>
                  <li>• Urgent account verification requests</li>
                  <li>• Password reset emails from unknown senders</li>
                  <li>• Any message creating fear or pressure</li>
                  <li>• Emails with unexpected attachments or links</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: brandYellow }}>Especially Useful For:</h3>
                <ul className="space-y-1 text-white/90 text-sm">
                  <li>• Seniors who want to check emails safely</li>
                  <li>• Busy professionals screening business communications</li>
                  <li>• Anyone helping family members with tech support</li>
                  <li>• Organizations protecting employees from phishing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pro Tips */}
          <div className="bg-white/5 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: brandYellow }}>Pro Tips</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: brandYellow }}>📨 Gmail Setup (One-Time)</h3>
                <ul className="space-y-1 text-white/90 text-sm">
                  <li>• In Gmail: Settings → See all settings → Accounts and Import</li>
                  <li>• Add <code className="bg-black/30 px-1 rounded" style={{ color: brandYellow }}>scam@scambomb.com</code> as a forwarding address</li>
                  <li>• Create a filter to auto-forward suspicious emails</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: brandYellow }}>🏷️ Organization Hacks</h3>
                <ul className="space-y-1 text-white/90 text-sm">
                  <li>• Use Gmail labels to tag suspicious emails</li>
                  <li>• Create canned responses for common scam types</li>
                  <li>• Set up rules to highlight analysis emails</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: brandYellow }}>🔄 Batch Processing</h3>
                <ul className="space-y-1 text-white/90 text-sm">
                  <li>• Forward multiple suspicious emails at once</li>
                  <li>• Each gets individual analysis</li>
                  <li>• Results arrive as separate emails</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: brandYellow }}>📱 Mobile Friendly</h3>
                <ul className="space-y-1 text-white/90 text-sm">
                  <li>• Forward from your phone's email app</li>
                  <li>• Receive analysis on any device</li>
                  <li>• Works with iOS Mail, Gmail app, Outlook mobile</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6" style={{ color: brandYellow }}>Stay Safe, Stay Smart</h2>
            <p className="text-white/90 mb-8 leading-relaxed">
              ScamBomb's email-to-scan feature transforms every suspicious email into a learning opportunity. Instead of wondering "Is this safe?", you get definitive answers with actionable guidance. Forward once, know forever - your digital safety companion that fits right in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`https://app.scambomb.com/?safe_source=true&SBID=${crypto.randomUUID()}`}
                className="inline-block rounded-2xl px-8 py-4 font-semibold text-lg bg-[#F5C84C] text-[#0B1324] hover:bg-[#F5C84C]/90 transition-colors"
              >
                Try ScamBomb Now
              </a>
              <div className="text-sm text-white/70">
                <strong>Ready to try it?</strong> Forward any suspicious email to <code className="bg-black/30 px-2 py-1 rounded" style={{ color: brandYellow }}>scam@scambomb.com</code> and see the magic happen! ✨
              </div>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}
