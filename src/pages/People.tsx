import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'John Tully',
    role: 'Director',
    image: '/jt-headshot.jpg',
    bio: [
      'John has over 20 years’ experience in leadership and consulting positions across the hospitality, entertainment and leisure industry, with a focus on innovation, business transformation, asset and management performance, and operational improvement.',
      'John has a particular skill set in identifying and solving the strategic, cultural and operational issues that can inhibit business growth and performance.',
    ],
  },
  {
    name: 'Luke Heard',
    role: 'Director',
    image: '/lh-headshot.png',
    bio: [
      'Luke has first-hand experience in starting and establishing hospitality and hospitality-related businesses, alongside technical experience in business advisory, management consulting, private equity and law.',
      'Luke has been involved with a range of existing and new businesses, including profit improvement and capital raising, with a focus on hospitality and property.',
    ],
  },
  {
    name: 'Vaughn Campbell',
    role: 'Principal Consultant',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop&crop=faces',
    bio: [
      'Vaughn leads the Data Analytics and Business Intelligence team and has over 20 years’ experience working with clients across sectors including media, telecommunications, retail, hospitality, mining and energy, entertainment and manufacturing.',
      'Vaughn has worked with clubs across Australia to design data insight strategies that help organisations understand and enhance member experience, improve financial performance and influence behaviours central to performance.',
    ],
  },
  {
    name: 'Peter McLean',
    role: 'Principal',
    image: '/pm-headshot.png',
    bio: [
      'Peter has over 30 years’ experience in the hospitality industry and is an acknowledged expert in registered clubs, hotels, hospitality and tourism.',
      'His experience includes corporate governance, operational issues, strategic planning, amalgamations and takeovers, due diligence, taxation, financial review and management accounting.',
    ],
  },
  {
    name: 'Norelle Goldring',
    role: 'Market Research Consultant',
    image: '/ng-headshot.png',
    bio: [
      'Norelle has extensive experience advising retail and consulting businesses, with a background that combines research, customer and category insights, strategy, marketing and sales operations.',
      'She brings perspectives from multiple sectors including hospitality, FMCG, retail, consumer durables, technology and telecommunications.',
    ],
  },
  {
    name: 'Margaret Carew',
    role: 'Consultant',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop&crop=faces',
    bio: [
      'Margaret has over 30 years’ experience in the hospitality industry, including hands-on roles as Secretary Manager of clubs and General Manager of pubs.',
      'Margaret has worked as a consultant in the registered club industry, advising on strategic and operational matters including gaming machine entitlement exchange. She brings technical and practical advice across accounting, financial consulting and club operations.',
    ],
  },
];

const People = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="pt-40 pb-20 bg-background">
          <div className="container-narrow max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-primary text-sm font-sans uppercase tracking-[0.125em] font-semibold mb-4">
                People
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-foreground mb-6 italic">
                Experienced operators and advisers for the club and hospitality sector
              </h1>
              <p className="text-muted-foreground font-sans text-lg leading-relaxed">
                Tully Heard brings together practical operating experience, strategic advisory capability and deep sector knowledge across clubs, hospitality, leisure and related property-backed businesses.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-card">
          <div className="container-narrow">
            <div className="space-y-16">
              {team.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 md:grid-cols-5 gap-8 items-start ${i % 2 ? 'md:[direction:rtl]' : ''}`}
                >
                  <div className="md:col-span-2 [direction:ltr]">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-background border border-border">
                      <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="md:col-span-3 [direction:ltr]">
                    <h2 className="text-3xl font-display text-foreground mb-2">{m.name}</h2>
                    <p className="text-primary font-sans text-sm uppercase tracking-[0.125em] font-semibold mb-6">
                      {m.role}
                    </p>
                    <div className="space-y-4">
                      {m.bio.map((p, idx) => (
                        <p key={idx} className="text-muted-foreground font-sans leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default People;
