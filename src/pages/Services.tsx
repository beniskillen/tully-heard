import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ServicesSection } from '@/components/home/ServicesSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SHOWREEL =
  'https://yuthbrxadentorgrsyar.supabase.co/storage/v1/object/sign/Tully%20Heard%20Consulting/Tully%20Heard%20Showreel%201.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNGE4MjlmYy0xNTZiLTQ1NzgtYWViNS01NDUxMmE0MjJiNDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJUdWxseSBIZWFyZCBDb25zdWx0aW5nL1R1bGx5IEhlYXJkIFNob3dyZWVsIDEubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjU0MTMwNywiZXhwIjo0OTA0NjA1MzA3fQ.nl_wBWjvZOC-zarLVgp6KwlHm36D9IDAoEd0lhpNGTU';

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="relative overflow-hidden pb-24 pt-40">
          <div className="absolute inset-0 overflow-hidden">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              src={SHOWREEL}
            />
            <div className="absolute inset-0 z-10 bg-black/50" />
          </div>
          <div className="container-narrow relative z-10 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto text-center">
              <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.125em] text-white/80">
                Services
              </p>
              <h1 className="mb-6 font-display text-4xl italic text-white sm:text-5xl lg:text-6xl">
                Practical strategy for complex decisions
              </h1>
              <p className="font-sans text-lg leading-relaxed text-white/80">
                We help Clubs and hospitality businesses make better strategic, investment and development decisions, and turn those decisions into commercial outcomes.
              </p>
            </motion.div>
          </div>
        </section>

        <ServicesSection />

        <section className="section-padding bg-background">
          <div className="container-narrow max-w-2xl text-center">
            <h2 className="mb-6 font-display text-3xl text-foreground sm:text-4xl">
              Not sure where to <span className="italic text-primary">start?</span>
            </h2>
            <p className="mb-8 font-sans text-lg leading-relaxed text-muted-foreground">
              If the challenge is unclear, complex or politically sensitive, we can help define the issue and get to a practical way forward.
            </p>
            <Link to="/contact">
              <Button variant="navy" size="xl" className="px-10">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
