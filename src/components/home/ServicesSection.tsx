import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BarChart3, Palette, Users2, Building2, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Strategic Planning',
    description: "Long-term roadmaps that align with your venue's vision and market position.",
    features: ["Market analysis & research", "Growth strategy development", "Capital planning", "Performance benchmarking"],
    link: '/services#strategic-planning',
  },
  {
    icon: Palette,
    title: 'Venue Redevelopment',
    description: 'Transform underperforming spaces into thriving destinations.',
    features: ["Concept development", "Design brief creation", "F&B strategy", "Brand positioning"],
    link: '/services#redevelopment',
  },
  {
    icon: Users2,
    title: 'Customer Experience',
    description: 'Create memorable experiences that drive loyalty and word-of-mouth.',
    features: ["Member research", "Journey mapping", "Service design", "Loyalty programs"],
    link: '/services#experience',
  },
  {
    icon: Building2,
    title: 'Operational Excellence',
    description: 'Optimise operations for efficiency and sustainable growth.',
    features: ["Process improvement", "Cost optimisation", "Staff training", "Technology integration"],
    link: '/services#operations',
  },
];

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-sans uppercase tracking-[0.125em] font-semibold mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-6">
            Comprehensive{' '}
            <span className="italic text-primary">Solutions</span>{' '}
            for Your Venue
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">
            From strategic planning to operational excellence, we provide end-to-end consulting services tailored to the hospitality industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={service.link}>
                <div className="card-gradient p-8 h-full hover:scale-[1.02] transition-transform duration-500">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <service.icon className="text-primary" size={28} />
                    </div>
                    <ArrowUpRight 
                      className="text-muted-foreground group-hover:text-primary transition-colors" 
                      size={24} 
                    />
                  </div>
                  <h3 className="text-2xl font-display text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-sans mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li 
                        key={feature} 
                        className="flex items-center gap-2 text-sm font-sans text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
