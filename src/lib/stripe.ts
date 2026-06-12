import Stripe from 'stripe';

export function getStripeSecretKey(): string | undefined {
    return process.env.STRIPE_SECRET_KEY;
}

export function getStripePublishableKey(): string | undefined {
    const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.trim();
    if (!key || !key.startsWith('pk_')) return undefined;
    return key;
}

export function createStripeClient(secretKey: string): Stripe {
    return new Stripe(secretKey);
}
