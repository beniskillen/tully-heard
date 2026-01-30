import { motion } from 'framer-motion';

const mediaLogos = [
  { name: 'ClubsNSW', width: 120 },
  { name: 'AFR', width: 100 },
  { name: 'Sky News', width: 110 },
  { name: 'The Australian', width: 140 },
  { name: 'Channel 9', width: 90 },
  { name: 'RSL NSW', width: 100 },
];

export const ClientsSection = () => {
  return (
    <section className="py-16 bg-card border-y border-border/50">
      <div className="container-narrow">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm uppercase tracking-wider mb-8"
        >
          Featured on
        </motion.p>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...mediaLogos, ...mediaLogos].map((logo, index) => (
              <div
                key={index}
                className="mx-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                <div 
                  className="h-8 flex items-center justify-center text-muted-foreground font-semibold tracking-wide"
                  style={{ minWidth: logo.width }}
                >
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
