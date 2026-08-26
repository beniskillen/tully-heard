import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
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
              <p className="font-sans text-lg leading-relaxed text-muted-foreground">
                Tully Heard brings together practical operating experience, strategic advisory capability and deep sector knowledge across clubs, hospitality, leisure and related property-backed businesses.
              </p>
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
                    {(m.needsPhoto || m.needsBio) && (
                      <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                        {[m.needsPhoto && 'Photo to be supplied', m.needsBio && 'Bio to be supplied']
                          .filter(Boolean)
                          .join(' · ')}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-3 [direction:ltr]">
                    <h2 className="mb-2 font-display text-3xl text-foreground">{m.name}</h2>
                    <p className="mb-6 font-sans text-sm font-semibold uppercase tracking-[0.125em] text-primary">
                      {m.role}
                    </p>
                    <p className="font-sans leading-relaxed text-muted-foreground">{m.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default People;
