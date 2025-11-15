export default function TermsPage() {
  return (
    <div className="bg-[#0B1324] text-white antialiased font-montserrat">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">

        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Terms of Use
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Last updated: November 14, 2025
          </p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">

          <section className="mb-12">
            <p className="text-white/90 leading-relaxed mb-8">
              Welcome to SafeMessage AI ("SafeMessage AI," "we," "us," or "our"). By accessing or using our website (scambomb.com) and our service (app.scambomb.com), you agree to be bound by these Terms of Use ("Terms").
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#F5C84C]">Privacy and Data Handling</h2>
            <div className="space-y-4 text-white/90">
              <p>
                Your privacy is critically important to us. We collect only the bare minimum amount of information required to operate our service. Our privacy practices include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>No storage of submissions:</strong> Any scam messages (text or images) you submit for analysis are not stored on our servers and are not logged in any persistent way.</li>
                <li><strong>No data selling:</strong> We will never sell, trade, or share your personal information or any data from your submissions with third parties for marketing or advertising purposes.</li>
                <li><strong>Anonymous usage:</strong> We use anonymous identifiers (like session-based fingerprints) to prevent abuse and maintain service quality, but we do not track or profile individual users beyond the basic technical level required for this service to function.</li>
                <li><strong>Newsletter opt-in:</strong> When you subscribe to our newsletter, we only collect your email address for the purpose of sending relevant safety tips, and information related to your account.</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#F5C84C]">AI and Machine Learning Disclaimers</h2>
            <div className="space-y-4 text-white/90">
              <p className="font-semibold text-red-300">
                IMPORTANT: SafeMessage AI is powered by artificial intelligence and machine learning models that CAN AND DO MAKE MISTAKES.
              </p>
              <p>
                Our service is designed as a <strong>first line of defense</strong> against online scams and fraudulent messages. It is not infallible, comprehensive, or the final authority on online safety. Our AI system's recommendations are suggestions based on patterns and heuristics, not absolute determinations.
              </p>
              <div className="bg-white/5 rounded-2xl p-6 my-6">
                <h3 className="font-semibold mb-4 text-[#F5C84C]">Key Limitations:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>The AI may occasionally flag legitimate messages as suspicious</li>
                  <li>The AI may sometimes fail to detect sophisticated scams</li>
                  <li>New scam techniques may not be immediately recognized by our system</li>
                  <li>Context-specific factors may influence scam detection accuracy</li>
                </ul>
              </div>
              <p>
                <strong>If you receive a suspicious message but suspect it might be legitimate:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Do not click any links or reply to the suspicious message</strong></li>
                <li><strong>Always verify through a completely different communication channel</strong></li>
                <li>For example: If you receive a suspicious email claiming to be from your bank, call your bank using the phone number on the back of your card or use their official mobile banking app, not the information provided in the suspicious email itself</li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#F5C84C]">Limitations of Liability</h2>
            <div className="space-y-4 text-white/90">
              <p className="font-semibold text-red-300">
                SafeMessage AI cannot be held liable for any decisions you make based on our service's recommendations.
              </p>
              <p>
                This website and service provide suggestions and educational information only. You are ultimately responsible for your own online safety and financial decisions. SafeMessage AI is not a substitute for professional judgment, due diligence, or official verification from legitimate sources.
              </p>
              <p>
                We strive to provide helpful, accurate scam detection, but:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>&bull; We make no warranties about the accuracy or reliability of our AI assessments</li>
                <li>&bull; We cannot guarantee that all scams will be detected</li>
                <li>&bull; We cannot prevent financial loss or identity theft</li>
                <li>&bull; Use of this service does not create any attorney-client or fiduciary relationship</li>
                <li>&bull; We are not liable for any direct, indirect, incidental, consequential, or punitive damages</li>
              </ul>
              <p className="mt-6">
                We provide SafeMessage AI in good faith to help protect people from online scams. Our service represents our best effort to make the internet safer for everyone, but we cannot accept responsibility for the limitations of artificial intelligence technology.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#F5C84C]">Acceptance of These Terms</h2>
            <div className="space-y-4 text-white/90">
              <p>
                By accessing this website (scambomb.com) or using the SafeMessage AI service at app.scambomb.com, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
              </p>
              <p>
                If you do not agree to these terms, please discontinue use of our website and service immediately.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#F5C84C]">Contact Information</h2>
            <div className="space-y-4 text-white/90">
              <p>
                If you have questions about these Terms of Use or our service, please contact us:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email: Contact form on our website</li>
                <li>Mailing Address: As listed in our Privacy Policy (may be requested via the contact form)</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#F5C84C]">Changes to Terms</h2>
            <div className="space-y-4 text-white/90">
              <p>
                We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting on this website. Your continued use of our service after changes are posted constitutes acceptance of the modified terms.
              </p>
            </div>
          </section>

          <section className="border-t border-white/20 pt-8 mt-16">
            <p className="text-center text-white/60">
              Thank you for using SafeMessage AI. We hope our service helps keep you safer online.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
