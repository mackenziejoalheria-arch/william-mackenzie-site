import type Stripe from 'stripe';
import { brlCentsToCheckoutAmount, type Rates } from '@/lib/currency';

export type ShippingZoneId = 'br' | 'americas' | 'europe' | 'other';

type ZoneConfig = {
    id: ShippingZoneId;
    /** Valor base em centavos de BRL */
    amountCentsBrl: number;
    minDays: number;
    maxDays: number;
    labels: Record<string, string>;
};

/** Valores base de frete em BRL. Convertidos para USD no checkout internacional. */
export const SHIPPING_ZONES: ZoneConfig[] = [
    {
        id: 'br',
        amountCentsBrl: 0,
        minDays: 3,
        maxDays: 7,
        labels: {
            pt: 'Brasil — Sedex (grátis)',
            'en-us': 'Brazil — Sedex (free)',
            'en-gb': 'Brazil — Sedex (free)',
            es: 'Brasil — Sedex (gratis)',
            de: 'Brasilien — Sedex (kostenlos)',
            fr: 'Brésil — Sedex (gratuit)',
            ar: 'Brazil — Sedex (free)',
        },
    },
    {
        id: 'americas',
        amountCentsBrl: 45000,
        minDays: 5,
        maxDays: 12,
        labels: {
            pt: 'Américas — FedEx Internacional',
            'en-us': 'Americas — FedEx International',
            'en-gb': 'Americas — FedEx International',
            es: 'Américas — FedEx Internacional',
            de: 'Amerika — FedEx International',
            fr: 'Amériques — FedEx International',
            ar: 'Americas — FedEx International',
        },
    },
    {
        id: 'europe',
        amountCentsBrl: 55000,
        minDays: 5,
        maxDays: 14,
        labels: {
            pt: 'Europa — FedEx Internacional',
            'en-us': 'Europe — FedEx International',
            'en-gb': 'Europe — FedEx International',
            es: 'Europa — FedEx Internacional',
            de: 'Europa — FedEx International',
            fr: 'Europe — FedEx International',
            ar: 'Europe — FedEx International',
        },
    },
    {
        id: 'other',
        amountCentsBrl: 65000,
        minDays: 7,
        maxDays: 21,
        labels: {
            pt: 'Outros países — FedEx Internacional',
            'en-us': 'Other countries — FedEx International',
            'en-gb': 'Other countries — FedEx International',
            es: 'Otros países — FedEx Internacional',
            de: 'Andere Länder — FedEx International',
            fr: 'Autres pays — FedEx International',
            ar: 'Other countries — FedEx International',
        },
    },
];

function zoneLabel(zone: ZoneConfig, locale: string): string {
    return zone.labels[locale] ?? zone.labels['en-us'];
}

export function buildShippingOptions(
    locale: string,
    rates: Rates | null,
): Stripe.Checkout.SessionCreateParams.ShippingOption[] {
    return SHIPPING_ZONES.map((zone) => {
        const { currency, amountCents } = brlCentsToCheckoutAmount(
            zone.amountCentsBrl,
            locale,
            rates,
        );

        return {
            shipping_rate_data: {
                type: 'fixed_amount' as const,
                display_name: zoneLabel(zone, locale),
                fixed_amount: {
                    amount: amountCents,
                    currency,
                },
                delivery_estimate: {
                    minimum: { unit: 'business_day' as const, value: zone.minDays },
                    maximum: { unit: 'business_day' as const, value: zone.maxDays },
                },
                metadata: { zone: zone.id },
            },
        };
    });
}
