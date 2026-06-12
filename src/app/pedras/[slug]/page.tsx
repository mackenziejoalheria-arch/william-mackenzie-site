import type { Metadata } from 'next';
import { normalizeCategory } from '@/lib/catalog';
import { getGema } from '@/lib/gemas-store';
import { productMetadata, ProductPage } from '@/lib/product-page';

export const dynamic = 'force-dynamic';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const gema = getGema(slug);
    if (!gema || normalizeCategory(gema) !== 'pedras') return {};
    return productMetadata('pedras', gema);
}

export default function PedraPage({ params }: Props) {
    return <ProductPage category="pedras" params={params} />;
}
