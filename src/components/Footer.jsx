import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary-dark pt-24 pb-8 text-white/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="bg-primary-light/40 rounded-[32px] p-10 md:p-14 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-inner">
          <div className="md:w-1/2">
            <h3 className="font-serif text-3xl text-white mb-4">Fresh from the farm, to your inbox</h3>
            <p className="text-white/80 leading-relaxed">Seasonal recipes, farm stories and exclusive offers on our pure gavran eggs — no spam, just goodness.</p>
          </div>
          <div className="w-full md:w-5/12">
            <form className="flex w-full bg-white rounded-full p-2 overflow-hidden shadow-lg focus-within:ring-2 ring-accent-amber transition-all">
              <input type="email" placeholder="Enter your email" className="w-full px-5 text-gray-800 outline-none bg-transparent" required />
              <button className="px-8 py-4 bg-accent-amber hover:bg-accent-gold text-white font-medium rounded-full transition-colors whitespace-nowrap shadow-sm">
                Subscribe →
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:pr-8">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/shaktilogo.png"
                alt="ShaktiFarm logo"
                className="h-14 w-auto object-contain"
              />
              <span className="font-serif text-2xl text-white font-medium tracking-wide">ShaktiFarm</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-white/70">Pure Gavran Desi eggs from ethically raised, free-range hens. Farm fresh, naturally healthy — delivered across India.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent-amber hover:border-accent-amber hover:text-white transition-all shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent-amber hover:border-accent-amber hover:text-white transition-all shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent-amber hover:border-accent-amber hover:text-white transition-all shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-medium text-white mb-6 uppercase tracking-wider text-sm">Products</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#" className="hover:text-accent-amber transition-colors">Gavran Desi Eggs</a></li>
              <li><a href="#" className="hover:text-accent-amber transition-colors">Bulk / Wholesale</a></li>
              <li><a href="#" className="hover:text-accent-amber transition-colors">Restaurant Supply</a></li>
              <li><a href="#" className="hover:text-accent-amber transition-colors">Bakery Supply</a></li>
              <li><a href="#" className="hover:text-accent-amber transition-colors">Export Enquiry</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#" className="hover:text-accent-amber transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent-amber transition-colors">About</a></li>
              <li><a href="#products" className="hover:text-accent-amber transition-colors">Products</a></li>
              <li><a href="#gallery" className="hover:text-accent-amber transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-accent-amber transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-accent-amber transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-white mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent-amber shrink-0 mt-0.5" />
                <span className="leading-relaxed">Shakti Poultry Farm, Village Road, Nashik, Maharashtra 422001, India.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent-amber shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent-amber shrink-0" />
                <span>hello@shaktifarm.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/50">
          <p>© 2026 ShaktiFarm. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
