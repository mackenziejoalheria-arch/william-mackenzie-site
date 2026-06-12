'use client';

import { useCallback, useEffect, useState } from 'react';
import { loadStripe, type Stripe } from '@stripe/stripe-js';
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout,
} from '@stripe/react-stripe-js';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/translations';

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.trim() ?? '';
const hasValidPublishableKey = publishableKey.startsWith('pk_');

type GemCheckoutProps = {
    slug: string;
    onClose: () => void;
};

export default function GemCheckout({ slug, onClose }: GemCheckoutProps) {
    const { language } = useLanguage();
    const t = getTranslations(language).gems;
    const [error, setError] = useState(false);
    const [redirecting, setRedirecting] = useState(!hasValidPublishableKey);
    const [stripePromise, setStripePromise] = useState<Promise<Stripe | null> | null>(
        hasValidPublishableKey ? loadStripe(publishableKey) : null,
    );

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    useEffect(() => {
        if (hasValidPublishableKey) return;

        let cancelled = false;

        (async () => {
            try {
                const res = await fetch('/api/checkout/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ slug, locale: language, mode: 'hosted' }),
                });
                if (!res.ok) throw new Error('checkout_session_failed');
                const data = (await res.json()) as { url?: string };
                if (!data.url) throw new Error('checkout_url_missing');
                if (!cancelled) window.location.href = data.url;
            } catch {
                if (!cancelled) {
                    setRedirecting(false);
                    setError(true);
                }
            }
        })();

        return () => {
            cancelled = true;
        };
    }, [slug, language]);

    const fetchClientSecret = useCallback(async () => {
        const res = await fetch('/api/checkout/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ slug, locale: language, mode: 'embedded' }),
        });
        if (!res.ok) {
            setError(true);
            throw new Error('checkout_session_failed');
        }
        const data = await res.json();
        return data.clientSecret as string;
    }, [slug, language]);

    const loading = redirecting || (hasValidPublishableKey && !stripePromise);

    return (
        <div className="fixed inset-0 z-[10000] flex items-start md:items-center justify-center bg-schubart-1/60 backdrop-blur-sm overflow-y-auto p-3 md:p-8">
            <div className="relative w-full max-w-3xl bg-schubart-6 shadow-2xl my-8 md:my-0">
                <div className="flex items-center justify-between px-5 py-4 border-b border-schubart-3/60">
                    <h3 className="font-pp-hatton text-body-s-caps uppercase tracking-[0.2em] text-schubart-1">
                        {t.checkoutTitle}
                    </h3>
                    <button
                        onClick={onClose}
                        className="font-epicene-text text-body-xs-caps uppercase tracking-[0.2em] text-schubart-2 hover:text-schubart-1 transition-colors"
                    >
                        {t.checkoutClose} ✕
                    </button>
                </div>

                <div className="min-h-[300px] p-2 md:p-4">
                    {error ? (
                        <p className="font-epicene-text text-body-m text-schubart-2 text-center px-6 py-16">
                            {t.checkoutError}
                        </p>
                    ) : loading ? (
                        <p className="font-epicene-text text-body-m text-schubart-2 text-center px-6 py-16">
                            {t.checkoutLoading}
                        </p>
                    ) : (
                        <EmbeddedCheckoutProvider
                            stripe={stripePromise}
                            options={{ fetchClientSecret }}
                        >
                            <EmbeddedCheckout />
                        </EmbeddedCheckoutProvider>
                    )}
                </div>
            </div>
        </div>
    );
}
