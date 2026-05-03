import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 1800),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const metrics = [
    { label: 'Follower Growth', value: '320%' },
    { label: 'Impressions', value: '1.2M' },
    { label: 'Engagement Rate', value: '48%' },
  ];

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center px-[10vw]"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="w-12 h-1 bg-[#E1D9C9] mb-8 mx-auto origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.h2
        className="text-[5vw] font-bold leading-none tracking-tight mb-4 text-center"
        style={{ fontFamily: 'var(--font-display)' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        SOCIAL MEDIA<br />
        <span className="text-[#8C8C8C]">MARKETING</span>
      </motion.h2>

      <motion.div
        className="flex gap-14 mt-10"
        initial={{ opacity: 0 }}
        animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            className="text-center border-t border-[#E1D9C9]/30 pt-6"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={phase >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div
              className="text-[4vw] font-black text-[#E1D9C9] leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {m.value}
            </div>
            <div className="text-[1vw] text-[#8C8C8C] uppercase tracking-wider mt-2">
              {m.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="text-[1.2vw] text-[#8C8C8C] text-center mt-10 max-w-[38vw] leading-relaxed"
        initial={{ opacity: 0 }}
        animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        Content strategy, brand growth &amp; community building
      </motion.p>
    </motion.div>
  );
}
