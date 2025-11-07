import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const problems = [
  'Centralized node operators create single points of failure',
  'Opaque reputation systems lack verifiable trust metrics',
  'Limited governance participation in protocol decisions',
  'Complex setup barriers prevent widespread adoption',
  'Reward structures favor large operators over community',
];

const solutions = [
  'Decentralized network with no single point of failure',
  'Zero-knowledge proofs provide verifiable trust scores',
  'Multi-tier governance with weighted voting power',
  'Simplified node deployment on Base L2',
  'Fair reward distribution across all tier levels',
];

export function ProblemSolution() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.65_0.2_210_/_0.1),transparent_50%)]" />
      
      <div className="container max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why <span className="text-gradient">Decentralized Infrastructure</span> Matters
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional node infrastructure is centralized and opaque. Noderr Protocol brings transparency and community control.
          </p>
        </motion.div>

        {/* Comparison grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Old Way</h3>
            </div>
            
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-destructive/20"
              >
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{problem}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gradient">Noderr Way</h3>
            </div>
            
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-primary/20 hover:border-primary/40 transition-colors"
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{solution}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
