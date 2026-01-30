import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { ClientsSection } from '@/components/home/ClientsSection';
import { HowWeWorkSection } from '@/components/home/HowWeWorkSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { CaseStudiesSection } from '@/components/home/CaseStudiesSection';
import { TeamSection } from '@/components/home/TeamSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ClientsSection />
        <HowWeWorkSection />
        <ServicesSection />
        <CaseStudiesSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
