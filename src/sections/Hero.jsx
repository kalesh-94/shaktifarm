import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import OrderPopup from '../components/OrderPopup';

export default function Hero() {
  const { t } = useTranslation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Fallback to high quality unsplash poultry farm image
  const bgImage = 'https://images.unsplash.com/photo-1548483984-bf5c8f8eb5f1?q=80&w=2074&auto=format&fit=crop';

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="ShaktiFarm Poultry" 
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 pb-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-accent-amber"></div>
              <span className="text-accent-amber font-medium uppercase tracking-widest text-sm">Farm Fresh • Naturally Healthy</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
              {t('hero.headline').split(' ').map((word, i, arr) => (
                <React.Fragment key={i}>
                  {word}
                  {i === arr.length - 2 && <br className="hidden md:block" />}
                  {' '}
                </React.Fragment>
              ))}
            </h1>
            
            <p className="text-lg md:text-xl text-secondary-cream/90 mb-10 max-w-xl leading-relaxed">
              {t('hero.subheadline')}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="px-8 py-4 bg-accent-amber hover:bg-[#b57a27] text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                {t('hero.explore')}
              </button>
              <a 
                href="#contact"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-full font-medium transition-all backdrop-blur-sm"
              >
                {t('hero.contact')}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Trust Card */}
      <motion.div 
        className="hidden lg:block absolute bottom-16 right-16 bg-white rounded-3xl p-8 shadow-2xl z-20 w-80"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h4 className="font-serif text-2xl text-primary-dark mb-5 border-b border-gray-100 pb-4">{t('hero.trust')}</h4>
        <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm text-gray-700 font-medium">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-accent-sage/20 flex items-center justify-center text-primary-dark text-xs">✓</div>
            <span>{t('hero.natural')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-accent-sage/20 flex items-center justify-center text-primary-dark text-xs">✓</div>
            <span>{t('hero.chemical_free')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-accent-sage/20 flex items-center justify-center text-primary-dark text-xs">✓</div>
            <span>{t('hero.fresh')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-accent-sage/20 flex items-center justify-center text-primary-dark text-xs">✓</div>
            <span>{t('hero.healthy')}</span>
          </div>
        </div>
      </motion.div>

      <OrderPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
}
