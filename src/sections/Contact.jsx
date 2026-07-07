import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-secondary-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* Info Side */}
          <div className="bg-primary-dark text-white p-10 lg:p-16 lg:w-5/12 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent-amber rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            
            <div className="relative z-10">
              <span className="text-sm font-medium tracking-widest text-accent-gold uppercase mb-4 block">GET IN TOUCH</span>
              <h2 className="font-serif text-4xl mb-6 leading-tight">Quick enquiry & quotes</h2>
              <p className="text-secondary-cream/80 mb-12 leading-relaxed text-lg">
                Whether you're a family, hotel or bakery - reach out for pricing, bulk orders or a friendly farm chat. We usually respond within a few hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-accent-gold transition-colors shadow-inner">
                    <Phone size={24} className="text-accent-gold group-hover:text-white" />
                  </div>
                  <span className="text-lg font-medium group-hover:text-accent-gold transition-colors">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-accent-gold transition-colors shadow-inner">
                    <Mail size={24} className="text-accent-gold group-hover:text-white" />
                  </div>
                  <span className="text-lg font-medium group-hover:text-accent-gold transition-colors">hello@shaktifarm.in</span>
                </div>
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent-gold transition-colors shadow-inner mt-1">
                    <MapPin size={24} className="text-accent-gold group-hover:text-white" />
                  </div>
                  <span className="text-lg leading-relaxed text-secondary-cream/90 group-hover:text-white transition-colors">
                    Shakti Poultry Farm, Village Road, Nashik, Maharashtra 422001, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 lg:p-16 lg:w-7/12 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-secondary-cream/30 focus:bg-white focus:ring-2 focus:ring-accent-amber/50 focus:border-accent-amber transition-all outline-none" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-secondary-cream/30 focus:bg-white focus:ring-2 focus:ring-accent-amber/50 focus:border-accent-amber transition-all outline-none" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-secondary-cream/30 focus:bg-white focus:ring-2 focus:ring-accent-amber/50 focus:border-accent-amber transition-all outline-none" placeholder="+91" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea required rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-secondary-cream/30 focus:bg-white focus:ring-2 focus:ring-accent-amber/50 focus:border-accent-amber transition-all outline-none resize-none" placeholder="How can we help you?" />
              </div>

              <button disabled={status === 'sending'} type="submit" className={`w-full py-5 rounded-2xl font-bold transition-all shadow-lg flex justify-center items-center gap-2 text-lg mt-4 ${status === 'success' ? 'bg-[#25D366] text-white' : 'bg-accent-amber hover:bg-accent-gold text-white'}`}>
                {status === 'sending' ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : status === 'success' ? (
                  'Message Sent Successfully!'
                ) : (
                  <>
                    <Send size={20} />
                    Send Enquiry
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
