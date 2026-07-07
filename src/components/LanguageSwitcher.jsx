import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('shaktifarm_lang', lng);
  };

  return (
    <div className="relative group z-50">
      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-all text-sm text-white backdrop-blur-sm">
        <Globe size={14} />
        <span className="uppercase font-medium">{i18n.language}</span>
      </button>
      <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
        {[
          { code: 'en', label: 'English' },
          { code: 'mr', label: 'मराठी' },
          { code: 'hi', label: 'हिन्दी' }
        ].map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-secondary-cream transition-colors ${
              i18n.language === lang.code ? 'text-primary-dark font-medium bg-secondary-cream/50' : 'text-gray-600'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
