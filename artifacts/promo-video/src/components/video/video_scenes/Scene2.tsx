import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-between px-[10vw]"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-[40%] z-20">
        <motion.div 
          className="w-12 h-1 bg-[#E1D9C9] mb-8 origin-left"
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
          MODELING<br/>
          <span className="text-[#8C8C8C]">& ACTING</span>
        </motion.h2>
        
        <motion.p 
          className="text-[1.2vw] text-[#8C8C8C] leading-relaxed max-w-[30vw]"
          initial={{ opacity: 0 }}
          animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Professional portfolio & creative talent.<br/>
          Editorial shoots, acting roles, runway.
        </motion.p>
      </div>

      <motion.div 
        className="w-[45vw] h-[60vh] relative z-10 overflow-hidden"
        initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
        animate={phase >= 1 ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.9, rotateY: 15 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ perspective: 1000 }}
      >
        <motion.img 
          src={`${import.meta.env.BASE_URL}images/modeling.png`}
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "linear" }}
        />
        <div className="absolute inset-0 border border-[#E1D9C9]/20" />
      </motion.div>
    </motion.div>
  );
}