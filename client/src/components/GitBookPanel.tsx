import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GitBookPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GitBookPanel({ isOpen, onClose }: GitBookPanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-card border-l border-border shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">Documentation</h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:bg-muted"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <p className="text-sm text-muted-foreground">
                Access comprehensive documentation for Noderr Protocol, including guides, API references, and tutorials.
              </p>

              {/* Documentation Links */}
              <div className="space-y-3">
                <a
                  href="https://docs.noderr.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors group"
                >
                  <div>
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Getting Started
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Quick start guide and setup instructions
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>

                <a
                  href="https://docs.noderr.xyz/protocol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors group"
                >
                  <div>
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Protocol Overview
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Understanding the Noderr architecture
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>

                <a
                  href="https://docs.noderr.xyz/nodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors group"
                >
                  <div>
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Node Operators
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Setup and manage your node
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>

                <a
                  href="https://docs.noderr.xyz/staking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors group"
                >
                  <div>
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Staking Guide
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Learn about staking tiers and rewards
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>

                <a
                  href="https://docs.noderr.xyz/governance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors group"
                >
                  <div>
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Governance
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Participate in DAO decisions
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>

                <a
                  href="https://docs.noderr.xyz/api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors group"
                >
                  <div>
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      API Reference
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Complete API documentation
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>

              {/* Footer */}
              <div className="pt-6 mt-6 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Need help? Join our{' '}
                  <a
                    href="https://discord.com/invite/noderr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Discord community
                  </a>{' '}
                  or reach out on{' '}
                  <a
                    href="https://t.me/NoderrSupp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Telegram
                  </a>
                  .
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
