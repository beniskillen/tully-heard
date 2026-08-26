import { motion } from 'framer-motion';
import { team } from '@/data/people';

const stats = [
  { value: '50+', label: 'Years Collective Experience' },
  { value: '100+', label: 'Successful Projects' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            People
          </p>
          <p className="font-display text-2xl leading-relaxed text-foreground sm:text-3xl">
            Experienced operators and advisers for the club and hospitality sector.
          </p>
        </motion.div>

        <div className="mb-16 flex flex-col items-center justify-center gap-8 border-y border-border py-10 sm:flex-row sm:gap-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="mb-1 font-display text-4xl text-foreground sm:text-5xl">{s.value}</div>
              <div className="font-sans text-sm uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.1 }}
              className="flex flex-col gap-6 sm:flex-row"
            >
              <div className="flex-shrink-0">
                <div className="relative h-32 w-32 overflow-hidden rounded-full bg-secondary">
                  <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
                </div>
                {(m.needsPhoto || m.needsBio) && (
                  <p className="mt-2 max-w-[8rem] font-sans text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    {[m.needsPhoto && 'Photo to be supplied', m.needsBio && 'Bio to be supplied']
                      .filter(Boolean)
                      .join(' · ')}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <h3 className="mb-1 font-display text-xl text-foreground">{m.name}</h3>
                <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                  {m.role}
                </p>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
