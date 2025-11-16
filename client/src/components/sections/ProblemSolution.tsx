import { motion } from 'framer-motion';

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
            Most DeFi protocols rely on inflationary token emissions to attract liquidity. This creates a vicious cycle where high initial yields attract mercenary capital, but constant sell pressure from emissions drives token prices down, eventually collapsing the system. Noderrrr breaks this cycle with a sustainable, revenue-driven economic model.
          </p>
        </motion.div>

        {/* Unified Comparison Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="rounded-2xl overflow-hidden border border-border bg-card p-6">
            <img 
              src="/unified-comparison.png" 
              alt="Traditional DeFi vs Noderrrr Protocol: The Evolution from Inflationary Death Spiral to Sustainable Revenue" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block p-6 rounded-2xl bg-primary/5 border border-primary/20 max-w-3xl">
            <p className="text-lg text-foreground font-semibold mb-2">
              The result is a protocol built for long-term sustainability.
            </p>
            <p className="text-sm text-muted-foreground">
              Noderrrr's economic model aligns incentives for long-term participation, not short-term extraction. This is how DeFi should work.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
