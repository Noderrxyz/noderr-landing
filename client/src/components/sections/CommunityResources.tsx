import { motion } from 'framer-motion';
import { MessageCircle, Send, Twitter, Github, BookOpen, FileText } from 'lucide-react';

const resources = [
  {
    icon: MessageCircle,
    name: 'Discord',
    description: 'Join 8,000+ traders in our community',
    link: 'https://discord.gg/noderr',
    color: 'from-[#5865F2] to-[#5865F2]',
  },
  {
    icon: Send,
    name: 'Telegram',
    description: 'Get instant updates and support',
    link: 'https://t.me/noderr',
    color: 'from-[#0088cc] to-[#0088cc]',
  },
  {
    icon: Twitter,
    name: 'Twitter',
    description: 'Follow for news and announcements',
    link: 'https://twitter.com/NoderrProtocol',
    color: 'from-[#1DA1F2] to-[#1DA1F2]',
  },
  {
    icon: Github,
    name: 'GitHub',
    description: 'Explore our open-source code',
    link: 'https://github.com/noderr',
    color: 'from-foreground to-foreground',
  },
  {
    icon: BookOpen,
    name: 'Documentation',
    description: 'Learn how to use Noderr',
    link: 'https://docs.noderr.xyz',
    color: 'from-primary to-accent',
  },
  {
    icon: FileText,
    name: 'Whitepaper',
    description: 'Read our technical overview',
    link: 'https://noderr.xyz/whitepaper.pdf',
    color: 'from-chart-3 to-chart-3',
  },
];

export function CommunityResources() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.7_0.15_195_/_0.08),transparent_50%)]" />
      
      <div className="container max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Join the <span className="text-gradient">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with traders, developers, and the Noderr team across multiple platforms.
          </p>
        </motion.div>

        {/* Resources grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.a
                key={resource.name}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${resource.color} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                      {resource.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Community Members', value: '12,000+' },
            { label: 'GitHub Stars', value: '2,400+' },
            { label: 'Discord Members', value: '8,000+' },
            { label: 'Daily Active Users', value: '1,200+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
