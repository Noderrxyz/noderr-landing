import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, Shield, Zap, Lock, Target } from 'lucide-react';

const comparisons = [
  {
    category: 'Yield Source',
    icon: Zap,
    traditional: {
      label: 'Token Emissions',
      description: 'Minting new tokens to pay rewards',
      status: 'bad',
    },
    noderr: {
      label: 'Real Trading Profits',
      description: 'Autonomous trading generates revenue',
      status: 'good',
    },
  },
  {
    category: 'APY',
    icon: TrendingUp,
    traditional: {
      label: '100-300%',
      description: 'Unsustainable, collapses quickly',
      status: 'bad',
    },
    noderr: {
      label: '8-28%',
      description: 'Sustainable, real-world yields',
      status: 'good',
    },
  },
  {
    category: 'Inflation',
    icon: TrendingDown,
    traditional: {
      label: 'Constant Dilution',
      description: 'Token supply increases forever',
      status: 'bad',
    },
    noderr: {
      label: 'Zero Inflation',
      description: 'Fixed 100M supply, deflationary buybacks',
      status: 'good',
    },
  },
  {
    category: 'Strategy Validation',
    icon: Target,
    traditional: {
      label: 'None',
      description: 'No backtesting or validation',
      status: 'bad',
    },
    noderr: {
      label: '3-Stage Pipeline',
      description: '0.37% survival rate ensures quality',
      status: 'good',
    },
  },
  {
    category: 'Governance',
    icon: Shield,
    traditional: {
      label: 'Token-Weighted',
      description: 'Whales control everything',
      status: 'bad',
    },
    noderr: {
      label: 'Merit-Based',
      description: 'TrustFingerprint™ earned over time',
      status: 'good',
    },
  },
  {
    category: 'Security',
    icon: Lock,
    traditional: {
      label: 'Flash Loan Vulnerable',
      description: 'Token-weighted voting exploits',
      status: 'bad',
    },
    noderr: {
      label: '$5B+ Attack Cost',
      description: 'Soulbound NFTs + ZK Proofs',
      status: 'good',
    },
  },
];

export function ComparisonShowcase() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Why Noderr is <span className="text-gradient">Different</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional DeFi relies on unsustainable token emissions. Noderr generates real revenue from autonomous trading.
          </p>
        </motion.div>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {comparisons.map((comparison, index) => {
            const Icon = comparison.icon;
            return (
              <motion.div
                key={comparison.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="group relative"
              >
                <div className="p-6 rounded-2xl bg-card border border-border h-full">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{comparison.category}</h3>
                  </div>

                  {/* Traditional DeFi */}
                  <div className="mb-4 p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-destructive"></div>
                      <span className="text-sm font-semibold text-destructive">Traditional DeFi</span>
                    </div>
                    <div className="text-base font-bold text-foreground mb-1">{comparison.traditional.label}</div>
                    <div className="text-sm text-muted-foreground">{comparison.traditional.description}</div>
                  </div>

                  {/* Noderr Protocol */}
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm font-semibold text-primary">Noderr Protocol</span>
                    </div>
                    <div className="text-base font-bold text-foreground mb-1">{comparison.noderr.label}</div>
                    <div className="text-sm text-muted-foreground">{comparison.noderr.description}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom summary */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Death Spiral */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-2xl bg-card border border-destructive/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-destructive">The Inflationary Death Spiral</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              High APY → Mercenary Capital → Constant Sell Pressure → Token Price Collapse
            </p>
          </motion.div>

          {/* Sustainable Revenue */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-2xl bg-card border border-primary/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">Sustainable Revenue Model</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Real Yield → Zero Inflation → Deflationary Buybacks → Sustainable Growth
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
