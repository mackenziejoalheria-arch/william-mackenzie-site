import type { Metadata } from 'next';
import { createStripeClient, getStripeSecretKey } from '@/lib/stripe';
import ObrigadoClient from './ObrigadoClient';

export const metadata: Metadata = {
    title: 'Obrigado pela sua compra',
    robots: { index: false, follow: false },
};

type Props = { searchParams: Promise<{ session_id?: string }> };

export default async function ObrigadoPage({ searchParams }: Props) {
    const { session_id } = await searchParams;
    let status: 'complete' | 'pending' | 'error' = 'error';

    if (session_id && getStripeSecretKey()) {
        try {
            const stripe = createStripeClient(getStripeSecretKey()!);
            const session = await stripe.checkout.sessions.retrieve(session_id);
            if (session.status === 'complete') {
                status = 'complete';
            } else if (session.status === 'open') {
                status = 'pending';
            }
        } catch {
            status = 'error';
        }
    }

    return <ObrigadoClient status={status} />;
}
