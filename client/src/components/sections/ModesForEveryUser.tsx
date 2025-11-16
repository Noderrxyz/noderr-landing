import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Award, Crown, Gem, CheckCircle2, ArrowRight } from 'lucide-react';
import { NODE_DOWNLOAD_URL, VALIDATOR_APPLICATION_URL, GUARDIAN_APPLICATION_URL, ORACLE_APPLICATION_URL } from '@/const';

const tiers = [
  {
    id: 'micro',
    icon: Sparkles,
    name: 'Micro Nodes',
    subtitle: 'The Foundation of the Swarm',
    description: 'Micro Nodes operate as AI agents in a mesh network, providing compute resources to the Noderrrr Protocol when overhead capacity is reached. Put your old Android and iOS devices to work, or install our browser extension to earn passive, real-world yield.',
    functions: [
      'Run AI-driven automation tasks as distributed agents',
      'Provide compute resources for strategy backtesting in the Shadow Data Swarm™',
      'Build on-chain reputation (TrustFingerprint™) through consistent uptime',
      'Earn passive income with minimal hardware and no minimum stake',
    ],
    rewards: '5-10% APY on staked amount, scaled by TrustFingerprint™ score',
    cta: 'Download Node Software',
    ctaUrl: NODE_DOWNLOAD_URL,
  },
  {
    id: 'validator',
    icon: Award,
    name: 'Validators',
    subtitle: 'The Data Stewards',
    description: 'Validators are professional operators who maintain critical protocol infrastructure. They store historical market data, track strategy performance, vote on governance proposals, and provide data analytics services.',
    functions: [
      'Store and manage historical market data and strategy performance metrics',
      'Vote on governance proposals and protocol upgrades',
      'Provide optimized data queries and analytics for the protocol',
      'Track risk metrics and backtest results for strategy evaluation',
    ],
    rewards: '10-15% APY, plus transaction fees',
    cta: 'Become a Validator',
    ctaUrl: VALIDATOR_APPLICATION_URL,
  },
  {
    id: 'guardian',
    icon: Crown,
    name: 'Guardians',
    subtitle: 'The Curators of Intelligence',
    description: 'Guardians are a council of elected technical experts who serve as the final quality gate for strategy deployment. Elected from the high-performing Validator pool, they are responsible for code reviews and risk assessments.',
    functions: [
      'Perform code reviews on trading strategies for bugs and vulnerabilities',
      'Assess risk exposure for each strategy (leverage, volatility, correlation)',
      'Vote on strategy promotion from Shadow to Paper Trading',
      'Must be elected by peers from the Validator pool (TrustFingerprint™ ≥0.75)',
    ],
    rewards: '15-20% APY, plus stipend and 5% of strategy profit share',
    cta: 'Express Interest in Guardian Role',
    ctaUrl: 'https://form.typeform.com/to/01KA5J8C7F4Q5MWWH1928GJB3R',
  },
  {
    id: 'oracle',
    icon: Gem,
    name: 'Oracles',
    subtitle: 'The Stewards of the Treasury',
    description: 'Oracles are the highest tier of governance, responsible for the final approval of live strategy deployment and oversight of the protocol treasury. Oracles are elected from the Guardian pool and represent the most trusted participants in the network.',
    functions: [
      'Final approval vote to promote strategies from Paper Trading to Live',
      'Execute treasury proposals and capital allocation decisions',
      'Oversee Base-Rate Governor parameters and sustainability metrics',
      'Must be elected by peers from the Guardian pool (TrustFingerprint™ ≥0.90)',
    ],
    rewards: '20-25% APY, plus stipend and 10% of strategy profit share',
    cta: 'Express Interest in Oracle Role',
    ctaUrl: 'https://form.typeform.com/to/01KA5J8C7F4Q5MWWH1928GJB3R',
  },
];

export function ModesForEveryUser() {
  const [activeTab, setActiveTab] = useState(tiers[0].id);

  const activeTier = tiers.find(tier => tier.id === activeTab);

  return (
    <section id="modes" className="section-padding bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            The Noderrrr Network: <span className="text-gradient">A Role for Everyone</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Noderrrr's multi-tier architecture maximizes decentralization and security through specialized roles for every level of participation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {tiers.map(tier => {
              const Icon = tier.icon;
              return (
                <button
                  key={tier.id}
                  onClick={() => setActiveTab(tier.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 border ${activeTab === tier.id ? 'bg-primary/10 border-primary/30' : 'bg-card border-border hover:bg-muted/50'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-md flex items-center justify-center flex-shrink-0 ${activeTab === tier.id ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
                      <p className="text-sm text-muted-foreground">{tier.subtitle}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Content */}
          <div className="lg:col-span-8 min-h-[500px]">
            <AnimatePresence mode="wait">
              {activeTier && (
                <motion.div
                  key={activeTier.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 rounded-2xl bg-card border border-border flex flex-col h-full"
                >
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{activeTier.name}</h3>
                  <p className="text-muted-foreground mb-6">{activeTier.description}</p>
                  <div className="space-y-3 mb-6 flex-grow">
                    {activeTier.functions.map((func, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <p className="text-sm text-muted-foreground">{func}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <div className="mb-6 p-4 rounded-lg bg-accent/5 border border-accent/20">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Rewards</p>
                      <p className="text-sm text-foreground font-medium">{activeTier.rewards}</p>
                    </div>
                    <a 
                      href={activeTier.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors group"
                    >
                      {activeTier.cta}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-12"
        >
          <div className="inline-block p-4 rounded-xl bg-card border border-border max-w-2xl">
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">Note:</span> Guardians and Oracles are elected by their peers. This meritocratic structure, where influence must be earned over time, makes governance takeover effectively impossible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
