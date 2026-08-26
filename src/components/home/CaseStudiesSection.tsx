import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { homeCaseTeasers } from '@/data/cases';

export const CaseStudiesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCase = homeCaseTeasers[currentIndex];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % homeCaseTeasers.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + homeCaseTeasers.length) % homeCaseTeasers.length);

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.125em] text-primary">
              Selected work
            </p>
            <h2 className="font-display text-3xl text-foreground sm:text-4xl lg:text-5xl">
              Work that helps venues{' '}
              <span className="italic text-primary">evolve and perform</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous case study"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next case study"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>

        <motion.div
            key={currentCase.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2"
          >
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={currentCase.image}
                alt={currentCase.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-block rounded-full border border-border bg-background/90 px-4 py-2 backdrop-blur-sm">
                  <span className="font-sans text-sm font-semibold text-primary">
                    {currentCase.result}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="mb-4 flex items-start gap-5">
                <div
                  aria-label={`${currentCase.title} logo`}
                  className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-sm"
                >
                  {currentCase.logo ? (
                    <img
                      src={currentCase.logo}
                      alt={`${currentCase.title} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <Building2 className="text-primary/60" size={24} strokeWidth={1.5} />
                  )}
                </div>
                <div>
                  <div className="mb-2 font-sans text-sm text-muted-foreground">
                    {String(currentIndex + 1).padStart(2, '0')} /{' '}
                    {String(homeCaseTeasers.length).padStart(2, '0')}
                  </div>
                  <h3 className="font-display text-3xl leading-tight text-foreground lg:text-4xl">
                    {currentCase.title}
                  </h3>
                </div>
              </div>
              <p className="mb-4 font-sans text-lg text-primary">{currentCase.headline}</p>
              <p className="mb-8 font-sans leading-relaxed text-muted-foreground">
                {currentCase.intro}
              </p>
              <Link to={`/case-studies#${currentCase.id}`}>
                <Button variant="outline" className="gap-2">
                  View full case study
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </motion.div>

        <div className="mt-12 flex items-center justify-center gap-2">
          {homeCaseTeasers.map((item, index) => (
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

        <div className="mt-10 text-center">
          <Link to="/case-studies">
            <Button variant="navy" size="lg" className="gap-2">
              View all work <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
