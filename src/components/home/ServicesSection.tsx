import { motion } from 'framer-motion';
import { services, specialists } from '@/data/services';

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Services
          </p>
          <h2 className="mb-5 font-display text-3xl leading-tight text-foreground sm:text-4xl">
            Practical strategy for complex decisions.
          </h2>
          <p className="font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
            We help Clubs and hospitality businesses make better strategic, investment and
            development decisions, and turn those decisions into commercial outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`feature-card ${i < 3 ? 'xl:col-span-2' : 'xl:col-span-3'}`}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon size={22} strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="mb-3 font-display text-2xl text-foreground">{s.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-border pt-12"
        >
          <p className="mb-8 text-center font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Specialist Advisory Services
          </p>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {specialists.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl border border-border/80 bg-background px-5 py-4"
                >
                  <Icon size={18} className="mt-0.5 shrink-0 text-primary" strokeWidth={1.75} aria-hidden />
                  <div>
                    <p className="font-sans text-sm leading-snug text-foreground">{item.title}</p>
                    <p className="mt-1 font-sans text-xs uppercase tracking-[0.12em] text-muted-foreground">
                      Led by {item.lead}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
