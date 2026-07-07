import React from 'react';
import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    { num: 1, title: 'Healthy Chickens', desc: 'Ethically raised free-range Gavran hens.' },
    { num: 2, title: 'Natural Feed', desc: 'Balanced grain diet, no chemicals.' },
    { num: 3, title: 'Daily Collection', desc: 'Gathered fresh every sunrise.' },
    { num: 4, title: 'Quality Inspection', desc: 'Each egg hand-graded & candled.' },
    { num: 5, title: 'Safe Packaging', desc: 'Hygienic trays, cartons & carets.' },
    { num: 6, title: 'Fresh Delivery', desc: 'Dispatched same-day, Pan India.' },
  ];

  return (
    <section className="py-24 bg-primary-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #C98A2E 0%, transparent 50%), radial-gradient(circle at 80% 50%, #C98A2E 0%, transparent 50%)' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <span className="text-sm font-medium tracking-widest text-accent-amber uppercase">FROM FARM TO TABLE</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-secondary-cream leading-tight">
            The journey of every egg
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full border border-accent-gold/50 flex items-center justify-center text-accent-gold font-serif text-xl mb-6 relative">
                {step.num}
                {/* Connector line for desktop (except last column) */}
                {(idx + 1) % 3 !== 0 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-[1px] bg-accent-gold/20 -translate-y-1/2 ml-4 px-12" style={{ width: 'calc(100% + 3rem)' }}></div>
                )}
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">{step.title}</h3>
              <p className="text-secondary-cream/70 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
