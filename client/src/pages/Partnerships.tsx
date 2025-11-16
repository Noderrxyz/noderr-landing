import { motion } from 'framer-motion';
import { ArrowLeft, Handshake, Mail, Zap, Shield, TrendingUp, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLocation } from 'wouter';

const partnershipTypes = [
  {
    title: 'DeFi Lending Protocols',
    icon: Code,
    color: 'text-blue-600',
    description: 'Integrate TrustFingerprint™ for under-collateralized lending and risk assessment.',
    examples: [
      'Aave',
      'Compound',
      'MakerDAO',
      'Huma Finance',
      'Maple Finance',
    ],
  },
  {
    title: 'DAO Governance Platforms',
    icon: Zap,
    color: 'text-purple-600',
    description: 'Implement reputation-weighted voting to prevent whale dominance and Sybil attacks.',
    examples: [
      'Snapshot',
      'Tally',
      'Aragon',
      'Colony',
    ],
  },
  {
    title: 'Trading Platforms & Quant Funds',
    icon: Shield,
    color: 'text-amber-600',
    description: 'Utilize the Shadow Data Swarm™ for decentralized strategy validation and backtesting.',
    examples: [
      'dYdX',
      'GMX',
      'Numerai',
      'Enzyme Finance',
      'dHEDGE',
    ],
  },
  {
    title: 'Infrastructure Providers',
    icon: TrendingUp,
    color: 'text-green-600',
    description: 'Provide services to the Noderr network and earn revenue.',
    examples: [
      'Chainlink',
      'The Graph',
      'Akash',
      'Render Network',
    ],
  },
];

export default function Partnerships() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container max-w-7xl mx-auto px-4 py-6">
        <Button 
          onClick={() => setLocation('/')} 
          variant="ghost" 
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>

      {/* Content */}
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Handshake className="h-12 w-12 text-primary" />
              <h1 className="text-4xl font-bold">Partnerships</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Partner with Noderr to build the future of decentralized finance. We're looking for innovative projects and organizations to collaborate with.
            </p>
          </div>

          {/* Partnership Types */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {partnershipTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className={`h-6 w-6 ${type.color}`} />
                        <CardTitle className="text-xl">{type.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {type.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="text-sm font-semibold mb-2">Target Protocols:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {type.examples.map((example, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* What We Offer */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">What We Offer Partners</CardTitle>
              <CardDescription>
                Access to cutting-edge technology and a growing ecosystem
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">🔒 TrustFingerprint™ API</h3>
                <p className="text-sm text-muted-foreground">
                  Integrate on-chain reputation for under-collateralized lending, reputation-weighted governance, and Sybil resistance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🤖 Shadow Data Swarm™</h3>
                <p className="text-sm text-muted-foreground">
                  Utilize our decentralized strategy validation network for risk-free backtesting and performance analysis.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🏛️ ATE & ML Engine</h3>
                <p className="text-sm text-muted-foreground">
                  License our AI-driven trading engine for institutional-grade treasury management and strategy generation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">📊 SDK & API Access</h3>
                <p className="text-sm text-muted-foreground">
                  Developer tools to integrate Noderr's trust scoring, risk management, and strategy validation into your protocol.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🌐 Growing Network</h3>
                <p className="text-sm text-muted-foreground">
                  Access to our network of node operators, developers, and DeFi protocols building on Base L2.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Ready to Partner?</CardTitle>
              <CardDescription className="text-base">
                Let's explore how we can work together to build the future of decentralized finance.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <p className="text-center text-muted-foreground max-w-xl">
                Whether you're interested in integrating our technology, providing infrastructure services, collaborating on research, or exploring strategic opportunities, we'd love to hear from you.
              </p>
              <Button asChild size="lg" className="mt-4">
                <a href="mailto:partnerships@noderr.xyz?subject=Partnership Inquiry">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                Email us at <a href="mailto:partnerships@noderr.xyz" className="text-primary hover:underline">partnerships@noderr.xyz</a>
              </p>
            </CardContent>
          </Card>

          {/* Note */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              <strong>Note:</strong> This page will be updated with detailed integration guides, SDK documentation, and partnership case studies as we progress through our roadmap.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
