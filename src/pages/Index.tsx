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
import mudgeeLogo from '@/assets/logos/club-mudgee.svg.asset.json';
import doyloLogo from '@/assets/logos/doylo-lifestyle-group.svg.asset.json';
import yogisLogo from '@/assets/logos/doylos-sports-bar.png.asset.json';
import clubsNswLogo from '@/assets/logos/clubs-nsw.png.asset.json';
import gosfordLogo from '@/assets/logos/gosford-rsl.png.asset.json';
import northBondiLogo from '@/assets/logos/north-bondi-rsl-club.png.asset.json';
import growersLogo from '@/assets/logos/the-growers-by-ponte.png.asset.json';
import cabraValeLogo from '@/assets/logos/cabra-vale-diggers.svg.asset.json';
import centralRealLogo from '@/assets/logos/central-real-capital.svg.asset.json';
import karuahLogo from '@/assets/logos/karuah-rsl-club.svg.asset.json';
import moorePark from '@/assets/logos/moore-park.svg.asset.json';
import oaksHotelLogo from '@/assets/logos/the-oaks-hotel.svg.asset.json';
import wollongongLogo from '@/assets/logos/wollongong-city-of-innovation.svg.asset.json';

const trustLogos = [
  { name: 'Gosford RSL', src: gosfordLogo.url },
  { name: 'Bankstown Sports', src: bankstownLogo.url },
  { name: 'North Bondi RSL Club', src: northBondiLogo.url },
  { name: 'ClubsNSW', src: clubsNswLogo.url },
  { name: 'The Growers by Ponte', src: growersLogo.url },
  { name: 'Club Mudgee', src: mudgeeLogo.url },
  { name: "Yogi's Sports Bar", src: yogisLogo.url },
  { name: 'Doylo Lifestyle Group', src: doyloLogo.url },
  { name: 'Cabra Vale Diggers', src: cabraValeLogo.url },
  { name: 'Central Real Capital', src: centralRealLogo.url },
  { name: 'Karuah RSL Club', src: karuahLogo.url },
  { name: 'Moore Park', src: moorePark.url },
  { name: 'The Oaks Hotel', src: oaksHotelLogo.url },
  { name: 'Wollongong City of Innovation', src: wollongongLogo.url },
];

const capabilities = [
  {
    icon: Compass,
    title: 'Clarify the opportunity',
    body: 'Understand the commercial, customer and strategic opportunity by identifying the core target market. ',
  },
  {
    icon: ShieldCheck,
    title: 'Site positioning & product',
    body: "Find the 'why' behind the opportunity with our proprietary market diagnostic we assess feasibility, risk and return. ",
  },
  {
    icon: Repeat,
    title: 'Capital requirements & Options',
    body: 'With data backed insights, we then go deep into the options available to ensure feasibility on all projects. ',
  },
  {
    icon: LayoutGrid,
    title: 'Financial assessment ',
    body: 'With options on the table, we then put our financial modelling tools into work to help produce a clear assessment on expected returns. ',
  },
  {
    icon: Users,
    title: 'Recommendations & strategy',
    body: 'Once the model is complete we produce a clear strategy, grounded in reality.  ',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    body: 'With the strategy complete we leverage our extensive network to help ensure our recommendations can be deployed. ',
  },
];

