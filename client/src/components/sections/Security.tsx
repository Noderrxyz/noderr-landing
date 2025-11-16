import { motion } from 'framer-motion';
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: 'Zero-Knowledge Proofs',
    description: 'Privacy-preserving validation ensures node operations are verified without exposing sensitive data.',
  },
  {
    icon: Lock,
    title: 'Smart Contract Security',
    description: 'Audited contracts on Base L2 with multi-sig governance for protocol upgrades.',
  },
  {
    icon: Eye,
    title: 'Transparent Trust Scores',
    description: 'On-chain reputation system provides verifiable performance metrics for all nodes.',
  },
  {
    icon: CheckCircle,
    title: 'Testnet Proven',
    description: 'Extensively tested on Base Sepolia testnet with active node operators.',
  },
];

const auditors = [
  { name: 'Base L2', status: 'Deployed' },
  { name: 'Testnet Live', status: 'Active' },
  { name: 'Bug Bounty', status: 'Active' },
];

export function Security() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.65_0.2_210_/_0.05),transparent_70%)]" />
      
      <div className="container max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Security First</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Built with <span className="text-gradient">Security</span> at the Core
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Security and transparency are foundational. ZK proofs, verifiable on-chain activity, and community governance ensure trust.
          </p>
        </motion.div>

        {/* Audit badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-16"
        >
          {auditors.map((auditor, index) => (
            <motion.div
              key={auditor.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">{auditor.name}</div>
                <div className="text-sm text-muted-foreground">{auditor.status}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Security features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bug bounty CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center"
        >
          <h3 className="text-2xl font-bold mb-3">Bug Bounty Program</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Help us keep Noderr secure. Report vulnerabilities and earn up to $100,000 in rewards.
          </p>
          <button className="px-8 py-3 bg-primary hover:bg-primary/90 rounded-xl font-semibold transition-all hover:scale-105">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
