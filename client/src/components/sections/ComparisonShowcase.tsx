import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, Shield, Zap, Lock, Target, ArrowRight, X, Check } from 'lucide-react';

const comparisons = [
  {
    category: 'Yield Source',
    icon: Zap,
    problem: 'Token Emissions',
    problemDetail: 'Minting new tokens to pay rewards',
    solution: 'Real Trading Profits',
    solutionDetail: 'Autonomous trading generates revenue',
  },
  {
    category: 'APY',
    icon: TrendingUp,
    problem: '100-300%',
    problemDetail: 'Unsustainable, collapses quickly',
    solution: '8-28%',
    solutionDetail: 'Sustainable, real-world yields',
  },
  {
    category: 'Inflation',
    icon: TrendingDown,
    problem: 'Constant Dilution',
    problemDetail: 'Token supply increases forever',
    solution: 'Zero Inflation',
    solutionDetail: 'Fixed 100M supply, deflationary buybacks',
  },
  {
    category: 'Strategy Validation',
    icon: Target,
    problem: 'None',
    problemDetail: 'No backtesting or validation',
    solution: '3-Stage Pipeline',
    solutionDetail: '0.37% survival rate ensures quality',
  },
  {
    category: 'Governance',
    icon: Shield,
    problem: 'Token-Weighted',
    problemDetail: 'Whales control everything',
    solution: 'Merit-Based',
    solutionDetail: 'TrustFingerprint™ earned over time',
  },
  {
    category: 'Security',
    icon: Lock,
    problem: 'Flash Loan Vulnerable',
    problemDetail: 'Token-weighted voting exploits',
    solution: '$5B+ Attack Cost',
    solutionDetail: 'Soulbound NFTs + ZK Proofs',
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

        {/* Comparison cards - NO REPETITION */}
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
                <div className="p-6 rounded-2xl bg-card border border-border h-full hover:border-primary/30 transition-all duration-300">
                  {/* Category header with icon */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{comparison.category}</h3>
                  </div>

                  {/* Problem (red) */}
                  <div className="mb-3 p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-destructive/10 border-2 border-destructive flex items-center justify-center mt-0.5">
                        <X className="w-4 h-4 text-destructive" />
                      </div>
                      <div className="flex-1">
                        <div className="text-base font-bold text-foreground mb-1">{comparison.problem}</div>
                        <div className="text-sm text-muted-foreground">{comparison.problemDetail}</div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center my-2">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>

                  {/* Solution (cyan) */}
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-base font-bold text-foreground mb-1">{comparison.solution}</div>
                        <div className="text-sm text-muted-foreground">{comparison.solutionDetail}</div>
                      </div>
                    </div>
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
            className="p-6 rounded-2xl bg-card border border-destructive/30 hover:border-destructive/50 transition-all duration-300"
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
            className="p-6 rounded-2xl bg-card border border-primary/30 hover:border-primary/50 transition-all duration-300"
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
