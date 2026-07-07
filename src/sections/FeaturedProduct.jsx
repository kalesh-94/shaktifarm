import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileText, Send } from 'lucide-react';

export default function FeaturedProduct() {
  const { t } = useTranslation();

  return (
    <section id="products" className="py-24 bg-secondary-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-sm font-medium tracking-widest text-primary-light uppercase">FEATURED PRODUCT</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary-dark leading-tight">
            Pure Gavran Desi Eggs
          </h2>
        </div>

        <motion.div 
          className="bg-white rounded-[40px] shadow-2xl p-6 md:p-12 border border-gray-100 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-auto md:h-full bg-secondary-cream">
              <img 
                src="https://5.imimg.com/data5/ANDROID/Default/2021/8/OR/AL/WX/100036801/product-jpeg-500x500.jpg" 
                alt="Gavran Desi Eggs" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-accent-amber text-white px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
                Premium Grade A
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col h-full justify-center">
              <div className="flex items-center gap-1 text-accent-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
                <span className="text-gray-500 text-sm ml-2 font-medium tracking-wide">Loved by 2,400+ families</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-serif text-primary-dark mb-4 leading-tight">
                Farm-fresh, naturally rich yolks
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Sourced from our free-range Gavran hens, these light-brown desi eggs deliver deeper flavour, firmer whites and golden nutrient-dense yolks - perfect for daily consumption, hotels, restaurants and bakeries.
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-secondary-cream/50 p-4 rounded-2xl border border-gray-100">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">Colour</span>
                  <span className="text-primary-dark font-medium">Light Brown</span>
                </div>
                <div className="bg-secondary-cream/50 p-4 rounded-2xl border border-gray-100">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">Origin</span>
                  <span className="text-primary-dark font-medium">Free Range Chicken</span>
                </div>
                <div className="bg-secondary-cream/50 p-4 rounded-2xl border border-gray-100">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">Country</span>
                  <span className="text-primary-dark font-medium">India</span>
                </div>
                <div className="bg-secondary-cream/50 p-4 rounded-2xl border border-gray-100">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">Usage</span>
                  <span className="text-primary-dark font-medium">Daily • Hotels • Bakery</span>
                </div>
                <div className="bg-secondary-cream/50 p-4 rounded-2xl border border-gray-100">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">Packaging</span>
                  <span className="text-primary-dark font-medium">Tray • Caret • Carton</span>
                </div>
                <div className="bg-secondary-cream/50 p-4 rounded-2xl border border-gray-100">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">Grade</span>
                  <span className="text-primary-dark font-medium">Premium A</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 mt-auto">
                <a href="#contact" className="flex-1 flex justify-center items-center gap-2 px-6 py-4 bg-primary-dark hover:bg-primary-dark/90 text-white rounded-2xl font-medium transition-colors shadow-lg">
                  <FileText size={18} />
                  Request Quote
                </a>
                <a href="#contact" className="flex-1 flex justify-center items-center gap-2 px-6 py-4 bg-accent-amber hover:bg-accent-gold text-white rounded-2xl font-medium transition-colors shadow-lg">
                  <Send size={18} />
                  Enquire Now
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
