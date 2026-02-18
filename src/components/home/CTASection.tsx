import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-6">
            Ready to{' '}
            <span className="italic text-primary">Transform</span>{' '}
            Your Venue?
          </h2>
          <p className="text-muted-foreground font-sans text-lg mb-10 leading-relaxed">
            Our 25 years of experience have taught us to take a relationship-driven, consultative approach to every engagement. Book a time to chat — we'll listen, ask the right questions, and share data-backed insights that help you invest with clarity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="heroPrimary" size="xl" className="gap-3">
                <Calendar size={20} />
                Book a Consultation
              </Button>
            </Link>
            <Link to="/how-we-work">
              <Button variant="heroSecondary" size="xl" className="gap-2">
                Learn Our Approach
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 pt-12 border-t border-border"
          >
            <p className="text-muted-foreground font-sans text-sm mb-4">
              Trusted by Australia's leading venues
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {['Chatswood RSL', 'Gosford RSL', 'Club Mudgee', 'Bankstown Sports', 'Doyalson RSL'].map((venue) => (
                <span key={venue} className="text-muted-foreground font-sans text-sm font-medium">
                  {venue}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
