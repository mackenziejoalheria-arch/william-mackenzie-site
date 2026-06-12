'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/translations';

export default function HeroSlider() {
    const { language } = useLanguage();
    const t = getTranslations(language).hero;
    const slides = t.slides;
    const [mounted, setMounted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const activeIndex = currentIndex % slides.length;

    const goTo = useCallback((index: number) => {
        setCurrentIndex((index + slides.length) % slides.length);
    }, []);

    const goNext = useCallback(() => {
        goTo(currentIndex + 1);
    }, [currentIndex, goTo]);

    const goPrev = useCallback(() => {
        goTo(currentIndex - 1);
    }, [currentIndex, goTo]);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [mounted]);

    const handleTouchStart = (event: React.TouchEvent) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event: React.TouchEvent) => {
        if (touchStartX.current === null) return;

        const delta = touchStartX.current - event.changedTouches[0].clientX;
        if (Math.abs(delta) > 40) {
            if (delta > 0) goNext();
            else goPrev();
        }

        touchStartX.current = null;
    };

    if (!mounted) return null;

    return (
        <div
            className="absolute inset-0 px-1 sm:px-4 touch-pan-y bg-schubart-6"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                aria-live="polite"
            >
                {slides.map((slide: { src: string; alt: string }, index: number) => (
                    <div key={slide.src} className="relative min-w-full h-full shrink-0">
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            className="object-contain"
                            priority={index === 0}
                            sizes="100vw"
                            draggable={false}
                        />
                    </div>
                ))}
            </div>

            <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {slides.map((slide: { src: string; alt: string }, index: number) => (
                    <button
                        key={slide.src}
                        type="button"
                        onClick={() => goTo(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            index === activeIndex ? 'w-8 bg-schubart-1' : 'w-1.5 bg-schubart-1/25'
                        }`}
                        aria-label={`${t.showSlide} ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
