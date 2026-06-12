import { Language } from '@/context/LanguageContext';
import { getTranslations } from '@/translations';

export type SeoPageKey =
  | 'home'
  | 'aliancas'
  | 'noivado'
  | 'formatura'
  | 'quemSomos'
  | 'reaproveitamento'
  | 'ester'
  | 'pedras'
  | 'legal'
  | 'privacy'
  | 'cookies';

export function pathToSeoKey(pathname: string): SeoPageKey {
  const path = pathname.replace(/\/$/, '') || '/';

  const map: Record<string, SeoPageKey> = {
    '/': 'home',
    '/aliancas': 'aliancas',
    '/aneis-de-noivado': 'noivado',
    '/aneis-de-formatura': 'formatura',
    '/quem-somos': 'quemSomos',
    '/reaproveitamento-de-ouro': 'reaproveitamento',
    '/ester': 'ester',
    '/pedras': 'pedras',
    '/aviso-legal': 'legal',
    '/politica-de-privacidade': 'privacy',
    '/cookies': 'cookies',
  };

  return map[path] ?? 'home';
}

export function getPageSeo(lang: Language, pathname: string) {
  const tr = getTranslations(lang);
  const seo = tr.seo ?? getTranslations('en-us').seo;
  const key = pathToSeoKey(pathname);
  return seo.pages[key] ?? seo.default;
}

export function getOgLocale(lang: Language): string {
  const locales: Record<Language, string> = {
    pt: 'pt_BR',
    'en-gb': 'en_GB',
    'en-us': 'en_US',
    es: 'es_ES',
    de: 'de_DE',
    fr: 'fr_FR',
    ar: 'ar_AE',
  };
  return locales[lang];
}
