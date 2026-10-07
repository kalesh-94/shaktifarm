import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { cn } from '../utils/cn';

/* Areas. Each needs its own photo — the changing image is the point of the
   section, so a shared one makes it look static.

   IMAGE SPEC: this band is full-bleed and ~2.7:1, so anything under ~2400px
   wide gets visibly upscaled and hard-cropped. Supply >=2400x1000, pre-cropped
   near 2.4:1, saved as WebP. `position` is the CSS object-position, used to keep
   the subject in frame once the top and bottom are cropped away. */
const AREAS = [
  { name: 'Goa', image: '/goa.jpg', position: 'center 45%' },
  { name: 'Chhattisgarh', image: '/chhattisgarah.png', position: 'center 40%' },
  { name: 'Maharashtra', image: '/Maharshtra.jpg', position: 'center 60%' },
];

const ROTATE_MS = 4000;
const FADE_MS = 800;

export default function ServiceAreas() {
  const { t } = useTranslation();
  const [{ current, previous }, setSlides] = useState({ current: 0, previous: null });
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (AREAS.length < 2 || reduced) return;
    const id = setTimeout(() => {
      setSlides({ current: (current + 1) % AREAS.length, previous: current });
    }, ROTATE_MS);
    return () => clearTimeout(id);
  }, [current, reduced]);

  // Warm the next photo so the crossfade never stalls on a cold fetch.
  useEffect(() => {
    if (AREAS.length < 2) return;
    new Image().src = AREAS[(current + 1) % AREAS.length].image;
  }, [current]);

  const area = AREAS[current];

  return (
    <section id="areas" className="relative bg-white overflow-hidden">
      <div className="relative h-[560px] md:h-[680px] lg:h-[720px] w-full overflow-hidden">

        {/* Photo — outgoing holds underneath while the incoming fades in on top */}
        {previous !== null && (
          <img
            key={`prev-${previous}`}
            src={AREAS[previous].image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: AREAS[previous].position || 'center' }}
          />
        )}
        <motion.img
          key={`cur-${current}`}
          src={area.image}
          alt={`ShaktiFarm delivery area — ${area.name}`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: area.position || 'center' }}
          initial={{ opacity: previous === null ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: FADE_MS / 1000, ease: 'easeInOut' }}
          loading="lazy"
          decoding="async"
        />

        {/* Oversized white ellipse sweeping in from the left. Geometry is tuned so
            the white edge sits near 29%/27%/8% of the width at top/middle/bottom,
            matching the reference's sweep and leaving the photo dominant. */}
        <div
          className="hidden md:block absolute bg-white pointer-events-none"
          style={{ width: '150%', height: '240%', left: '-120%', top: '-105%', borderRadius: '50%' }}
        />
        {/* Mobile has no room for the curve — a flat scrim keeps the type legible */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20 pointer-events-none" />
        {/* Soft horizontal veil past the curve — long names like CHHATTISGARH run
            well onto the photo, and without this they sit on whatever is there. */}
        <div
          className="hidden md:block absolute inset-y-0 left-0 w-[75%] pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(255,255,255,.75) 0%, rgba(255,255,255,.55) 35%, rgba(255,255,255,0) 100%)' }}
        />
        {/* Bottom fade into the page */}
        <div
          className="absolute inset-x-0 bottom-0 h-[22%] pointer-events-none"
          style={{ background: 'linear-gradient(to top, #ffffff 0%, rgba(255,255,255,.9) 25%, rgba(255,255,255,.4) 60%, rgba(255,255,255,0) 100%)' }}
        />

        {/* Live badge */}
        <div className="absolute top-6 left-4 sm:left-6 xl:left-12 z-20 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary-dark/85 backdrop-blur-lg border border-white/10 text-white text-sm sm:text-base font-medium tracking-wide shadow-2xl">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-sage opacity-90" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-sage" />
          </span>
          <MapPin size={18} className="text-accent-sage" />
          <span className="text-white/85">
            {t('areas.serving', { defaultValue: 'We serve our services in:' })}
          </span>
        </div>

        {/* Dotted grid flourish */}
        <div
          className="hidden md:block absolute bottom-12 left-4 xl:left-10 w-28 h-20 opacity-25 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#234B2A 1px, transparent 1px)',
            backgroundSize: '10px 10px',
          }}
        />

        {/* Giant area name + countdown, vertically centred as on the reference.
            The name is allowed to spill past the curve onto the photo. */}
        <div className="absolute left-4 sm:left-8 xl:left-16 top-1/2 -translate-y-1/2 z-20 max-w-[92%]">
          <AnimatePresence mode="popLayout">
            <motion.h3
              key={current}
              className={cn(
                'font-sans font-extrabold uppercase leading-[0.9] tracking-tight bg-gradient-to-r from-accent-gold via-primary-light to-primary-dark bg-clip-text text-transparent',
                area.name.length > 9
                  ? 'text-4xl sm:text-5xl lg:text-7xl'
                  : 'text-5xl sm:text-7xl lg:text-8xl xl:text-9xl'
              )}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: FADE_MS / 1000, ease: 'easeOut' }}
            >
              {area.name}
            </motion.h3>
          </AnimatePresence>

          {/* Countdown track — refills each rotation */}
          <div className="mt-6 h-1 w-40 sm:w-56 rounded-full bg-primary-dark/10 overflow-hidden">
            <motion.div
              key={current}
              className="h-full rounded-full bg-gradient-to-r from-accent-gold to-primary-light"
              initial={{ width: reduced ? '100%' : '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: reduced ? 0 : ROTATE_MS / 1000, ease: 'linear' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
