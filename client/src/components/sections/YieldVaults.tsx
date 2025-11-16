import { motion } from 'framer-motion';
import { Shield, Activity, TrendingUp, TrendingDown, BarChart3 } from 'lucide-react';

const topRowVaults = [
  {
    id: 'low-risk',
    name: 'Low Risk Vault',
    icon: Shield,
    apy: '5-10%',
    risk: 'Low',
    riskColor: 'text-green-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    description: 'Capital preservation with stable returns.',
    strategy: 'Delta-neutral arbitrage, stablecoin yield farming, and low-volatility pairs.',
  },
  {
    id: 'medium-risk',
    name: 'Medium Risk Vault',
    icon: Activity,
    apy: '12-20%',
    risk: 'Medium',
    riskColor: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/20',
    description: 'Balanced growth with moderate risk.',
    strategy: 'Trend following, swing trading, and diversified DeFi protocols.',
  },
  {
    id: 'high-risk',
    name: 'High Risk Vault',
    icon: TrendingUp,
    apy: '20-28%',
    risk: 'High',
    riskColor: 'text-red-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20',
    description: 'Maximum returns with higher volatility.',
    strategy: 'Leveraged positions, momentum trading, and high-yield DeFi protocols.',
  },
];

const bottomRowVaults = [
  {
    id: 'hedged',
    name: 'Hedged Vault',
    icon: BarChart3,
    apy: '8-18%',
    risk: 'Low-Medium',
    riskColor: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    description: 'Risk-managed with downside protection.',
    strategy: 'Options hedging, covered calls, and protective puts.',
  },
  {
    id: 'inverse',
    name: 'Inverse Vault',
    icon: TrendingDown,
    apy: 'Variable',
    risk: 'Medium',
    riskColor: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    description: 'Profit from market downturns.',
    strategy: 'Short selling, inverse perpetuals, and bear market hedging.',
  },
];

function VaultCard({ vault, index }: { vault: typeof topRowVaults[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 + index * 0.05 }}
      className={`group relative p-8 rounded-2xl bg-card border ${vault.borderColor} overflow-hidden`}
    >
      <div className={`absolute top-0 left-0 w-full h-full ${vault.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className={`p-3 rounded-lg ${vault.bgColor}`}>
            <vault.icon className={`w-6 h-6 ${vault.riskColor}`} />
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${vault.bgColor} ${vault.riskColor}`}>
            {vault.risk} Risk
          </div>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">{vault.name}</h3>
        <p className="text-muted-foreground mb-6">{vault.description}</p>
        <div className="mb-6">
          <div className="text-sm text-muted-foreground">APY Range</div>
          <div className={`text-3xl font-bold ${vault.riskColor}`}>{vault.apy}</div>
        </div>
        <div className="text-sm text-muted-foreground mb-2">Strategy</div>
        <p className="text-sm text-foreground">{vault.strategy}</p>
      </div>
    </motion.div>
  );
}

export function YieldVaults() {
  return (
    <section id="vaults" className="section-padding bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Automated Yield Vaults
          </h2>
          <div className="inline-block px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-semibold text-primary">Coming Soon - Q1 2027 (Mainnet Launch)</span>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deposit into our Autonomous Trading Engine. Earn passive yield without running a node. Choose your risk, we handle the rest.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Top row - 3 vaults */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topRowVaults.map((vault, index) => (
              <VaultCard key={vault.id} vault={vault} index={index} />
            ))}
          </div>

          {/* Bottom row - 2 vaults centered */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bottomRowVaults.map((vault, index) => (
              <VaultCard key={vault.id} vault={vault} index={index + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
