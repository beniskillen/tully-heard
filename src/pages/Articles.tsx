import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const articles = [
  {
    id: 1,
    title: 'The Future of Club Dining: Trends to Watch in 2024',
    excerpt: 'Discover the emerging trends shaping club dining experiences and how venues are adapting to meet evolving patron expectations.',
    category: 'Industry Insights',
    date: 'January 2024',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=450&fit=crop',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'How Data Analytics is Transforming Hospitality',
    excerpt: 'Learn how leading venues are leveraging data to make smarter decisions and create better customer experiences.',
    category: 'Strategy',
    date: 'December 2023',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Building a Loyalty Program That Actually Works',
    excerpt: 'Practical tips for creating member loyalty programs that drive engagement and retention in the club industry.',
    category: 'Customer Experience',
    date: 'November 2023',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'The Rise of Competitive Socialising in Australian Clubs',
    excerpt: 'Why interactive entertainment concepts are becoming essential for attracting younger demographics.',
    category: 'Trends',
    date: 'October 2023',
    image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&h=450&fit=crop',
    readTime: '4 min read',
  },
  {
    id: 5,
    title: 'Sustainable Practices for Modern Hospitality Venues',
    excerpt: 'How clubs and pubs can implement sustainable practices that benefit both the environment and the bottom line.',
    category: 'Operations',
    date: 'September 2023',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=450&fit=crop',
    readTime: '8 min read',
  },
  {
    id: 6,
    title: 'Attracting the Next Generation of Members',
    excerpt: 'Strategies for engaging younger demographics while maintaining appeal for existing members.',
    category: 'Strategy',
    date: 'August 2023',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=450&fit=crop',
    readTime: '5 min read',
  },
];

const Articles = () => {
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
                Articles & Insights
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-6">
                Industry{' '}
                <span className="italic text-primary">Insights</span>{' '}
                & Expertise
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Thought leadership and practical insights for hospitality leaders looking to stay ahead.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/articles/${article.id}`}>
                    <div className="card-gradient overflow-hidden h-full">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-xs font-medium text-primary">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {article.date}
                          </span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                        <h2 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {article.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                          Read More
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-padding bg-card">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground mb-6">
                Stay Updated
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                Subscribe to our monthly insights newsletter for the latest industry trends and strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="hero" size="lg">
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
