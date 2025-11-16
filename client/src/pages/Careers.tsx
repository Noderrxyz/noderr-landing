import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLocation } from 'wouter';

const positions = [
  {
    title: 'Full-Stack Software Developer',
    type: 'Full-time',
    location: 'Remote',
    description: 'Build and maintain our decentralized infrastructure, smart contracts, and dApp interfaces. Work with cutting-edge Web3 technologies including Solidity, React, and Node.js.',
    requirements: [
      '3+ years of full-stack development experience',
      'Strong proficiency in TypeScript/JavaScript and React',
      'Experience with smart contract development (Solidity)',
      'Familiarity with Web3 libraries (ethers.js, wagmi, viem)',
      'Understanding of DeFi protocols and blockchain architecture',
    ],
  },
  {
    title: 'Community Manager',
    type: 'Full-time',
    location: 'Remote',
    description: 'Lead our community growth efforts across Discord, Twitter, and other platforms. Engage with node operators, developers, and users to build a thriving ecosystem.',
    requirements: [
      '2+ years of community management experience in Web3/crypto',
      'Deep understanding of DeFi and blockchain technology',
      'Excellent written and verbal communication skills',
      'Experience managing Discord servers and Twitter communities',
      'Ability to create engaging content and organize events',
    ],
  },
];

export default function Careers() {
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
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Briefcase className="h-12 w-12 text-primary" />
              <h1 className="text-4xl font-bold">Careers at Noderrrr</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our team and help build the future of decentralized node operator infrastructure. We're looking for talented individuals who are passionate about Web3 and DeFi.
            </p>
          </div>

          {/* Open Positions */}
          <div className="space-y-6 mb-12">
            <h2 className="text-2xl font-bold">Open Positions</h2>
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {position.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {position.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">About the Role</h3>
                      <p className="text-muted-foreground">{position.description}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Requirements</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {position.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild className="w-full sm:w-auto">
                      <a href="mailto:nod@noderr.xyz?subject=Application: {position.title}">
                        <Mail className="mr-2 h-4 w-4" />
                        Apply via Email
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Why Join Us */}
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle>Why Join Noderrrr?</CardTitle>
              <CardDescription>
                We're building the future of decentralized infrastructure
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">🚀 Cutting-Edge Technology</h3>
                <p className="text-sm text-muted-foreground">
                  Work with the latest Web3 technologies including ZK proofs, machine learning, and advanced DeFi protocols.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🌍 Remote-First Culture</h3>
                <p className="text-sm text-muted-foreground">
                  Work from anywhere in the world with flexible hours and a distributed team.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">💡 Innovation & Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Build products that will shape the future of decentralized finance and node operator networks.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🤝 Collaborative Environment</h3>
                <p className="text-sm text-muted-foreground">
                  Join a team of passionate builders who value collaboration, transparency, and continuous learning.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Don't See a Perfect Fit?</h2>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to Noderrrr.
            </p>
            <Button asChild size="lg">
              <a href="mailto:nod@noderr.xyz?subject=General Application">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
