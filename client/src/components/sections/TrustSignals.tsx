import { motion } from 'framer-motion';
import { Shield, Fingerprint, Vote, Lock } from 'lucide-react';

const signals = [
  {
    icon: Shield,
    title: 'Zero-Knowledge Proofs',
    description: 'Privacy-preserving verification ensures node operations are validated without exposing sensitive data.',
  },
  {
    icon: Fingerprint,
    title: 'Trust Fingerprint',
    description: 'Unique reputation system tracks node performance and reliability over time for transparent accountability.',
  },
  {
    icon: Vote,
    title: 'DAO Governance',
    description: 'Community-driven decision making with weighted voting based on stake and trust scores.',
  },
  {
    icon: Lock,
    title: 'Automated Vaults',
    description: 'Smart contract-powered vaults automatically optimize yield strategies across DeFi protocols.',
  },
];

export function TrustSignals() {
  return (
    <section className="section-padding bg-card/30 backdrop-blur-sm">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <motion.div
                key={signal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {signal.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {signal.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
