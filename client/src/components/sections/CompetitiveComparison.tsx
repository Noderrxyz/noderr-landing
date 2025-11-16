import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const features = [
  { name: 'Zero-Knowledge Proofs', noderr: true, traditional: false, competitors: false },
  { name: 'Trust Fingerprint System', noderr: true, traditional: false, competitors: 'partial' },
  { name: 'Multi-Tier Node Architecture', noderr: true, traditional: false, competitors: 'limited' },
  { name: 'DAO Governance', noderr: true, traditional: false, competitors: 'partial' },
  { name: 'Automated Vault Strategies', noderr: true, traditional: false, competitors: true },
  { name: 'Base L2 Integration', noderr: true, traditional: false, competitors: 'varies' },
  { name: 'Decentralized Infrastructure', noderr: true, traditional: false, competitors: 'partial' },
  { name: 'Weighted Voting Power', noderr: true, traditional: false, competitors: false },
];

function FeatureCell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
          <Check className="w-4 h-4 text-primary" />
        </div>
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
          <X className="w-4 h-4 text-destructive" />
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center">
      <span className="text-xs text-muted-foreground capitalize">{value}</span>
    </div>
  );
}

export function CompetitiveComparison() {
  return (
    <section className="section-padding bg-card/20">
      <div className="container max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            How <span className="text-gradient">Noderrrr</span> Compares
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See why node operators choose Noderrrr's decentralized infrastructure.
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="overflow-hidden rounded-2xl border border-border bg-card"
        >
          {/* Table header */}
          <div className="grid grid-cols-4 gap-4 p-6 bg-card/50 border-b border-border">
            <div className="font-semibold text-foreground">Feature</div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <span className="font-semibold text-primary">Noderrrr</span>
              </div>
            </div>
            <div className="text-center font-medium text-muted-foreground">Centralized Nodes</div>
            <div className="text-center font-medium text-muted-foreground">Other Protocols</div>
          </div>

          {/* Table rows */}
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="grid grid-cols-4 gap-4 p-6 border-b border-border last:border-b-0 hover:bg-card/50 transition-colors"
            >
              <div className="font-medium text-foreground">{feature.name}</div>
              <FeatureCell value={feature.noderr} />
              <FeatureCell value={feature.traditional} />
              <FeatureCell value={feature.competitors} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Experience the difference yourself
          </p>
          <button className="px-8 py-4 bg-primary hover:bg-primary/90 rounded-xl font-semibold transition-all hover:scale-105">
            Try Noderrrr Free
          </button>
        </motion.div>
      </div>
    </section>
  );
}