const directors = [
  {
    name: 'John Tully',
    role: 'Director',
    image: '/jt-headshot.jpg',
    bio: 'John has over 20 years’ experience in leadership, consulting, venue ownership and operational improvement across the hospitality, entertainment and leisure industry.',
  },
  {
    name: 'Luke Heard',
    role: 'Director',
    image: '/lh-headshot.png',
    bio: 'Luke has first-hand experience in starting and establishing hospitality businesses, alongside technical expertise in business advisory, management consulting, private equity and law.',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />

        {/* Trusted By */}
        <section className="py-12 bg-[#EEF0F2] border-y border-border overflow-hidden">
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
                  className="h-14 md:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity shrink-0"
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.12, duration: 0.7, ease: 'easeOut' }}
                  className="text-center group"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.15, type: 'spring', stiffness: 180, damping: 14 }}
                    className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300"
                  >
                    <stat.icon className="text-primary" size={24} />
                  </motion.div>
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
                Our unique process blends lived industry experience with a contemporary, insights-led approach to decision-making. By combining data analysis, customer research, and strategic foresight, we help venues create exceptional customer experiences and achieve enduring commercial success.
              </p>
            </motion.div>

            <div className="text-center mb-10 lg:mb-14">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#122033]/[0.04] border border-[#122033]/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#479E92]" />
                <p className="text-xs font-sans uppercase tracking-[0.16em] font-semibold text-[#122033]">
                  How we deliver measured growth
                </p>
                <span className="w-1.5 h-1.5 rounded-full bg-[#479E92]" />
              </div>
            </div>


            <div className="relative">
              {/* Connecting line - top row */}
              <div className="hidden lg:block absolute top-10 left-[16.666%] right-[16.666%] h-px pointer-events-none">
                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              </div>
              {/* Connecting line - bottom row */}
              <div className="hidden lg:block absolute top-[calc(50%+2.5rem)] left-[16.666%] right-[16.666%] h-px pointer-events-none">
                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-y-16 lg:gap-x-10 relative">
                {capabilities.map((c, i) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: i * 0.08, duration: 0.6, ease: 'easeOut' }}
                    className="relative group flex flex-col items-center text-center bg-white/50 rounded-2xl p-6 lg:p-8 border border-border/40 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Step circle with icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + 0.15, type: 'spring', stiffness: 200, damping: 14 }}
                      className="relative z-10 w-20 h-20 rounded-full bg-card border-2 border-primary flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:scale-110 transition-all duration-300"
                    >
                      <c.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={32} />
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#122033] text-white text-xs font-sans font-semibold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </motion.div>

                    {/* Arrow between steps (desktop only, within rows) */}
                    {(i === 0 || i === 1 || i === 3 || i === 4) && (
                      <div className="hidden lg:flex absolute top-10 -right-6 z-20 items-center justify-center">
                        <ArrowRight className="text-primary/50" size={22} />
                      </div>
                    )}
                    {/* Down arrow between row 1 and row 2 */}
                    {i === 2 && (
                      <div className="hidden lg:flex absolute top-[calc(100%+1.25rem)] left-1/2 -translate-x-1/2 z-20 items-center justify-center">
                        <div className="w-px h-6 bg-gradient-to-b from-primary/40 to-transparent" />
                      </div>
                    )}

                    <h3 className="text-xl lg:text-2xl font-display text-foreground mb-3 px-2">{c.title}</h3>
                    <p className="text-muted-foreground font-sans text-base leading-relaxed px-2">{c.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work — Carousel */}
        <CaseStudiesSection />

        {/* Our Directors */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 max-w-3xl mx-auto"
            >
              <p className="text-primary text-sm font-sans uppercase tracking-[0.125em] font-semibold mb-4">
                Our Directors
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-6">
                Led by operators who understand the{' '}
                <span className="italic text-primary">club and hospitality sector</span>
              </h2>
              <p className="text-muted-foreground font-sans text-lg leading-relaxed">
                John and Luke combine practical venue ownership experience with strategic advisory capability to guide complex decisions from start to finish.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {directors.map((d, i) => (
                <motion.div
                  key={d.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
                  whileHover={{ y: -6 }}
                  className="feature-card text-center group"
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                    <img
                      src={d.image}
                      alt={d.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-display text-foreground mb-1">{d.name}</h3>
                  <p className="text-primary font-sans uppercase tracking-[0.125em] font-semibold text-sm mb-3">
                    {d.role}
                  </p>
                  <p className="text-muted-foreground font-sans leading-relaxed">{d.bio}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link to="/people">
                <Button variant="navy" size="lg" className="gap-2">
                  View full team
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#122033]/[0.04] border border-[#122033]/10 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#479E92]" />
                  <p className="text-xs font-sans uppercase tracking-[0.16em] font-semibold text-[#122033]">
                    Start the conversation
                  </p>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#479E92]" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-6">
                  Have a venue decision to{' '}
                  <span className="italic text-primary">work through?</span>
                </h2>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Compass,
                  title: 'Define the opportunity',
                  body: 'We help clarify the commercial, customer and strategic opportunity before decisions are made.',
                },
                {
                  icon: Users,
                  title: 'Consultative approach',
                  body: 'A relationship-driven process that ensures recommendations are the right fit for your venue.',
                },
                {
                  icon: TrendingUp,
                  title: 'Invest with clarity',
                  body: 'Data-backed insights and practical next steps that help you invest with confidence.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
                  whileHover={{ y: -6 }}
                  className="bg-background rounded-2xl p-8 border border-border/40 hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="text-primary" size={26} />
                  </div>
                  <h3 className="text-xl font-display text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-sans leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-8">
                Whether you’re considering redevelopment, repositioning, feasibility or strategic planning, book a time to chat. We’ll listen, ask the right questions, and share data-backed insights that help you invest with clarity.
              </p>
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
