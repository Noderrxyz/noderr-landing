import { motion } from 'framer-motion';
import { Sparkles, Award, Crown, Gem } from 'lucide-react';

const tiers = [
  {
    icon: Sparkles,
    name: 'Bronze',
    stake: '10,000 NODR',
    description: 'Entry-level node tier for new operators. Start earning rewards and building trust.',
    features: [
      'Basic node operations',
      'Standard reward rate',
      'Community governance',
      'Trust score tracking',
    ],
    color: 'primary',
  },
  {
    icon: Award,
    name: 'Silver',
    stake: '50,000 NODR',
    description: 'Enhanced tier with increased rewards and priority in vault allocations.',
    features: [
      'Priority vault access',
      'Enhanced rewards (1.5x)',
      'Weighted governance votes',
      'Advanced analytics',
    ],
    color: 'accent',
  },
  {
    icon: Crown,
    name: 'Gold',
    stake: '100,000 NODR',
    description: 'Premium tier with maximum rewards and exclusive governance privileges.',
    features: [
      'Maximum reward rate (2x)',
      'Exclusive vault strategies',
      'Enhanced voting power',
      'Priority support',
    ],
    color: 'chart-3',
  },
  {
    icon: Gem,
    name: 'Platinum',
    stake: '250,000 NODR',
    description: 'Elite tier with the highest rewards and full protocol governance access.',
    features: [
      'Elite rewards (3x)',
      'Full governance access',
      'Custom vault strategies',
      'Dedicated support',
    ],
    color: 'chart-5',
  },
];

export function ModesForEveryUser() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.7_0.15_195_/_0.1),transparent_50%)]" />
      
      <div className="container max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Multi-Tier</span> Node Architecture
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your tier based on stake amount. Higher tiers unlock enhanced rewards and governance power.
          </p>
        </motion.div>

        {/* Tiers grid */}
        <div className="grid lg:grid-cols-4 gap-6">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    {/* Icon & Badge */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                        {tier.stake}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {tier.name}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {tier.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3">
                      {tier.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-3 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button className="w-full mt-8 px-6 py-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary font-semibold transition-all duration-300 group-hover:scale-105">
                      Stake {tier.stake}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-muted-foreground mt-12"
        >
          Upgrade your tier anytime by staking additional NODR tokens.
        </motion.p>
      </div>
    </section>
  );
}
