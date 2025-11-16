import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // TODO: Replace with actual API endpoint
      // API call would go here:
      // await fetch('/api/waitlist', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, walletAddress, timestamp: new Date() })
      // });

      setSuccess(true);
      setEmail('');
      setWalletAddress('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 rounded-2xl bg-primary/10 border border-primary/20"
      >
        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">You're on the list! 🎉</h3>
        <p className="text-muted-foreground mb-6">
          We'll notify you when testnet launches. Check your email for updates.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="text-sm text-primary hover:underline"
        >
          Sign up another email
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      {/* Email input */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
          Email Address <span className="text-destructive">*</span>
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="satoshi@example.com"
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Wallet address input (optional) */}
      <div>
        <label htmlFor="wallet" className="block text-sm font-medium mb-2 text-foreground">
          Wallet Address <span className="text-muted-foreground text-xs">(Optional)</span>
        </label>
        <input
          id="wallet"
          type="text"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          placeholder="0x..."
          className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
        />
      </div>

      {/* Error message */}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-destructive text-sm"
        >
          {error}
        </motion.p>
      )}

      {/* Submit button */}
      <Button
        type="submit"
        disabled={loading}
        className="w-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
            Joining...
          </>
        ) : (
          'Join Waitlist'
        )}
      </Button>

      {/* Privacy note */}
      <p className="text-xs text-muted-foreground text-center">
        By joining, you agree to receive updates about Noderrrr Protocol. We respect your privacy and will never share your information.
      </p>
    </form>
  );
}
