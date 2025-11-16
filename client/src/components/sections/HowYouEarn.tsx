import { motion } from 'framer-motion';
import { Layers, Database, Shield, TrendingUp } from 'lucide-react';

const yieldSources = [
  {
    icon: Layers,
    title: 'Node Operations (5-35% APY)',
    description: 'Run our unique four-tiered multi-node system to power the network and earn rewards. Higher tiers offer higher yields and governance power.',
    tiers: ['Micro Node (5-12%)', 'Validator (25-35%)', 'Guardian (25-35% + Stipend)', 'Oracle (25-35% + $50K Stipend)'],
  },
  {
    icon: TrendingUp,
    title: 'Yield Vaults (5-40% APY)',
    description: 'Deposit into automated trading strategies with varying risk levels. Our Autonomous Trading Engine manages capital to generate real, sustainable returns.',
    tiers: ['Low Risk (5-10%)', 'Medium Risk (10-20%)', 'High Risk (20-40%)', 'Hedged (8-15%)'],
  },
];

export function HowYouEarn() {
  return (
    <section id="how-you-earn" className="section-padding bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Multiple Ways to <span className="text-gradient">Earn Real Yield</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Noderr offers two distinct pathways to generate sustainable rewards, catering to both active infrastructure providers and passive capital allocators.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {yieldSources.map((source, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <source.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{source.title}</h3>
              </div>
              <p className="text-muted-foreground mb-6 flex-grow">{source.description}</p>
              <div className="space-y-2">
                {source.tiers.map((tier, tierIndex) => (
                  <div key={tierIndex} className="flex items-center gap-3 text-sm">
                    <Shield className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{tier}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
