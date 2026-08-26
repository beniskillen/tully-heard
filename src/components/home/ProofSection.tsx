import { motion } from 'framer-motion';
import { proofs } from '@/data/proof';

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
                    <span className="block font-sans text-sm font-semibold text-foreground">
                      {item.person}
                    </span>
                    <span className="mt-1 block font-sans text-xs uppercase tracking-[0.12em] text-muted-foreground">
                      {item.role}, {item.organisation}
                    </span>
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
