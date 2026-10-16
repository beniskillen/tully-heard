import { Link } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { team } from '@/data/people';

const People = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="bg-background pb-20 pt-40">
          <div className="container-narrow mx-auto max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.125em] text-primary">
                People
              </p>
              <h1 className="mb-6 font-display text-4xl italic text-foreground sm:text-5xl lg:text-6xl">
                Experienced operators and advisers for the club and hospitality sector
              </h1>
              <div className="space-y-4 font-sans text-lg leading-relaxed text-muted-foreground">
                <p>
                  Our team combines extensive hospitality leadership and operational experience with specialist expertise in strategy, finance, gaming, governance, market research, and organisational development.
                </p>
                <p>
                  Together, we provide the commercial insights, independent advice and practical support to help clubs strengthen their existing businesses, plan for future growth, and make informed investment decisions.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-card">
          <div className="container-narrow">
            <div className="space-y-16">
              {team.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 items-start gap-8 md:grid-cols-5 ${i % 2 ? 'md:[direction:rtl]' : ''}`}
                >
                  <div className="md:col-span-2 [direction:ltr]">
                    <div className="aspect-square overflow-hidden rounded-2xl border border-border bg-background">
                      <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="md:col-span-3 [direction:ltr]">
                    <h2 className="mb-2 font-display text-3xl text-foreground">{m.name}</h2>
                    <p className="mb-6 font-sans text-sm font-semibold uppercase tracking-[0.125em] text-primary">
                      {m.role}
                    </p>
                    <div className="space-y-4">
                      {m.bio.map((paragraph) => (
                        <p key={paragraph} className="font-sans leading-relaxed text-muted-foreground">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-narrow text-center">
            <Link to="/contact">
              <Button variant="navy" size="xl" className="px-10">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default People;
