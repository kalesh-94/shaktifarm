import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    { q: "Are your eggs truly organic and free-range?", a: "Yes, our Gavran hens roam freely in open pastures and are fed a 100% natural, chemical-free diet without any hormones or antibiotics." },
    { q: "How are the eggs packaged?", a: "We use premium, hygienic, and eco-friendly carton trays that protect the eggs during transit, ensuring they reach you safely without breakage." },
    { q: "Do you accept bulk & business orders?", a: "Absolutely. We supply to top hotels, restaurants, and bakeries. Contact us directly for bulk pricing and wholesale options." },
    { q: "How fast is delivery?", a: "We pride ourselves on same-day dispatch. Eggs collected in the morning are shipped the very same day to maintain maximum freshness." },
    { q: "How should I store the eggs?", a: "For optimal freshness, store them in a cool, dry place or in the refrigerator. Avoid direct sunlight and strong odors." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-widest text-primary-light uppercase">GOOD TO KNOW</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary-dark leading-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${open === idx ? 'border-accent-amber/30 bg-secondary-cream/30 shadow-sm' : 'border-gray-100 bg-secondary-cream/10 hover:bg-secondary-cream/30'}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <button 
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className={`font-medium text-lg transition-colors ${open === idx ? 'text-accent-amber' : 'text-primary-dark'}`}>{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${open === idx ? 'bg-accent-amber/10' : 'bg-transparent'}`}>
                  <ChevronDown className={`text-primary-light transition-transform duration-300 ${open === idx ? 'rotate-180 text-accent-amber' : ''}`} />
                </div>
              </button>
              <AnimatePresence>
                {open === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mx-6 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
