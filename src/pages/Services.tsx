import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Strategic planning',
    body: 'Clear, practical strategies that help boards and management teams define where the venue is going, why it matters, and what needs to happen next.',
  },
  {
    title: 'Capital investment advisory and feasibility',
    body: 'Independent assessment of major investment decisions, including feasibility, commercial logic, staging, funding considerations and risk.',
  },
  {
    title: 'Site redevelopment and delivery',
    body: 'End-to-end support across redevelopment projects, from early concept and strategic direction through to delivery planning and implementation.',
  },
  {
    title: 'Premises optimisation',
    body: 'Improving how existing spaces are used so venues can increase relevance, improve customer flow and unlock stronger commercial performance.',
  },
  {
    title: 'Financial modelling',
    body: 'Decision-ready models that help test scenarios, compare options and understand the long-term implications of major strategic choices.',
  },
  {
    title: 'Performance diagnostics and benchmarking',
    body: 'A structured view of what is driving performance, where constraints exist, and where improvement opportunities are most likely to come from.',
  },
  {
    title: 'Commercial viability and performance',
    body: 'Assessing business sustainability and identifying practical initiatives to strengthen earnings, customer engagement and long-term resilience.',
  },
  {
    title: 'Gaming strategy, optimisation and management',
    body: 'Specialist advice on gaming performance, layout, product mix and operational settings, handled with appropriate commercial sensitivity.',
  },
  {
    title: 'Board advisory and decision support',
    body: 'Clear analysis and independent advice to support board-level decisions, stakeholder alignment and major strategic choices.',
  },
  {
    title: 'Project delivery and implementation support',
    body: 'Ongoing involvement beyond strategy to help turn plans into delivered outcomes.',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="pt-40 pb-20 bg-background">
          <div className="container-narrow max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-primary text-sm font-sans uppercase tracking-[0.125em] font-semibold mb-4">
                Services
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-foreground mb-6 italic">
                Practical strategic advice for complex venue decisions
              </h1>
              <p className="text-muted-foreground font-sans text-lg leading-relaxed">
                Tully Heard provides specialist advisory services across hospitality, leisure, clubs and related property-backed businesses.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-card">
          <div className="container-narrow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="p-8 rounded-2xl bg-background border border-border"
                >
                  <h2 className="text-xl font-display text-foreground mb-3">{s.title}</h2>
                  <p className="text-muted-foreground font-sans leading-relaxed">{s.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-narrow max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-display text-foreground mb-6 uppercase tracking-[0.04em]">
              Not sure where to start?
            </h2>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-8">
              If the challenge is unclear, complex or politically sensitive, we can help define the issue and get to a practical way forward.
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

export default Services;
