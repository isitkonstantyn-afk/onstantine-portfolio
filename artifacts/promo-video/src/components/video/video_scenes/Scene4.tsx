import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 900),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-between px-[10vw]"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="w-[42vw] h-[60vh] relative z-10 overflow-hidden"
        initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
        animate={
          phase >= 1
            ? { opacity: 1, clipPath: 'inset(0 0 0% 0)' }
            : { opacity: 0, clipPath: 'inset(0 0 100% 0)' }
        }
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.img
          src={`${import.meta.env.BASE_URL}images/events.png`}
          className="w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 border border-[#E1D9C9]/20" />
      </motion.div>

      <div className="w-[40%] z-20 text-right flex flex-col items-end">
        <motion.div
          className="w-12 h-1 bg-[#E1D9C9] mb-8 origin-right"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.h2
          className="text-[4.5vw] font-bold leading-none tracking-tight mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          EVENT<br />
          <span className="text-[#8C8C8C]">PRODUCTION</span>
        </motion.h2>

        <div className="space-y-3 text-right mt-4">
          {['Live events & activations', 'Global venues', 'Brand partnerships'].map((text, i) => (
            <motion.div
              key={i}
              className="text-[1.2vw] text-[#E1D9C9]"
              initial={{ opacity: 0, x: 20 }}
              animate={phase >= 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              {text}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
