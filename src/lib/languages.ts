import { Language } from '@/context/LanguageContext';

/** Idiomas com arquivo de tradução completo no site */
export type TranslationKey = 'pt' | 'en' | 'es' | 'de';

/** Idiomas disponíveis nos textos de produtos (painel admin) */
export type ContentLocale = TranslationKey | 'fr' | 'ar';

export const ALL_LANGUAGES: Language[] = [
    'pt',
    'en-gb',
    'en-us',
    'es',
    'de',
    'fr',
    'ar',
];

export const LANG_TO_TRANSLATION: Record<
    Exclude<Language, 'fr' | 'ar'>,
    TranslationKey
> = {
    pt: 'pt',
    'en-gb': 'en',
    'en-us': 'en',
    es: 'es',
    de: 'de',
};

export type LanguageOption = {
    code: Language;
    label: string;
    headerLabel: string;
};

export const LANGUAGE_OPTIONS: LanguageOption[] = [
    { code: 'pt', label: 'Português', headerLabel: 'PT' },
    { code: 'en-gb', label: 'English (UK)', headerLabel: 'EN' },
    { code: 'en-us', label: 'English (US)', headerLabel: 'US' },
    { code: 'es', label: 'Español', headerLabel: 'ES' },
    { code: 'de', label: 'Deutsch', headerLabel: 'DE' },
    { code: 'fr', label: 'Français', headerLabel: 'FR' },
    { code: 'ar', label: 'العربية', headerLabel: 'AR' },
];

/** Migra seleções antigas salvas no navegador */
export function normalizeLanguage(value: string | null): Language | null {
    if (!value) return null;
    if (value === 'en') return 'en-us';
    if (ALL_LANGUAGES.includes(value as Language)) return value as Language;
    return null;
}
