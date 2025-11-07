import { motion } from 'framer-motion';
import { Gift, Users, Trophy, Zap } from 'lucide-react';

const advantages = [
  {
    icon: Gift,
    title: 'Free Testnet Tokens',
    description: 'Get 1,000 NODR tokens every 24 hours from the faucet. Test all node tiers without cost.',
  },
  {
    icon: Users,
    title: 'Community Feedback',
    description: 'Help shape the protocol by providing feedback on node operations and governance features.',
  },
  {
    icon: Trophy,
    title: 'Early Node Operators',
    description: 'Build your reputation early. Testnet trust scores may influence mainnet benefits.',
  },
  {
    icon: Zap,
    title: 'Risk-Free Testing',
    description: 'Experiment with staking, governance, and vault strategies using testnet tokens on Base Sepolia.',
  },
];

export function TestnetAdvantages() {
  return (
    <section className="section-padding bg-card/20">
      <div className="container max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Testnet Live Now</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why Join the <span className="text-gradient">Testnet</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Test the protocol, provide feedback, and prepare for mainnet launch.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">Ready to get started?</h3>
              <p className="text-muted-foreground">Join 12,000+ traders already testing the future of DeFi.</p>
            </div>
            <button className="px-8 py-4 bg-primary hover:bg-primary/90 rounded-xl font-semibold whitespace-nowrap transition-all hover:scale-105">
              Join Testnet Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
