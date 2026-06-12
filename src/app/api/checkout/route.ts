import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import type { Language } from '@/context/LanguageContext';
import { brlCentsToCheckoutAmount, getRates } from '@/lib/currency';
import { loc } from '@/lib/gemas';
import { createStripeClient, getStripeSecretKey } from '@/lib/stripe';
import { buildShippingOptions } from '@/lib/shipping-rates';
import { getGema } from '@/lib/gemas-store';

const localeMap: Record<string, Stripe.Checkout.SessionCreateParams.Locale> = {
    pt: 'pt-BR',
    'en-us': 'en',
    'en-gb': 'en-GB',
    es: 'es',
    de: 'de',
    fr: 'fr',
    ar: 'auto',
};

function buildLineItems(
    pedra: NonNullable<ReturnType<typeof getGema>>,
    origin: string,
    locale: string,
    rates: Awaited<ReturnType<typeof getRates>>,
): Stripe.Checkout.SessionCreateParams.LineItem[] {
    const lang = locale as Language;
    const { currency, amountCents } = brlCentsToCheckoutAmount(
        pedra.priceCents,
        locale,
        rates,
    );

    return [
        {
            quantity: 1,
            price_data: {
                currency,
                unit_amount: amountCents,
                product_data: {
                    name: `${loc(pedra.name, lang)} — William Mackenzie`,
                    description: loc(pedra.subtitle, lang),
                    images:
                        pedra.images.length > 0
                            ? [`${origin}${pedra.images[0]}`]
                            : undefined,
                },
            },
        },
    ];
}

const shippingAddressCollection: Stripe.Checkout.SessionCreateParams.ShippingAddressCollection =
    {
        allowed_countries: [
            'BR', 'US', 'CA', 'PT', 'ES', 'DE', 'GB', 'FR', 'IT',
            'CH', 'AT', 'NL', 'BE', 'AR', 'UY', 'CL', 'MX',
        ],
    };

export async function POST(req: NextRequest) {
    const secretKey = getStripeSecretKey();
    if (!secretKey) {
        return NextResponse.json(
            { error: 'Stripe não configurado (STRIPE_SECRET_KEY ausente).' },
            { status: 500 },
        );
    }

    let slug: string;
    let locale: string;
    let mode: 'embedded' | 'hosted';

    try {
        const body = await req.json();
        slug = body.slug;
        locale = body.locale;
        mode = body.mode === 'hosted' ? 'hosted' : 'embedded';
    } catch {
        return NextResponse.json({ error: 'Corpo da requisição inválido.' }, { status: 400 });
    }

    const pedra = getGema(slug);

    if (!pedra || !pedra.available) {
        return NextResponse.json(
            { error: 'Produto não encontrado ou indisponível.' },
            { status: 404 },
        );
    }

    const origin =
        req.headers.get('origin') ??
        process.env.NEXT_PUBLIC_SITE_URL ??
        'http://localhost:3000';

    const rates = await getRates();
    const stripe = createStripeClient(secretKey);
    const shared = {
        mode: 'payment' as const,
        locale: localeMap[locale] ?? 'auto',
        line_items: buildLineItems(pedra, origin, locale, rates),
        shipping_address_collection: shippingAddressCollection,
        shipping_options: buildShippingOptions(locale, rates),
        metadata: { slug: pedra.slug, locale },
    };

    try {
        if (mode === 'hosted') {
            const session = await stripe.checkout.sessions.create({
                ...shared,
                success_url: `${origin}/obrigado/?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${origin}/pedras/${pedra.slug}/`,
            });

            if (!session.url) {
                return NextResponse.json(
                    { error: 'Não foi possível gerar a URL de pagamento.' },
                    { status: 500 },
                );
            }

            return NextResponse.json({ url: session.url });
        }

        const session = await stripe.checkout.sessions.create({
            ...shared,
            ui_mode: 'embedded_page',
            return_url: `${origin}/obrigado/?session_id={CHECKOUT_SESSION_ID}`,
        });

        if (!session.client_secret) {
            return NextResponse.json(
                { error: 'Não foi possível iniciar o checkout embutido.' },
                { status: 500 },
            );
        }

        return NextResponse.json({ clientSecret: session.client_secret });
    } catch (err) {
        const message =
            err instanceof Stripe.errors.StripeError
                ? err.message
                : 'Erro ao criar sessão de pagamento.';
        console.error('[checkout]', message);
        return NextResponse.json({ error: message }, { status: 502 });
    }
}
