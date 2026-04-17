import { motion } from 'framer-motion';

const stats = [
  { value: '50+', label: 'Years Collective Experience' },
  { value: '100+', label: 'Successful Projects' },
];

const team = [
  {
    name: 'John Tully',
    role: 'Director',
    image: '/jt-headshot.jpg',
    bio: 'John has over 20 years experience in leadership and consulting positions to the hospitality, entertainment and leisure industry focusing on innovation, business transformation, asset & management performance and operational improvement. John has a particular skill set in identifying and solving strategic, cultural and operational issues inhibiting business growth and performance.',
  },
  {
    name: 'Luke Heard',
    role: 'Director',
    image: '/lh-headshot.png',
    bio: 'Luke has first-hand experience in starting and establishing hospitality and hospitality-related businesses and technical experience in business advisory including management consulting, private equity and formerly law. Luke has been involved with various existing and new businesses, including profit improvement & capital raising mainly focusing on hospitality & property.',
  },
  {
    name: 'Vaughn Campbell',
    role: 'Principal Consultant',
    image: '/placeholder.svg',
    bio: "Leading the Data Analytics and Business Intelligence team, Vaughn has over 20 years experience working with clients across a broad range of industry sectors including Media, Telecommunications, Retail, Hospitality, Mining and Energy, Entertainment and Manufacturing. Vaughn has worked with many Clubs across the country in designing data insight strategies to understand and enhance their members' experience and their venues, improve financial performance and understand/influence behaviours that are central to an organisation's performance.",
  },
  {
    name: 'Peter McLean',
    role: 'Principal',
    image: '/pm-headshot.png',
    bio: "With over 30 years of experience in the hospitality industry, Peter is an acknowledged expert in the area of Registered Clubs with extensive experience in the Club, hotel, hospitality & tourism industries as well as in audit and financial review of private and public companies. Peter's experience includes corporate governance, operational issues, strategic planning, amalgamations and takeovers, due diligence, taxation, financial review and management accounting.",
  },
  {
    name: 'Norrelle Goldring',
    role: 'Market Research Consultant',
    image: '/ng-headshot.png',
    bio: "Norrelle has 17 years experience in advising retail and consulting businesses. Norrelle's background combines research, customer and category insights with strategy, marketing and sales operations. Norrelle brings perspectives from multiple industry sectors including hospitality, FMCG, retail, consumer durables, technology and telco.",
  },
  {
    name: 'Margaret Carew',
    role: 'Consultant',
    image: '/placeholder.svg',
    bio: "Margaret has in excess of 30 years' experience in the hospitality industry including hands-on roles as Secretary Manager of clubs and General Manager of pubs. Margaret has worked as a consultant in the registered club industry advising in strategic and operational consulting including gaming machine entitlement exchange. Margaret has technical and operational qualifications in accounting and financial consulting and provides a wealth of technical and practical advice to our hospitality clients.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-primary text-sm uppercase tracking-[0.2em] font-sans font-semibold mb-4">About Us</p>
          <p className="text-foreground font-display text-2xl sm:text-3xl leading-relaxed">
            With over 25 years of experience as venue owners and strategic consultants, Tully Heard partners with hospitality venues to thrive.
          </p>
        </motion.div>

        {/* Stats strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 py-10 mb-16 border-y border-border">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-display text-foreground mb-1">{s.value}</div>
              <div className="text-muted-foreground font-sans text-sm uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Team bios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.1 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-secondary">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-display text-foreground mb-1">{m.name}</h3>
                <p className="text-primary font-sans text-xs uppercase tracking-[0.15em] font-semibold mb-3">{m.role}</p>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{m.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
