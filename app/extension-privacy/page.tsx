import React from 'react';

export const metadata = {
  title: 'ScamBomb Extension Privacy Policy',
  description: 'Privacy policy for the ScamBomb Chrome extension - AI-powered email scam detection',
};

export default function ExtensionPrivacyPage() {
  return (
    <div className="bg-[#0B1324] text-white antialiased font-montserrat">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">

        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Extension Privacy Policy
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            How we protect your data while keeping you safe from scams.
          </p>
        </section>

        {/* Main Content */}
        <section className="prose prose-lg prose-invert max-w-none">

          {/* Intro */}
          <div className="mb-12 text-center">
            <p className="text-lg text-white/90 leading-relaxed">
              This privacy policy describes how the ScamBomb Chrome extension collects, uses, and protects your information. This policy is separate from our main website privacy policy and applies only to the Extension.
            </p>
          </div>

          {/* Privacy Sections */}
          <div className="space-y-8">

            <div className="bg-white/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#F5C84C]">1. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-white mb-4">Local Data (Stored on Your Device)</h3>
              <ul className="space-y-2 text-white/90 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#F5C84C] mt-1">•</span>
                  <span>Scan usage statistics (number of emails scanned)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5C84C] mt-1">•</span>
                  <span>User preferences and settings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5C84C] mt-1">•</span>
                  <span>Extension state and configuration</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">Data Sent to Our Servers</h3>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-start gap-3">
                  <span className="text-[#F5C84C] mt-1">•</span>
                  <span>Email content you choose to scan (temporarily processed, not stored)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5C84C] mt-1">•</span>
                  <span>Anonymous usage analytics (optional, can be disabled)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5C84C] mt-1">•</span>
                  <span>Error reports (anonymous crash data to improve stability)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#F5C84C]">2. How We Use Your Information</h2>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <span className="text-[#F5C84C] text-xl">✓</span>
                  <span><strong>Email Analysis:</strong> To provide AI-powered scam detection when you scan emails</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5C84C] text-xl">✓</span>
                  <span><strong>Service Improvement:</strong> Anonymous analytics to improve extension performance and features</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5C84C] text-xl">✓</span>
                  <span><strong>Security:</strong> Error reporting to identify and fix technical issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5C84C] text-xl">✓</span>
                  <span><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#F5C84C]">3. Data Storage and Retention</h2>

              <h3 className="text-xl font-semibold text-white mb-4">Local Storage</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Usage statistics and preferences are stored locally on your device using Chrome's storage API. This data remains on your device and is not transmitted to our servers unless you enable optional analytics.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">Server Storage</h3>
              <p className="text-white/90 leading-relaxed">
                Email content sent for analysis is temporarily processed and immediately discarded. We do not store the content of emails you scan. Anonymous analytics data is retained for up to 2 years to improve our services.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#F5C84C]">4. Data Sharing and Third Parties</h2>

              <p className="text-white/90 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share anonymized, aggregated data for analytical purposes, but this data cannot be used to identify individual users.
              </p>

              <p className="text-white/90 leading-relaxed mb-4">
                The Extension uses the following third-party services:
              </p>

              <ul className="space-y-2 text-white/90">
                <li className="flex items-start gap-3">
                  <span className="text-[#F5C84C] mt-1">•</span>
                  <span><strong>OpenAI:</strong> For AI-powered email analysis (data is processed securely and not stored)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5C84C] mt-1">•</span>
                  <span><strong>Stripe:</strong> For premium subscription processing (if you upgrade)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#F5C84C]">5. Your Rights and Choices</h2>
              <p className="text-white/90 leading-relaxed">
                <strong>Data Deletion:</strong> You can uninstall the extension to remove all local data.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#F5C84C]">6. Data Security</h2>
              <p className="text-white/90 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your data:
              </p>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-start gap-3">
                  <span className="text-[#F5C84C] mt-1">•</span>
                  <span>All data transmission is encrypted using HTTPS</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5C84C] mt-1">•</span>
                  <span>Email content is processed in memory and immediately discarded</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5C84C] mt-1">•</span>
                  <span>Access to our systems is restricted and monitored</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5C84C] mt-1">•</span>
                  <span>Regular security audits and updates</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#F5C84C]">7. Contact Us</h2>

              <p className="text-white/90 leading-relaxed mb-6">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>

              <div className="bg-white/10 rounded-xl p-6">
                <p className="text-white mb-2">
                  <strong className="text-[#F5C84C]">Email:</strong> info@scambomb.com
                </p>
                <p className="text-white mb-2">
                  <strong className="text-[#F5C84C]">Website:</strong> <a href="https://scambomb.com" className="text-[#F5C84C] hover:text-white transition-colors">scambomb.com</a>
                </p>
                <p className="text-white">
                  <strong className="text-[#F5C84C]">Address:</strong> ScamBomb Privacy Team
                </p>
              </div>

              <div className="mt-6 p-4 bg-[#F5C84C]/10 border-l-4 border-[#F5C84C]">
                <p className="text-white/90">
                  <strong className="text-[#F5C84C]">Extension-Specific Note:</strong> This privacy policy covers only the ScamBomb Chrome extension. For information about our web application, please see our main privacy policy at <a href="/term" className="text-[#F5C84C] hover:text-white transition-colors">scambomb.com/term</a>.
                </p>
              </div>
            </div>

          </div>

        </section>

      </div>
    </div>
  );
}
