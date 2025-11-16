import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, AlertTriangle, CheckCircle2 } from 'lucide-react';

export function ProblemSolution() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Beyond Inflationary Yields: <span className="text-gradient">The Problem with Modern DeFi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Most DeFi protocols rely on unsustainable token emissions to attract liquidity. This creates a vicious cycle where high initial yields attract mercenary capital, but constant sell pressure from emissions drives token prices down, eventually collapsing the entire system. Noderr breaks this cycle with a fundamentally different economic model.
          </p>
        </motion.div>

        {/* Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="rounded-2xl overflow-hidden border border-border bg-card p-4">
            <img 
              src="/defi-comparison.png" 
              alt="Traditional DeFi vs Noderr Model Comparison" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Traditional DeFi */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">The Inflationary Death Spiral</h3>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Traditional DeFi protocols mint new tokens to pay staking rewards, creating an unsustainable feedback loop that inevitably leads to collapse.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">High Initial APY (100-300%)</h4>
                  <p className="text-sm text-muted-foreground">Attracts yield farmers who have no loyalty to the protocol.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Constant Token Emissions</h4>
                  <p className="text-sm text-muted-foreground">New tokens are minted continuously, diluting existing holders.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Sell Pressure Accelerates</h4>
                  <p className="text-sm text-muted-foreground">Farmers dump rewards immediately, driving token price down 70-90%.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Liquidity Evaporates</h4>
                  <p className="text-sm text-muted-foreground">As token price falls, TVL collapses and the protocol becomes a ghost town.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Noderr Model */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-2xl bg-card border border-primary/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">The Noderr Model: Sustainable Revenue</h3>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Noderr generates real revenue from autonomous trading and distributes a capped percentage to participants. No inflation, no emissions, no death spiral.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Real Yield (8-15% APY)</h4>
                  <p className="text-sm text-muted-foreground">All rewards funded from ATE trading profits, not token emissions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Zero Operational Inflation</h4>
                  <p className="text-sm text-muted-foreground">Fixed 100M token supply. No new tokens are ever minted for rewards.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Deflationary Buybacks</h4>
                  <p className="text-sm text-muted-foreground">15-20% of revenue used for token buybacks and burns, creating upward price pressure.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Base-Rate Governor Protection</h4>
                  <p className="text-sm text-muted-foreground">Rewards capped at 35-45% of trailing 4-quarter revenue, ensuring treasury sustainability.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-block p-6 rounded-2xl bg-primary/5 border border-primary/20 max-w-3xl">
            <p className="text-lg text-foreground font-semibold mb-2">
              The result? A protocol that can sustain itself indefinitely.
            </p>
            <p className="text-sm text-muted-foreground">
              Noderr's economic model aligns incentives for long-term participation, not short-term extraction. This is how DeFi should work.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
