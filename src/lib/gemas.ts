import { Language } from '../context/LanguageContext';
import { ContentLocale, LANG_TO_TRANSLATION } from './languages';
import type { ProductCategory } from './catalog';

export type LocalizedText = Partial<Record<ContentLocale, string>> & { pt: string };
export type LocalizedParagraphs = Partial<Record<ContentLocale, string[]>> & { pt: string[] };

export type Gema = {
    slug: string;
    /** Categoria do produto no catálogo */
    category?: ProductCategory;
    /** A primeira imagem é a capa */
    images: string[];
    /** Vídeo em formato reels (9:16), opcional */
    video?: string;
    /** Preço em centavos de Real (BRL). Ex: 180000 = R$ 1.800,00 */
    priceCents: number;
    available: boolean;
    name: LocalizedText;
    subtitle: LocalizedText;
    description: LocalizedParagraphs;
};

export function loc(text: LocalizedText, lang: Language): string {
    if (lang === 'fr' && text.fr) return text.fr;
    if (lang === 'ar' && text.ar) return text.ar;
    const key = LANG_TO_TRANSLATION[lang as Exclude<Language, 'fr' | 'ar'>];
    return text[key] || text.pt;
}

export function locParas(text: LocalizedParagraphs, lang: Language): string[] {
    if (lang === 'fr' && text.fr?.length) return text.fr;
    if (lang === 'ar' && text.ar?.length) return text.ar;
    const key = LANG_TO_TRANSLATION[lang as Exclude<Language, 'fr' | 'ar'>];
    const paras = text[key];
    return paras && paras.length > 0 ? paras : text.pt;
}

export function formatPriceBRL(priceCents: number): string {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(priceCents / 100);
}
