import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { directors } from '@/data/people';

export const DirectorsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.125em] text-primary">
            Our Directors
          </p>
          <h2 className="mb-6 font-display text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Led by operators who understand the{' '}
            <span className="italic text-primary">club and hospitality sector</span>
          </h2>
          <p className="font-sans text-lg leading-relaxed text-muted-foreground">
            John and Luke combine practical venue ownership experience with strategic advisory capability to guide complex decisions from start to finish.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {directors.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
              className="feature-card group text-center"
            >
              <div className="mb-5 aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={d.image}
                  alt={d.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-1 font-display text-2xl text-foreground">{d.name}</h3>
              <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-[0.125em] text-primary">
                {d.role}
              </p>
              <p className="font-sans leading-relaxed text-muted-foreground">{d.teaser}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link to="/people">
            <Button variant="navy" size="lg" className="gap-2">
              View full team
              <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
