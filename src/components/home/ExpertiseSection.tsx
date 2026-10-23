import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';

export const ExpertiseSection = () => {
  return (
    <section id="expertise" className="section-padding bg-card">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Expertise
          </p>
          <h2 className="mb-5 font-display text-3xl leading-tight text-foreground sm:text-4xl">
            Five principal services for the decisions clubs face.
          </h2>
          <p className="font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
            Specialist capability in customer experience, leadership, research, EGM brokerage, and
            governance sits on the services page and with the consultants who lead it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={i < 3 ? 'xl:col-span-2' : 'xl:col-span-3'}
              >
                <Link
                  to={`/services#${service.id}`}
                  className="feature-card flex h-full flex-col hover:border-primary/40"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon size={22} strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="mb-3 font-display text-2xl text-foreground">{service.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                    {service.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary">
                    View service
                    <ArrowRight size={16} aria-hidden />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services">
            <Button variant="navy" size="lg" className="gap-2">
              View all services
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
