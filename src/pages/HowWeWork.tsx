import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const processSteps = [
  {
    icon: Target,
    title: 'Discovery & Analysis',
    description: "We begin with a deep dive into your venue's current position, challenges, and aspirations. This includes market research, customer insights, and competitive analysis.",
    outcomes: [
      'Comprehensive venue audit',
      'Market positioning analysis',
      'Customer research and segmentation',
      'Competitive landscape review',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Strategy Development',
    description: 'Using data-driven insights, we develop a tailored strategy that aligns with your vision and maximises growth opportunities.',
    outcomes: [
      'Strategic roadmap creation',
      'Investment priority planning',
      'Risk assessment and mitigation',
      'Performance benchmarks',
    ],
  },
  {
    icon: Users,
    title: 'Collaborative Implementation',
    description: 'We work alongside your team to execute the strategy, transferring knowledge and building internal capabilities for lasting success.',
    outcomes: [
      'Project management support',
      'Team training and development',
      'Vendor coordination',
      'Progress monitoring',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Measurement & Optimisation',
    description: 'We track results against benchmarks and continuously refine approaches to ensure sustainable, long-term success.',
    outcomes: [
      'KPI tracking and reporting',
      'Performance optimisation',
      'Ongoing strategic advice',
      'Success celebration',
    ],
  },
];

const HowWeWork = () => {
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
                How We Work
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-6">
                A Consultative Approach to{' '}
                <span className="italic text-primary">Lasting</span> Success
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our unique process blends lived industry experience with contemporary, insights-led decision-making.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <step.icon className="text-primary" size={32} />
                      </div>
                      <div className="text-6xl font-display font-bold text-muted/30">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <h2 className="text-3xl font-display font-semibold text-foreground mb-4">
                      {step.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className={`p-8 rounded-2xl bg-card border border-border ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Key Outcomes</h3>
                    <ul className="space-y-3">
                      {step.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-center gap-3 text-muted-foreground">
                          <CheckCircle className="text-primary flex-shrink-0" size={20} />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
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
                Ready to Start Your Journey?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                Book a strategy call and discover how we can help transform your venue.
              </p>
              <Link to="/contact">
                <Button variant="heroPrimary" size="xl" className="gap-2">
                  Book a Strategy Call
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

export default HowWeWork;
