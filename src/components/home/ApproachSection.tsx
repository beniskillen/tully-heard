import { motion } from 'framer-motion';
import {
  Search,
  Compass,
  Scale,
  LineChart,
  FileCheck,
  Handshake,
  type LucideIcon,
} from 'lucide-react';

const steps: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: 'Understand the opportunity',
    body: 'Understand the business, market, performance and where the greatest potential lies.',
    icon: Search,
  },
  {
    title: 'Define the direction',
    body: 'Establish the preferred positioning, priorities and opportunities for growth.',
    icon: Compass,
  },
  {
    title: 'Test the options',
    body: 'Assess the commercial, operational and capital implications.',
    icon: Scale,
  },
  {
    title: 'Model the outcomes',
    body: 'Test feasibility, investment requirements, cash flow and expected returns.',
    icon: LineChart,
  },
  {
    title: 'Recommend the strategy',
    body: 'Bring this together into a clear, commercially grounded strategy.',
    icon: FileCheck,
  },
  {
    title: 'Support implementation',
    body: 'Work alongside the client and specialist partners to turn the strategy into reality.',
    icon: Handshake,
  },
];

export const ApproachSection = () => {
  return (
    <section id="approach" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-6 max-w-3xl text-center"
        >
          <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Approach
          </p>
          <h2 className="mb-6 font-display text-3xl leading-tight text-foreground sm:text-4xl">
            We help venues move from uncertainty to a clear way forward.
          </h2>
          <p className="font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
            TH combines deep industry experience, commercial analysis and strategic insight to help
            venues make better decisions, invest with confidence and achieve sustainable growth.
          </p>
        </motion.div>

        <ol
          className="mt-10 hidden items-center lg:flex"
          aria-hidden
        >
          {steps.map((step, i) => (
            <li key={`process-${step.title}`} className="flex min-w-0 flex-1 items-center">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary font-sans text-[11px] font-semibold tracking-wide text-primary">
                {String(i + 1).padStart(2, '0')}
              </span>
              {i < steps.length - 1 && <span className="mx-3 h-px flex-1 bg-border" />}
            </li>
          ))}
        </ol>

        <ol className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const n = String(i + 1).padStart(2, '0');
            return (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative flex gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon size={22} strokeWidth={1.75} aria-hidden />
                </div>
                <div>
                  <p className="mb-1 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {n}
                  </p>
                  <h3 className="mb-2 font-display text-xl text-foreground">{step.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
