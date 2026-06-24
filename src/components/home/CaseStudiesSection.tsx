import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    id: 1,
    title: 'Chatswood RSL',
    subtitle: "Yogi's Sports Bar",
    description: 'Recognising the evolving needs of its patrons, Chatswood RSL embarked on a major revitalisation project attracting a younger demographic through American-style sports bar concept.',
    result: '$50M+ Revenue Growth',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop',
    videoId: '0NmM6m5xkHI',
  },
  {
    id: 2,
    title: 'Gosford RSL',
    subtitle: '$50 Million Transformation',
    description: 'Evolved into a premier dining and entertainment hub with award-winning facilities, a state-of-the-art sports bar, and locally brewed craft beer experience.',
    result: '40% Member Growth',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
    videoId: 'OXnVF4w2Qgw',
  },
  {
    id: 3,
    title: 'Club Mudgee',
    subtitle: 'The Hub Sports Bar',
    description: 'Revitalised a historic section of the club, transforming a former bingo hall into a vibrant sports and community hub serving locals for over 70 years.',
    result: '35% Revenue Increase',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    videoId: 'f9IOLlmQQ-Y',
  },
  {
    id: 4,
    title: 'Bankstown Sports',
    subtitle: 'Basement Brewhouse',
    description: 'Transformed an underperforming sports bar into a modern craft beer venue with state-of-the-art brewery attracting younger, diverse audiences.',
    result: '60% New Demographics',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=600&fit=crop',
    videoId: 'AcJZtTkR2cU',
  },
];

export const CaseStudiesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

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
          <div>
            <p className="text-primary text-sm font-sans uppercase tracking-[0.125em] font-semibold mb-4">
              Case Studies
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">
              Results speak for{' '}
              <span className="italic text-primary">themselves</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Case Study Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCase.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Image - clean, no dark overlay */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <img
                src={currentCase.image}
                alt={currentCase.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <button className="absolute inset-0 flex items-center justify-center group/play">
                <div className="w-20 h-20 rounded-full bg-navy/90 backdrop-blur flex items-center justify-center group-hover/play:scale-110 transition-transform shadow-lg">
                  <Play className="text-navy-foreground fill-current ml-1" size={32} />
                </div>
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-block px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm border border-border">
                  <span className="text-primary font-sans font-semibold text-sm">{currentCase.result}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:pl-8">
              <div className="text-muted-foreground text-sm font-sans mb-2">
                {String(currentIndex + 1).padStart(2, '0')} / {String(caseStudies.length).padStart(2, '0')}
              </div>
              <h3 className="text-3xl lg:text-4xl font-display text-foreground mb-2">
                {currentCase.title}
              </h3>
              <p className="text-primary text-lg font-sans mb-4">{currentCase.subtitle}</p>
              <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                {currentCase.description}
              </p>
              <Link to={`/case-studies/${currentCase.id}`}>
                <Button variant="outline" className="gap-2">
                  View Full Case Study
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-primary'
                  : 'bg-border hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
