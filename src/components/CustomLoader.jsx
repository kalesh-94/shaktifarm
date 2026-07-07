import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomLoader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F8F4E8]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <div className="relative flex flex-col items-center">
        {/* Egg Shape */}
        <motion.div
          className="w-16 h-20 border-[2.5px] border-[#B68D40] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] relative flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Leaves */}
          <motion.div
            className="absolute -top-5 flex gap-[2px]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4, type: 'spring' }}
          >
            <div className="w-3.5 h-6 bg-[#234B2A] rounded-tr-full rounded-bl-full rotate-[30deg] origin-bottom-right" />
            <div className="w-3.5 h-6 bg-[#234B2A] rounded-tl-full rounded-br-full -rotate-[30deg] origin-bottom-left" />
          </motion.div>
        </motion.div>
        
        {/* Brand Text */}
        <motion.h1
          className="mt-6 font-serif text-3xl text-[#234B2A] tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          ShaktiFarm
        </motion.h1>
      </div>
    </motion.div>
  );
}
