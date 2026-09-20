import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';
import LanguageSwitcher from './LanguageSwitcher';

/* Instagram glyph — lucide-react no longer ships brand icons */
function InstagramIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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
            <a href="#" className="flex items-center gap-2.5 text-white group">
              <img
                src="/shaktilogo.png"
                alt="ShaktiFarm logo"
                className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
              />
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
              <LanguageSwitcher />

              <a href="tel:+919876543210" className="hidden md:flex items-center gap-1.5 px-4 py-2 bg-primary-light hover:bg-primary-light/80 text-white rounded-full text-sm font-medium transition-all shadow-sm">
                <Phone size={14} />
                <span>{t('nav.call_now')}</span>
              </a>

              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hidden xl:flex items-center gap-1.5 px-4 py-2 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90 text-white rounded-full text-sm font-medium transition-all shadow-sm">
                <InstagramIcon size={14} />
                <span>{t('nav.instagram')}</span>
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
