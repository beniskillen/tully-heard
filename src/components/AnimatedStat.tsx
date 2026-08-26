import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

/** Animates the numeric prefix of a stat value (e.g. "36,000+" -> counts 0 → 36000, keeps "+"). */
export const AnimatedStat = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const match = value.match(/^([\d,.]+)(.*)$/);
  const numeric = match ? parseFloat(match[1].replace(/,/g, '')) : null;
  const suffix = match ? match[2] : '';
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const n = Math.round(latest);
    return n.toLocaleString() + suffix;
  });

  useEffect(() => {
    if (inView && numeric !== null) {
      const controls = animate(count, numeric, { duration: 1.6, ease: 'easeOut' });
      return controls.stop;
    }
  }, [inView, numeric, count]);

  if (numeric === null) {
    return <span ref={ref}>{value}</span>;
  }
  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default AnimatedStat;
