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
        {/* Logo */}
        <motion.img
          src="/shaktilogo.png"
          alt="ShaktiFarm logo"
          className="w-32 h-auto object-contain"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />

        {/* Brand Text */}
        <motion.h1
          className="mt-6 font-serif text-3xl text-[#234B2A] tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        > Welcome to
          ShaktiFarm
        </motion.h1>
      </div>
    </motion.div>
  );
}
