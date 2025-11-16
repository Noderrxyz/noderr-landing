import { motion } from 'framer-motion';
import { Cpu, HardDrive, Wifi, Clock, AlertCircle } from 'lucide-react';

const requirements = [
  {
    icon: Cpu,
    title: 'CPU & Memory',
    micro: '2-core, 2GB RAM',
    validator: '8-core, 32GB RAM',
    guardian: '16-core, 64GB RAM',
    oracle: '32-core, 128GB RAM',
  },
  {
    icon: HardDrive,
    title: 'Storage',
    micro: '10GB',
    validator: '1TB NVMe SSD',
    guardian: '2TB NVMe SSD',
    oracle: '4TB NVMe SSD',
  },
  {
    icon: Wifi,
    title: 'Network',
    micro: '10 Mbps',
    validator: '100 Mbps',
    guardian: '500 Mbps',
    oracle: '1 Gbps',
  },
  {
    icon: Clock,
    title: 'Uptime',
    micro: 'No minimum',
    validator: '99%+',
    guardian: '99.5%+',
    oracle: '99.9%+',
  },

];

const additionalInfo = [
  {
    title: 'Risk Factors',
    description: 'Slashing may occur for extended downtime or malicious behavior. Higher tiers have higher accountability and slashing penalties.',
  },
  {
    title: 'Expected Rewards',
    description: 'Micro Nodes earn 5-10% APY. Validators earn 10-15% APY, Guardians earn 15-20% APY, and Oracles earn 20-25% APY, with Guardians and Oracles receiving additional stipends and profit share.',
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
            Hardware and network requirements vary by tier. Choose the tier that matches your infrastructure and commitment level.
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
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
      </div>
    </section>
  );
}
