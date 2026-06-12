'use client';

import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/translations';
import { Gema } from '@/lib/gemas';
import { Rates } from '@/lib/currency';
import ProductGrid from '@/components/ProductGrid';
import WhatsAppLink from '@/components/WhatsAppLink';

export default function PedrasClient({ gemas, rates }: { gemas: Gema[]; rates: Rates | null }) {
    const { language } = useLanguage();
    const t = getTranslations(language).gems;

    return (
        <main className="bg-schubart-6 min-h-screen text-schubart-1 selection:bg-schubart-1 selection:text-schubart-6 fade-in">
            <section className="pt-32 md:pt-44 pb-16 md:pb-24 px-5 md:px-8 max-w-[1400px] mx-auto">
                <div className="text-center space-y-5 mb-16 md:mb-24">
                    <p className="font-epicene-text text-[0.72rem] uppercase tracking-[0.24em] text-schubart-5">
                        William Mackenzie
                    </p>
                    <h1 className="font-pp-hatton text-[2.25rem] leading-tight text-schubart-1 sm:text-[3rem] md:text-[3.75rem] uppercase">
                        {t.pageTitle}
                    </h1>
                    <p className="mx-auto max-w-2xl font-epicene-text text-body-m md:text-body-l leading-relaxed text-schubart-2">
                        {t.pageDesc}
                    </p>
                </div>

                <ProductGrid gemas={gemas} rates={rates} category="pedras" />

                <div className="text-center mt-20 md:mt-28">
                    <WhatsAppLink
                        message="Olá! Tenho interesse nas pedras preciosas do site da William Mackenzie Joalheria."
                        label="gems_page"
                        className="inline-flex font-epicene-text text-[0.72rem] uppercase tracking-[0.22em] text-schubart-1 transition-opacity hover:opacity-65 border-b border-schubart-1 pb-1"
                    >
                        {t.whatsappCta}
                    </WhatsAppLink>
                </div>
            </section>
        </main>
    );
}
