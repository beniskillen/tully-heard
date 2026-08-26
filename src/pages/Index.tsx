import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { ClientLogoTicker } from '@/components/home/ClientLogoTicker';
import { ApproachSection } from '@/components/home/ApproachSection';
import { ProofSection } from '@/components/home/ProofSection';
import { CaseStudiesSection } from '@/components/home/CaseStudiesSection';
import { DirectorsSection } from '@/components/home/DirectorsSection';
import { CtaSection } from '@/components/home/CtaSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ClientLogoTicker />
        <ApproachSection />
        <ProofSection compact />
        <CaseStudiesSection />
        <DirectorsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
