import FormaturaClient from './FormaturaClient';
import type { Metadata } from 'next';
import { getGemasByCategory } from '@/lib/gemas-store';
import { getRates } from '@/lib/currency';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Anéis de Formatura em Ouro 18k em Caçapava | William Mackenzie',
  description:
    'Anéis de formatura sob medida em ouro 18k em Caçapava-SP. Design exclusivo, pedras naturais, acabamento artesanal e orçamento pelo WhatsApp.',
  keywords: ['anéis de formatura', 'ouro 18k', 'formatura', 'anéis de grau', 'joias formatura', 'Caçapava'],
  alternates: { canonical: '/aneis-de-formatura/' },
};

export default async function AneisDeFormatura() {
  const gemas = getGemasByCategory('formatura');
  const rates = await getRates();
  return <FormaturaClient gemas={gemas} rates={rates} />;
}
