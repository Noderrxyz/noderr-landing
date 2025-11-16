import { motion } from 'framer-motion';
import { Sparkles, Award, Crown, Gem, CheckCircle2 } from 'lucide-react';
import { NODE_DOWNLOAD_URL, VALIDATOR_APPLICATION_URL, GUARDIAN_APPLICATION_URL, ORACLE_APPLICATION_URL } from '@/const';

const tiers = [
  {
    icon: Sparkles,
    name: 'Micro Nodes',
    subtitle: 'The Foundation of the Swarm',
    stake: '0 NODR minimum',
    audience: 'Retail Participants, Students, Hobbyists',
    valueProposition: 'Put your old devices to work. No technical expertise, no minimum stake.',
    description: 'Micro Nodes form the backbone of the Shadow Data Swarm™, providing the distributed computational power needed for strategy backtesting and network telemetry. Put your old cell phones, tablets, or spare computers to use—just install the lightweight app and start earning real rewards while contributing to the network.',
    functions: [
      'Provide computational power for the Shadow Data Swarm™',
      'Participate in massively parallel strategy backtesting',
      'Collect and relay network telemetry data',
      'Build TrustFingerprint™ score through uptime and performance',
    ],
    rewards: 'Base APY (5-10%) on staked amount, scaled by TrustFingerprint™ score',
    cta: 'Download Node Software',
    ctaUrl: NODE_DOWNLOAD_URL,
    color: 'primary',
  },
  {
    icon: Award,
    name: 'Validators',
    subtitle: 'The Guardians of Consensus',
    stake: '50,000 NODR',
    audience: 'Professional Node Operators, Staking-as-a-Service Providers',
    valueProposition: 'Secure the network. Earn 1.5x base rewards.',
    description: 'Validators are the professional operators responsible for maintaining the integrity of the Noderr blockchain. They produce blocks, validate transactions, and participate in consensus. This tier is for experienced operators who can meet high uptime and performance standards.',
    functions: [
      'Produce blocks every 2 seconds (Tendermint BFT consensus)',
      'Validate network transactions',
      'Vote on large treasury capital proposals (>5% of treasury)',
      'Maintain validator-grade server with 99%+ uptime',
    ],
    rewards: '1.5x Base APY multiplier, plus transaction fees',
    cta: 'Become a Validator',
    ctaUrl: VALIDATOR_APPLICATION_URL,
    color: 'accent',
  },
  {
    icon: Crown,
    name: 'Guardians',
    subtitle: 'The Curators of Intelligence',
    stake: '100,000 NODR',
    audience: 'DeFi Experts, Security Researchers, Veteran Developers',
    valueProposition: 'Review strategies. Shape the protocol\'s intelligence.',
    description: 'Guardians are a council of elected technical experts who serve as the final line of defense for strategy deployment. They perform rigorous code reviews and risk assessments on all strategies promoted from the Shadow Data Swarm™, ensuring only the highest-quality algorithms manage protocol capital.',
    functions: [
      'Perform code reviews on trading strategies for bugs and security vulnerabilities',
      'Assess risk exposure for each strategy (leverage, volatility, correlation)',
      'Vote on strategy promotion from Shadow to Paper Trading (requires 4/5 majority)',
      'Elected by peers with 66% approval vote',
    ],
    rewards: '2x Base APY multiplier, plus 5% of strategy profit share',
    cta: 'Apply for Guardian Council',
    ctaUrl: GUARDIAN_APPLICATION_URL,
    color: 'chart-3',
  },
  {
    icon: Gem,
    name: 'Oracles',
    subtitle: 'The Stewards of the Treasury',
    stake: '250,000 NODR',
    audience: 'Institutional Investors, Protocol Founders, Governance Specialists',
    valueProposition: 'Govern the protocol. Oversee the treasury.',
    description: 'Oracles are the highest tier of governance, responsible for the final approval of live strategy deployment and oversight of the protocol treasury. They represent the most trusted and aligned participants in the network, with a TrustFingerprint™ score of ≥0.90 (requiring 3+ years of flawless participation).',
    functions: [
      'Final approval vote (66% majority) to promote strategies from Paper Trading to Live',
      'Execute treasury proposals and capital allocation decisions',
      'Oversee Base-Rate Governor parameters and sustainability metrics',
      'Elected by peers with 66% approval vote and TrustFingerprint™ ≥0.90',
    ],
    rewards: '3x Base APY multiplier, plus 10% of strategy profit share',
    cta: 'Apply for Oracle Council',
    ctaUrl: ORACLE_APPLICATION_URL,
    color: 'chart-5',
  },
];

export function ModesForEveryUser() {
  return (
    <section id="modes" className="section-padding relative overflow-hidden bg-muted/30">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.7_0.15_195_/_0.1),transparent_50%)]" />
      
      <div className="container max-w-7xl mx-auto relative px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            The Noderr Network: <span className="text-gradient">A Role for Everyone</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Noderr's multi-tier architecture is designed for maximum decentralization and security, with specialized roles for every level of participation. Whether you are a casual user, a professional infrastructure operator, or a DeFi governance expert, there is a meaningful way to contribute and be rewarded.
          </p>
        </motion.div>

        {/* Tier cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group"
              >
                {/* Card */}
                <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-${tier.color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 text-${tier.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1 text-foreground">
                        {tier.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{tier.subtitle}</p>
                    </div>
                  </div>

                  {/* Value Proposition */}
                  <div className="mb-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="text-base font-semibold text-primary">"{tier.valueProposition}"</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Functions */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-3">Key Functions:</p>
                    <ul className="space-y-3">
                      {tier.functions.map((func, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{func}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Rewards */}
                  <div className="mt-auto">
                    <div className="mb-6 p-4 rounded-lg bg-accent/5 border border-accent/20">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Rewards</p>
                      <p className="text-sm text-foreground font-medium">{tier.rewards}</p>
                    </div>

                    {/* CTA */}
                    <a 
                      href={tier.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary rounded-xl font-semibold text-primary transition-all text-center"
                    >
                      {tier.cta}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-block p-6 rounded-2xl bg-card border border-border max-w-3xl">
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">Note:</span> Guardians and Oracles are elected by their peers through a 66% approval vote, ensuring that only the most trusted and aligned participants can join these councils. This social layer makes governance takeover effectively impossible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
