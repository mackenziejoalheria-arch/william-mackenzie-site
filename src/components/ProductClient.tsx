'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/translations';
import { Gema, loc, locParas } from '@/lib/gemas';
import { Rates, displayPrice } from '@/lib/currency';
import { CATEGORY_CONFIG, ProductCategory } from '@/lib/catalog';
import GemCheckout from '@/components/GemCheckout';
import WhatsAppLink from '@/components/WhatsAppLink';
import ProductGrid from '@/components/ProductGrid';

function VideoLightbox({ src, onClose }: { src: string; onClose: () => void }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center p-4 md:p-8"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-5 md:top-6 md:right-8 text-white/80 hover:text-white font-epicene-text text-3xl leading-none z-10 cursor-pointer"
                aria-label="Fechar vídeo"
            >
                ✕
            </button>
            <video
                src={src}
                autoPlay
                controls
                playsInline
                className="h-full max-h-[92vh] aspect-[9/16] max-w-full object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
}

export default function ProductClient({
    gema,
    outras,
    rates,
    category,
}: {
    gema: Gema;
    outras: Gema[];
    rates: Rates | null;
    category: ProductCategory;
}) {
    const { language } = useLanguage();
    const t = getTranslations(language).gems;
    const catalog = getTranslations(language).catalogHome?.[category];
    const backLabel =
        category === 'pedras'
            ? t.backToGems
            : (catalog?.backToList ?? t.backToGems);
    const listPath = CATEGORY_CONFIG[category].listPath;

    const [showCheckout, setShowCheckout] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [activeImage, setActiveImage] = useState(0);

    const name = loc(gema.name, language);
    const mainImage = gema.images[activeImage] ?? gema.images[0];
    const price = displayPrice(gema.priceCents, language, rates);

    return (
        <main className="bg-schubart-6 min-h-screen text-schubart-1 selection:bg-schubart-1 selection:text-schubart-6 fade-in">
            <section className="pt-28 md:pt-36 pb-20 md:pb-28 px-4 md:px-12 xl:px-24 max-w-7xl mx-auto">
                <Link
                    href={listPath}
                    className="inline-flex font-epicene-text text-[0.72rem] uppercase tracking-[0.22em] text-schubart-2 transition-opacity hover:opacity-65 mb-8 md:mb-12"
                >
                    ← {backLabel}
                </Link>

                <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">
                    <div className="w-full md:w-1/2 md:sticky md:top-28">
                        <div className="relative w-full aspect-square bg-white rounded-sm shadow-xl overflow-hidden ring-1 ring-schubart-3/40">
                            {mainImage && (
                                <Image
                                    key={mainImage}
                                    src={mainImage}
                                    alt={name}
                                    fill
                                    priority
                                    className="object-cover fade-in"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            )}
                            {!gema.available && (
                                <div className="absolute inset-0 bg-schubart-6/70 flex items-center justify-center">
                                    <span className="font-epicene-text text-body-s-caps uppercase tracking-[0.25em] text-schubart-1 border border-schubart-1 px-6 py-3">
                                        {t.sold}
                                    </span>
                                </div>
                            )}
                        </div>

                        {(gema.images.length > 1 || gema.video) && (
                            <div className="grid grid-cols-4 gap-3 mt-3">
                                {gema.images.map((img, i) => (
                                    <button
                                        key={img}
                                        onClick={() => setActiveImage(i)}
                                        className={`relative aspect-square overflow-hidden bg-white ring-1 transition-all cursor-pointer ${
                                            i === activeImage
                                                ? 'ring-schubart-1 opacity-100'
                                                : 'ring-schubart-3/40 opacity-70 hover:opacity-100'
                                        }`}
                                        aria-label={`${name} — foto ${i + 1}`}
                                    >
                                        <Image
                                            src={img}
                                            alt=""
                                            fill
                                            className="object-cover"
                                            sizes="120px"
                                        />
                                    </button>
                                ))}

                                {gema.video && (
                                    <button
                                        onClick={() => setShowVideo(true)}
                                        className="relative aspect-square overflow-hidden bg-schubart-1 ring-1 ring-schubart-3/40 group cursor-pointer"
                                        aria-label={`${name} — vídeo`}
                                    >
                                        <video
                                            src={gema.video}
                                            muted
                                            playsInline
                                            preload="metadata"
                                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                        <span className="absolute inset-0 flex items-center justify-center">
                                            <span className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                                                <span className="ml-1 border-y-[7px] border-y-transparent border-l-[12px] border-l-schubart-1 block" />
                                            </span>
                                        </span>
                                    </button>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col">
                        <p className="font-epicene-text text-[0.72rem] uppercase tracking-[0.24em] text-schubart-5 mb-4">
                            {catalog?.eyebrow ?? t.eyebrow}
                        </p>
                        <h1 className="font-cardo font-light text-headlines-s md:text-headlines-m uppercase mb-3">
                            {name}
                        </h1>
                        <h2 className="font-epicene-text text-body-s-caps text-schubart-2 mb-8 uppercase tracking-widest">
                            {loc(gema.subtitle, language)}
                        </h2>

                        <div className="space-y-5 font-epicene-text text-body-m leading-relaxed text-schubart-2 mb-10">
                            {locParas(gema.description, language).map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="flex flex-col items-start mb-10 border-y border-schubart-1/15 py-6 w-full">
                            <span className="text-schubart-1 font-cardo text-headlines-m">
                                {price.main}
                            </span>
                            {language === 'pt' ? (
                                <span className="font-epicene-text text-body-m text-schubart-2 mt-1">
                                    {t.installments}
                                </span>
                            ) : (
                                <span className="font-epicene-text text-[0.8rem] text-schubart-2 mt-1">
                                    {t.chargedInUSD}
                                </span>
                            )}
                        </div>

                        {gema.available && (
                            <button
                                onClick={() => setShowCheckout(true)}
                                className="inline-block px-12 py-5 border border-schubart-1 text-schubart-6 bg-schubart-1 font-pp-hatton uppercase tracking-widest text-body-s-caps hover:bg-transparent hover:text-schubart-1 transition-all duration-300 w-full md:w-auto text-center cursor-pointer"
                            >
                                {t.buy}
                            </button>
                        )}

                        <WhatsAppLink
                            message={`Olá! Tenho interesse em ${gema.name.pt} que vi no site da William Mackenzie Joalheria.`}
                            label={`product_${gema.slug}`}
                            className="mt-5 inline-flex font-epicene-text text-[0.72rem] uppercase tracking-[0.22em] text-schubart-1 transition-opacity hover:opacity-65 border-b border-schubart-1 pb-1 self-center md:self-start"
                        >
                            {t.whatsappCta}
                        </WhatsAppLink>

                        <div className="mt-10 flex flex-col gap-2 items-start w-full opacity-80">
                            {category === 'pedras' && (
                                <span className="font-epicene-text text-[13px] tracking-widest uppercase text-schubart-1">
                                    {t.naturalStone}
                                </span>
                            )}
                            <span className="font-epicene-text text-body-xs-caps tracking-widest text-schubart-2 uppercase">
                                {t.shipping}
                            </span>
                            <span className="font-epicene-text text-body-xs-caps tracking-widest text-schubart-2 uppercase">
                                {t.internationalShipping}
                            </span>
                            <span className="font-epicene-text text-body-xs-caps tracking-widest text-schubart-2 uppercase">
                                {t.securePayment}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {outras.length > 0 && (
                <section className="pb-24 md:pb-32 px-4 md:px-12 xl:px-24 max-w-7xl mx-auto border-t border-schubart-3/60 pt-16 md:pt-20">
                    <h2 className="font-pp-hatton text-body-s-caps uppercase tracking-[0.2em] text-schubart-2 mb-10 text-center">
                        {catalog?.relatedTitle ?? t.viewAll}
                    </h2>
                    <ProductGrid gemas={outras} rates={rates} category={category} limit={8} />
                </section>
            )}

            {showCheckout && (
                <GemCheckout slug={gema.slug} onClose={() => setShowCheckout(false)} />
            )}

            {showVideo && gema.video && (
                <VideoLightbox src={gema.video} onClose={() => setShowVideo(false)} />
            )}
        </main>
    );
}
