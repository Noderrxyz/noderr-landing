import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Users, GitBranch, ShieldCheck, Scale, ArrowRight } from 'lucide-react';
import { GITBOOK_URL } from '@/const';

const technologies = [
  {
    id: 'ate',
    name: 'Autonomous Trading Engine',
    icon: Cpu,
    description: 'Noderr\'s ATE operates on a dual-system architecture, combining the stability of a Floor Engine with the alpha-generating potential of competitive third-party strategies.',
    docUrl: `${GITBOOK_URL}/protocol/ate`,
    details: [
      {
        title: 'Floor Engine (7 DeFi Protocol Adapters)',
        text: 'Provides a consistent 5-8% APY baseline by integrating with 7 battle-tested DeFi protocols (Aave, Balancer, Curve, GMX, Uniswap V3, dYdX). This diversified, market-neutral approach ensures a stable foundation for protocol revenue.'
      },
      {
        title: 'Third-Party Strategies (20% Profit Share)',
        text: 'External quants and data scientists contribute advanced algorithms to our open marketplace. If their strategies pass the rigorous 4-stage validation process (0.37% survival rate), they earn a 20% profit share on all generated returns, paid quarterly via smart contract.'
      },
      {
        title: 'Evolutionary AI Core',
        text: 'Uses Genetic Programming and Reinforcement Learning (Q-learning) to continuously evolve and adapt strategies, preventing decay and optimizing performance against real-time market conditions.'
      }
    ]
  },
  {
    id: 'swarm',
    name: 'Shadow Data Swarm™',
    icon: Users,
    description: 'A massively parallel, high-fidelity simulated environment where thousands of algorithms compete, adapt, and prove their viability before touching real capital.',
    docUrl: `${GITBOOK_URL}/protocol/shadow-data-swarm`,
    details: [
      {
        title: 'Massively Parallel Testing',
        text: 'Leverages the distributed power of Micro Nodes to backtest thousands of strategies simultaneously, creating a competitive crucible for algorithmic evolution.'
      },
      {
        title: '4-Stage Validation Pipeline',
        text: 'Strategies must pass a rigorous 4-stage process: Shadow (automated screening), Guardian Review (human code audit), Paper Trading (live data simulation), and finally Live (Oracle approval).'
      },
      {
        title: '0.37% Survival Rate',
        text: 'Out of over 15,000 strategies tested historically, 0.37% were promoted to the Live Swarm, ensuring the most robust and profitable algorithms manage protocol capital.'
      }
    ]
  },
  {
    id: 'trustfingerprint',
    name: 'TrustFingerprint™',
    icon: ShieldCheck,
    description: 'A multi-dimensional, time-weighted reputation system that makes governance takeover economically and practically infeasible. Trust cannot be bought; it must be earned.',
    docUrl: `${GITBOOK_URL}/protocol/trustfingerprint`,
    details: [
      {
        title: 'Sybil Resistant',
        text: 'Combines stake (economic) with performance history (temporal) and peer validation (social). A high-trust Oracle\'s vote is worth more than thousands of new, low-trust nodes.'
      },
      {
        title: 'Temporal Security (3+ Years)',
        text: 'Achieving a high TrustFingerprint™ score (≥0.90) requires over 3 years of flawless network participation. Any misbehavior results in a significant score penalty, forfeiting years of earned trust.'
      },
      {
        title: 'Elected Governance',
        text: 'Guardians and Oracles cannot buy their positions; they must be elected by their peers. This social consensus layer makes the cost of a malicious governance takeover effectively infinite.'
      }
    ]
  },
  {
    id: 'governor',
    name: 'Base-Rate Governor',
    icon: Scale,
    description: 'A unique sustainability mechanism that ensures the protocol never distributes more rewards than it earns, guaranteeing long-term treasury health and preventing inflation.',
    docUrl: `${GITBOOK_URL}/protocol/base-rate-governor`,
    details: [
      {
        title: 'Sustainable Reward Caps',
        text: 'Automatically caps total quarterly reward distributions at 35-45% of the trailing four-quarter net revenue. This prevents the treasury from being depleted during low-revenue periods.'
      },
      {
        title: 'Smooths Reward Volatility',
        text: 'By averaging revenue over a longer time horizon, the governor provides more predictable and stable yields for node operators, avoiding boom-and-bust reward cycles.'
      },
      {
        title: 'Zero Operational Inflation',
        text: 'Because all rewards are funded from real, realized revenue and capped by the governor, the protocol can maintain its fixed 100M token supply without ever needing to mint new tokens to pay for operations.'
      }
    ]
  }
];

export function ProprietaryTech() {
  const [activeTab, setActiveTab] = useState(technologies[0].id);

  const activeTech = technologies.find(tech => tech.id === activeTab);

  return (
    <section className="section-padding bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            The <span className="text-gradient">Noderr Difference</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our protocol combines proprietary, interconnected technologies that deliver security, sustainability, and performance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {technologies.map(tech => {
              const Icon = tech.icon;
              return (
                <button
                  key={tech.id}
                  onClick={() => setActiveTab(tech.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 border ${activeTab === tech.id ? 'bg-primary/10 border-primary/30' : 'bg-card border-border hover:bg-muted/50'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-md flex items-center justify-center flex-shrink-0 ${activeTab === tech.id ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{tech.name}</h3>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Content */}
          <div className="lg:col-span-8 min-h-[450px]">
            <AnimatePresence mode="wait">
              {activeTech && (
                <motion.div
                  key={activeTech.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 rounded-2xl bg-card border border-border flex flex-col h-full"
                >
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{activeTech.name}</h3>
                  <p className="text-muted-foreground mb-8">{activeTech.description}</p>
                  <div className="space-y-6 flex-grow">
                    {activeTech.details.map((detail, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-6 h-6 flex-shrink-0 bg-primary/10 text-primary rounded-full flex items-center justify-center mt-1">
                          <GitBranch className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{detail.title}</h4>
                          <p className="text-sm text-muted-foreground">{detail.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-border">
                    <a 
                      href={activeTech.docUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
