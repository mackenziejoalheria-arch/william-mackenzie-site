'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { getOgLocale, getPageSeo } from '@/lib/seo';

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

export default function SeoHead() {
  const { language } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const { title, description } = getPageSeo(language, pathname);
    document.title = title;
    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:locale', getOgLocale(language), true);
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
  }, [language, pathname]);

  return null;
}
