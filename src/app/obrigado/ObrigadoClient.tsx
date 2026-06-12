'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/translations';
import WhatsAppLink from '@/components/WhatsAppLink';

type ObrigadoClientProps = {
    status: 'complete' | 'pending' | 'error';
};

export default function ObrigadoClient({ status }: ObrigadoClientProps) {
    const { language } = useLanguage();
    const t = getTranslations(language).gems;

    const message =
        status === 'complete'
            ? t.thanksDesc
            : status === 'pending'
                ? t.thanksPending
                : t.thanksError;

    return (
        <main className="bg-schubart-6 min-h-screen text-schubart-1 flex items-center justify-center px-5 fade-in">
            <div className="max-w-2xl text-center py-40">
                {status === 'complete' && (
                    <p className="font-epicene-text text-[0.72rem] uppercase tracking-[0.24em] text-schubart-5 mb-6">
                        William Mackenzie
                    </p>
                )}
                <h1 className="font-pp-hatton text-[2rem] leading-tight sm:text-[2.75rem] md:text-[3.25rem] mb-6">
                    {status === 'error' ? '...' : t.thanksTitle}
                </h1>
                <p className="font-epicene-text text-body-m md:text-body-l leading-relaxed text-schubart-2 mb-12">
                    {message}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link
                        href="/"
                        className="inline-flex font-epicene-text text-[0.72rem] uppercase tracking-[0.22em] text-schubart-1 transition-opacity hover:opacity-65 border-b border-schubart-1 pb-1"
                    >
                        {t.backHome}
                    </Link>
                    <WhatsAppLink
                        message="Olá! Acabei de fazer uma compra no site da William Mackenzie Joalheria."
                        label="thanks_page"
                        className="inline-flex font-epicene-text text-[0.72rem] uppercase tracking-[0.22em] text-schubart-2 transition-opacity hover:opacity-65 border-b border-schubart-2 pb-1"
                    >
                        {t.whatsappCta}
                    </WhatsAppLink>
                </div>
            </div>
        </main>
    );
}
