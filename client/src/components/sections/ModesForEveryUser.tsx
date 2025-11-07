import { motion } from 'framer-motion';
import { Sparkles, Compass, Code } from 'lucide-react';

const modes = [
  {
    icon: Sparkles,
    name: 'Autonomous',
    level: 'Beginner Friendly',
    description: 'Set it and forget it. AI handles everything from strategy selection to execution.',
    features: [
      'Fully automated trading',
      'Pre-configured strategies',
      'Risk management included',
      'Perfect for beginners',
    ],
    color: 'primary',
  },
  {
    icon: Compass,
    name: 'Guided',
    level: 'Intermediate',
    description: 'AI suggests opportunities, you approve trades. Perfect balance of automation and control.',
    features: [
      'AI-powered suggestions',
      'Manual approval required',
      'Learn as you trade',
      'Customizable parameters',
    ],
    color: 'accent',
  },
  {
    icon: Code,
    name: 'Pro',
    level: 'Advanced',
    description: 'Full control with AI assistance. Build custom strategies and leverage AI insights.',
    features: [
      'Custom strategy builder',
      'Advanced analytics',
      'API access',
      'Maximum flexibility',
    ],
    color: 'chart-3',
  },
];

export function ModesForEveryUser() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.7_0.15_195_/_0.1),transparent_50%)]" />
      
      <div className="container max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Three Modes</span> for Every Trader
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're just starting or you're a seasoned pro, Noderr adapts to your experience level.
          </p>
        </motion.div>

        {/* Modes grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {modes.map((mode, index) => {
            const Icon = mode.icon;
            return (
              <motion.div
                key={mode.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    {/* Icon & Badge */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                        {mode.level}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {mode.name}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {mode.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3">
                      {mode.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button className="w-full mt-8 px-6 py-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary font-semibold transition-all duration-300 group-hover:scale-105">
                      Try {mode.name} Mode
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-muted-foreground mt-12"
        >
          Switch between modes anytime. No commitment required.
        </motion.p>
      </div>
    </section>
  );
}
