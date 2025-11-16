import { motion } from 'framer-motion';
import { GitBranch, ShieldCheck, Paperclip, Zap } from 'lucide-react';

const steps = [
  {
    icon: GitBranch,
    title: '1. Generate & Test',
    description: 'The Autonomous Trading Engine (ATE) uses evolutionary algorithms to generate thousands of novel trading strategies. These strategies are then submitted to the Shadow Data Swarm™, where they are backtested and refined by a decentralized network of Micro Nodes.',
    color: 'primary',
  },
  {
    icon: ShieldCheck,
    title: '2. Curate & Approve',
    description: 'Top-performing strategies (0.37% survival rate) undergo Guardian code review and risk assessment. Approved strategies are automatically deployed to the Live Swarm with gradual capital allocation, monitored by Oracle oversight.',
    color: 'accent',
  },
  {
    icon: Paperclip,
    title: '3. Paper Trade & Validate',
    description: 'Strategies that pass Guardian review are deployed with gradual capital allocation, starting with minimal capital and scaling up only after proven live performance over 30-90 days.',
    color: 'chart-3',
  },
  {
    icon: Zap,
    title: '4. Execute & Distribute',
    description: 'Oracles provide final oversight on high-risk decisions and treasury management. Profits from the Live Swarm are automatically routed to the treasury and distributed to node operators as real, sustainable yield.',
    color: 'chart-5',
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            From <span className="text-gradient">Idea to Execution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Noderrrr uses a multi-stage validation pipeline to select the highest-quality trading strategies for managing protocol capital. This is how we turn algorithmic concepts into sustainable yield.
          </p>
        </motion.div>

        {/* Steps timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-border" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Icon */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-full bg-${step.color}/10 border-2 border-${step.color}/30 flex items-center justify-center`}>
                      <Icon className={`w-8 h-8 text-${step.color}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
