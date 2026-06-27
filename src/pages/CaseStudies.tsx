import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  CheckCircle2,
  Sparkles,
  Building2,
  MapPin,
} from 'lucide-react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import gosfordImg from '@/assets/cases/gosford-rsl.jpeg.asset.json';
import yogisImg from '@/assets/cases/yogis-chatswood.webp.asset.json';
import shoalhavenImg from '@/assets/cases/shoalhaven.png.asset.json';
import mudgeeImg from '@/assets/cases/club-mudgee.webp.asset.json';
import bankstownImg from '@/assets/cases/bankstown.jpg.asset.json';
import doyloImg from '@/assets/cases/doylo.jpg.asset.json';

type Stat = { value: string; label: string };

interface FullCase {
  id: string;
  title: string;
  headline: string;
  intro: string;
  image: string;
  result: string;
  stats: Stat[];
  challenge: string;
  role: string;
  outcome: string;
  proof: string[];
}

const fullCases: FullCase[] = [
  {
    id: 'gosford-rsl',
    title: 'Gosford RSL',
    headline: 'Strategic direction for a major venue transformation',
    intro:
      'A major redevelopment that repositioned the club as a leading dining, entertainment and community destination on the Central Coast.',
    image: gosfordImg.url,
    result: 'Major venue transformation',
    stats: [
      { value: '4', label: 'Destination drivers: dining, events, sport and brewery' },
      { value: '36,000+', label: 'Member community reached by the new venue' },
      { value: 'Regional', label: 'Broader visitation across the Central Coast' },
    ],
    challenge:
      'Gosford RSL needed to make a major long-term decision about the future of its venue. The opportunity was not simply to refresh the existing club, but to assess whether a more substantial redevelopment could better serve members, attract new audiences and position the club for future relevance.',
    role:
      'Tully Heard supported the strategic research and feasibility process, helping the club test the market opportunity, understand member and guest expectations, and evaluate the commercial logic of a more substantial transformation.',
    outcome:
      'The completed venue now brings together modern dining, event facilities, a sports bar, alfresco areas, a brewery and community-focused spaces. The project has helped reposition Gosford RSL as a stronger regional destination and a more contemporary club experience.',
    proof: [
      'Major venue transformation',
      'Stronger regional destination positioning',
      'Broader dining and entertainment offer',
      'Improved member and guest experience',
      'Long-term strategic repositioning',
      'Contemporary club environment',
    ],
  },
  {
    id: 'chatswood-rsl',
    title: 'Chatswood RSL / Yogi’s Sports Bar',
    headline: 'A more dynamic, multi-generational venue experience',
    intro:
      'A revitalised sports and entertainment concept designed to broaden appeal while strengthening the club’s role as a social destination.',
    image: yogisImg.url,
    result: 'Broader audience appeal',
    stats: [
      { value: '200%', label: 'Increase in visitation' },
      { value: '18–45', label: 'Younger audience attendance focus' },
      { value: '4', label: 'Social layers: sport, dining, arcade and events' },
    ],
    challenge:
      'Chatswood RSL needed to stay relevant to changing customer expectations while continuing to serve its established member base. The opportunity was to create a more vibrant, contemporary experience that could attract younger patrons, support social occasions and lift the energy of the broader venue.',
    role:
      'Tully Heard supported the strategic development of a concept that combined sports viewing, casual dining, bar service, events and interactive entertainment into a more engaging and flexible venue experience.',
    outcome:
      'Yogi’s Sports Bar has helped Chatswood RSL present a more modern, multi-generational offer. The concept supports social dining, sports viewing, events and interactive entertainment, giving the venue a stronger platform to connect with younger audiences.',
    proof: [
      'Younger audience engagement',
      'Stronger sports and entertainment offer',
      'More dynamic use of venue space',
      'Broader multi-generational appeal',
      'Improved social and event experience',
      'Contemporary hospitality concept',
    ],
  },
  {
    id: 'shoalhaven',
    title: 'Shoalhaven Ex-Servos / The Growers',
    headline: 'A regional food and beverage destination',
    intro:
      'A locally led hospitality concept designed to broaden appeal, strengthen community connection and create a more distinctive venue experience.',
    image: shoalhavenImg.url,
    result: 'Regional destination positioning',
    stats: [
      { value: '2', label: 'Visitor markets targeted: Sydney and Canberra' },
      { value: '30s', label: 'Younger female audience opportunity' },
      { value: 'Local-first', label: 'Produce, suppliers and regional identity' },
    ],
    challenge:
      'Shoalhaven Ex-Servos had an opportunity to elevate a venue asset into a more distinctive dining and social experience. The challenge was to create a concept that felt authentic to the region, appealed to both locals and visitors, and strengthened the club’s broader hospitality offer.',
    role:
      'Tully Heard supported the concept and strategic direction, with a focus on local produce, destination appeal, brand positioning and a more contemporary customer experience.',
    outcome:
      'The Growers helped create a more regionally distinctive hospitality offer, with stronger links to local producers, a broader dining experience and a clearer destination proposition.',
    proof: [
      'Regional destination positioning',
      'Local produce and supplier story',
      'Broader dining appeal',
      'Stronger community connection',
      'Contemporary food and beverage experience',
      'Clearer destination proposition',
    ],
  },
  {
    id: 'club-mudgee',
    title: 'Club Mudgee / The Hub Sports Bar',
    headline: 'Revitalising a historic club space for modern community use',
    intro:
      'A repositioned sports bar and community hub that gave an underutilised area a clearer role in the venue.',
    image: mudgeeImg.url,
    result: 'Improved venue utilisation',
    stats: [
      { value: 'Local', label: 'Sports-led concept to bring new energy into the venue' },
      { value: '3', label: 'Connected zones: sports bar, beer garden and gaming' },
      { value: '70+ yrs', label: 'Community relevance modernised for the next generation' },
    ],
    challenge:
      'Club Mudgee wanted to revitalise a historic section of the club and make better use of space that had previously served different purposes over time. The goal was to respect the club’s history while creating a more contemporary and relevant venue experience.',
    role:
      'Tully Heard supported the planning and strategic direction for a sports and community hub that could improve utilisation, create stronger social energy and support the club’s broader role in the local community.',
    outcome:
      'The Hub Sports Bar created a more active and engaging area within the club, supporting sport, casual dining, social connection and community use. The project shows how thoughtful adaptation of existing spaces can strengthen relevance.',
    proof: [
      'Improved use of an existing venue area',
      'Stronger community and sports positioning',
      'More active social environment',
      'Better alignment with member behaviour',
      'Adaptive reuse of a historic club space',
      'Clearer role for an existing asset',
    ],
  },
  {
    id: 'bankstown',
    title: 'Bankstown Sports / Basement Brewhouse',
    headline: 'Repositioning an underused space for a new audience',
    intro:
      'A craft beer and casual dining concept that helped shift the role of an existing sports bar and broaden the venue’s appeal.',
    image: bankstownImg.url,
    result: 'Underused space repositioned',
    stats: [
      { value: '18–45', label: 'Younger demographic targeted through the new concept' },
      { value: '30', label: 'Beers on tap creating a stronger craft-led experience' },
      { value: '7', label: 'House-brewed beers — a distinct reason to visit' },
    ],
    challenge:
      'The existing sports bar environment had become less aligned with changing customer expectations. The opportunity was to create a more relevant venue that could appeal to a younger and more diverse audience while still fitting within the broader club ecosystem.',
    role:
      'Tully Heard supported the strategic thinking behind a more contemporary hospitality concept, drawing on trends in craft beer, casual dining, social experience and venue repositioning.',
    outcome:
      'The Basement Brewhouse helped create a more distinctive hospitality offer within Bankstown Sports. The concept gave the club a stronger platform to engage new audiences, activate an underused space and present a more modern experience.',
    proof: [
      'Underused space repositioned',
      'Broader customer appeal',
      'Contemporary craft beer and dining concept',
      'Stronger social venue experience',
      'Audience diversification',
      'More distinctive hospitality offer',
    ],
  },
  {
    id: 'doylo',
    title: 'The Doylo / Ready’s Bar',
    headline: 'Bringing competitive socialising into the club environment',
    intro:
      'An entertainment-led hospitality concept designed to increase engagement, broaden appeal and create a more interactive venue experience.',
    image: doyloImg.url,
    result: 'Experience-led venue positioning',
    stats: [
      { value: '7', label: 'Interactive sports simulations increasing reasons to visit' },
      { value: '3', label: 'Experience layers: sport, dining and games' },
      { value: 'Under-40', label: 'Younger audience relevance through competitive socialising' },
    ],
    challenge:
      'The Doylo had an opportunity to diversify its offer and create a more engaging reason for different audiences to visit, stay and return. The challenge was to move beyond a conventional food and beverage offer into something more interactive and experience-led.',
    role:
      'Tully Heard supported the strategic direction behind a competitive socialising concept that could sit naturally within the club environment and appeal to a broader customer base.',
    outcome:
      'Ready’s Bar created a more dynamic entertainment and dining experience, giving the venue a new way to engage guests through live sport, simulated games, casual dining and social activity.',
    proof: [
      'Competitive socialising concept',
      'Broader entertainment offer',
      'More interactive guest experience',
      'Younger audience relevance',
      'Better use of hospitality space',
      'Experience-led venue positioning',
    ],
  },
];

