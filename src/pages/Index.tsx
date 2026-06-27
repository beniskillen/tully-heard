import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { CaseStudiesSection } from '@/components/home/CaseStudiesSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Compass,
  ShieldCheck,
  Repeat,
  LayoutGrid,
  Users,
  Rocket,
  TrendingUp,
  Award,
  Calendar,
} from 'lucide-react';
import { AnimatedStat } from '@/components/AnimatedStat';

import bankstownLogo from '@/assets/logos/bankstown-sports.png.asset.json';
import mudgeeLogo from '@/assets/logos/club-mudgee.png.asset.json';
import clubsNswLogo from '@/assets/logos/clubs-nsw.png.asset.json';
import doyloLogo from '@/assets/logos/doylo-lifestyle-group.png.asset.json';
import yogisLogo from '@/assets/logos/doylos-sports-bar.png.asset.json';
import gosfordLogo from '@/assets/logos/gosford-rsl.png.asset.json';
import northBondiLogo from '@/assets/logos/north-bondi-rsl-club.png.asset.json';
import growersLogo from '@/assets/logos/the-growers-by-ponte.png.asset.json';

const trustLogos = [
  { name: 'Gosford RSL', src: gosfordLogo.url },
  { name: 'Bankstown Sports', src: bankstownLogo.url },
  { name: 'North Bondi RSL Club', src: northBondiLogo.url },
  { name: 'ClubsNSW', src: clubsNswLogo.url },
  { name: 'The Growers by Ponte', src: growersLogo.url },
  { name: 'Club Mudgee', src: mudgeeLogo.url },
  { name: "Yogi's Sports Bar", src: yogisLogo.url },
  { name: 'Doylo Lifestyle Group', src: doyloLogo.url },
];

const capabilities = [
  {
    icon: Compass,
    title: 'Clarify the opportunity',
    body: 'Understand the commercial, customer and strategic opportunity before decisions are made.',
  },
  {
    icon: ShieldCheck,
    title: 'Test major investment decisions',
    body: 'Assess feasibility, risk, staging and long-term return before capital is committed.',
  },
  {
    icon: Repeat,
    title: 'Reposition venues for changing expectations',
    body: 'Help clubs and hospitality venues stay relevant to members, guests and emerging audiences.',
  },
  {
    icon: LayoutGrid,
    title: 'Improve existing spaces',
    body: 'Identify how current assets can work harder through better utilisation, flow and customer experience.',
  },
  {
    icon: Users,
    title: 'Support boards and management teams',
    body: 'Provide clear, independent advice for complex decisions and stakeholder alignment.',
  },
  {
    icon: Rocket,
    title: 'Turn strategy into action',
    body: 'Stay involved beyond the plan so recommendations can move into practical implementation.',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />

        {/* Trusted By */}
        <section className="py-12 bg-card border-y border-border overflow-hidden">
          <div className="container-narrow">
            <p className="text-center text-xs font-sans uppercase tracking-[0.2em] font-semibold text-muted-foreground mb-8">
              Trusted by leading clubs and hospitality venues
            </p>
          </div>
          <div className="relative">
            <div className="flex w-max animate-marquee gap-16 items-center">
              {[...trustLogos, ...trustLogos].map((logo, i) => (
                <img
                  key={`${logo.name}-${i}`}
                  src={logo.src}
                  alt={logo.name}
                  className="h-14 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity shrink-0"
                />
              ))}
            </div>
          </div>
        </section>



        {/* Driven by Insights */}
        <section className="section-padding bg-background">
          <div className="container-narrow text-center max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-6">
                Driven by Insights.{' '}
                <span className="italic text-primary">Focused on Outcomes</span>
              </h2>
              <p className="text-muted-foreground font-sans text-lg leading-relaxed">
                Our unique process blends lived industry experience with a contemporary, insights-led approach to decision-making. By combining data analysis, customer research, and strategic foresight, we help venues create exceptional customer experiences and achieve enduring commercial success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Animated Stats Band */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container-narrow">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Calendar, value: '25+', label: 'Years industry experience' },
                { icon: Users, value: '36,000+', label: 'Members reached across projects' },
                { icon: Award, value: '20+', label: 'Major venue engagements' },
                { icon: TrendingUp, value: '200+', label: 'Million in capital advised' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="text-primary" size={22} />
                  </div>
                  <div className="text-4xl md:text-5xl font-display text-foreground mb-2">
                    <AnimatedStat value={stat.value} />
                  </div>
                  <p className="text-xs md:text-sm font-sans uppercase tracking-[0.15em] text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Uncertainty to clarity */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mb-12"
            >
              <p className="text-primary text-sm font-sans uppercase tracking-[0.125em] font-semibold mb-4">
                How we help
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-6">
                We help venues move from uncertainty to a{' '}
                <span className="italic text-primary">clear way forward</span>
              </h2>
              <p className="text-muted-foreground font-sans text-lg leading-relaxed">
                Whether the challenge is redevelopment, utilisation, market relevance, commercial performance or board decision-making, our role is to bring the analysis, judgement and practical industry experience needed to define the right path.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="feature-card group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                    <c.icon className="text-primary" size={26} />
                  </div>
                  <h3 className="text-xl font-display text-foreground mb-3">{c.title}</h3>
                  <p className="text-muted-foreground font-sans leading-relaxed">{c.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Work — Carousel */}
        <CaseStudiesSection />

        {/* CTA */}
        <section className="section-padding bg-card">
          <div className="container-narrow max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-6">
                Have a venue decision to{' '}
                <span className="italic text-primary">work through?</span>
              </h2>
              <div className="space-y-5 text-muted-foreground font-sans text-lg leading-relaxed mb-8">
                <p>
                  If you are considering a redevelopment, repositioning, feasibility review or strategic planning process, Tully Heard can help define the opportunity and the practical next step.
                </p>
                <p>
                  Our 25 years of experience have taught us to take a relationship-driven, consultative approach to every engagement.
                </p>
                <p>
                  This approach ensures our recommendations are the right fit for your club or venue, not just the most obvious solution.
                </p>
                <p>
                  Whether you’re exploring new opportunities or assessing how to make the best use of available capital, book a time to chat.
                </p>
                <p>
                  We’ll listen, ask the right questions, and share data-backed insights that help you invest with clarity.
                </p>
              </div>
              <Link to="/contact">
                <Button variant="navy" size="xl" className="px-10">
                  Contact us
                </Button>
              </Link>
            </motion.div>
          </div>

        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
