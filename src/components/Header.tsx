'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/translations';
import { LANGUAGE_OPTIONS } from '@/lib/languages';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHeroesMenuOpen, setIsHeroesMenuOpen] = useState(false);
    const { language, setLanguage } = useLanguage();
    const t = getTranslations(language).header;

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-[9998] px-2 md:px-4 py-3 xl:py-4 flex justify-between items-center transition-colors duration-500 bg-schubart-6 text-schubart-1">
                <div className="hidden lg:flex gap-0.5 md:gap-1 font-epicene-text flex-wrap max-w-[220px]">
                    {LANGUAGE_OPTIONS.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => setLanguage(lang.code)}
                            className={`px-1 md:px-1.5 py-1 text-[9px] md:text-[10px] xl:text-body-xs-caps transition-all duration-300 ${language === lang.code ? 'text-schubart-1 font-bold' : 'text-schubart-2 opacity-50 hover:opacity-100'
                                }`}
                        >
                            {lang.headerLabel}
                        </button>
                    ))}
                </div>

                <Link
                    href="/"
                    className="absolute left-1/2 -translate-x-1/2 font-cardo text-[10px] xxs:text-[12px] sm:text-[14px] md:text-headlines-s uppercase tracking-[0.2em] md:tracking-[0.3em] font-light whitespace-nowrap px-2"
                    style={{ fontFamily: 'var(--font-cardo)' }}
                >
                    WILLIAM MACKENZIE
                </Link>

                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:opacity-70 transition-opacity flex items-center gap-1 md:gap-2 z-[9999]" aria-label="Open Menu">
                    <span className="hidden md:block font-epicene-text text-body-xs-caps xl:text-body-s-caps uppercase">
                        {isMenuOpen ? t.close : t.menu}
                    </span>
                    <div className="w-8 h-8 md:w-5 md:h-5 xl:w-6 xl:h-6 flex flex-col justify-center items-end gap-1 md:gap-1.5">
                        <span className={`block w-full h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5 md:translate-y-2' : ''}`}></span>
                        <span className={`block w-2/3 h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-full h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5 md:translate-y-2' : ''}`}></span>
                    </div>
                </button>
            </header>

            {/* Mobile/Full Menu Overlay */}
            <div className={`fixed inset-0 z-[9990] bg-schubart-6 flex items-center justify-center transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto mt-0' : 'opacity-0 pointer-events-none -mt-4'}`}>
                <div className="flex flex-col items-center gap-6 md:gap-8 font-pp-hatton text-headlines-s md:text-headlines-m uppercase w-full">
                    <Link href="/" className="p-2 hover:text-schubart-5 transition-colors" onClick={() => setIsMenuOpen(false)}>{t.home}</Link>
                    <Link href="/quem-somos" className="p-2 hover:text-schubart-5 transition-colors" onClick={() => setIsMenuOpen(false)}>{t.about}</Link>
                    <Link href="/aliancas" className="p-2 hover:text-schubart-5 transition-colors" onClick={() => setIsMenuOpen(false)}>{t.wedding}</Link>
                    <Link href="/aneis-de-noivado" className="p-2 hover:text-schubart-5 transition-colors" onClick={() => setIsMenuOpen(false)}>{t.engagement}</Link>
                    <Link href="/aneis-de-formatura" className="p-2 hover:text-schubart-5 transition-colors" onClick={() => setIsMenuOpen(false)}>{t.graduation}</Link>
                    <Link href="/pedras" className="p-2 hover:text-schubart-5 transition-colors" onClick={() => setIsMenuOpen(false)}>{t.pedras}</Link>
                    <div className="flex flex-col items-center gap-2 my-2 w-full">
                        <button
                            className="p-2 hover:text-schubart-5 transition-colors flex items-center gap-2 uppercase font-pp-hatton"
                            onClick={() => setIsHeroesMenuOpen(!isHeroesMenuOpen)}
                        >
                            {t.heroesOfFaith}
                            <span className={`text-[0.5em] transition-transform duration-300 ${isHeroesMenuOpen ? 'rotate-180' : ''}`}>▼</span>
                        </button>

                        <div className={`flex flex-col items-center gap-3 overflow-hidden transition-all duration-500 ease-in-out ${isHeroesMenuOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}>
                            <Link href="/ester" className="p-1 hover:text-schubart-5 transition-colors text-[0.75em]" onClick={() => setIsMenuOpen(false)}>{t.ester}</Link>
                            {/* Rute e Débora: ocultas até as páginas serem publicadas */}
                        </div>
                    </div>
                    <Link href="/reaproveitamento-de-ouro" className="p-2 hover:text-schubart-5 transition-colors" onClick={() => setIsMenuOpen(false)}>{t.reaproveitamento}</Link>

                    {/* Language Selector in Mobile Menu */}
                    <div className="mt-8 md:hidden flex flex-wrap gap-3 font-epicene-text border-t border-schubart-2/20 pt-8 w-full max-w-sm justify-center">
                        {LANGUAGE_OPTIONS.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsMenuOpen(false);
                                }}
                                className={`px-2 py-1 text-body-s-caps transition-all duration-300 ${language === lang.code ? 'text-schubart-1 font-bold border-b border-schubart-1' : 'text-schubart-2 opacity-50 hover:opacity-100'
                                    }`}
                            >
                                {lang.headerLabel}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
