'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/translations';
import { Gema } from '@/lib/gemas';
import { Rates } from '@/lib/currency';
import {
    CATEGORY_CONFIG,
    HOME_PRODUCT_LIMIT,
    ProductCategory,
} from '@/lib/catalog';
import ProductGrid from './ProductGrid';

type CatalogShowcaseProps = {
    gemas: Gema[];
    rates: Rates | null;
    category: ProductCategory;
    limit?: number;
};

function getCopy(language: ReturnType<typeof useLanguage>['language'], category: ProductCategory) {
    const t = getTranslations(language);
    if (category === 'pedras') {
        return {
            eyebrow: t.gems.eyebrow,
            title: t.gems.homeTitle,
            desc: t.gems.homeDesc,
            viewAll: t.gems.viewAll,
        };
    }
    const fallback = getTranslations('en-us').catalogHome;
    const section = t.catalogHome?.[category] ?? fallback[category];
    return section;
}

export default function CatalogShowcase({
    gemas,
    rates,
    category,
    limit = HOME_PRODUCT_LIMIT,
}: CatalogShowcaseProps) {
    const { language } = useLanguage();
    const copy = getCopy(language, category);
    const { listPath } = CATEGORY_CONFIG[category];
    const items = gemas.slice(0, limit);

    if (items.length === 0) return null;

    return (
        <section
            className="mx-auto w-full max-w-[1400px] px-5 md:px-8 py-24 md:py-32"
            aria-labelledby={`catalog-${category}-title`}
        >
            <div className="text-center space-y-5 mb-14 md:mb-20">
                {'eyebrow' in copy && copy.eyebrow && (
                    <p className="font-epicene-text text-[0.72rem] uppercase tracking-[0.24em] text-schubart-5">
                        {copy.eyebrow}
                    </p>
                )}
                <h2
                    id={`catalog-${category}-title`}
                    className="font-pp-hatton text-[2rem] leading-tight text-schubart-1 sm:text-[2.75rem] md:text-[3.5rem]"
                >
                    {copy.title}
                </h2>
                <p className="mx-auto max-w-2xl font-epicene-text text-body-m leading-relaxed text-schubart-2">
                    {copy.desc}
                </p>
            </div>

            <ProductGrid gemas={items} rates={rates} category={category} />

            <div className="text-center mt-14 md:mt-16">
                <Link
                    href={listPath}
                    className="inline-flex font-epicene-text text-[0.72rem] uppercase tracking-[0.22em] text-schubart-1 transition-opacity hover:opacity-65 border-b border-schubart-1 pb-1"
                >
                    {copy.viewAll}
                </Link>
            </div>
        </section>
    );
}
