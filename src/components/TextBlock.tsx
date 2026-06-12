'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/translations';

export default function TextBlock() {
    const { language } = useLanguage();
    const t = getTranslations(language).textBlock;

    return (
        <section className="flex min-h-[100svh] w-full items-center justify-center bg-schubart-6 px-5 py-24 md:px-8 md:py-32" aria-labelledby="manifesto-title">
            <div className="mx-auto max-w-[1180px] space-y-10 md:space-y-12">
                <blockquote id="manifesto-title" className="text-center font-pp-hatton text-[1.9rem] leading-[1.16] text-schubart-2 sm:text-[2.5rem] md:text-[3.2rem] lg:text-[3.8rem] whitespace-pre-line">
                    {t.manifesto}
                </blockquote>
                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                    <Link href="/quem-somos" className="font-epicene-text text-[0.72rem] uppercase tracking-[0.24em] text-schubart-2 transition-opacity hover:opacity-65">
                        {t.essence}
                    </Link>
                    <Link href="/quem-somos#midia" className="font-epicene-text text-[0.72rem] uppercase tracking-[0.24em] text-schubart-2 transition-opacity hover:opacity-65">
                        {t.media}
                    </Link>
                </div>
            </div>
        </section>
    );
}

