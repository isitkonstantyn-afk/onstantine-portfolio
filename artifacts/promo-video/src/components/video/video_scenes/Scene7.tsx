import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene7() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A0A0A]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-full max-w-[40vw] text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="w-16 h-16 border-2 border-[#E1D9C9] rounded-full mx-auto mb-8 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-8 h-8 bg-[#E1D9C9] rounded-full" />
        </motion.div>

        <motion.h1
          className="text-[6vw] font-black tracking-tighter uppercase leading-none mb-6 text-[#F2F2F2]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          KONSTANTINE
        </motion.h1>

        <motion.p
          className="text-[1.5vw] text-[#8C8C8C] font-light tracking-wide uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Filmmaker · Developer · Strategist
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {['konstantine.dev'].map((link, i) => (
            <span
              key={i}
              className="text-[1vw] text-[#E1D9C9]/60 tracking-widest uppercase border-b border-[#E1D9C9]/30 pb-1"
            >
              {link}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[#E1D9C9]/5 to-transparent pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}
