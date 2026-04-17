import { motion } from 'framer-motion';

const groups = [
  {
    category: 'Large Clubs',
    items: [
      { name: 'Chatswood RSL', desc: "(bistro, bar, gaming and Yogi's Sports Bar) — assisted to develop the major revitalisation project to build on its existing market and attract a younger demographic." },
      { name: 'Cabra Vale Diggers Club', desc: '— strategic planning process(es) and feasibility review for major club integrated development.' },
      { name: 'Gosford RSL', desc: '($50 Million Transformation) — evolved into a premier dining and entertainment hub with award-winning facilities, state-of-the-art gaming, sports bar, craft brewery and modern dining facilities.' },
    ],
  },
  {
    category: 'Medium Clubs',
    items: [
      { name: 'Club Mudgee (The Hub Sports Bar)', desc: '— revitalised a historic section of the club, transforming a former bingo hall into a vibrant sports and community hub serving locals for over 70 years.' },
    ],
  },
  {
    category: 'Small Clubs',
    items: [
      { name: 'Karuah RSL Club', desc: '(Site and Premises redevelopment) — premises optimisation plan and execution to transform the Club and maximise growth opportunity from surrounding catchment (Ongoing).' },
    ],
  },
  {
    category: 'Golf Clubs',
    items: [
      { name: 'Oak Point Golf Club', desc: '— strategic planning and modelling including for new course transition.' },
    ],
  },
  {
    category: 'Pubs',
    items: [
      { name: 'Oaks Hotel Neutral Bay', desc: "(Site premises plan, concept development and execution) including Taffy's sports bar." },
    ],
  },
  {
    category: 'Government',
    items: [
      { name: 'Wollongong Council Theatre Site', desc: '.' },
      { name: 'NSW State Government Moore Park Golf Club redevelopment', desc: '— hospitality assistance.' },
    ],
  },
  {
    category: 'Accommodation',
    items: [
      { name: 'Cabra Vale Diggers Club Novotel', desc: '— financial modelling assistance.' },
    ],
  },
  {
    category: 'Development & Feasibility',
    items: [
      { name: 'Central Real Capital', desc: '— integrated resort feasibility and assessment.' },
    ],
  },
];

export const CaseStudiesSection = () => {
  return (
    <section id="work" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-primary text-sm uppercase tracking-[0.2em] font-sans font-semibold mb-4">Our Work</p>
          <h2 className="text-3xl sm:text-4xl font-display text-foreground leading-tight">
            A small selection of some of the work we have completed
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-12">
          {groups.map((g, gi) => (
            <motion.div
              key={g.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.05 }}
            >
              <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-4 pb-2 border-b border-border">
                {g.category}
              </h3>
              <ul className="space-y-4">
                {g.items.map((item) => (
                  <li key={item.name} className="font-sans text-sm leading-relaxed">
                    <span className="font-display text-base text-foreground">{item.name}</span>
                    <span className="text-muted-foreground"> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
