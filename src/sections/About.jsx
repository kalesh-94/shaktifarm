import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-secondary-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-[40px] overflow-hidden rounded-bl-[100px] rounded-tr-[100px] shadow-2xl relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img 
                src="https://img.magnific.com/free-photo/close-up-beautiful-chickens_23-2150741833.jpg?semt=ais_hybrid&w=740&q=80" 
                alt="Happy Hens" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-dark/10 mix-blend-overlay"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              className="absolute -bottom-6 -right-6 md:bottom-12 md:-right-12 bg-primary-dark text-white p-6 rounded-3xl shadow-xl w-48 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            >
              <h4 className="font-serif text-3xl text-accent-gold mb-1">{t('about.est')}</h4>
              <p className="text-xs tracking-widest text-secondary-cream/80">{t('about.heritage')}</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-sm font-medium tracking-widest text-primary-light uppercase">{t('about.title')}</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary-dark leading-tight mb-6">
              {t('about.headline')}
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-12">
              <p>{t('about.description_1')}</p>
              <p>{t('about.description_2')}</p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 border-t border-primary-dark/10 pt-8">
              <div>
                <h4 className="text-4xl font-serif text-primary-dark mb-2">{t('about.stat_1_val')}</h4>
                <p className="text-sm font-medium text-gray-500">{t('about.stat_1_lbl')}</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif text-primary-dark mb-2">{t('about.stat_2_val')}</h4>
                <p className="text-sm font-medium text-gray-500">{t('about.stat_2_lbl')}</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif text-primary-dark mb-2">{t('about.stat_3_val')}</h4>
                <p className="text-sm font-medium text-gray-500">{t('about.stat_3_lbl')}</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif text-primary-dark mb-2">{t('about.stat_4_val')}</h4>
                <p className="text-sm font-medium text-gray-500">{t('about.stat_4_lbl')}</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
