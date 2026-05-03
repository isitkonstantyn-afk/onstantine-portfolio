import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene6() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 2000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const pillars = [
    { icon: '↗', label: 'Market Strategy' },
    { icon: '◈', label: 'Brand Partnerships' },
    { icon: '⬡', label: 'Revenue Growth' },
    { icon: '⊕', label: 'Client Success' },
  ];

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-between px-[10vw]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-[48vw] z-20">
        <motion.div
          className="w-12 h-1 bg-[#E1D9C9] mb-8 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.h2
          className="text-[4.5vw] font-bold leading-none tracking-tight mb-10"
          style={{ fontFamily: 'var(--font-display)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          BUSINESS<br />
          <span className="text-[#8C8C8C]">DEVELOPMENT</span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 border border-[#E1D9C9]/20 p-5 rounded-md"
              initial={{ opacity: 0, x: -20 }}
              animate={phase >= 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <span className="text-[2vw] text-[#E1D9C9] leading-none mt-1">{p.icon}</span>
              <span className="text-[1.1vw] text-[#8C8C8C] uppercase tracking-wider leading-snug">
                {p.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="w-[28vw] flex flex-col items-center gap-6 z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.div
          className="text-[7vw] font-black text-[#E1D9C9] leading-none"
          style={{ fontFamily: 'var(--font-display)' }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          $∞
        </motion.div>
        <motion.p
          className="text-[1.1vw] text-[#8C8C8C] text-center leading-relaxed"
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Turning vision into<br />scalable ventures
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
