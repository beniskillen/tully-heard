import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gosfordImg from '@/assets/cases/gosford-rsl.jpeg.asset.json';
import yogisImg from '@/assets/cases/yogis-chatswood.webp.asset.json';
import shoalhavenImg from '@/assets/cases/shoalhaven.png.asset.json';
import mudgeeImg from '@/assets/cases/club-mudgee.webp.asset.json';
import gosfordLogo from '@/assets/logos/gosford-rsl.png.asset.json';
import yogisLogo from '@/assets/logos/doylos-sports-bar.png.asset.json';
import growersLogo from '@/assets/logos/the-growers-by-ponte.png.asset.json';
import mudgeeLogo from '@/assets/logos/club-mudgee.svg.asset.json';

const caseStudies = [
  {
    id: 'gosford-rsl',
    title: 'Gosford RSL',
    subtitle: 'Strategic direction for a major venue transformation',
    description:
      'A major redevelopment that repositioned the club as a leading dining, entertainment and community destination on the Central Coast.',
    result: 'Major venue transformation',
    image: gosfordImg.url,
    logo: gosfordLogo.url,
  },
  {
    id: 'chatswood-rsl',
    title: 'Chatswood RSL / Yogi’s Sports Bar',
    subtitle: 'A more dynamic, multi-generational venue experience',
    description:
      'A revitalised sports and entertainment concept designed to broaden appeal while strengthening the club’s role as a social destination.',
    result: 'Broader audience appeal',
    image: yogisImg.url,
    logo: yogisLogo.url,
  },
  {
    id: 'shoalhaven',
    title: 'Shoalhaven Ex-Servos / The Growers',
    subtitle: 'A regional food and beverage destination',
    description:
      'A locally led hospitality concept designed to broaden appeal, strengthen community connection and create a more distinctive venue experience.',
    result: 'Regional destination positioning',
    image: shoalhavenImg.url,
    logo: growersLogo.url,
  },
  {
    id: 'club-mudgee',
    title: 'Club Mudgee / The Hub Sports Bar',
    subtitle: 'Revitalising a historic club space for modern community use',
    description:
      'A repositioned sports bar and community hub that gave an underutilised area a clearer role in the venue.',
    result: 'Improved venue utilisation',
    image: mudgeeImg.url,
    logo: mudgeeLogo.url,
  },
];

export const CaseStudiesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

  const currentCase = caseStudies[currentIndex];

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <p className="text-primary text-sm font-sans uppercase tracking-[0.125em] font-semibold mb-4">
              Selected work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">
              Work that helps venues{' '}
              <span className="italic text-primary">evolve and perform</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous case study"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next case study"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentCase.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <img
                src={currentCase.image}
                alt={currentCase.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-block px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm border border-border">
                  <span className="text-primary font-sans font-semibold text-sm">
                    {currentCase.result}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="text-muted-foreground text-sm font-sans mb-2">
                {String(currentIndex + 1).padStart(2, '0')} /{' '}
                {String(caseStudies.length).padStart(2, '0')}
              </div>
              <h3 className="text-3xl lg:text-4xl font-display text-foreground mb-2">
                {currentCase.title}
              </h3>
              <p className="text-primary text-lg font-sans mb-4">
                {currentCase.subtitle}
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                {currentCase.description}
              </p>
              <Link to={`/case-studies#${currentCase.id}`}>
                <Button variant="outline" className="gap-2">
                  View full case study
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-2 mt-12">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to case study ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-border hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-10">
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
