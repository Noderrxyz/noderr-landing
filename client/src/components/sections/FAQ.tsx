import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { GITBOOK_URL } from '@/const';

const faqs = [
  {
    question: 'What is TrustFingerprint™?',
    answer: 'TrustFingerprint™ is the on-chain reputation system that tracks node performance, uptime, and reliability over time. It is calculated using zero-knowledge proofs for privacy and verifiable trust scores. A higher TrustFingerprint™ score unlocks tier upgrades and increased rewards.',
  },
  {
    question: 'How much NODR do I need to start?',
    answer: 'You can run a Micro Node with no minimum stake. For higher tiers, the requirements are: Validator (50,000 NODR), Guardian (100,000 NODR), and Oracle (500,000 NODR). You can get free tokens from the faucet to experiment with all tiers on the testnet.',
  },
  {
    question: 'Can I upgrade my node tier later?',
    answer: 'Yes. You can upgrade from Micro → Validator → Guardian → Oracle by meeting the stake and TrustFingerprint™ requirements for each tier. Guardian and Oracle roles require election by peers through nomination and voting.',
  },
  {
    question: 'What happens if my node goes offline?',
    answer: 'Brief downtime is acceptable, but extended outages will lower your TrustFingerprint™ score and may result in reduced rewards. While there are no financial penalties on the testnet, mainnet will implement slashing for malicious behavior or excessive downtime to maintain network security.',
  },
  {
    question: 'How are rewards calculated?',
    answer: 'Rewards are based on your tier, your stake, and your TrustFingerprint™ score. Micro Nodes earn 5-12% APY, while higher tiers earn 25-35% APY plus additional stipends and profit sharing. Higher performance and longer uptime earn higher rewards.',
  },
  {
    question: 'What is the purpose of the testnet?',
    answer: 'The testnet is a live environment on Base Sepolia for the community to test all protocol features, from running a node to participating in governance. It allows us to gather feedback, build a strong operator community, and promote stability before the mainnet launch.',
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
            Everything you need to know about participating in the Noderr network.
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
              href={GITBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-card border border-border hover:border-primary/30 rounded-xl font-semibold transition-all hover:scale-105"
            >
              Read the Docs
            </a>
            <a
              href="https://discord.com/invite/noderr"
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
