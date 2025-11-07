import { motion } from 'framer-motion';
import { Wallet, Server, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Wallet,
    number: '01',
    title: 'Stake NODR Tokens',
    description: 'Choose your node tier and stake the required amount of NODR tokens. Higher tiers unlock enhanced rewards and governance power.',
  },
  {
    icon: Server,
    number: '02',
    title: 'Run Your Node',
    description: 'Deploy your node and start validating operations. Build your trust fingerprint through consistent performance and reliability.',
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Earn Rewards',
    description: 'Receive rewards based on your tier and trust score. Participate in vault strategies and governance decisions to maximize returns.',
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-card/20">
      <div className="container max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            How <span className="text-gradient">Noderr</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the decentralized node operator network in three simple steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                {/* Connector line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}

                {/* Card */}
                <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group">
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
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
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience the future of DeFi trading?
          </p>
          <button className="px-8 py-4 bg-primary hover:bg-primary/90 rounded-xl font-semibold transition-all hover:scale-105">
            Start Trading Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