const moreWork = [
  { title: 'Cabra Vale Diggers', body: 'Strategic planning and feasibility support for major club development decisions.' },
  { title: 'Karuah RSL', body: 'Premises optimisation and redevelopment planning to support future growth opportunities.' },
  { title: 'Oaks Hotel Neutral Bay', body: 'Site and premises planning, concept development and execution support, including Taffy’s Sports Bar.' },
  { title: 'Wollongong Council Theatre Site', body: 'Hospitality advisory support for a government-led venue and precinct opportunity.' },
  { title: 'Moore Park Golf Club', body: 'Hospitality assistance for a major redevelopment context.' },
  { title: 'Central Real Capital', body: 'Integrated resort feasibility and assessment support.' },
];

const statIcons = [TrendingUp, Users, Award];
const moreWorkIcons = [Building2, MapPin, Sparkles, Award, TrendingUp, Users];

// Animates the numeric prefix of a stat value (e.g. "36,000+" -> counts 0 → 36000, keeps "+").
const AnimatedStat = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const match = value.match(/^([\d,.]+)(.*)$/);
  const numeric = match ? parseFloat(match[1].replace(/,/g, '')) : null;
  const suffix = match ? match[2] : '';
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const n = Math.round(latest);
    return n.toLocaleString() + suffix;
  });

  useEffect(() => {
    if (inView && numeric !== null) {
      const controls = animate(count, numeric, { duration: 1.6, ease: 'easeOut' });
      return controls.stop;
    }
  }, [inView, numeric, count]);

  if (numeric === null) {
    return <span ref={ref}>{value}</span>;
  }
  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = fullCases[currentIndex];

  const next = () => setCurrentIndex((p) => (p + 1) % fullCases.length);
  const prev = () => setCurrentIndex((p) => (p - 1 + fullCases.length) % fullCases.length);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              src="https://yuthbrxadentorgrsyar.supabase.co/storage/v1/object/sign/Tully%20Heard%20Consulting/Tully%20Heard%20Showreel%201.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNGE4MjlmYy0xNTZiLTQ1NzgtYWViNS01NDUxMmE0MjJiNDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJUdWxseSBIZWFyZCBDb25zdWx0aW5nL1R1bGx5IEhlYXJkIFNob3dyZWVsIDEubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjU0MTMwNywiZXhwIjo0OTA0NjA1MzA3fQ.nl_wBWjvZOC-zarLVgp6KwlHm36D9IDAoEd0lhpNGTU"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
          </div>
          <div className="relative z-10 container-narrow max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-white/80 text-sm font-sans uppercase tracking-[0.125em] font-semibold mb-4">
                Our Work
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-white mb-6 italic">
                Work that helps venues evolve, perform and stay relevant
              </h1>
              <p className="text-white/80 font-sans text-lg leading-relaxed">
                Selected projects across clubs and hospitality venues, from major redevelopments to targeted venue repositioning, feasibility, customer insight and implementation support.
              </p>
            </motion.div>
          </div>
        </section>


        {/* Carousel */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <p className="text-primary text-sm font-sans uppercase tracking-[0.125em] font-semibold mb-4">
                  Selected work
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">
                  Strategic outcomes across{' '}
                  <span className="italic text-primary">clubs and hospitality</span>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous case study"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next case study"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
              >
                <div className="lg:sticky lg:top-32">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="inline-block px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm border border-border">
                        <span className="text-primary font-sans font-semibold text-sm">
                          {current.result}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mt-6">
                    {current.stats.map((s) => (
                      <div key={s.label} className="p-4 rounded-2xl bg-background border border-border">
                        <div className="text-xl font-display text-foreground mb-1">{s.value}</div>
                        <div className="text-xs text-muted-foreground font-sans leading-snug">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-muted-foreground text-sm font-sans mb-2">
                    {String(currentIndex + 1).padStart(2, '0')} /{' '}
                    {String(fullCases.length).padStart(2, '0')}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-display text-foreground mb-3">
                    {current.title}
                  </h3>
                  <p className="text-primary text-lg font-sans mb-5">{current.headline}</p>
                  <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                    {current.intro}
                  </p>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-sm font-sans uppercase tracking-[0.125em] font-semibold text-primary mb-2">Challenge</h4>
                      <p className="text-muted-foreground font-sans leading-relaxed">{current.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-sans uppercase tracking-[0.125em] font-semibold text-primary mb-2">Tully Heard’s role</h4>
                      <p className="text-muted-foreground font-sans leading-relaxed">{current.role}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-sans uppercase tracking-[0.125em] font-semibold text-primary mb-2">Outcome</h4>
                      <p className="text-muted-foreground font-sans leading-relaxed">{current.outcome}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-sans uppercase tracking-[0.125em] font-semibold text-primary mb-3">Proof points</h4>
                    <div className="flex flex-wrap gap-2">
                      {current.proof.map((p) => (
                        <span key={p} className="px-4 py-2 rounded-full border border-border bg-background text-foreground font-sans text-sm">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-2 mt-12">
              {fullCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to case study ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-border hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-10">
              {fullCases.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setCurrentIndex(i)}
                  className={`text-left p-4 rounded-xl border transition-colors ${
                    i === currentIndex
                      ? 'border-primary bg-background'
                      : 'border-border bg-background/50 hover:border-primary/50'
                  }`}
                >
                  <div className="text-xs font-sans uppercase tracking-[0.1em] text-muted-foreground mb-1">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="text-sm font-display text-foreground leading-snug">{c.title}</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* More Selected Work */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <p className="text-primary text-sm font-sans uppercase tracking-[0.125em] font-semibold mb-6">
              More selected work
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {moreWork.map((w) => (
                <div key={w.title} className="p-8 rounded-2xl bg-card border border-border">
                  <h3 className="text-lg font-display text-foreground mb-3">{w.title}</h3>
                  <p className="text-muted-foreground font-sans leading-relaxed text-sm">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-card">
          <div className="container-narrow max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-display text-foreground mb-4 italic">
              Have a venue challenge to work through?
            </h2>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-8">
              Let’s talk about how clarity, insight and disciplined execution can move your venue forward.
            </p>
            <Link to="/contact">
              <Button variant="navy" size="lg">Contact us</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
