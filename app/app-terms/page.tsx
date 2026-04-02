import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ScamBomb iPhone App Terms of Use',
  description:
    'Terms of Use for the ScamBomb iPhone app, including AI limitations, subscription terms, acceptable use, and Apple-specific terms.',
};

export default function AppTermsPage() {
  return (
    <div className="bg-[#0B1324] text-white antialiased font-montserrat">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-14">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            ScamBomb iPhone App Terms of Use
          </h1>
          <p className="text-lg text-white/80">Effective date: April 2, 2026</p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <section className="mb-10">
            <p className="text-white/90 leading-relaxed">
              These Terms of Use ("Terms") govern your use of the ScamBomb mobile application for iPhone and iPad (the "App"), plus any
              related features, content, and services provided by ScamBomb ("ScamBomb," "we," "us," or "our"). By downloading,
              accessing, or using the App, you agree to these Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#F5C84C]">1) Who May Use the App</h2>
            <ul className="list-disc list-inside space-y-2 text-white/90 ml-4">
              <li>You must be at least 13 years old to use the App.</li>
              <li>If you are under the age of majority where you live, you must use the App with parent/guardian permission.</li>
              <li>You represent that your use of the App is lawful in your jurisdiction.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#F5C84C]">2) License Grant</h2>
            <p className="text-white/90">
              Subject to these Terms, ScamBomb grants you a limited, non-exclusive, non-transferable, revocable license to use the App on
              Apple-branded products that you own or control and as permitted by the Apple Media Services Terms and Conditions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#F5C84C]">3) Subscriptions, Billing, and Auto-Renewals</h2>
            <ul className="list-disc list-inside space-y-2 text-white/90 ml-4">
              <li>Some features may require a paid subscription.</li>
              <li>Subscription purchases made through Apple are billed by Apple through your App Store account.</li>
              <li>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing period.</li>
              <li>You can manage or cancel subscriptions in your Apple ID account settings.</li>
              <li>Pricing may change in the future to the extent allowed by applicable law and platform rules.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#F5C84C]">4) AI-Generated Guidance (Important Disclaimer)</h2>
            <p className="font-semibold text-red-300 mb-3">
              ScamBomb uses AI and machine learning and may provide incorrect, incomplete, delayed, or outdated results.
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/90 ml-4">
              <li>The App is an educational and decision-support tool, not a guarantee of scam prevention.</li>
              <li>The App may flag legitimate messages as risky, or fail to detect certain scams.</li>
              <li>You are solely responsible for your actions, decisions, and financial outcomes.</li>
              <li>Always verify urgent or sensitive requests through trusted, independent channels.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#F5C84C]">5) No Legal, Financial, or Emergency Services</h2>
            <p className="text-white/90">
              ScamBomb does not provide legal advice, financial advice, cybersecurity incident response services, or emergency services. If
              you believe you are in immediate danger or are the victim of a crime, contact local emergency services and/or appropriate
              authorities.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#F5C84C]">6) User Content and Permissions</h2>
            <p className="text-white/90 mb-3">
              You may submit text, screenshots, and other content to receive analysis. You must have the right to submit that content.
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/90 ml-4">
              <li>You are responsible for content you submit.</li>
              <li>You agree not to submit unlawful, harmful, infringing, or abusive content.</li>
              <li>
                You grant ScamBomb a limited license to process submitted content only as needed to operate, maintain, and improve the App.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#F5C84C]">7) Privacy</h2>
            <p className="text-white/90">
              Your use of the App is also governed by our privacy practices. By using the App, you acknowledge and agree that we may collect
              and use data as described in our applicable Privacy Policy and in-app disclosures.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#F5C84C]">8) Acceptable Use Restrictions</h2>
            <p className="text-white/90 mb-3">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 text-white/90 ml-4">
              <li>Use the App in violation of law or regulation.</li>
              <li>Reverse engineer, decompile, or attempt to extract source code except where legally permitted.</li>
              <li>Interfere with App security, integrity, or performance.</li>
              <li>Use automated means to scrape, overload, or abuse the service.</li>
              <li>Use the App to harass, defraud, or harm others.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#F5C84C]">9) Termination</h2>
            <p className="text-white/90">
              We may suspend or terminate access to the App at any time if we reasonably believe you violated these Terms, created risk or
              legal exposure for ScamBomb, or misused the service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#F5C84C]">10) Disclaimers and Limitation of Liability</h2>
            <p className="text-white/90 mb-3">
              To the maximum extent permitted by law, the App is provided "as is" and "as available," without warranties of any kind.
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/90 ml-4">
              <li>We do not warrant uninterrupted, secure, or error-free operation.</li>
              <li>We do not guarantee scam detection accuracy or specific outcomes.</li>
              <li>
                To the fullest extent permitted by law, ScamBomb is not liable for indirect, incidental, special, consequential, exemplary,
                or punitive damages, or any loss of data, profits, goodwill, identity, or funds.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#F5C84C]">11) Indemnity</h2>
            <p className="text-white/90">
              You agree to defend, indemnify, and hold harmless ScamBomb and its affiliates, officers, employees, and agents from claims,
              liabilities, losses, and expenses arising out of your misuse of the App, your content, or your violation of these Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#F5C84C]">12) Apple App Store Terms (iOS-specific)</h2>
            <ul className="list-disc list-inside space-y-2 text-white/90 ml-4">
              <li>These Terms are between you and ScamBomb, not Apple. Apple is not responsible for the App or its content.</li>
              <li>Apple has no obligation to provide maintenance or support services for the App.</li>
              <li>
                In the event of any failure of the App to conform to an applicable warranty, you may notify Apple, and Apple may refund
                the purchase price, if any, in accordance with Apple policy.
              </li>
              <li>
                To the maximum extent permitted by law, Apple has no other warranty obligation with respect to the App.
              </li>
              <li>
                Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce these Terms against you.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#F5C84C]">13) Changes to These Terms</h2>
            <p className="text-white/90">
              We may update these Terms from time to time. If we make material changes, we will update the effective date and may provide
              additional notice in the App or on our website. Continued use of the App after updates means you accept the revised Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#F5C84C]">14) Contact</h2>
            <p className="text-white/90">
              Questions about these Terms? Contact us through the contact form at scambomb.com/contact.
            </p>
          </section>

          <section className="border-t border-white/20 pt-8 mt-14">
            <p className="text-center text-white/65">Thank you for using ScamBomb to help spot scams faster.</p>
          </section>
        </div>
      </div>
    </div>
  );
}