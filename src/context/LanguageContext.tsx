'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { normalizeLanguage } from '@/lib/languages';

export type Language = 'pt' | 'en-gb' | 'en-us' | 'es' | 'de' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt');

  useEffect(() => {
    const saved = normalizeLanguage(localStorage.getItem('language'));
    if (saved) {
      setLanguageState(saved);
      if (localStorage.getItem('language') === 'en') {
        localStorage.setItem('language', 'en-us');
      }
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'ar' ? 'ar' : language.split('-')[0];
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
