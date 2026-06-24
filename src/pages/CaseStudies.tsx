import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Play, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    id: 1,
    title: 'Chatswood RSL',
    subtitle: "Yogi's Sports Bar",
    description: 'Recognising the evolving needs of its patrons, Chatswood RSL embarked on a major revitalisation project. The standout development was Yogi\'s Sports Bar, an American-style sports venue designed to attract a younger demographic.',
    result: '$50M+ Revenue Growth',
    metrics: [
      { label: 'Revenue Increase', value: '45%' },
      { label: 'New Members', value: '2,500+' },
      { label: 'Patron Satisfaction', value: '94%' },
    ],
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&h=800&fit=crop',
    videoId: '0NmM6m5xkHI',
  },
  {
    id: 2,
    title: 'Gosford RSL',
    subtitle: '$50 Million Transformation',
    description: 'Evolved into a premier dining and entertainment hub on the Central Coast with award-winning facilities, a state-of-the-art sports bar, and a locally brewed craft beer experience.',
    result: '40% Member Growth',
    metrics: [
      { label: 'Revenue Growth', value: '40%' },
      { label: 'Member Growth', value: '35%' },
      { label: 'Industry Awards', value: '6' },
    ],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=800&fit=crop',
    videoId: 'OXnVF4w2Qgw',
  },
  {
    id: 3,
    title: 'Club Mudgee',
    subtitle: 'The Hub Sports Bar',
    description: 'Revitalised a historic section of the club, transforming a former bingo hall and main bar into a vibrant sports and community hub that has delighted locals and tourists alike for over 70 years.',
    result: '35% Revenue Increase',
    metrics: [
      { label: 'Revenue Increase', value: '35%' },
      { label: 'Gaming Revenue', value: '+28%' },
      { label: 'F&B Revenue', value: '+42%' },
    ],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop',
    videoId: 'f9IOLlmQQ-Y',
  },
  {
    id: 4,
    title: 'Bankstown Sports',
    subtitle: 'Basement Brewhouse',
    description: 'Transformed an underperforming sports bar into The Basement Brew House, a modern craft beer venue with a state-of-the-art brewery attracting younger, diverse audiences.',
    result: '60% New Demographics',
    metrics: [
      { label: 'New Demographics', value: '60%' },
      { label: 'Revenue Growth', value: '55%' },
      { label: 'Social Following', value: '+400%' },
    ],
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1200&h=800&fit=crop',
    videoId: 'AcJZtTkR2cU',
  },
  {
    id: 5,
    title: "Ready's Sports Bar",
    subtitle: 'Doyalson RSL',
    description: 'Unveiled a state-of-the-art venue designed to revolutionise casual dining and entertainment on the Central Coast with immersive competitive socialising experience.',
    result: 'Industry Innovation Award',
    metrics: [
      { label: 'Patron Visits', value: '+65%' },
      { label: 'Average Spend', value: '+38%' },
      { label: 'NPS Score', value: '72' },
    ],
    image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=1200&h=800&fit=crop',
    videoId: 'example',
  },
  {
    id: 6,
    title: 'The Growers',
    subtitle: 'Shoalhaven Ex-Servos',
    description: 'A dining experience that embraces local produce and a modern, welcoming atmosphere, strengthening community ties and expanding reach as a must-visit regional destination.',
    result: 'Regional Dining Award',
    metrics: [
      { label: 'Local Sourcing', value: '85%' },
      { label: 'Covers/Week', value: '+50%' },
      { label: 'Staff Retention', value: '92%' },
    ],
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&h=800&fit=crop',
    videoId: '3BUMl6eS8xk',
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-card to-background">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-primary text-sm uppercase tracking-wider font-medium mb-4">
                Case Studies
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-6">
                Results Speak for{' '}
                <span className="italic text-primary">Themselves</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore how we've helped Australia's leading venues transform their offerings and achieve lasting commercial success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="card-gradient overflow-hidden">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center">
                          <Play className="text-primary-foreground fill-current ml-1" size={24} />
                        </div>
                      </button>
                      <div className="absolute bottom-4 left-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                          <TrendingUp size={14} className="text-primary" />
                          <span className="text-primary text-sm font-semibold">{study.result}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-primary text-sm mb-1">{study.subtitle}</p>
                      <h2 className="text-2xl font-display font-semibold text-foreground mb-3">
                        {study.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {study.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 mb-4 pt-4 border-t border-border">
                        {study.metrics.map((metric) => (
                          <div key={metric.label}>
                            <div className="text-xl font-display font-bold text-foreground">
                              {metric.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-card">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                Join the growing list of venues that have transformed with Tully Heard.
              </p>
              <Link to="/contact">
                <Button variant="heroPrimary" size="xl" className="gap-2">
                  Start Your Transformation
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
