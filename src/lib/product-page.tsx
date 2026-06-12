import { notFound, redirect } from 'next/navigation';
import ProductClient from '@/components/ProductClient';
import { getRates } from '@/lib/currency';
import { normalizeCategory, productPath, ProductCategory } from '@/lib/catalog';
import { getGema, readGemas } from '@/lib/gemas-store';
import { formatPriceBRL } from '@/lib/gemas';

type Params = Promise<{ slug: string }>;

export async function loadProduct(category: ProductCategory, params: Params) {
    const { slug } = await params;
    const gema = getGema(slug);
    if (!gema) notFound();

    const gemaCategory = normalizeCategory(gema);
    if (gemaCategory !== category) {
        redirect(productPath(gemaCategory, slug));
    }

    const outras = readGemas().filter(
        (g) => g.slug !== slug && normalizeCategory(g) === category,
    );
    const rates = await getRates();

    return { gema, outras, rates, category };
}

export function productMetadata(
    category: ProductCategory,
    gema: NonNullable<ReturnType<typeof getGema>>,
) {
    return {
        title: `${gema.name.pt} — William Mackenzie`,
        description: `${gema.subtitle.pt}. ${formatPriceBRL(gema.priceCents)}.`,
        alternates: { canonical: productPath(category, gema.slug) },
        openGraph: {
            title: `${gema.name.pt} | William Mackenzie`,
            description: gema.subtitle.pt,
            images: gema.images.length > 0 ? [gema.images[0]] : undefined,
        },
    };
}

export async function ProductPage({
    category,
    params,
}: {
    category: ProductCategory;
    params: Params;
}) {
    const { gema, outras, rates } = await loadProduct(category, params);
    return (
        <ProductClient gema={gema} outras={outras} rates={rates} category={category} />
    );
}
