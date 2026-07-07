import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const reviews = [
    { text: "The richest yolks I've ever cooked with. You can genuinely taste the difference of real Gavran eggs.", author: "Ananya Deshmukh", loc: "Pune, Maharashtra", rating: 5 },
    { text: "We switched our entire restaurant to ShaktiFarm. Consistent size, strong shells, unbeatable freshness.", author: "Chef Rohan Mehta", loc: "Mumbai", rating: 5 },
    { text: "Delivered the same morning they're collected. My family finally eats eggs we can fully trust.", author: "Priya Nair", loc: "Bengaluru, Karnataka", rating: 5 },
  ];

  return (
    <section id="testimonials" className="py-24 bg-secondary-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-sm font-medium tracking-widest text-primary-light uppercase">KIND WORDS</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary-dark leading-tight">
            Trusted by homes & kitchens
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative group hover:shadow-xl hover:shadow-accent-amber/5 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="text-accent-gold font-serif text-7xl absolute top-0 left-6 opacity-20 group-hover:opacity-40 transition-opacity">"</div>
              <p className="text-gray-700 italic relative z-10 mb-8 mt-6 text-lg leading-relaxed">"{rev.text}"</p>
              <div className="flex items-center gap-1 text-accent-amber mb-5 text-sm">
                {[...Array(rev.rating)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-secondary-cream rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <img src={`https://i.pravatar.cc/150?img=${idx + 10}`} alt={rev.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-dark">{rev.author}</h4>
                  <p className="text-xs text-gray-500">{rev.loc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
