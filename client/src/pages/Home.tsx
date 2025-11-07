import { Hero } from '@/components/sections/Hero';
import { TrustSignals } from '@/components/sections/TrustSignals';
import { ProblemSolution } from '@/components/sections/ProblemSolution';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ModesForEveryUser } from '@/components/sections/ModesForEveryUser';
import { TestnetAdvantages } from '@/components/sections/TestnetAdvantages';
import { Security } from '@/components/sections/Security';
import { CompetitiveComparison } from '@/components/sections/CompetitiveComparison';
import { CommunityResources } from '@/components/sections/CommunityResources';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustSignals />
      <ProblemSolution />
      <HowItWorks />
      <ModesForEveryUser />
      <TestnetAdvantages />
      <Security />
      <CompetitiveComparison />
      <CommunityResources />
      <FinalCTA />
      <Footer />
    </div>
  );
}
