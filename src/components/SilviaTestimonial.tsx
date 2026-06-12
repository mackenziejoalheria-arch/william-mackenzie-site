'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/translations';

export default function SilviaTestimonial() {
    const { language } = useLanguage();
    const t = getTranslations(language).productList;

    return (
        <section
            className="mx-auto w-full max-w-[1400px] px-5 md:px-8 py-20 md:py-28"
            aria-labelledby="silvia-title"
        >
            <div className="border-t border-schubart-3/70 pt-16 md:pt-24">
                <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
                    <div className="flex justify-center lg:justify-end">
                        <video
                            src="/video/silvia.mp4"
                            controls
                            playsInline
                            preload="metadata"
                            className="w-full max-w-[340px] md:max-w-[380px] aspect-[9/16] object-cover bg-schubart-1 rounded-sm shadow-2xl"
                        />
                    </div>

                    <div className="space-y-7">
                        <div className="space-y-5 text-center lg:text-left">
                            <p className="font-epicene-text text-[0.72rem] uppercase tracking-[0.24em] text-schubart-5">
                                {t.clientTestimonialEyebrow}
                            </p>
                            <h2
                                id="silvia-title"
                                className="font-pp-hatton text-[2rem] leading-tight text-schubart-1 sm:text-[2.5rem] md:text-[3rem]"
                            >
                                {t.clientTestimonialTitle}
                            </h2>
                        </div>

                        <div className="bg-white px-6 py-7 shadow-[0_18px_60px_rgba(26,26,26,0.06)] ring-1 ring-schubart-3/60 md:px-8">
                            <div className="flex gap-4 text-left">
                                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-schubart-3">
                                    <Image
                                        src="/images/testimonials/silvia.png"
                                        alt="Foto de perfil de Silvia Rocha"
                                        fill
                                        className="object-cover"
                                        sizes="48px"
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="font-epicene-text text-[0.82rem] font-semibold text-schubart-1">
                                        @silviarocharocha1
                                    </p>
                                    <p className="mt-3 font-epicene-text text-[0.95rem] leading-relaxed text-schubart-1">
                                        “{t.silviaTestimonial}”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
