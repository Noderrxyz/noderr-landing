import { motion } from 'framer-motion';
import { Brain, Eye, Network, TrendingUp } from 'lucide-react';

const signals = [
  {
    icon: Brain,
    title: 'Evolutionary Learning',
    description: 'AI that improves with every transaction, adapting strategies based on real market outcomes.',
  },
  {
    icon: Eye,
    title: 'Transparent Decisions',
    description: 'See exactly why each trade was made with full explainability and reasoning logs.',
  },
  {
    icon: Network,
    title: 'Cross-Protocol Intelligence',
    description: 'Optimizes across the entire DeFi ecosystem, finding the best opportunities everywhere.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Intelligence',
    description: 'Anticipates market moves before they happen using advanced pattern recognition.',
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
