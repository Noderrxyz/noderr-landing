import { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets, ArrowLeft, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useLocation } from 'wouter';

// Faucet contract address on Base Sepolia
const FAUCET_ADDRESS = '0x5bbf3F7411dB942c1ee4084080406d69293628c9';
const DRIP_AMOUNT = '1,000 NODR';
const COOLDOWN_PERIOD = '24 hours';

export default function Faucet() {
  const [, setLocation] = useLocation();
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [isDripping, setIsDripping] = useState(false);
  const [dripSuccess, setDripSuccess] = useState(false);
  const [dripError, setDripError] = useState<string | null>(null);

  const handleConnect = async () => {
    setIsConnecting(true);
    try {
      // Check if MetaMask is installed
      if (typeof window.ethereum === 'undefined') {
        alert('Please install MetaMask to use the faucet!');
        setIsConnecting(false);
        return;
      }

      // Request account access
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      setAddress(accounts[0]);
      setIsConnected(true);
    } catch (error) {
      console.error('Connection failed:', error);
      alert('Failed to connect wallet. Please try again.');
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDrip = async () => {
    if (!address) return;
    
    setIsDripping(true);
    setDripError(null);
    setDripSuccess(false);

    try {
      // Call faucet contract
      const tx = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          from: address,
          to: FAUCET_ADDRESS,
          data: '0x9f678cca', // drip() function selector
        }],
      });

      setDripSuccess(true);
      console.log('Drip successful:', tx);
    } catch (error: any) {
      console.error('Drip failed:', error);
      
      if (error.message?.includes('cooldown')) {
        setDripError('You must wait 24 hours between drips. Please try again later.');
      } else if (error.message?.includes('daily limit')) {
        setDripError('Daily faucet limit reached. Please try again tomorrow.');
      } else {
        setDripError(error.message || 'Transaction failed. Please try again.');
      }
    } finally {
      setIsDripping(false);
    }
  };

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
      <div className="container max-w-2xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Droplets className="h-12 w-12 text-primary" />
              <h1 className="text-4xl font-bold">Testnet Faucet</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Get free NODR tokens for testing on Base Sepolia
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Request Testnet Tokens</CardTitle>
              <CardDescription>
                Connect your wallet to receive {DRIP_AMOUNT} every {COOLDOWN_PERIOD}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Info Alert */}
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Testnet Only</AlertTitle>
                <AlertDescription>
                  These tokens have no real value and are only for testing purposes on Base Sepolia testnet.
                </AlertDescription>
              </Alert>

              {/* Faucet Details */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
                <div>
                  <div className="text-sm text-muted-foreground">Amount per drip</div>
                  <div className="text-lg font-semibold">{DRIP_AMOUNT}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Cooldown period</div>
                  <div className="text-lg font-semibold">{COOLDOWN_PERIOD}</div>
                </div>
              </div>

              {/* Wallet Connection */}
              {!isConnected ? (
                <Button
                  onClick={handleConnect}
                  disabled={isConnecting}
                  className="w-full"
                  size="lg"
                >
                  {isConnecting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    'Connect Wallet'
                  )}
                </Button>
              ) : (
                <div className="space-y-4">
                  {/* Connected Address */}
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Connected Wallet</div>
                    <div className="font-mono text-sm break-all">{address}</div>
                  </div>

                  {/* Drip Button */}
                  <Button
                    onClick={handleDrip}
                    disabled={isDripping || dripSuccess}
                    className="w-full"
                    size="lg"
                  >
                    {isDripping ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Requesting Tokens...
                      </>
                    ) : dripSuccess ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Tokens Sent!
                      </>
                    ) : (
                      <>
                        <Droplets className="mr-2 h-4 w-4" />
                        Request {DRIP_AMOUNT}
                      </>
                    )}
                  </Button>
                </div>
              )}

              {/* Success Message */}
              {dripSuccess && (
                <Alert className="border-green-500 bg-green-50 dark:bg-green-950">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>
                    {DRIP_AMOUNT} has been sent to your wallet. You can request more tokens in {COOLDOWN_PERIOD}.
                  </AlertDescription>
                </Alert>
              )}

              {/* Error Message */}
              {dripError && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{dripError}</AlertDescription>
                </Alert>
              )}

              {/* Instructions */}
              <div className="text-sm text-muted-foreground space-y-2 pt-4 border-t">
                <p className="font-semibold">How to use:</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>Connect your wallet (MetaMask recommended)</li>
                  <li>Make sure you're on Base Sepolia testnet</li>
                  <li>Click "Request {DRIP_AMOUNT}" to receive tokens</li>
                  <li>Wait {COOLDOWN_PERIOD} before requesting again</li>
                </ol>
              </div>

              {/* Help Links */}
              <div className="flex items-center justify-center gap-4 text-sm">
                <a 
                  href="https://docs.base.org/using-base/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Add Base Sepolia to MetaMask
                </a>
                <span className="text-muted-foreground">•</span>
                <a 
                  href="https://app.noderr.xyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Launch dApp
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
