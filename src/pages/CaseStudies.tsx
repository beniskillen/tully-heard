import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

type Stat = { value: string; label: string };
type Proof = string[];

interface FullCase {
  id: string;
  title: string;
  headline: string;
  intro: string;
  stats: Stat[];
  challenge: string;
  role: string;
  outcome: string;
  proof: Proof;
}

const featured = [
  { title: 'Gosford RSL', body: 'Strategic direction for a major venue transformation', anchor: 'gosford-rsl' },
  { title: 'Chatswood RSL / Yogi’s Sports Bar', body: 'Creating a more dynamic, multi-generational venue experience', anchor: 'chatswood-rsl' },
  { title: 'Shoalhaven Ex-Servos / The Growers', body: 'Creating a regional food and beverage destination', anchor: 'shoalhaven' },
];

const fullCases: FullCase[] = [
  {
    id: 'gosford-rsl',
    title: 'Gosford RSL',
    headline: 'Strategic direction for a major venue transformation',
    intro:
      'A major redevelopment that repositioned the club as a leading dining, entertainment and community destination on the Central Coast.',
    stats: [
      { value: '4', label: 'Destination drivers: dining, events, sport and brewery' },
      { value: '36,000+', label: 'Member community reached by the new venue experience' },
      { value: 'Regional draw', label: 'Broader visitation appeal across the Central Coast' },
    ],
    challenge:
      'Gosford RSL needed to make a major long-term decision about the future of its venue. The opportunity was not simply to refresh the existing club, but to assess whether a more substantial redevelopment could better serve members, attract new audiences and position the club for future relevance.',
    role:
      'Tully Heard supported the strategic research and feasibility process, helping the club test the market opportunity, understand member and guest expectations, and evaluate the commercial logic of a more substantial transformation.',
    outcome:
      'The completed venue now brings together modern dining, event facilities, a sports bar, alfresco areas, a brewery and community-focused spaces. The project has helped reposition Gosford RSL as a stronger regional destination and a more contemporary club experience for members, guests and visitors.',
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
    headline: 'Creating a more dynamic, multi-generational venue experience',
    intro:
      'A revitalised sports and entertainment concept designed to broaden appeal while strengthening the club’s role as a social destination.',
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
      'Yogi’s Sports Bar has helped Chatswood RSL present a more modern, multi-generational offer. The concept supports social dining, sports viewing, events and interactive entertainment, giving the venue a stronger platform to connect with younger audiences and increase the vibrancy of the club.',
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
    headline: 'Creating a regional food and beverage destination',
    intro:
      'A locally led hospitality concept designed to broaden appeal, strengthen community connection and create a more distinctive venue experience.',
    stats: [
      { value: '2', label: 'Visitor markets targeted: Sydney and Canberra' },
      { value: '30s', label: 'Younger female audience opportunity' },
      { value: 'Local-first', label: 'Produce, suppliers and regional identity built into the concept' },
    ],
    challenge:
      'Shoalhaven Ex-Servos had an opportunity to elevate a venue asset into a more distinctive dining and social experience. The challenge was to create a concept that felt authentic to the region, appealed to both locals and visitors, and strengthened the club’s broader hospitality offer.',
    role:
      'Tully Heard supported the concept and strategic direction, with a focus on local produce, destination appeal, brand positioning and a more contemporary customer experience.',
    outcome:
      'The Growers helped create a more regionally distinctive hospitality offer, with stronger links to local producers, a broader dining experience and a clearer destination proposition. The project demonstrates how clubs can build relevance by aligning hospitality, place, community and customer expectations.',
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
    intro: 'A repositioned sports bar and community hub that gave an underutilised area a clearer role in the venue.',
    stats: [
      { value: 'Younger locals', label: 'Sports-led concept to bring new energy into the venue' },
      { value: '3', label: 'Connected social zones: sports bar, beer garden and gaming room' },
      { value: '70+ years', label: 'Community relevance modernised for the next generation' },
    ],
    challenge:
      'Club Mudgee wanted to revitalise a historic section of the club and make better use of space that had previously served different purposes over time. The goal was to respect the club’s history while creating a more contemporary and relevant venue experience.',
    role:
      'Tully Heard supported the planning and strategic direction for a sports and community hub that could improve utilisation, create stronger social energy and support the club’s broader role in the local community.',
    outcome:
      'The Hub Sports Bar created a more active and engaging area within the club, supporting sport, casual dining, social connection and community use. The project shows how thoughtful adaptation of existing spaces can strengthen relevance without losing the character of the venue.',
    proof: [
      'Improved use of an existing venue area',
      'Stronger community and sports positioning',
      'More active social environment',
      'Better alignment with member and guest behaviour',
      'Adaptive reuse of a historic club space',
      'Clearer role for an existing asset',
    ],
  },
  {
    id: 'bankstown',
    title: 'Bankstown Sports / Basement Brewhouse',
    headline: 'Repositioning an underused space for a new audience',
    intro: 'A craft beer and casual dining concept that helped shift the role of an existing sports bar and broaden the venue’s appeal.',
    stats: [
      { value: '18–45', label: 'Younger demographic targeted through the new concept' },
      { value: '30', label: 'Beers on tap to create a stronger craft-led experience' },
      { value: '7', label: 'House-brewed beers creating a distinct reason to visit' },
    ],
    challenge:
      'The existing sports bar environment had become less aligned with changing customer expectations. The opportunity was to create a more relevant venue that could appeal to a younger and more diverse audience while still fitting within the broader club ecosystem.',
    role:
      'Tully Heard supported the strategic thinking behind a more contemporary hospitality concept, drawing on trends in craft beer, casual dining, social experience and venue repositioning.',
    outcome:
      'The Basement Brewhouse helped create a more distinctive hospitality offer within Bankstown Sports. The concept gave the club a stronger platform to engage new audiences, activate an underused space and present a more modern experience within the broader venue.',
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
    intro: 'An entertainment-led hospitality concept designed to increase engagement, broaden appeal and create a more interactive venue experience.',
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
      'Ready’s Bar created a more dynamic entertainment and dining experience, giving the venue a new way to engage guests through live sport, simulated games, casual dining and social activity. It positions The Doylo as part of a broader movement toward more interactive hospitality experiences.',
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
  { title: 'Club Mudgee / The Hub Sports Bar', body: 'A repositioned sports bar and community hub that gave an underutilised area a clearer role in the venue.' },
  { title: 'Bankstown Sports / Basement Brewhouse', body: 'A craft beer and casual dining concept that helped shift the role of an existing sports bar and broaden the venue’s appeal.' },
  { title: 'The Doylo / Ready’s Bar', body: 'An entertainment-led hospitality concept designed to increase engagement, broaden appeal and create a more interactive venue experience.' },
  { title: 'Cabra Vale Diggers', body: 'Strategic planning and feasibility support for major club development decisions.' },
  { title: 'Karuah RSL', body: 'Premises optimisation and redevelopment planning to support future growth opportunities.' },
  { title: 'Oaks Hotel Neutral Bay', body: 'Site and premises planning, concept development and execution support, including Taffy’s Sports Bar.' },
  { title: 'Wollongong Council Theatre Site', body: 'Hospitality advisory support for a government-led venue and precinct opportunity.' },
  { title: 'Moore Park Golf Club', body: 'Hospitality assistance for a major redevelopment context.' },
  { title: 'Central Real Capital', body: 'Integrated resort feasibility and assessment support.' },
];

const CaseBlock = ({ c }: { c: FullCase }) => (
  <section id={c.id} className="section-padding scroll-mt-32 odd:bg-background even:bg-card">
    <div className="container-narrow">
      <p className="text-primary text-sm font-sans uppercase tracking-[0.125em] font-semibold mb-4">
        {c.title}
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-6 italic">
        {c.headline}
      </h2>
      <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl mb-10">
        {c.intro}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {c.stats.map((s) => (
          <div key={s.label} className="p-6 rounded-2xl bg-background border border-border">
            <div className="text-2xl font-display text-foreground mb-2">{s.value}</div>
            <div className="text-sm text-muted-foreground font-sans">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div>
          <h3 className="text-sm font-sans uppercase tracking-[0.125em] font-semibold text-primary mb-3">Challenge</h3>
          <p className="text-muted-foreground font-sans leading-relaxed">{c.challenge}</p>
        </div>
        <div>
          <h3 className="text-sm font-sans uppercase tracking-[0.125em] font-semibold text-primary mb-3">Tully Heard’s role</h3>
          <p className="text-muted-foreground font-sans leading-relaxed">{c.role}</p>
        </div>
        <div>
          <h3 className="text-sm font-sans uppercase tracking-[0.125em] font-semibold text-primary mb-3">Outcome</h3>
          <p className="text-muted-foreground font-sans leading-relaxed">{c.outcome}</p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-sans uppercase tracking-[0.125em] font-semibold text-primary mb-4">Proof points</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {c.proof.map((p) => (
            <div key={p} className="px-5 py-3 rounded-full border border-border bg-background text-foreground font-sans text-sm">
              {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-20 bg-background">
          <div className="container-narrow max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-primary text-sm font-sans uppercase tracking-[0.125em] font-semibold mb-4">
                Our Work
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-foreground mb-6 italic">
                Work that helps venues evolve, perform and stay relevant
              </h1>
              <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-4">
                Selected projects across clubs and hospitality venues, from major redevelopments to targeted venue repositioning, feasibility, customer insight and implementation support.
              </p>
              <p className="text-muted-foreground font-sans text-lg leading-relaxed">
                Tully Heard works with clients across strategy, research, feasibility, redevelopment and operational performance. The examples below highlight the type of work we support and the strategic outcomes venues can pursue when customer insight, commercial discipline and execution are aligned.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Work */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <p className="text-primary text-sm font-sans uppercase tracking-[0.125em] font-semibold mb-8">
              Featured work
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featured.map((f) => (
                <a
                  key={f.title}
                  href={`#${f.anchor}`}
                  className="p-8 rounded-2xl bg-background border border-border hover:border-primary transition-colors block"
                >
                  <h3 className="text-xl font-display text-foreground mb-3">{f.title}</h3>
                  <p className="text-muted-foreground font-sans leading-relaxed">{f.body}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {fullCases.map((c) => <CaseBlock key={c.id} c={c} />)}

        {/* More Selected Work */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <p className="text-primary text-sm font-sans uppercase tracking-[0.125em] font-semibold mb-4">
              More selected work
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {moreWork.map((w) => (
                <div key={w.title} className="p-8 rounded-2xl bg-background border border-border">
                  <h3 className="text-lg font-display text-foreground mb-3">{w.title}</h3>
                  <p className="text-muted-foreground font-sans leading-relaxed text-sm">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* See in context */}
        <section className="section-padding bg-background">
          <div className="container-narrow max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl font-display text-foreground mb-4 uppercase tracking-[0.04em]">
              See the work in context
            </h2>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed">
              Selected videos and public features are included where they help show the venue experience, project context and customer-facing outcome.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-card">
          <div className="container-narrow max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-display text-foreground mb-6 uppercase tracking-[0.04em]">
              Have a venue decision to work through?
            </h2>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-8">
              If you are considering a redevelopment, repositioning, feasibility review or strategic planning process, Tully Heard can help define the opportunity and the practical next step.
            </p>
            <Link to="/contact">
              <Button variant="navy" size="xl" className="px-10">Contact us</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
