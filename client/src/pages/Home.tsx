import { Navigation } from '@/components/Navigation';
import { BackToTop } from '@/components/BackToTop';
import { SkipToContent } from '@/components/SkipToContent';
import { Hero } from '@/components/sections/Hero';
import { ProblemSolution } from '@/components/sections/ProblemSolution';
import { ProprietaryTech } from '@/components/sections/ProprietaryTech';
import { HowYouEarn } from '@/components/sections/HowYouEarn';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ModesForEveryUser } from '@/components/sections/ModesForEveryUser';
import { TestnetAdvantages } from '@/components/sections/TestnetAdvantages';
import { Security } from '@/components/sections/Security';
import { NodeRequirements } from '@/components/sections/NodeRequirements';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <SkipToContent />
      <Navigation />
      <main id="main-content">
        <Hero />
        <ProblemSolution />
        <ProprietaryTech />
        <HowYouEarn />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="modes">
          <ModesForEveryUser />
        </div>
        <NodeRequirements />
        <TestnetAdvantages />
        <div id="security">
          <Security />
        </div>
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
