import { motion } from 'framer-motion';
import { GitBranch, ShieldCheck, Paperclip, Zap, BrainCircuit, Scale, TestTube, FileJson } from 'lucide-react';

const steps = [
  {
    icon: BrainCircuit,
    title: '1. Strategy Generation & Genetic Evolution',
    description: 'The Autonomous Trading Engine (ATE) leverages evolutionary algorithms and Transformer-based language models to generate thousands of novel trading strategies. Each strategy is encoded as a unique genome, allowing for genetic evolution and continuous improvement within the Shadow Data Swarm™.',
    color: 'primary',
  },
  {
    icon: TestTube,
    title: '2. Decentralized Backtesting & Statistical Validation',
    description: 'Strategies are submitted to a decentralized network of Micro Nodes for massively parallel backtesting. We employ rigorous statistical methods like Moving Block Bootstrap and White\'s Reality Check to prevent overfitting and validate strategy robustness against data snooping bias.',
    color: 'accent',
  },
  {
    icon: Scale,
    title: '3. Guardian Review & Paper Trading',
    description: 'Top-performing strategies (0.37% survival rate) undergo Guardian code review and risk assessment. Approved strategies are deployed to the Live Swarm with gradual capital allocation, starting with minimal capital and scaling up only after proven live performance over 30-90 days.',
    color: 'chart-3',
  },
  {
    icon: FileJson,
    title: '4. ZK-Proof Generation & On-Chain Verification',
    description: 'For full transparency, the performance of validated strategies is proven on-chain using Groth16 ZK-SNARKs. This allows anyone to verify the legitimacy of our backtest results without revealing the proprietary strategy itself.',
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
            Noderr\'s ATE Shadow Swarm™ is a sophisticated, multi-stage validation pipeline that turns algorithmic concepts into institutional-grade, sustainable yield. This is how we ensure only the highest-quality strategies manage protocol capital.
          </p>
        </motion.div>

        {/* Steps timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-border" />

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
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center">
                      <div className={`w-16 h-16 rounded-full bg-${step.color}/10 border-2 border-${step.color}/30 flex items-center justify-center`}>
                        <Icon className={`w-8 h-8 text-${step.color}`} />
                      </div>
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
