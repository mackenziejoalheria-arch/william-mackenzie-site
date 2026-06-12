import { Gema } from '@/lib/gemas';

export type ProductCategory = 'pedras' | 'aliancas' | 'noivado' | 'formatura';

export const HOME_PRODUCT_LIMIT = 8;

export const CATEGORY_CONFIG: Record<
    ProductCategory,
    { listPath: string; homeTranslationKey: 'pedras' | 'aliancas' | 'noivado' | 'formatura' }
> = {
    pedras: { listPath: '/pedras', homeTranslationKey: 'pedras' },
    aliancas: { listPath: '/aliancas', homeTranslationKey: 'aliancas' },
    noivado: { listPath: '/aneis-de-noivado', homeTranslationKey: 'noivado' },
    formatura: { listPath: '/aneis-de-formatura', homeTranslationKey: 'formatura' },
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
    'pedras',
    'aliancas',
    'noivado',
    'formatura',
];

export function normalizeCategory(gema: Gema): ProductCategory {
    const cat = gema.category;
    if (cat && cat in CATEGORY_CONFIG) return cat;
    return 'pedras';
}

export function productPath(category: ProductCategory, slug: string): string {
    return `${CATEGORY_CONFIG[category].listPath}/${slug}/`;
}
