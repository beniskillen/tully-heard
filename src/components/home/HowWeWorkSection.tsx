import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, TrendingUp, Users, Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: Target,
    title: 'Clarity',
    description: "We start by understanding your venue's unique challenges and opportunities through comprehensive analysis.",
  },
  {
    icon: Lightbulb,
    title: 'Strategy',
    description: 'Data-driven insights inform our recommendations, ensuring every decision is backed by research.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work alongside your team, transferring knowledge and building internal capabilities.',
  },
  {
    icon: TrendingUp,
    title: 'Results',
    description: 'Measurable outcomes that drive revenue growth, member engagement, and lasting success.',
  },
];

export const HowWeWorkSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-wider font-medium mb-4">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6">
            Driven by Insights.{' '}
            <span className="italic text-primary">Focused</span> on Outcomes.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our unique process blends lived industry experience with a contemporary, insights-led approach to decision-making.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="feature-card group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <step.icon className="text-primary" size={24} />
              </div>
              <div className="text-muted-foreground text-sm font-medium mb-2">
                0{index + 1}
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/how-we-work">
            <Button variant="outline" size="lg" className="gap-2">
              Learn More About Our Process
              <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
