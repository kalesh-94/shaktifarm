import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';
import translationMR from './locales/mr.json';
import translationHI from './locales/hi.json';

const resources = {
  en: {
    translation: translationEN
  },
  mr: {
    translation: translationMR
  },
  hi: {
    translation: translationHI
  }
};

const savedLanguage = localStorage.getItem('shaktifarm_lang') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
