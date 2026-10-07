import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

/* Hero background slideshow.
   Add more images here and they crossfade in this order. Drop the files in
   public/ and reference them as '/name.webp'. Keep the first one in sync with
   the <link rel="preload"> in index.html. */
const BG_IMAGES = [
  '/shaktifarm-bg.webp',
  '/bg3.png'
];

const SLIDE_MS = 7000;   // time each image is held
const FADE_MS = 1000;    // crossfade duration

export default function Hero() {
  const { t } = useTranslation();

  // `previous` stays mounted underneath during a crossfade, then clears.
  const [{ current, previous }, setSlides] = useState({ current: 0, previous: null });

  // Auto-advance. Skipped entirely for a single image or reduced-motion users.
  useEffect(() => {
    if (BG_IMAGES.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = setInterval(() => {
      setSlides((s) => ({
        current: (s.current + 1) % BG_IMAGES.length,
        previous: s.current,
      }));
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  // Warm the next image so the crossfade never stalls on a cold fetch.
  useEffect(() => {
    if (BG_IMAGES.length < 2) return;
    new Image().src = BG_IMAGES[(current + 1) % BG_IMAGES.length];
  }, [current]);

  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        {/* Outgoing image sits underneath at full opacity while the incoming one
            fades in on top, so the crossfade never dips to a dark midpoint. */}
        {previous !== null && (
          <img
            key={`prev-${previous}`}
            src={BG_IMAGES[previous]}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        )}
        <motion.img
          key={`cur-${current}`}
          src={BG_IMAGES[current]}
          alt="ShaktiFarm — farm fresh, naturally raised"
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ opacity: previous === null ? 1 : 0 }}   /* instant on first paint, crossfade thereafter */
          animate={{ opacity: 1 }}
          transition={{ duration: FADE_MS / 1000, ease: 'easeInOut' }}
          onAnimationComplete={() => setSlides((s) => ({ ...s, previous: null }))}
          fetchPriority={current === 0 ? 'high' : 'low'}
          decoding="async"
        />
        {/* Warm cinematic overlay — golden/sunset look like reference */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(30,20,10,0.35) 0%, rgba(30,20,10,0.25) 30%, rgba(30,20,10,0.55) 70%, rgba(26,58,31,0.85) 100%)'
        }} />
        {/* <div className="absolute inset-0" style={{
          background: 'linear-gradient(90deg, rgba(26,58,31,0.6) 0%, transparent 60%)'
        }} /> */}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-40 pb-32">
        <div className="max-w-3xl">
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
            <h1 className="mb-10">
              <motion.span
                className="block text-6xl sm:text-7xl md:text-8xl font-serif text-white leading-[0.95] mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              > Shakti Farm <br />
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

            {/* CTA Buttons — amber filled + outlined */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <a
                href="#areas"
                className="group px-8 py-4 bg-accent-amber hover:bg-[#b57a27] text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:shadow-accent-amber/20 hover:-translate-y-0.5 flex items-center gap-2"
              >
                {t('hero.explore')}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-transparent border border-white/40 hover:border-white/70 text-white rounded-full font-medium transition-all hover:bg-white/5"
              >
                {t('hero.contact')}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Curved wave transition to next section — matching reference */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path d="M0,80 L0,40 Q360,0 720,40 Q1080,80 1440,40 L1440,80 Z" fill="#F8F4E8" />
        </svg>
      </div>
    </section>
  );
}
