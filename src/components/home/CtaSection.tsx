import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const points = [
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
];

export const CtaSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#122033]/10 bg-[#122033]/[0.04] px-5 py-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#479E92]" />
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#122033]">
                Start the conversation
              </p>
              <span className="h-1.5 w-1.5 rounded-full bg-[#479E92]" />
            </div>
            <h2 className="mb-6 font-display text-3xl text-foreground sm:text-4xl lg:text-5xl">
              Have a venue decision to <span className="italic text-primary">work through?</span>
            </h2>
          </motion.div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {points.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
              className="group rounded-2xl border border-border/40 bg-background p-8 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                <item.icon className="text-primary" size={26} />
              </div>
              <h3 className="mb-3 font-display text-xl text-foreground">{item.title}</h3>
              <p className="font-sans leading-relaxed text-muted-foreground">{item.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-8 font-sans text-lg leading-relaxed text-muted-foreground">
            Whether you’re considering redevelopment, repositioning, feasibility or strategic planning, book a time to chat. We’ll listen, ask the right questions, and share data-backed insights that help you invest with clarity.
          </p>
          <Link to="/contact">
            <Button variant="navy" size="xl" className="px-10">
              Get in Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
