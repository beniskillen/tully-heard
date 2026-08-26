import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HERO_VIDEO =
  'https://yuthbrxadentorgrsyar.supabase.co/storage/v1/object/sign/Tully%20Heard%20Consulting/Tully%20Heard%20Website%20Cut%20-%20Supabase.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNGE4MjlmYy0xNTZiLTQ1NzgtYWViNS01NDUxMmE0MjJiNDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJUdWxseSBIZWFyZCBDb25zdWx0aW5nL1R1bGx5IEhlYXJkIFdlYnNpdGUgQ3V0IC0gU3VwYWJhc2UubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjUyOTkzMywiZXhwIjo0OTA0NTkzOTMzfQ.A4Gvt4HFgG-6gteZmFlw4c3sU1bW43jCAQyqsvEiE0g';

const YOUTUBE_EMBED =
  'https://www.youtube.com/embed/hlbbFR9j9PY?autoplay=1&mute=1&controls=0&loop=1&playlist=hlbbFR9j9PY&playsinline=1&rel=0&vq=hd1080';

export const HeroSection = () => {
  const [useFallback, setUseFallback] = useState(false);

  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black/40" />
        {useFallback ? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <iframe
              className="aspect-video h-[300%] w-[300%]"
              src={YOUTUBE_EMBED}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="Hero Video"
            />
          </div>
        ) : (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            src={HERO_VIDEO}
            onError={() => setUseFallback(true)}
          />
        )}
      </div>

      <div className="container-narrow relative z-10 pb-20 pt-40 text-center sm:pt-44 md:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="mb-6 font-display text-3xl italic leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            The Strategic Partner of Choice for Australia's Club and Hospitality Leaders
          </h1>
          <p className="mx-auto mb-10 max-w-2xl font-sans text-lg leading-relaxed text-white/80 sm:text-xl">
            With over 25 years of experience as venue owners and strategic consultants, Tully Heard partners with hospitality venues to thrive.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link to="/contact">
              <Button variant="navy" size="xl" className="px-10 py-4 text-base">
                GET IN TOUCH
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
