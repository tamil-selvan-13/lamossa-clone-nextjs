'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  // Using a spring curve to handle smooth interpolation, preventing jagged width changes during rapid scroll events
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[4px] bg-[#8B5CF6] origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}
