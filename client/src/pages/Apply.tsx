import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Zap, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLocation } from 'wouter';

const TYPEFORM_ID = '01KA5J8C7F4Q5MWWH1928GJB3R';

export default function Apply() {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = 'https://embed.typeform.com/next/embed.js';
    script.async = true;
    script.onload = () => setIsLoading(false);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const tiers = [
    {
      name: 'Validator',
      stake: '50,000 NODR',
      icon: Shield,
      color: 'text-blue-600',
      features: [
        'Validate transactions',
        'Earn staking rewards',
        'Vote on governance proposals',
        'Basic network participation',
      ],
    },
    {
      name: 'Guardian',
      stake: '100,000 NODR',
      icon: Shield,
      color: 'text-purple-600',
      features: [
        'All Validator benefits',
        'Create governance proposals',
        'Higher voting power',
        'Risk analysis participation',
      ],
    },
    {
      name: 'Oracle',
      stake: '500,000 NODR',
      icon: Zap,
      color: 'text-amber-600',
      features: [
        'All Guardian benefits',
        'ML/AI model execution',
        'Highest voting power',
        'Premium rewards (15x multiplier)',
        'Requires GPU (RTX 4090/4080 or better)',
      ],
    },
  ];

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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-3">Node Operator Application</h1>
            <p className="text-lg text-muted-foreground">
              Apply to join the Noderrrr Protocol testnet as a Validator, Guardian, or Oracle node operator.
            </p>
          </div>

          {/* Tier Information Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {tiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <Card key={tier.name} className="border-2">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className={`h-6 w-6 ${tier.color}`} />
                      <CardTitle className="text-xl">{tier.name}</CardTitle>
                    </div>
                    <CardDescription className="text-base font-semibold">
                      Minimum Stake: {tier.stake}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className={`h-4 w-4 ${tier.color} mt-0.5 flex-shrink-0`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Application Form */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Application Form</CardTitle>
              <CardDescription className="text-base">
                Complete the form below to apply for the Noderrrr Protocol testnet. We'll review your application and contact you within 5-7 business days.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div ref={containerRef} className="relative">
                {isLoading && (
                  <div className="flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                      <p className="mt-4 text-sm text-muted-foreground">Loading application form...</p>
                    </div>
                  </div>
                )}
                <div
                  data-tf-live={TYPEFORM_ID}
                  data-tf-hide-headers
                  data-tf-hide-footer
                  data-tf-opacity="100"
                  style={{ 
                    width: '100%', 
                    height: '700px',
                    display: isLoading ? 'none' : 'block'
                  }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle>What Happens Next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  1
                </div>
                <div>
                  <div className="font-medium">Application Review</div>
                  <div className="text-sm text-muted-foreground">
                    Our team reviews your application and verifies your qualifications
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  2
                </div>
                <div>
                  <div className="font-medium">Acceptance Notification</div>
                  <div className="text-sm text-muted-foreground">
                    If accepted, you'll receive an email with next steps and setup instructions
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  3
                </div>
                <div>
                  <div className="font-medium">Node Setup & Launch</div>
                  <div className="text-sm text-muted-foreground">
                    Follow our documentation to set up your node and start earning rewards
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
