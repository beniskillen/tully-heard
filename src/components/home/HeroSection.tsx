import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

export const HeroSection = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <iframe
            className="w-[300%] h-[300%] aspect-video"
            src="https://www.youtube.com/embed/hlbbFR9j9PY?autoplay=1&mute=1&controls=0&loop=1&playlist=hlbbFR9j9PY&playsinline=1&rel=0&vq=hd1080"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Hero Video"
          />
        </div>
      </div>

      <div className="relative z-10 container-narrow text-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display text-white leading-tight mb-6 italic">
            The Strategic Partner of Choice for Australia's Club and Hospitality Leaders
          </h1>
          <p className="text-lg sm:text-xl text-white/80 font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
            With over 25 years of experience as venue owners and strategic consultants, Tully Heard partners with hospitality venues to thrive.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button variant="navy" size="xl" className="text-base px-10 py-4" onClick={scrollToContact}>
              GET IN TOUCH
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
