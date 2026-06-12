'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/translations';

export default function ProductList() {
    const { language } = useLanguage();
    const t = getTranslations(language).productList;

    return (
        <section className="max-w-screen-2xl mx-auto py-8 bg-schubart-6" aria-labelledby="products-title">
            <h2 id="products-title" className="sr-only">Nossas Coleções de Joias</h2>

            {/* Rede Vida Media Section */}
            <div className="mx-auto mt-24 w-full max-w-[1400px] px-5 md:mt-32 md:px-8">
                <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
                    <div className="space-y-6 text-center md:text-left">
                        <p className="font-epicene-text text-[0.72rem] uppercase tracking-[0.24em] text-schubart-5">
                            Rede Vida
                        </p>
                        <h2 className="font-pp-hatton text-[2rem] leading-tight text-schubart-1 sm:text-[2.75rem] md:text-[3.5rem]">
                            {t.mediaFeatureTitle}
                        </h2>
                        <p className="mx-auto max-w-xl font-epicene-text text-body-m leading-relaxed text-schubart-2 md:mx-0">
                            {t.mediaFeatureDesc}
                        </p>
                        <Link href="/quem-somos#midia" className="inline-flex font-epicene-text text-[0.72rem] uppercase tracking-[0.22em] text-schubart-1 transition-opacity hover:opacity-65 border-b border-schubart-1 pb-1">
                            {t.mediaFeatureCta}
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div className="relative col-span-2 aspect-[16/10] overflow-hidden bg-schubart-3/20 shadow-xl">
                            <Image
                                src="/images/media-3.webp"
                                alt="William Mackenzie ao vivo na TV Rede Vida"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 760px"
                            />
                        </div>
                        <div className="relative aspect-square overflow-hidden bg-schubart-3/20 shadow-lg">
                            <Image
                                src="/images/media-1.webp"
                                alt="Participação de William Mackenzie na Rede Vida"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 380px"
                            />
                        </div>
                        <div className="relative aspect-square overflow-hidden bg-schubart-3/20 shadow-lg">
                            <Image
                                src="/images/media-2.webp"
                                alt="William Mackenzie apresentando ourivesaria na TV"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 380px"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Gold Reuse Section */}
            <div className="mx-auto mt-24 w-full max-w-[1400px] px-5 md:mt-32 md:px-8">
                <div className="border-y border-schubart-3/70 py-16 md:py-24">
                    <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                        <div className="space-y-7">
                            <div className="space-y-5 text-center lg:text-left">
                                <p className="font-epicene-text text-[0.72rem] uppercase tracking-[0.24em] text-schubart-5">
                                    {t.goldReuseEyebrow}
                                </p>
                                <h2 className="font-pp-hatton text-[2rem] leading-tight text-schubart-1 sm:text-[2.75rem] md:text-[3.5rem]">
                                    {t.goldReuseTitle}
                                </h2>
                                <p className="mx-auto max-w-2xl font-epicene-text text-body-m leading-relaxed text-schubart-2 lg:mx-0">
                                    {t.goldReuseDesc}
                                </p>
                            </div>

                            <div className="bg-white px-5 py-6 shadow-[0_18px_60px_rgba(26,26,26,0.06)] ring-1 ring-schubart-3/60 md:px-7">
                                <div className="flex gap-4 text-left">
                                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-schubart-3">
                                        <Image
                                            src="/images/testimonials/luciano-rodrigues.png"
                                            alt="Foto de perfil de Luciano Rodrigues"
                                            fill
                                            className="object-cover"
                                            sizes="44px"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                                            <p className="font-epicene-text text-[0.82rem] font-semibold text-schubart-1">
                                                @lucianorodrigues7335
                                            </p>
                                            <p className="font-epicene-text text-[0.72rem] text-schubart-2/60">
                                                há 2 meses
                                            </p>
                                        </div>
                                        <p className="mt-2 font-epicene-text text-[0.95rem] leading-relaxed text-schubart-1">
                                            {t.goldReuseTestimonial}
                                        </p>
                                        <div className="mt-4 flex items-center gap-5 font-epicene-text text-[0.72rem] text-schubart-2/70">
                                            <span>👍</span>
                                            <span>👎</span>
                                            <span className="font-semibold uppercase tracking-[0.08em]">Responder</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link href="/reaproveitamento-de-ouro" className="mx-auto inline-flex font-epicene-text text-[0.72rem] uppercase tracking-[0.22em] text-schubart-1 transition-opacity hover:opacity-65 border-b border-schubart-1 pb-1 lg:mx-0">
                                {t.goldReuseCta}
                            </Link>
                        </div>

                        <div className="relative aspect-video w-full overflow-hidden bg-schubart-1 shadow-2xl">
                            <iframe
                                className="absolute inset-0 h-full w-full"
                                src="https://www.youtube.com/embed/QdsE_B2NsI8"
                                title="Reaproveitamento de ouro William Mackenzie"
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

