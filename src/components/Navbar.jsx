import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle, Search, Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';
import LanguageSwitcher from './LanguageSwitcher';

/* Egg outline logo — matching reference */
function EggLogo({ className = '', size = 36 }) {
  return (
    <svg width={size * 0.7} height={size} viewBox="0 0 28 36" fill="none" className={className}>
      <path
        d="M14 2C9 2 2 12 2 23C2 30 7.5 34 14 34C20.5 34 26 30 26 23C26 12 19 2 14 2Z"
        stroke="currentColor" strokeWidth="1.8" fill="none"
      />
    </svg>
  );
}

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.home'), href: '#' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.products'), href: '#products' },
    { label: t('nav.gallery'), href: '#gallery' },
    { label: t('nav.why_us'), href: '#whyus' },
    { label: t('nav.testimonials'), href: '#testimonials' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-primary-dark/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 text-white group">
              <div className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center group-hover:border-accent-amber transition-colors">
                <EggLogo size={22} />
              </div>
              <span className="font-serif text-xl font-medium tracking-wide hidden sm:block">
                Shakti<span className="text-accent-gold">Farm</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-6 text-sm text-white/90 font-medium">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-accent-amber transition-colors">
                  {link.label}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 md:gap-4">
              <button className="text-white hover:text-accent-amber transition-colors hidden sm:block" aria-label="Search">
                <Search size={18} />
              </button>

              <LanguageSwitcher />

              <a href="tel:+919876543210" className="hidden md:flex items-center gap-1.5 px-4 py-2 bg-primary-light hover:bg-primary-light/80 text-white rounded-full text-sm font-medium transition-all shadow-sm">
                <Phone size={14} />
                <span>{t('nav.call_now')}</span>
              </a>

              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="hidden xl:flex items-center gap-1.5 px-4 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full text-sm font-medium transition-all shadow-sm">
                <MessageCircle size={14} />
                <span>{t('nav.whatsapp')}</span>
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white ml-2"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      <div className={cn(
        "fixed inset-0 bg-primary-dark/95 backdrop-blur-xl z-40 lg:hidden transition-all duration-300 pt-24 px-6 flex flex-col",
        mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}>
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-serif text-white hover:text-accent-amber transition-colors py-2 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-4 pt-6">
            <a href="tel:+919876543210" className="flex-1 flex justify-center items-center gap-2 px-4 py-3 bg-primary-light text-white rounded-full">
              <Phone size={18} />
              <span>{t('nav.call_now')}</span>
            </a>
            <a href="https://wa.me/919876543210" className="flex-1 flex justify-center items-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-full">
              <MessageCircle size={18} />
              <span>{t('nav.whatsapp')}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
