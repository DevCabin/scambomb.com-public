import React from 'react';

export const metadata = {
  title: 'ScamBomb Extension Privacy Policy',
  description: 'Privacy policy for the ScamBomb Chrome extension - AI-powered email scam detection',
};

export default function ExtensionPrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-8">
            <h1 className="text-3xl font-bold text-white text-center">
              ScamBomb Extension Privacy Policy
            </h1>
            <p className="text-blue-100 text-center mt-2">
              Last updated: January 8, 2026
            </p>
          </div>

          <div className="px-6 py-8">
            <div className="prose prose-lg max-w-none">

              <p className="text-gray-600 mb-8">
                This privacy policy describes how the ScamBomb Chrome extension ("Extension") collects, uses, and protects your information. This policy is separate from our main website privacy policy and applies only to the Extension.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Local Data (Stored on Your Device)</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Scan usage statistics (number of emails scanned)</li>
                <li>User preferences and settings</li>
                <li>Extension state and configuration</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Data Sent to Our Servers</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Email content you choose to scan (temporarily processed, not stored)</li>
                <li>Anonymous usage analytics (optional, can be disabled)</li>
                <li>Error reports (anonymous crash data to improve stability)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>

              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Email Analysis:</strong> To provide AI-powered scam detection when you scan emails</li>
                <li><strong>Service Improvement:</strong> Anonymous analytics to improve extension performance and features</li>
                <li><strong>Security:</strong> Error reporting to identify and fix technical issues</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Data Storage and Retention</h2>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Local Storage</h3>
              <p className="text-gray-600 mb-4">
                Usage statistics and preferences are stored locally on your device using Chrome's storage API. This data remains on your device and is not transmitted to our servers unless you enable optional analytics.
              </p>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Server Storage</h3>
              <p className="text-gray-600 mb-4">
                Email content sent for analysis is temporarily processed and immediately discarded. We do not store the content of emails you scan. Anonymous analytics data is retained for up to 2 years to improve our services.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Sharing and Third Parties</h2>

              <p className="text-gray-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share anonymized, aggregated data for analytical purposes, but this data cannot be used to identify individual users.
              </p>

              <p className="text-gray-600 mb-6">
                The Extension uses the following third-party services:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>OpenAI:</strong> For AI-powered email analysis (data is processed securely and not stored)</li>
                <li><strong>Stripe:</strong> For premium subscription processing (if you upgrade)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Rights and Choices</h2>

              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Data Deletion:</strong> You can uninstall the extension to remove all local data</li>
                <li><strong>Analytics Opt-out:</strong> Disable optional analytics in extension settings</li>
                <li><strong>Account Data:</strong> Contact us to request deletion of any account-associated data</li>
                <li><strong>Access Rights:</strong> Request information about what data we have associated with your account</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Data Security</h2>

              <p className="text-gray-600 mb-6">
                We implement appropriate technical and organizational measures to protect your data:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>All data transmission is encrypted using HTTPS</li>
                <li>Email content is processed in memory and immediately discarded</li>
                <li>Access to our systems is restricted and monitored</li>
                <li>Regular security audits and updates</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Children's Privacy</h2>

              <p className="text-gray-600 mb-6">
                The Extension is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to This Policy</h2>

              <p className="text-gray-600 mb-6">
                We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact Us</h2>

              <p className="text-gray-600 mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> privacy@scambomb.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Website:</strong> <a href="https://scambomb.com" className="text-blue-600 hover:text-blue-800">scambomb.com</a>
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> ScamBomb Privacy Team
                </p>
              </div>

              <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-400">
                <p className="text-blue-700">
                  <strong>Extension-Specific Note:</strong> This privacy policy covers only the ScamBomb Chrome extension. For information about our web application, please see our main privacy policy at <a href="/privacy" className="text-blue-600 hover:text-blue-800">scambomb.com/privacy</a>.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}