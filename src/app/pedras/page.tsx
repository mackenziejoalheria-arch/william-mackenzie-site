import type { Metadata } from 'next';
import { getGemasByCategory } from '@/lib/gemas-store';
import { getRates } from '@/lib/currency';
import PedrasClient from './PedrasClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Pedras Preciosas — William Mackenzie',
    description:
        'Safiras, esmeraldas, rubis, diamantes e outras gemas naturais selecionadas à mão pelo ourives. Compra segura com envio para todo o Brasil.',
    alternates: { canonical: '/pedras/' },
};

export default async function PedrasPage() {
    const gemas = getGemasByCategory('pedras');
    const rates = await getRates();
    return <PedrasClient gemas={gemas} rates={rates} />;
}
