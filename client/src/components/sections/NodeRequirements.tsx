import { motion } from 'framer-motion';
import { Cpu, HardDrive, Wifi, Clock, AlertCircle } from 'lucide-react';

const requirements = [
  {
    icon: Cpu,
    title: 'CPU & Memory',
    micro: '2 cores, 4GB RAM',
    validator: '4 cores, 8GB RAM',
    guardian: '8 cores, 16GB RAM',
    oracle: '16 cores, 32GB RAM',
  },
  {
    icon: HardDrive,
    title: 'Storage',
    micro: '50GB SSD',
    validator: '100GB SSD',
    guardian: '250GB SSD',
    oracle: '500GB NVMe',
  },
  {
    icon: Wifi,
    title: 'Network',
    micro: '10 Mbps',
    validator: '50 Mbps',
    guardian: '100 Mbps',
    oracle: '1 Gbps',
  },
  {
    icon: Clock,
    title: 'Uptime',
    micro: '90%+',
    validator: '95%+',
    guardian: '98%+',
    oracle: '99.9%+',
  },
];

const additionalInfo = [
  {
    title: 'Time Commitment',
    description: 'Micro nodes require minimal monitoring. Higher tiers need active participation in governance and strategy validation.',
  },
  {
    title: 'Risk Factors',
    description: 'Slashing may occur for extended downtime or malicious behavior. Testnet has no real financial risk.',
  },
  {
    title: 'Expected Rewards',
    description: 'Rewards scale with tier and TrustScore. Higher tiers earn 1.5x-3x base rewards. Exact APY varies with network activity.',
  },
];

export function NodeRequirements() {
  return (
    <section className="section-padding bg-card/20">
      <div className="container max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Node <span className="text-gradient">Requirements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hardware and network requirements vary by tier. Choose the tier that matches your infrastructure.
          </p>
        </motion.div>

        {/* Requirements table */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 text-muted-foreground font-semibold">Requirement</th>
                <th className="text-center p-4 text-foreground font-semibold">Micro Node</th>
                <th className="text-center p-4 text-foreground font-semibold">Validator</th>
                <th className="text-center p-4 text-foreground font-semibold">Guardian</th>
                <th className="text-center p-4 text-foreground font-semibold">Oracle</th>
              </tr>
            </thead>
            <tbody>
              {requirements.map((req, index) => {
                const Icon = req.icon;
                return (
                  <motion.tr
                    key={req.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-border/50 hover:bg-card/50 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{req.title}</span>
                      </div>
                    </td>
                    <td className="text-center p-4 text-muted-foreground">{req.micro}</td>
                    <td className="text-center p-4 text-muted-foreground">{req.validator}</td>
                    <td className="text-center p-4 text-muted-foreground">{req.guardian}</td>
                    <td className="text-center p-4 text-muted-foreground">{req.oracle}</td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Additional information */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-start gap-3 mb-3">
                <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <h3 className="text-lg font-bold text-foreground">{info.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {info.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 p-6 rounded-xl bg-primary/5 border border-primary/20"
        >
          <p className="text-center text-muted-foreground">
            <span className="font-semibold text-foreground">Testnet Note:</span> Hardware requirements are relaxed for testnet. 
            You can run any tier on a standard VPS or home computer for testing purposes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
