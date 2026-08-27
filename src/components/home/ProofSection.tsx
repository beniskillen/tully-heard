import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { proofs, type Proof } from '@/data/proof';

const PersonCard = ({ item }: { item: Proof }) => {
  const identity = (
    <>
      <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border bg-secondary shadow-sm">
        <img src={item.image} alt={item.person} className="h-full w-full object-cover object-top" />
      </span>
      <span>
        <span className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
          {item.person}
          {item.linkedin ? <Linkedin size={14} strokeWidth={2} className="text-primary" aria-hidden /> : null}
        </span>
        <span className="mt-1 block font-sans text-xs uppercase tracking-[0.12em] text-muted-foreground">
          {item.role}, {item.organisation}
        </span>
      </span>
    </>
  );

  if (item.linkedin) {
    return (
      <a
        href={item.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${item.person} on LinkedIn`}
        className="group flex items-center gap-3.5 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {identity}
      </a>
    );
  }

  return <div className="flex items-center gap-3.5">{identity}</div>;
};

export const ProofSection = ({ compact = false }: { compact?: boolean }) => {
  return (
    <section id="proof" className="section-padding bg-card">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Client proof
          </p>
          <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl">
            Strategic clarity, commercial judgement and a trusted way of working.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {proofs.map((item, i) => {
            const paragraphs = compact ? item.paragraphs.slice(0, 1) : item.paragraphs;
            return (
              <motion.blockquote
                key={item.person}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col rounded-2xl border border-border bg-background p-8"
              >
                <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {item.focus}
                </p>
                <div className="flex-1 space-y-4">
                  {paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="font-display text-xl leading-relaxed text-foreground sm:text-[1.35rem]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <footer className="mt-8 border-t border-border pt-5">
                  <cite className="not-italic">
                    <PersonCard item={item} />
                  </cite>
                </footer>
              </motion.blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
};
