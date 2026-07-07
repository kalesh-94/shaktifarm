import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';

export default function OrderPopup({ isOpen, onClose }) {
  const options = [
    { name: 'Blinkit', url: 'https://example.com/blinkit', color: '#F8CB46' },
    { name: 'Zepto', url: 'https://example.com/zepto', color: '#32012F' },
    { name: 'BigBasket', url: 'https://example.com/bigbasket', color: '#84C225' },
    { name: 'Instamart', url: 'https://example.com/instamart', color: '#F16936' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[100] bg-primary-dark/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-sm bg-white rounded-3xl shadow-2xl p-6 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: '-40%', x: '-50%' }}
            animate={{ opacity: 1, scale: 1, y: '-50%', x: '-50%' }}
            exit={{ opacity: 0, scale: 0.9, y: '-40%', x: '-50%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-serif text-primary-dark flex items-center gap-2">
                <ShoppingBag size={20} className="text-accent-amber" />
                Order Now
              </h3>
              <button 
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary-cream text-primary-dark hover:bg-gray-200 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="space-y-3">
              {options.map((opt) => (
                <a
                  key={opt.name}
                  href={opt.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 hover:border-accent-amber/50 hover:shadow-md transition-all group bg-white hover:bg-secondary-cream/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-sm" style={{ backgroundColor: opt.color }}>
                      {opt.name.charAt(0)}
                    </div>
                    <span className="font-medium text-gray-800 group-hover:text-primary-dark transition-colors">{opt.name}</span>
                  </div>
                  <div className="text-sm font-medium px-4 py-1.5 bg-accent-amber text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                    Order
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
