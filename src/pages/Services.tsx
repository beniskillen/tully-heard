import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { BarChart3, Palette, Users2, Building2, Megaphone, PieChart, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'strategic-planning',
    icon: BarChart3,
    title: 'Strategic Planning',
    description: "Long-term roadmaps that align with your venue's vision and market position. We help you make informed decisions about where to invest for maximum impact.",
    features: [
      'Market analysis & competitive research',
      'Growth strategy development',
      'Capital investment planning',
      'Performance benchmarking',
      'Risk assessment and mitigation',
      'Board presentations and stakeholder alignment',
    ],
  },
  {
    id: 'redevelopment',
    icon: Palette,
    title: 'Venue Redevelopment',
    description: 'Transform underperforming spaces into thriving destinations. From concept to completion, we guide your redevelopment journey.',
    features: [
      'Concept development and design briefs',
      'F&B strategy and menu engineering',
      'Brand positioning and identity',
      'Space planning and layout optimisation',
      'Project management oversight',
      'Launch strategy and marketing',
    ],
  },
  {
    id: 'experience',
    icon: Users2,
    title: 'Customer Experience',
    description: 'Create memorable experiences that drive loyalty and word-of-mouth. Understanding your customers is the key to sustainable growth.',
    features: [
      'Member and patron research',
      'Customer journey mapping',
      'Service design and standards',
      'Loyalty program development',
      'Staff training programs',
      'Experience measurement and optimisation',
    ],
  },
  {
    id: 'operations',
    icon: Building2,
    title: 'Operational Excellence',
    description: 'Optimise operations for efficiency and sustainable growth. Better systems mean better results and happier teams.',
    features: [
      'Process improvement and automation',
      'Cost optimisation strategies',
      'Staff training and development',
      'Technology integration',
      'Supplier and vendor management',
      'Compliance and governance',
    ],
  },
  {
    id: 'marketing',
    icon: Megaphone,
    title: 'Marketing & Communications',
    description: 'Reach the right audiences with compelling messages. We help you tell your story and attract new patrons.',
    features: [
      'Brand strategy and positioning',
      'Digital marketing campaigns',
      'Content strategy and creation',
      'Social media management',
      'Event marketing and promotions',
      'Member communications',
    ],
  },
  {
    id: 'analytics',
    icon: PieChart,
    title: 'Data & Analytics',
    description: 'Turn data into actionable insights. Make decisions with confidence using evidence-based recommendations.',
    features: [
      'Customer data analysis',
      'Performance dashboards',
      'Trend identification and forecasting',
      'Benchmarking and reporting',
      'Market opportunity assessment',
      'ROI measurement and tracking',
    ],
  },
];

const Services = () => {
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
                Our Services
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-6">
                Comprehensive{' '}
                <span className="italic text-primary">Solutions</span>{' '}
                for Hospitality Leaders
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From strategic planning to operational excellence, we provide end-to-end consulting services tailored to the hospitality industry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="scroll-mt-32"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <service.icon className="text-primary" size={32} />
                      </div>
                      <h2 className="text-3xl font-display font-semibold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Link to="/contact">
                        <Button variant="outline" className="gap-2">
                          Enquire About This Service
                          <ArrowRight size={18} />
                        </Button>
                      </Link>
                    </div>
                    <div className="p-8 rounded-2xl bg-card border border-border">
                      <h3 className="text-lg font-semibold text-foreground mb-4">What We Deliver</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                            <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {index < services.length - 1 && (
                    <div className="border-b border-border mt-20" />
                  )}
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
                Not Sure Where to Start?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                Book a free consultation and we'll help identify the right approach for your venue.
              </p>
              <Link to="/contact">
                <Button variant="heroPrimary" size="xl" className="gap-2">
                  Book a Free Consultation
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

export default Services;
