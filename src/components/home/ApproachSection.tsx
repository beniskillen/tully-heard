import { motion } from 'framer-motion';
import {
  Search,
  Compass,
  Scale,
  FileCheck,
  Handshake,
  type LucideIcon,
} from 'lucide-react';

const steps: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: 'Understand the Business',
    body: 'Review business performance, market positioning, competition, and the key drivers of profitability.',
    icon: Search,
  },
  {
    title: 'Identify the Opportunities',
    body: 'Explore what the business could become, opportunities for growth and where future investment should be directed.',
    icon: Compass,
  },
  {
    title: 'Test the Options',
    body: 'Assess commercial viability, financial projections, cash flow, capital requirements, and expected returns.',
    icon: Scale,
  },
  {
    title: 'Define the Strategy',
    body: 'Establish the preferred direction, longer-term priorities, and recommended investments.',
    icon: FileCheck,
  },
  {
    title: 'Support Implementation',
    body: 'Work alongside management and specialist partners to help deliver the agreed strategy.',
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
            Helping clubs plan for the future and make better investment decisions.
          </h2>
          <p className="font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
            We combine industry experience, market insight and financial analysis to help clubs
            understand their opportunities, determine their future direction, and make informed
            decisions about where to invest. We specialise in strategic planning, gaming performance,
            financial modelling, capital investment, and customer experience – helping Boards and
            management make informed decisions about the future of their businesses.
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

        <ol className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-10 lg:grid-cols-6">
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
                className={`relative flex gap-4 rounded-2xl border border-border bg-card p-6 ${
                  i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
                }`}
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
