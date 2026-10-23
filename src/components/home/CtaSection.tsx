import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const CtaSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#122033]/10 bg-[#122033]/[0.04] px-5 py-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#479E92]" />
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#122033]">
                Start the conversation
              </p>
              <span className="h-1.5 w-1.5 rounded-full bg-[#479E92]" />
            </div>
            <h2 className="mb-6 font-display text-3xl text-foreground sm:text-4xl lg:text-5xl">
              Have a venue decision to <span className="italic text-primary">work through?</span>
            </h2>
            <p className="mb-8 font-sans text-lg leading-relaxed text-muted-foreground">
              Whether you're reviewing your long-term strategy, considering a major investment, looking to improve business performance or exploring opportunities for growth, we'd welcome a conversation.
            </p>
            <Link to="/contact">
              <Button variant="navy" size="xl" className="px-10">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
