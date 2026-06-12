import { Language } from '../context/LanguageContext';

export type Rates = { USD: number; EUR: number; GBP: number; AED: number };

export type CheckoutCurrency = 'brl' | 'usd';

/** Taxa de fallback quando a API de câmbio não responde (~R$ 5,55 / US$ 1). */
const FALLBACK_USD_PER_BRL = 0.18;

export function isPortugueseLocale(locale: string): boolean {
    return locale === 'pt';
}

export function checkoutCurrency(locale: string): CheckoutCurrency {
    return isPortugueseLocale(locale) ? 'brl' : 'usd';
}

export async function getRates(): Promise<Rates | null> {
    try {
        const res = await fetch(
            'https://api.frankfurter.dev/v1/latest?base=BRL&symbols=USD,EUR,GBP,AED',
            { next: { revalidate: 43200 } },
        );
        if (!res.ok) return null;
        const data = await res.json();
        const { USD, EUR, GBP, AED } = data?.rates ?? {};
        if (
            typeof USD !== 'number' ||
            typeof EUR !== 'number' ||
            typeof GBP !== 'number' ||
            typeof AED !== 'number'
        ) {
            return null;
        }
        return { USD, EUR, GBP, AED };
    } catch {
        return null;
    }
}

export function brlCentsToUsdCents(brlCents: number, rates: Rates | null): number {
    const rate = rates?.USD ?? FALLBACK_USD_PER_BRL;
    return Math.round((brlCents / 100) * rate * 100);
}

export function brlCentsToCheckoutAmount(
    brlCents: number,
    locale: string,
    rates: Rates | null,
): { currency: CheckoutCurrency; amountCents: number } {
    if (isPortugueseLocale(locale)) {
        return { currency: 'brl', amountCents: brlCents };
    }
    return { currency: 'usd', amountCents: brlCentsToUsdCents(brlCents, rates) };
}

export type DisplayPrice = {
    main: string;
    approximate: boolean;
};

export function displayPrice(
    priceCents: number,
    lang: Language,
    rates: Rates | null,
): DisplayPrice {
    if (lang === 'pt') {
        return {
            main: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(priceCents / 100),
            approximate: false,
        };
    }

    const usdCents = brlCentsToUsdCents(priceCents, rates);
    return {
        main: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(usdCents / 100),
        approximate: false,
    };
}

export function formatCheckoutAmount(
    amountCents: number,
    currency: CheckoutCurrency,
): string {
    const locale = currency === 'brl' ? 'pt-BR' : 'en-US';
    const code = currency.toUpperCase();
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: code,
    }).format(amountCents / 100);
}
