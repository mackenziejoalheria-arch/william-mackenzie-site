'use client';

import { useEffect, useState } from 'react';
import { useLanguage, Language } from '@/context/LanguageContext';
import { LANGUAGE_OPTIONS } from '@/lib/languages';
import { getTranslations } from '@/translations';

function FlagBR() {
    return (
        <svg viewBox="0 0 60 42" className="w-full h-full" aria-hidden="true">
            <rect width="60" height="42" fill="#009C3B" />
            <path d="M30 5 L55 21 L30 37 L5 21 Z" fill="#FFDF00" />
            <circle cx="30" cy="21" r="9" fill="#002776" />
            <path d="M22 19.5 q8 -3 16 3" stroke="#fff" strokeWidth="1.6" fill="none" />
        </svg>
    );
}

function FlagUK() {
    return (
        <svg viewBox="0 0 60 42" className="w-full h-full" aria-hidden="true">
            <rect width="60" height="42" fill="#012169" />
            <path d="M0,0 L60,42 M60,0 L0,42" stroke="#fff" strokeWidth="8" />
            <path d="M0,0 L60,42 M60,0 L0,42" stroke="#C8102E" strokeWidth="4" />
            <path d="M30,0 V42 M0,21 H60" stroke="#fff" strokeWidth="13" />
            <path d="M30,0 V42 M0,21 H60" stroke="#C8102E" strokeWidth="7" />
        </svg>
    );
}

function FlagUS() {
    return (
        <svg viewBox="0 0 60 42" className="w-full h-full" aria-hidden="true">
            <rect width="60" height="42" fill="#B22234" />
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <rect key={i} y={i * 6} width="60" height="3" fill="#fff" />
            ))}
            <rect width="24" height="21" fill="#3C3B6E" />
            {[0, 1, 2, 3, 4].map((row) =>
                [0, 1, 2, 3].map((col) => (
                    <circle
                        key={`${row}-${col}`}
                        cx={3 + col * 6 + (row % 2) * 3}
                        cy={2 + row * 4}
                        r="1"
                        fill="#fff"
                    />
                )),
            )}
        </svg>
    );
}

function FlagES() {
    return (
        <svg viewBox="0 0 60 42" className="w-full h-full" aria-hidden="true">
            <rect width="60" height="42" fill="#AA151B" />
            <rect y="10.5" width="60" height="21" fill="#F1BF00" />
            <rect x="14" y="17" width="6" height="8" fill="#AA151B" rx="1" />
        </svg>
    );
}

function FlagDE() {
    return (
        <svg viewBox="0 0 60 42" className="w-full h-full" aria-hidden="true">
            <rect width="60" height="14" fill="#000" />
            <rect y="14" width="60" height="14" fill="#DD0000" />
            <rect y="28" width="60" height="14" fill="#FFCE00" />
        </svg>
    );
}

function FlagFR() {
    return (
        <svg viewBox="0 0 60 42" className="w-full h-full" aria-hidden="true">
            <rect width="20" height="42" fill="#002395" />
            <rect x="20" width="20" height="42" fill="#fff" />
            <rect x="40" width="20" height="42" fill="#ED2939" />
        </svg>
    );
}

function FlagAE() {
    return (
        <svg viewBox="0 0 60 42" className="w-full h-full" aria-hidden="true">
            <rect width="15" height="42" fill="#FF0000" />
            <rect x="15" width="45" height="14" fill="#00732F" />
            <rect x="15" y="14" width="45" height="14" fill="#FFFFFF" />
            <rect x="15" y="28" width="45" height="14" fill="#000000" />
        </svg>
    );
}

const FLAGS: Record<Language, () => React.ReactNode> = {
    pt: FlagBR,
    'en-gb': FlagUK,
    'en-us': FlagUS,
    es: FlagES,
    de: FlagDE,
    fr: FlagFR,
    ar: FlagAE,
};

export default function LanguageWelcome() {
    const { setLanguage } = useLanguage();
    const [show, setShow] = useState(false);
    const welcome = getTranslations('pt').welcome;

    useEffect(() => {
        if (!sessionStorage.getItem('languageWelcomeSeen')) {
            setShow(true);
        }
    }, []);

    useEffect(() => {
        if (!show) return;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, [show]);

    if (!show) return null;

    function choose(lang: Language) {
        setLanguage(lang);
        sessionStorage.setItem('languageWelcomeSeen', 'true');
        setShow(false);
    }

    return (
        <div className="fixed inset-0 z-[10001] bg-schubart-6 flex items-center justify-center px-5 fade-in overflow-y-auto py-10">
            <div className="w-full max-w-3xl text-center">
                <p
                    className="font-cardo text-[14px] md:text-headlines-xs uppercase tracking-[0.3em] font-light text-schubart-1 mb-3"
                    style={{ fontFamily: 'var(--font-cardo)' }}
                >
                    WILLIAM MACKENZIE
                </p>
                <div className="w-12 h-px bg-schubart-3 mx-auto mb-8" />

                <h1 className="font-pp-hatton text-[1.4rem] md:text-[1.9rem] text-schubart-1 leading-snug mb-2">
                    {welcome.title}
                </h1>
                <p className="font-epicene-text text-[0.85rem] md:text-body-m text-schubart-2 mb-10 md:mb-12">
                    {welcome.subtitle}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                    {LANGUAGE_OPTIONS.map(({ code, label }) => {
                        const Flag = FLAGS[code];
                        return (
                            <button
                                key={code}
                                onClick={() => choose(code)}
                                className="group flex flex-col items-center gap-4 bg-white px-4 py-7 ring-1 ring-schubart-3/60 shadow-[0_10px_40px_rgba(26,26,26,0.05)] hover:ring-schubart-1 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                            >
                                <span className="block w-14 h-10 md:w-16 md:h-11 overflow-hidden rounded-sm shadow-md ring-1 ring-schubart-1/10">
                                    <Flag />
                                </span>
                                <span className="font-epicene-text text-[0.72rem] md:text-[0.78rem] uppercase tracking-[0.16em] text-schubart-1 group-hover:opacity-70 transition-opacity">
                                    {label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
