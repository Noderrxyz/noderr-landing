import React from "react";
import { Link } from "react-router-dom";

export default function Terms() {
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
          Terms of Service
        </h1>
        <p className="text-text-secondary mb-8">
          Last Updated: November 16, 2025
        </p>

        {/* Content */}
        <div className="prose prose-invert prose-cyan max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              1. Acceptance of Terms
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              By accessing or using the Noderr Protocol platform, website, or
              any related services (collectively, the "Services"), you agree to
              be bound by these Terms of Service ("Terms"). If you do not agree
              to these Terms, you may not access or use the Services.
            </p>
            <p className="text-text-secondary leading-relaxed">
              These Terms constitute a legally binding agreement between you and
              Noderr Protocol ("Noderr", "we", "us", or "our"). We reserve the
              right to modify these Terms at any time, and such modifications
              will be effective immediately upon posting. Your continued use of
              the Services following any changes constitutes your acceptance of
              the revised Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              2. Description of Services
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Noderr Protocol is a decentralized autonomous trading system that
              generates sustainable, real-world yields through a dual-component
              Autonomous Trading Engine (ATE). The Services include:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
              <li>Access to the Noderr Protocol decentralized application (dApp)</li>
              <li>Node operation capabilities (Micro Nodes, Validators, Guardians, Oracles)</li>
              <li>Participation in yield-generating vaults</li>
              <li>Access to protocol governance mechanisms</li>
              <li>Documentation and educational resources</li>
            </ul>
            <p className="text-text-secondary leading-relaxed">
              The Services are provided on an "as is" and "as available" basis.
              We make no warranties or representations about the accuracy,
              reliability, or availability of the Services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              3. Eligibility
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              You must be at least 18 years old and have the legal capacity to
              enter into these Terms. By using the Services, you represent and
              warrant that:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li>You are of legal age in your jurisdiction</li>
              <li>You are not located in, or a resident of, any jurisdiction where the Services are prohibited</li>
              <li>You comply with all applicable laws and regulations in your jurisdiction</li>
              <li>You are not on any sanctions list or prohibited from accessing the Services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              4. Risks and Disclaimers
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              <strong>DeFi and cryptocurrency activities involve significant
              risks.</strong> By using the Services, you acknowledge and accept
              the following risks:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
              <li><strong>Market Risk:</strong> Digital assets are highly volatile and may lose value</li>
              <li><strong>Smart Contract Risk:</strong> Smart contracts may contain bugs or vulnerabilities</li>
              <li><strong>Regulatory Risk:</strong> Regulatory changes may affect the Services</li>
              <li><strong>Technology Risk:</strong> Technical failures may result in loss of funds</li>
              <li><strong>Liquidity Risk:</strong> You may not be able to exit positions when desired</li>
            </ul>
            <p className="text-text-secondary leading-relaxed">
              <strong>You may lose all of your invested capital.</strong> Never
              invest more than you can afford to lose. Past performance is not
              indicative of future results.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              5. No Financial Advice
            </h2>
            <p className="text-text-secondary leading-relaxed">
              The Services, including any content, materials, or information
              provided, do not constitute financial, investment, legal, or tax
              advice. You should consult with qualified professionals before
              making any financial decisions. We are not a registered
              investment advisor, broker-dealer, or financial institution.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              6. User Responsibilities
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              As a user of the Services, you are responsible for:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li>Maintaining the security of your wallet and private keys</li>
              <li>Complying with all applicable laws and regulations</li>
              <li>Paying all applicable taxes</li>
              <li>Conducting your own research and due diligence</li>
              <li>Understanding the risks before participating</li>
              <li>Not using the Services for illegal activities</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              7. Prohibited Activities
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li>Use the Services for money laundering, terrorist financing, or other illegal activities</li>
              <li>Attempt to hack, disrupt, or compromise the security of the Services</li>
              <li>Use bots, scripts, or automated tools to manipulate the Services</li>
              <li>Provide false or misleading information</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the intellectual property rights of others</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              8. Intellectual Property
            </h2>
            <p className="text-text-secondary leading-relaxed">
              All content, trademarks, logos, and intellectual property related
              to the Services are owned by Noderr Protocol or its licensors. You
              may not use, copy, modify, or distribute any content without our
              express written permission. The Noderr Protocol software is
              open-source and licensed under the terms specified in the
              repository.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              9. Limitation of Liability
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, NODERR PROTOCOL
              SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR
              REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF
              DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.</strong>
            </p>
            <p className="text-text-secondary leading-relaxed">
              In no event shall our total liability exceed the amount you paid
              to us in the 12 months preceding the claim, or $100 USD, whichever
              is greater.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              10. Indemnification
            </h2>
            <p className="text-text-secondary leading-relaxed">
              You agree to indemnify, defend, and hold harmless Noderr Protocol,
              its affiliates, and their respective officers, directors,
              employees, and agents from any claims, damages, losses,
              liabilities, and expenses (including legal fees) arising from your
              use of the Services or violation of these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              11. Termination
            </h2>
            <p className="text-text-secondary leading-relaxed">
              We reserve the right to suspend or terminate your access to the
              Services at any time, with or without cause, and with or without
              notice. Upon termination, your right to use the Services will
              immediately cease.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              12. Governing Law and Dispute Resolution
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with
              the laws of [JURISDICTION TO BE DETERMINED], without regard to its
              conflict of law provisions.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Any disputes arising from these Terms or the Services shall be
              resolved through binding arbitration in accordance with the rules
              of [ARBITRATION BODY TO BE DETERMINED]. You waive any right to
              participate in a class action lawsuit or class-wide arbitration.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              13. Severability
            </h2>
            <p className="text-text-secondary leading-relaxed">
              If any provision of these Terms is found to be invalid or
              unenforceable, the remaining provisions shall continue in full
              force and effect.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              14. Contact Information
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong>Email:</strong> legal@noderr.xyz<br />
              <strong>Website:</strong> https://www.noderr.xyz<br />
              <strong>Support:</strong> https://t.me/NoderrSupp
            </p>
          </section>

          {/* Notice Box */}
          <div className="bg-accent-cyan/10 border border-accent-cyan/30 rounded-lg p-6 mt-12">
            <p className="text-sm text-text-secondary">
              <strong className="text-accent-cyan">⚠️ DRAFT NOTICE:</strong> This
              Terms of Service document is a draft prepared by AI and has not
              been reviewed by a legal professional. Before publishing, it must
              be reviewed and approved by a qualified attorney licensed in your
              jurisdiction. Placeholders such as [JURISDICTION] and [ARBITRATION
              BODY] must be filled in with appropriate information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
