import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  CheckCircle2,
  Sparkles,
  Building2,
  MapPin,
} from 'lucide-react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { AnimatedStat } from '@/components/AnimatedStat';
import { featuredCases, moreWork } from '@/data/cases';

const SHOWREEL =
  'https://yuthbrxadentorgrsyar.supabase.co/storage/v1/object/sign/Tully%20Heard%20Consulting/Tully%20Heard%20Showreel%201.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNGE4MjlmYy0xNTZiLTQ1NzgtYWViNS01NDUxMmE0MjJiNDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJUdWxseSBIZWFyZCBDb25zdWx0aW5nL1R1bGx5IEhlYXJkIFNob3dyZWVsIDEubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjU0MTMwNywiZXhwIjo0OTA0NjA1MzA3fQ.nl_wBWjvZOC-zarLVgp6KwlHm36D9IDAoEd0lhpNGTU';

const statIcons = [TrendingUp, Users, Award];
const moreWorkIcons = [Building2, MapPin, Sparkles, Award, TrendingUp, Users];

const CaseStudies = () => {
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = featuredCases[currentIndex];

  useEffect(() => {
    const id = location.hash.replace('#', '');
    if (!id) return;
    const index = featuredCases.findIndex((item) => item.id === id);
    if (index >= 0) setCurrentIndex(index);
  }, [location.hash]);

  const next = () => setCurrentIndex((p) => (p + 1) % featuredCases.length);
  const prev = () => setCurrentIndex((p) => (p - 1 + featuredCases.length) % featuredCases.length);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="relative overflow-hidden pb-24 pt-40">
          <div className="absolute inset-0 overflow-hidden">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              src={SHOWREEL}
            />
            <div className="absolute inset-0 z-10 bg-black/50" />
          </div>
          <div className="container-narrow relative z-10 mx-auto max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.125em] text-white/80">
                Our Work
              </p>
              <h1 className="mb-6 font-display text-4xl italic text-white sm:text-5xl lg:text-6xl">
                A small selection of some of the work we have completed
              </h1>
              <p className="font-sans text-lg leading-relaxed text-white/80">
                Selected projects across clubs and hospitality venues, from major redevelopments to targeted venue repositioning, feasibility, customer insight and implementation support.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-card">
          <div className="container-narrow">
            <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.125em] text-primary">
                  Selected work
                </p>
                <h2 className="font-display text-3xl text-foreground sm:text-4xl lg:text-5xl">
                  Strategic outcomes across{' '}
                  <span className="italic text-primary">clubs and hospitality</span>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous case study"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next case study"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2"
              >
                <div className="lg:sticky lg:top-32">
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <img
                      src={current.image}
                      alt={current.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="inline-block rounded-full border border-border bg-background/90 px-4 py-2 backdrop-blur-sm">
                        <span className="font-sans text-sm font-semibold text-primary">{current.result}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {current.stats.map((s, i) => {
                      const Icon = statIcons[i % statIcons.length];
                      return (
                        <motion.div
                          key={s.label}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                          className="group relative overflow-hidden rounded-2xl border border-border bg-background p-5 transition-all hover:border-primary/40 hover:shadow-sm"
                        >
                          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                            <Icon className="text-primary" size={16} />
                          </div>
                          <div className="mb-1 font-display text-2xl tabular-nums text-foreground">
                            <AnimatedStat value={s.value} />
                          </div>
                          <div className="font-sans text-xs leading-snug text-muted-foreground">{s.label}</div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="mb-4 flex items-center gap-3 font-sans text-sm text-muted-foreground">
                    <span className="h-px w-8 bg-border" />
                    {String(currentIndex + 1).padStart(2, '0')} / {String(featuredCases.length).padStart(2, '0')}
                  </div>

                  <div className="mb-4 flex items-start gap-5">
                    <div
                      aria-label={`${current.title} logo`}
                      className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-sm"
                    >
                      {current.logo ? (
                        <img
                          src={current.logo}
                          alt={`${current.title} logo`}
                          className="max-h-full max-w-full object-contain"
                        />
                      ) : (
                        <Building2 className="text-primary/60" size={28} strokeWidth={1.5} />
                      )}
                    </div>
                    <div>
                      <h3 className="font-display text-3xl leading-tight text-foreground lg:text-4xl">
                        {current.title}
                      </h3>
                      <p className="mt-1 font-sans text-lg text-primary">{current.headline}</p>
                    </div>
                  </div>

                  <p className="mb-8 font-sans leading-relaxed text-muted-foreground">{current.intro}</p>

                  <div className="mb-8 space-y-6">
                    <div>
                      <h4 className="mb-2 font-sans text-sm font-semibold uppercase tracking-[0.125em] text-primary">
                        Challenge
                      </h4>
                      <p className="font-sans leading-relaxed text-muted-foreground">{current.challenge}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-sans text-sm font-semibold uppercase tracking-[0.125em] text-primary">
                        Tully Heard’s role
                      </h4>
                      <p className="font-sans leading-relaxed text-muted-foreground">{current.role}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-sans text-sm font-semibold uppercase tracking-[0.125em] text-primary">
                        Outcome
                      </h4>
                      <p className="font-sans leading-relaxed text-muted-foreground">{current.outcome}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 font-sans text-sm font-semibold uppercase tracking-[0.125em] text-primary">
                      Proof points
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {current.proof.map((p) => (
                        <span
                          key={p}
                          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 font-sans text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                        >
                          <CheckCircle2 size={14} className="text-primary" />
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

            <div className="mt-12 flex items-center justify-center gap-2">
              {featuredCases.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to case study ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
              {featuredCases.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setCurrentIndex(i)}
                  className={`rounded-xl border p-4 text-left transition-colors ${
                    i === currentIndex
                      ? 'border-primary bg-background'
                      : 'border-border bg-background/50 hover:border-primary/50'
                  }`}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <div className="font-sans text-xs uppercase tracking-[0.1em] text-muted-foreground">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div
                      aria-label={`${c.title} logo`}
                      className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-border bg-background p-1"
                    >
                      {c.logo ? (
                        <img src={c.logo} alt={`${c.title} logo`} className="max-h-full max-w-full object-contain" />
                      ) : (
                        <Building2 className="text-muted-foreground/60" size={12} strokeWidth={1.5} />
                      )}
                    </div>
                  </div>
                  <div className="font-display text-sm leading-snug text-foreground">{c.title}</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-[0.125em] text-primary">
                  More selected work
                </p>
                <h2 className="font-display text-2xl text-foreground sm:text-3xl">
                  A broader portfolio of <span className="italic text-primary">venue and precinct</span> engagements
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {moreWork.map((w, i) => {
                const Icon = moreWorkIcons[i % moreWorkIcons.length];
                return (
                  <motion.div
                    key={w.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <div
                        aria-label={`${w.title} logo`}
                        className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-border bg-background p-1.5"
                      >
                        {w.logo ? (
                          <img src={w.logo} alt={`${w.title} logo`} className="max-h-full max-w-full object-contain" />
                        ) : (
                          <Building2 className="text-muted-foreground/60" size={16} strokeWidth={1.5} />
                        )}
                      </div>
                    </div>
                    <h3 className="mb-3 font-display text-lg text-foreground">{w.title}</h3>
                    <p className="font-sans text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                    <div className="mt-5 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding bg-card">
          <div className="container-narrow max-w-3xl text-center">
            <h2 className="mb-4 font-display text-3xl italic text-foreground sm:text-4xl">
              Have a venue challenge to work through?
            </h2>
            <p className="mb-8 font-sans text-lg leading-relaxed text-muted-foreground">
              Let’s talk about how clarity, insight and disciplined execution can move your venue forward.
            </p>
            <Link to="/contact">
              <Button variant="navy" size="lg">
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

export default CaseStudies;
