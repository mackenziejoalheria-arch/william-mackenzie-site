'use client';

import Image from 'next/image';
import HeroSlider from './HeroSlider';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/translations';

export default function Hero() {
    const { language } = useLanguage();
    const t = getTranslations(language).hero;
    const firstSlide = t.slides[0];

    return (
        <section
            className="relative w-full h-[calc(100dvh-3.5rem)] md:h-[calc(100dvh-5rem)] flex items-stretch justify-center pt-14 md:pt-20 !py-0 bg-schubart-6 overflow-hidden"
            aria-label={t.galleryAria}
        >
            <h1 className="sr-only">{t.h1}</h1>

            <div className="relative w-full h-full px-1 sm:px-4">
                <Image
                    src={firstSlide.src}
                    alt={firstSlide.alt}
                    fill
                    className="object-contain"
                    priority
                    fetchPriority="high"
                    sizes="100vw"
                />
                <HeroSlider />
            </div>
        </section>
    );
}
