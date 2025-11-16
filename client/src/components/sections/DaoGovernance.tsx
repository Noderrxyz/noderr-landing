import { motion } from 'framer-motion';
import { Users, Shield, Scale, GitBranch } from 'lucide-react';

const governanceFeatures = [
  {
    icon: Users,
    title: 'Merit-Based Governance',
    description: 'Noderr\'s DAO is a meritocracy, not a plutocracy. Voting power is determined by your TrustFingerprint™ score, not just your token balance, preventing whale domination.',
  },
  {
    icon: Shield,
    title: 'Four-Tiered Node System',
    description: 'Our unique four-tiered system (Micro, Validator, Guardian, Oracle) creates a robust and decentralized governance structure with clear roles and responsibilities.',
  },
  {
    icon: Scale,
    title: 'Oracle-Proposed, DAO-Voted',
    description: 'Oracles propose major protocol changes, which are then voted on by the entire DAO. This ensures expert-led proposals with community consensus.',
  },
];

export function DaoGovernance() {
  return (
    <section id="dao-governance" className="section-padding">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            A DAO Built for <span className="text-gradient">Long-Term Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our governance model is designed to be secure, decentralized, and effective, ensuring the protocol remains aligned with the community\'s best interests.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {governanceFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border text-center"
            >
              <div className="inline-block p-4 rounded-full bg-primary/10 mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
