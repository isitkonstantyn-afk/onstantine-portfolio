import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
      transition={{ duration: 1 }}
    >
      <div style={{ perspective: 1000 }} className="text-center">
        <motion.h1 
          className="text-[8vw] font-black tracking-tighter uppercase leading-[0.8]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {'KONSTANTINE'.split('').map((char, i) => (
            <motion.span 
              key={i} 
              className="inline-block text-[#E1D9C9]"
              initial={{ opacity: 0, y: 50, rotateX: -60 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: i * 0.05 + 0.3 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      <motion.div 
        className="mt-[4vh] flex flex-wrap justify-center gap-4 max-w-[60vw]"
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        {['FILMMAKER', 'DEVELOPER', 'MODEL', 'ACTOR', 'STRATEGIST'].map((role, i) => (
          <motion.span 
            key={i}
            className="text-[1.2vw] font-medium tracking-[0.2em] border border-[#F2F2F2]/20 px-6 py-2 rounded-full backdrop-blur-md text-[#8C8C8C]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={phase >= 3 ? { opacity: 1, scale: 1, borderColor: 'rgba(225, 217, 201, 0.4)', color: '#F2F2F2' } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {role}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}