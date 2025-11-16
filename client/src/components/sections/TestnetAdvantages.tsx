import { motion } from 'framer-motion';
import { Gift, Users, Trophy, Zap, ArrowRight } from 'lucide-react';
import { DAPP_URL } from '@/const';

const advantages = [
  {
    icon: Gift,
    title: 'Get Testnet Tokens',
    description: 'Claim 1,000 free NODR tokens every 24 hours from the faucet to test all node tiers and governance features without cost.',
  },
  {
    icon: Users,
    title: 'Shape the Protocol',
    description: 'Your feedback helps us refine node operations, dApp user experience, and governance mechanisms.',
  },
  {
    icon: Trophy,
    title: 'Become an Early Operator',
    description: 'Build your on-chain reputation (TrustFingerprint™) early. Strong testnet performance may lead to mainnet benefits and airdrops.',
  },
  {
    icon: Zap,
    title: 'Explore Real Yield',
    description: 'Experiment with staking, governance, and the ATE using testnet tokens on Base Sepolia. Learn the mechanics of real yield generation, risk-free.',
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
            <span className="text-sm font-semibold text-primary">Testnet Live on Base Sepolia</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Become an <span className="text-gradient">Early Participant</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the Noderr testnet to help build the future of real, sustainable yield. Your participation matters.
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
              <p className="text-muted-foreground">Claim your free testnet tokens and start exploring the Noderr ecosystem today.</p>
            </div>
            <a 
              href={`${DAPP_URL}/faucet`}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-primary hover:bg-primary/90 rounded-xl font-semibold whitespace-nowrap transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              Go to Faucet
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
