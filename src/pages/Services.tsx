import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Target,
  Coins,
  Building2,
  LayoutGrid,
  Calculator,
  Activity,
  TrendingUp,
  Dice5,
  Briefcase,
  ClipboardCheck,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Strategic planning',
    body: 'Clear, practical strategies that help boards and management teams define where the venue is going, why it matters, and what needs to happen next.',
  },
  {
    icon: Coins,
    title: 'Capital investment advisory and feasibility',
    body: 'Independent assessment of major investment decisions, including feasibility, commercial logic, staging, funding considerations and risk.',
  },
  {
    icon: Building2,
    title: 'Site redevelopment and delivery',
    body: 'End-to-end support across redevelopment projects, from early concept and strategic direction through to delivery planning and implementation.',
  },
  {
    icon: LayoutGrid,
    title: 'Premises optimisation',
    body: 'Improving how existing spaces are used so venues can increase relevance, improve customer flow and unlock stronger commercial performance.',
  },
  {
    icon: Calculator,
    title: 'Financial modelling',
    body: 'Decision-ready models that help test scenarios, compare options and understand the long-term implications of major strategic choices.',
  },
  {
    icon: Activity,
    title: 'Performance diagnostics and benchmarking',
    body: 'A structured view of what is driving performance, where constraints exist, and where improvement opportunities are most likely to come from.',
  },
  {
    icon: TrendingUp,
    title: 'Commercial viability and performance',
    body: 'Assessing business sustainability and identifying practical initiatives to strengthen earnings, customer engagement and long-term resilience.',
  },
  {
    icon: Dice5,
    title: 'Gaming strategy, optimisation and management',
    body: 'Specialist advice on gaming performance, layout, product mix and operational settings, handled with appropriate commercial sensitivity.',
  },
  {
    icon: Briefcase,
    title: 'Board advisory and decision support',
    body: 'Clear analysis and independent advice to support board-level decisions, stakeholder alignment and major strategic choices.',
  },
  {
    icon: ClipboardCheck,
    title: 'Project delivery and implementation support',
    body: 'Ongoing involvement beyond strategy to help turn plans into delivered outcomes.',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              src="https://yuthbrxadentorgrsyar.supabase.co/storage/v1/object/sign/Tully%20Heard%20Consulting/Tully%20Heard%20Website%20Cut%20-%20Supabase.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNGE4MjlmYy0xNTZiLTQ1NzgtYWViNS01NDUxMmE0MjJiNDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJUdWxseSBIZWFyZCBDb25zdWx0aW5nL1R1bGx5IEhlYXJkIFdlYnNpdGUgQ3V0IC0gU3VwYWJhc2UubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjU0MDc4MSwiZXhwIjo0OTA0NjA0NzgxfQ.xHJgXPtasan2Ym9_XP4xS9Gkcjh-LJYXiwFDJk-4wpg"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
          </div>
          <div className="relative z-10 container-narrow max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-white/80 text-sm font-sans uppercase tracking-[0.125em] font-semibold mb-4">
                Services
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-white mb-6 italic">
                Practical strategic advice for complex venue decisions
              </h1>
              <p className="text-white/80 font-sans text-lg leading-relaxed">
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
                  className="feature-card group"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <s.icon className="text-primary" size={26} />
                    </div>
                    <ArrowUpRight
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                      size={22}
                    />
                  </div>
                  <h2 className="text-xl font-display text-foreground mb-3">{s.title}</h2>
                  <p className="text-muted-foreground font-sans leading-relaxed">{s.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-narrow max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-display text-foreground mb-6">
              Not sure where to <span className="italic text-primary">start?</span>
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
