import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Heart, Leaf, Sun, Award, ShieldBan, BadgeCheck } from 'lucide-react';

export default function WhyUs() {
  const { t } = useTranslation();

  const features = [
    { icon: Heart, tKey: 'whyus.cards.0', fallbackTitle: 'Healthy Birds', fallbackDesc: 'Free-roaming Gavran hens raised with veterinary care and open pastures.' },
    { icon: Leaf, tKey: 'whyus.cards.1', fallbackTitle: 'Natural Feed', fallbackDesc: 'A grain-rich, chemical-free diet that keeps our flock thriving.' },
    { icon: Sun, tKey: 'whyus.cards.2', fallbackTitle: 'Fresh Daily', fallbackDesc: 'Eggs collected each morning and dispatched the very same day.' },
    { icon: Award, tKey: 'whyus.cards.3', fallbackTitle: 'Premium Quality', fallbackDesc: 'Hand-graded for size, shell strength and rich golden yolks.' },
    { icon: ShieldBan, tKey: 'whyus.cards.4', fallbackTitle: 'Zero Additives', fallbackDesc: 'No hormones, no antibiotics, no artificial colouring - ever.' },
    { icon: BadgeCheck, tKey: 'whyus.cards.5', fallbackTitle: 'Trusted Supplier', fallbackDesc: 'Manufacturer, supplier & exporter serving homes and businesses.' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="whyus" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <span className="text-sm font-medium tracking-widest text-primary-light uppercase">{t('whyus.title')}</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary-dark leading-tight">
            {t('whyus.headline')}
          </h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feat, index) => {
            const Icon = feat.icon;
            const title = t(`${feat.tKey}.title`, { defaultValue: feat.fallbackTitle });
            const desc = t(`${feat.tKey}.desc`, { defaultValue: feat.fallbackDesc });
            
            return (
              <motion.div 
                key={index}
                variants={item}
                className="bg-secondary-cream/30 hover:bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-2xl hover:shadow-accent-amber/5 transition-all group duration-300 relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-accent-gold mb-6 group-hover:scale-110 group-hover:bg-accent-gold group-hover:text-white group-hover:border-accent-gold transition-all duration-300 shadow-sm">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif text-primary-dark mb-3 relative z-10">{title}</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">{desc}</p>
                <div className="absolute -top-4 -right-4 p-8 text-primary-dark opacity-[0.03] transform group-hover:rotate-12 transition-transform duration-500 pointer-events-none">
                  <Icon size={160} strokeWidth={1} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
