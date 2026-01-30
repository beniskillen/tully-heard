import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Play, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const mediaFeatures = [
  {
    id: 1,
    type: 'video',
    source: 'ClubsNSW',
    title: 'Welcome to the New Chatswood RSL',
    description: 'Club TV Episode 103 featuring the transformation of Chatswood RSL and the development of Yogi\'s Sports Bar.',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=450&fit=crop',
    videoId: '0NmM6m5xkHI',
  },
  {
    id: 2,
    type: 'video',
    source: 'ClubsNSW',
    title: "Gosford RSL's Incredible $50m Makeover",
    description: 'An in-depth look at how Gosford RSL became a premier dining and entertainment destination on the Central Coast.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=450&fit=crop',
    videoId: 'OXnVF4w2Qgw',
  },
  {
    id: 3,
    type: 'video',
    source: 'ClubsNSW',
    title: 'Introducing The Hub Sports Bar At Club Mudgee',
    description: 'Discover how Club Mudgee revitalised its historic spaces into a vibrant community hub.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=450&fit=crop',
    videoId: 'f9IOLlmQQ-Y',
  },
  {
    id: 4,
    type: 'video',
    source: 'ClubsNSW',
    title: "Bankstown Sports Club's Basement Brewhouse",
    description: 'How a modern craft beer venue attracted new demographics and drove revenue growth.',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=450&fit=crop',
    videoId: 'AcJZtTkR2cU',
  },
  {
    id: 5,
    type: 'video',
    source: 'ClubsNSW',
    title: 'Club Dining Has Never Looked So Good',
    description: 'The Growers at Shoalhaven Ex-Servos - embracing local produce and modern dining.',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=450&fit=crop',
    videoId: '3BUMl6eS8xk',
  },
];

const mediaLogos = ['ClubsNSW', 'AFR', 'Sky News', 'The Australian', 'Channel 9', 'RSL NSW'];

const Media = () => {
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
                Media Features
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-6">
                In the{' '}
                <span className="italic text-primary">Spotlight</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                See our work featured across Australia's leading industry and media publications.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured On */}
        <section className="py-12 bg-card border-y border-border/50">
          <div className="container-narrow">
            <p className="text-center text-muted-foreground text-sm uppercase tracking-wider mb-8">
              Featured On
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {mediaLogos.map((logo) => (
                <span
                  key={logo}
                  className="text-muted-foreground font-semibold tracking-wide opacity-60 hover:opacity-100 transition-opacity"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Media Grid */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaFeatures.map((feature, index) => (
                <motion.article
                  key={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <a
                    href={`https://www.youtube.com/watch?v=${feature.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="card-gradient overflow-hidden">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center">
                            <Play className="text-primary-foreground fill-current ml-1" size={24} />
                          </div>
                        </div>
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 rounded-full bg-card/90 backdrop-blur text-xs font-medium text-foreground">
                            {feature.source}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                          {feature.title}
                          <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </a>
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
                Want to Feature Your Venue?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                Let's discuss how we can help create a success story worth sharing.
              </p>
              <Link to="/contact">
                <Button variant="heroPrimary" size="xl" className="gap-2">
                  Get in Touch
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

export default Media;
