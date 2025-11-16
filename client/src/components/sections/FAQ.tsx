import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What is TrustFingerprint™?',
    answer: 'TrustFingerprint™ is our proprietary on-chain reputation system that tracks node performance, uptime, and reliability over time. It\'s calculated using zero-knowledge proofs to ensure privacy while providing verifiable trust scores. Higher TrustScores unlock tier upgrades and increased rewards.',
  },
  {
    question: 'How much NODR do I need to start?',
    answer: 'You can start with as little as 10,000 NODR for a Micro Node. Validator requires 50k, Guardian 100k, and Oracle 500k NODR. For testnet, you can get free tokens from the faucet (1,000 NODR every 24 hours).',
  },
  {
    question: 'Can I upgrade my node tier later?',
    answer: 'Yes! You can upgrade from Micro → Validator → Guardian → Oracle by staking additional NODR and meeting the TrustScore requirements (0.60 for Validator, 0.75 for Guardian, 0.90 for Oracle). Guardian and Oracle upgrades require governance approval.',
  },
  {
    question: 'What happens if my node goes offline?',
    answer: 'Brief downtime is acceptable, but extended outages will lower your TrustScore and may result in reduced rewards. Testnet has no slashing penalties, but mainnet will implement slashing for malicious behavior or excessive downtime.',
  },
  {
    question: 'Do I need DevOps experience?',
    answer: 'No! Noderr offers one-click deployment on Base L2. You just need to stake NODR, deploy your node, and the system handles the rest. Automated monitoring and updates keep your node running smoothly.',
  },
  {
    question: 'How are rewards calculated?',
    answer: 'Rewards are based on your tier (1x for Micro, 1.5x for Validator, 2x for Guardian, 3x for Oracle) multiplied by your TrustScore. Higher performance and longer uptime earn higher rewards. Exact APY varies with network activity.',
  },
  {
    question: 'What is the testnet timeline?',
    answer: 'Testnet is currently live on Base Sepolia. We\'re running for at least 3-6 months to test all features, gather feedback, and build a strong operator community before mainnet launch.',
  },
  {
    question: 'Is there any risk?',
    answer: 'Testnet uses test tokens with no real value, so there\'s no financial risk. Mainnet will implement slashing for malicious behavior, but honest operators who maintain uptime have minimal risk. Your stake remains yours unless you violate protocol rules.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <div className="container max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about running a Noderr node
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl bg-card border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-card/50 transition-colors"
              >
                <span className="text-lg font-semibold text-foreground pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://docs.noderr.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-card border border-border hover:border-primary/30 rounded-xl font-semibold transition-all hover:scale-105"
            >
              Read the Docs
            </a>
            <a
              href="https://discord.gg/noderr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary hover:bg-primary/90 rounded-xl font-semibold transition-all hover:scale-105"
            >
              Join Discord
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
