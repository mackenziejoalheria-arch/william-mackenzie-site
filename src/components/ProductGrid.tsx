'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/translations';
import { Gema, loc } from '@/lib/gemas';
import { Rates, displayPrice } from '@/lib/currency';
import { normalizeCategory, productPath, ProductCategory } from '@/lib/catalog';

type ProductGridProps = {
    gemas: Gema[];
    rates: Rates | null;
    category?: ProductCategory;
    exclude?: string;
    limit?: number;
};

export default function ProductGrid({
    gemas,
    rates,
    category,
    exclude,
    limit,
}: ProductGridProps) {
    const { language } = useLanguage();
    const t = getTranslations(language).gems;

    let items = gemas.filter((g) => g.slug !== exclude);
    if (limit) items = items.slice(0, limit);

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12 md:gap-x-8">
            {items.map((gema) => {
                const cat = category ?? normalizeCategory(gema);
                const href = productPath(cat, gema.slug);
                const price = displayPrice(gema.priceCents, language, rates);

                return (
                    <Link key={gema.slug} href={href} className="group block">
                        <div className="relative w-full aspect-square overflow-hidden bg-white shadow-[0_10px_40px_rgba(26,26,26,0.05)] ring-1 ring-schubart-3/40">
                            {gema.images[0] && (
                                <Image
                                    src={gema.images[0]}
                                    alt={loc(gema.name, language)}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />
                            )}
                            {!gema.available && (
                                <div className="absolute inset-0 bg-schubart-6/70 flex items-center justify-center">
                                    <span className="font-epicene-text text-body-xs-caps uppercase tracking-[0.25em] text-schubart-1 border border-schubart-1 px-4 py-2">
                                        {t.sold}
                                    </span>
                                </div>
                            )}
                        </div>
                        <h3 className="font-epicene-text text-[0.72rem] md:text-body-xs-caps uppercase mt-4 text-schubart-2 tracking-[0.22em]">
                            {loc(gema.name, language)}
                        </h3>
                        <p className="font-cardo text-headlines-xs text-schubart-1 mt-1">
                            {price.main}
                        </p>
                    </Link>
                );
            })}
        </div>
    );
}
