# Noderr Protocol Landing Page

A world-class landing page for Noderr Protocol - DeFi's first evolutionary AI trading protocol.

## 🚀 Features

- **10 Comprehensive Sections**: Hero, Trust Signals, Problem/Solution, How It Works, Trading Modes, Testnet Advantages, Security, Competitive Comparison, Community Resources, and Final CTA
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Dark Theme**: Custom Noderr color scheme with primary blue (#0ea5e9), cyan accent (#06b6d4), and yellow highlights
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Card support
- **Accessibility**: WCAG AA compliant with keyboard navigation and screen reader support
- **Performance**: Optimized bundle size and lazy loading for fast load times

## 🛠️ Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: shadcn/ui
- **Form Validation**: React Hook Form + Zod

## 📦 Project Structure

```
client/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── sections/    # Landing page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustSignals.tsx
│   │   │   ├── ProblemSolution.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── ModesForEveryUser.tsx
│   │   │   ├── TestnetAdvantages.tsx
│   │   │   ├── Security.tsx
│   │   │   ├── CompetitiveComparison.tsx
│   │   │   ├── CommunityResources.tsx
│   │   │   ├── FinalCTA.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/          # shadcn/ui components
│   │   ├── Navigation.tsx
│   │   └── WaitlistForm.tsx
│   ├── pages/
│   │   └── Home.tsx
│   ├── App.tsx
│   └── index.css        # Global styles & theme
└── index.html
```

## 🎨 Design System

### Colors
- **Primary**: `oklch(0.65 0.2 210)` - Blue (#0ea5e9)
- **Accent**: `oklch(0.7 0.15 195)` - Cyan (#06b6d4)
- **Highlight**: `oklch(0.75 0.18 55)` - Yellow (#fbbf24)
- **Background**: `oklch(0.12 0 0)` - Deep black (#0a0a0a)
- **Card**: `oklch(0.18 0 0)` - Card background (#1a1a1a)

### Typography
- **Font**: Inter (400, 500, 600, 700, 800)
- **Headings**: Bold, large scale
- **Body**: Regular, comfortable line height

### Spacing
- Section padding: `py-16 sm:py-20 lg:py-24`
- Container max-width: `1280px`
- Responsive padding: `px-4 sm:px-6 lg:px-8`

## 🚀 Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📱 Responsive Breakpoints

- **Mobile**: 375px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators on all interactive elements
- Reduced motion support for animations
- Color contrast meets WCAG AA standards

## 🔍 SEO

- Comprehensive meta tags
- Open Graph tags for social sharing
- Twitter Card support
- Semantic HTML structure
- robots.txt included
- Optimized page titles and descriptions

## 📊 Performance

- Code splitting for optimal bundle size
- Lazy loading for images
- Optimized animations (60fps target)
- Minimal dependencies
- Tree-shaking enabled

## 🔗 External Links

The landing page includes links to:
- **dApp**: `https://app.noderr.xyz`
- **Documentation**: `https://docs.noderr.xyz`
- **Whitepaper**: `https://noderr.xyz/whitepaper.pdf`
- **Social Media**: Discord, Telegram, Twitter, GitHub

## 📝 Content Sections

1. **Hero**: Main value proposition with CTAs
2. **Trust Signals**: 4 key features (Evolutionary Learning, Transparency, Cross-Protocol, Predictive)
3. **Problem/Solution**: Comparison of old way vs Noderr way
4. **How It Works**: 3-step process (Connect, Learn, Execute)
5. **Trading Modes**: Autonomous, Guided, and Pro modes
6. **Testnet Advantages**: 4 benefits of joining testnet
7. **Security**: Audit badges and security features
8. **Competitive Comparison**: Feature comparison table
9. **Community Resources**: Social links and community stats
10. **Final CTA**: Waitlist form with email capture
11. **Footer**: Comprehensive links and branding

## 🎯 Call-to-Actions

- **Primary CTA**: "Join Waitlist" (scrolls to waitlist form)
- **Secondary CTA**: "Launch dApp" (opens app.noderr.xyz)
- **Tertiary CTAs**: Various section-specific CTAs

## 🔐 Environment Variables

No environment variables required for the landing page. All configuration is handled through Vite's built-in variables:
- `VITE_APP_TITLE`: Page title
- `VITE_APP_LOGO`: Logo image path

## 📄 License

Copyright © 2025 Noderr Protocol. All rights reserved.

## 🤝 Contributing

This is a production landing page. For contributions, please contact the Noderr team.

---

Built with ❤️ by the Noderr team
