import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            src="https://yuthbrxadentorgrsyar.supabase.co/storage/v1/object/sign/Tully%20Heard%20Consulting/Tully%20Heard%20Website%20Cut%20-%20Supabase.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNGE4MjlmYy0xNTZiLTQ1NzgtYWViNS01NDUxMmE0MjJiNDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJUdWxseSBIZWFyZCBDb25zdWx0aW5nL1R1bGx5IEhlYXJkIFdlYnNpdGUgQ3V0IC0gU3VwYWJhc2UubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjUyOTkzMywiZXhwIjo0OTA0NTkzOTMzfQ.A4Gvt4HFgG-6gteZmFlw4c3sU1bW43jCAQyqsvEiE0g"
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
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
