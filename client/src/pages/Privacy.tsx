import React from "react";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background-dark text-text-primary">
      {/* Header Spacer */}
      <div className="h-20" />

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center text-accent-cyan hover:text-accent-cyan/80 transition-colors mb-8"
        >
          ← Back to Home
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Privacy Policy
        </h1>
        <p className="text-text-secondary mb-8">
          Last Updated: November 16, 2025
        </p>

        {/* Content */}
        <div className="prose prose-invert prose-cyan max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              1. Introduction
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Noderr Protocol ("Noderr", "we", "us", or "our") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              use our website, decentralized application (dApp), and related
              services (collectively, the "Services").
            </p>
            <p className="text-text-secondary leading-relaxed">
              By using the Services, you consent to the data practices described
              in this Privacy Policy. If you do not agree with this Privacy
              Policy, please do not use the Services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              2. Information We Collect
            </h2>
            
            <h3 className="text-xl font-semibold mb-3 text-text-primary">
              2.1 Information You Provide
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              We may collect information that you voluntarily provide when using
              the Services, including:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
              <li>Email address (for waitlist, newsletters, or support)</li>
              <li>Wallet address (when you connect your Web3 wallet)</li>
              <li>Communication preferences</li>
              <li>Feedback, questions, or support requests</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-text-primary">
              2.2 Automatically Collected Information
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              When you access the Services, we may automatically collect certain
              information, including:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
              <li>IP address and geolocation data</li>
              <li>Browser type and version</li>
              <li>Device information (type, operating system, screen resolution)</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring website or source</li>
              <li>Clickstream data and user interactions</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-text-primary">
              2.3 Blockchain Data
            </h3>
            <p className="text-text-secondary leading-relaxed">
              When you interact with the Noderr Protocol smart contracts, your
              transactions are recorded on the blockchain. This data is public
              and immutable, and includes your wallet address, transaction
              amounts, and timestamps. We do not control this data, as it is
              inherent to blockchain technology.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              3. How We Use Your Information
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li><strong>Provide and maintain the Services:</strong> To operate, maintain, and improve the platform</li>
              <li><strong>Communicate with you:</strong> To send updates, announcements, and respond to inquiries</li>
              <li><strong>Analyze usage:</strong> To understand how users interact with the Services and optimize performance</li>
              <li><strong>Prevent fraud:</strong> To detect and prevent fraudulent or malicious activity</li>
              <li><strong>Comply with legal obligations:</strong> To comply with applicable laws and regulations</li>
              <li><strong>Marketing:</strong> To send promotional materials (with your consent, where required)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              4. How We Share Your Information
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We do not sell your personal information. We may share your
              information in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li><strong>Service Providers:</strong> With third-party vendors who assist us in operating the Services (e.g., hosting, analytics, customer support)</li>
              <li><strong>Legal Requirements:</strong> When required by law, subpoena, or court order</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly consent to sharing your information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              5. Cookies and Tracking Technologies
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your
              experience on the Services. Cookies are small data files stored on
              your device that help us:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Improve website performance and functionality</li>
            </ul>
            <p className="text-text-secondary leading-relaxed">
              You can control cookies through your browser settings. However,
              disabling cookies may affect the functionality of the Services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              6. Third-Party Services
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              The Services may integrate with third-party services, including:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
              <li><strong>Web3 Wallets:</strong> MetaMask, WalletConnect, and other wallet providers</li>
              <li><strong>Analytics:</strong> Google Analytics, Plausible, or similar tools</li>
              <li><strong>Blockchain Infrastructure:</strong> Infura, Alchemy, or similar RPC providers</li>
            </ul>
            <p className="text-text-secondary leading-relaxed">
              These third-party services have their own privacy policies, and we
              are not responsible for their practices. We encourage you to review
              their privacy policies before using them.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              7. Data Security
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We implement reasonable security measures to protect your
              information from unauthorized access, disclosure, alteration, or
              destruction. However, no method of transmission over the internet
              or electronic storage is 100% secure.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong>You are responsible for maintaining the security of your
              wallet and private keys.</strong> We do not have access to your
              private keys and cannot recover them if lost.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              8. Data Retention
            </h2>
            <p className="text-text-secondary leading-relaxed">
              We retain your information for as long as necessary to provide the
              Services, comply with legal obligations, resolve disputes, and
              enforce our agreements. When your information is no longer needed,
              we will securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              9. Your Rights and Choices
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Depending on your jurisdiction, you may have the following rights:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a structured format</li>
            </ul>
            <p className="text-text-secondary leading-relaxed">
              To exercise these rights, please contact us at privacy@noderr.xyz.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              10. International Data Transfers
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Your information may be transferred to and processed in countries
              other than your own. These countries may have different data
              protection laws. By using the Services, you consent to the transfer
              of your information to these countries.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              11. Children's Privacy
            </h2>
            <p className="text-text-secondary leading-relaxed">
              The Services are not intended for individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              we become aware that we have collected information from a child, we
              will delete it promptly.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              12. GDPR Compliance (EU Users)
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              If you are located in the European Economic Area (EEA), you have
              additional rights under the General Data Protection Regulation
              (GDPR), including:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
              <li>The right to access your personal data</li>
              <li>The right to rectification of inaccurate data</li>
              <li>The right to erasure ("right to be forgotten")</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
            </ul>
            <p className="text-text-secondary leading-relaxed">
              Our legal basis for processing your data includes your consent,
              performance of a contract, compliance with legal obligations, and
              our legitimate interests.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              13. CCPA Compliance (California Users)
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              If you are a California resident, you have rights under the
              California Consumer Privacy Act (CCPA), including:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
              <li>The right to know what personal information we collect</li>
              <li>The right to delete your personal information</li>
              <li>The right to opt-out of the sale of your personal information (we do not sell your data)</li>
              <li>The right to non-discrimination for exercising your rights</li>
            </ul>
            <p className="text-text-secondary leading-relaxed">
              To exercise these rights, please contact us at privacy@noderr.xyz.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              14. Changes to This Privacy Policy
            </h2>
            <p className="text-text-secondary leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated "Last Updated" date.
              Your continued use of the Services after any changes constitutes
              your acceptance of the revised Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              15. Contact Information
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us at:
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong>Email:</strong> privacy@noderr.xyz<br />
              <strong>Website:</strong> https://www.noderr.xyz<br />
              <strong>Support:</strong> https://t.me/NoderrSupp
            </p>
          </section>

          {/* Notice Box */}
          <div className="bg-accent-cyan/10 border border-accent-cyan/30 rounded-lg p-6 mt-12">
            <p className="text-sm text-text-secondary">
              <strong className="text-accent-cyan">⚠️ DRAFT NOTICE:</strong> This
              Privacy Policy document is a draft prepared by AI and has not been
              reviewed by a legal professional. Before publishing, it must be
              reviewed and approved by a qualified attorney and privacy expert
              licensed in your jurisdiction. Additional clauses may be required
              based on your specific data practices and applicable laws.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
