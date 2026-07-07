import React from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1548483984-bf5c8f8eb5f1?q=80&w=2074&auto=format&fit=crop', alt: 'Farm', className: 'md:col-span-1 md:row-span-2' },
    { src: 'https://images.unsplash.com/photo-1598935934664-53900998f45a?q=80&w=1974&auto=format&fit=crop', alt: 'Eggs', className: 'md:col-span-1 md:row-span-1' },
    { src: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=2073&auto=format&fit=crop', alt: 'Chicken', className: 'md:col-span-1 md:row-span-1' },
    { src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop', alt: 'Basket', className: 'md:col-span-2 md:row-span-1' },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-sm font-medium tracking-widest text-primary-light uppercase">LIFE ON THE FARM</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary-dark leading-tight">
            A glimpse inside ShaktiFarm
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${img.className}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
