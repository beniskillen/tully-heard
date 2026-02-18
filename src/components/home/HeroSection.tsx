import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroVideo from '@/assets/hero-video.mp4';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
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
            <Link to="/contact">
              <Button variant="navy" size="xl" className="text-base px-10 py-4">
                GET IN TOUCH
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
