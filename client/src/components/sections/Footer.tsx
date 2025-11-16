import { Twitter, MessageCircle, Send, Instagram } from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Node Tiers', href: '#modes' },
    { name: 'Security', href: '#security' },
  ],
  resources: [
    { name: 'Documentation', href: 'https://docs.noderr.xyz' },
    { name: 'Whitepaper', href: 'https://noderr.xyz/whitepaper.pdf' },
    { name: 'Blog', href: 'https://blog.noderr.xyz' },
    { name: 'API', href: 'https://docs.noderr.xyz/api' },
  ],
  community: [
    { name: 'Discord', href: 'https://discord.com/invite/noderr' },
    { name: 'Telegram', href: 'https://t.me/NoderrSupp' },
    { name: 'Twitter', href: 'https://twitter.com/NoderrProtocol' },
    { name: 'Instagram', href: 'https://instagram.com/noderr' },
  ],
  legal: [
    { name: 'Terms of Service', href: 'https://noderr.xyz/terms' },
    { name: 'Privacy Policy', href: 'https://noderr.xyz/privacy' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/NoderrProtocol', label: 'Twitter' },
  { icon: MessageCircle, href: 'https://discord.com/invite/noderr', label: 'Discord' },
  { icon: Send, href: 'https://t.me/NoderrSupp', label: 'Telegram' },
  { icon: Instagram, href: 'https://instagram.com/noderr', label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Noderr Protocol" 
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-foreground">Noderr</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Decentralized node operator network with trust-weighted DeFi infrastructure.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-card border border-border hover:border-primary/30 flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Icon className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Community</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Noderr Protocol. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Built on Base L2</span>
            <span>•</span>
            <span>ZK-Governed</span>
            <span>•</span>
            <span>DAO-Controlled</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
