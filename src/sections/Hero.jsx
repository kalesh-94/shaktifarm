import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Leaf, Check } from 'lucide-react';
import OrderPopup from '../components/OrderPopup';

export default function Hero() {
  const { t } = useTranslation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const bgImage = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2232&auto=format&fit=crop';

  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="ShaktiFarm — sunrise over lush green farm fields"
          className="w-full h-full object-cover object-center"
        />
        {/* Warm cinematic overlay — golden/sunset look like reference */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(30,20,10,0.35) 0%, rgba(30,20,10,0.25) 30%, rgba(30,20,10,0.55) 70%, rgba(26,58,31,0.85) 100%)'
        }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(90deg, rgba(26,58,31,0.6) 0%, transparent 60%)'
        }} />
      </div>

      {/* Floating decorative egg outlines — matching reference */}
      <motion.div
        className="absolute right-[12%] top-[35%] hidden lg:block z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
          <path d="M30 4C20 4 4 24 4 52C4 66 15 76 30 76C45 76 56 66 56 52C56 24 40 4 30 4Z" stroke="white" strokeWidth="1.5" fill="none" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute left-[15%] bottom-[35%] hidden lg:block z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <svg width="40" height="55" viewBox="0 0 60 80" fill="none">
          <path d="M30 4C20 4 4 24 4 52C4 66 15 76 30 76C45 76 56 66 56 52C56 24 40 4 30 4Z" stroke="white" strokeWidth="1.5" fill="none" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-40 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

          {/* Left — Main content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Badge — matching reference pill shape */}
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 backdrop-blur-sm mb-8"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Leaf size={16} className="text-accent-amber" />
                <span className="text-white/90 text-sm font-medium tracking-[0.2em] uppercase">Farm Fresh • Naturally Healthy</span>
              </motion.div>

              {/* Headline — "Pure Gavran" large serif, "Desi Eggs" in italic gold */}
              <h1 className="mb-8">
                <motion.span
                  className="block text-6xl sm:text-7xl md:text-8xl font-serif text-white leading-[0.95] mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                >
                  Pure Gavran
                </motion.span>
                <motion.span
                  className="block text-6xl sm:text-7xl md:text-8xl font-serif italic leading-[0.95]"
                  style={{ color: '#C98A2E' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.7 }}
                >
                  Desi Eggs
                </motion.span>
              </h1>

              {/* Subtext */}
              <motion.p
                className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                {t('hero.subheadline')}
              </motion.p>

              {/* CTA Buttons — amber filled + outlined */}
              <motion.div
                className="flex flex-wrap items-center gap-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.6 }}
              >
                <button
                  onClick={() => setIsPopupOpen(true)}
                  className="group px-8 py-4 bg-accent-amber hover:bg-[#b57a27] text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:shadow-accent-amber/20 hover:-translate-y-0.5 flex items-center gap-2"
                >
                  {t('hero.explore')}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-transparent border border-white/40 hover:border-white/70 text-white rounded-full font-medium transition-all hover:bg-white/5"
                >
                  {t('hero.contact')}
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right — Floating trust card (matching reference) */}
          <motion.div
            className="hidden lg:block lg:col-span-5"
            initial={{ opacity: 0, y: 40, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          >
            <div className="bg-secondary-cream/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30 max-w-sm ml-auto">
              <h4 className="font-serif text-2xl text-primary-dark mb-6">{t('hero.trust')}</h4>
              <div className="grid grid-cols-2 gap-y-5 gap-x-4">
                {[
                  t('hero.natural'),
                  t('hero.chemical_free'),
                  t('hero.fresh'),
                  t('hero.healthy')
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-dark/10 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-primary-dark" />
                    </div>
                    <span className="text-sm font-medium text-primary-dark/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Curved wave transition to next section — matching reference */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path d="M0,80 L0,40 Q360,0 720,40 Q1080,80 1440,40 L1440,80 Z" fill="#F8F4E8" />
        </svg>
      </div>

      <OrderPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
}
