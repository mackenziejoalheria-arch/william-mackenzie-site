'use client';

import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/translations';

export default function TrustSection() {
    const { language } = useLanguage();
    const t = getTranslations(language).trustSection ?? getTranslations('en-us').trustSection;

    return (
        <section className="bg-schubart-6 py-20 px-4 md:px-8 border-t border-schubart-3/30">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center space-y-16">
                <div className="space-y-6 max-w-3xl">
                    <h2 className="font-pp-hatton text-headlines-s md:text-headlines-m uppercase text-schubart-1">
                        {t.title}
                    </h2>
                    <p className="font-epicene-text text-body-m text-schubart-2 leading-relaxed">
                        {t.p1}
                    </p>
                    <p className="font-epicene-text text-body-m text-schubart-2 leading-relaxed">
                        {t.p2}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full pt-8 px-4 md:px-0 opacity-80">
                    <div className="flex justify-center items-center h-20 grayscale hover:grayscale-0 transition-all duration-500">
                         <div className="flex items-center space-x-3">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-schubart-5">
                                <path d="M11 2h2l9 6-9 6-2-2-7 4-2-2 9-12z" />
                                <path d="M12 22l-10-6v-6l10 6 10-6v6z" />
                            </svg>
                            <div className="flex flex-col text-left">
                                <span className="font-pp-hatton text-xl uppercase tracking-widest text-schubart-1 leading-none">Ourominas</span>
                                <span className="font-epicene-text text-[10px] tracking-widest uppercase text-schubart-4">{t.ourominasSub}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center h-20 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex items-center space-x-3">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-schubart-5">
                                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                                <line x1="12" y1="22" x2="12" y2="15.5" />
                                <polyline points="22 8.5 12 15.5 2 8.5" />
                                <polyline points="2 15.5 12 8.5 22 15.5" />
                                <line x1="12" y1="2" x2="12" y2="8.5" />
                            </svg>
                            <div className="flex flex-col text-left">
                                <span className="font-sans font-bold text-xl uppercase tracking-widest text-schubart-1 leading-none pt-1">PARMETAL</span>
                                <span className="font-epicene-text text-[10px] tracking-widest uppercase text-schubart-4">{t.parmetalSub}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center h-20 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex items-center space-x-3">
                            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-schubart-5">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <path d="M9 12l2 2 4-4" />
                            </svg>
                            <div className="flex flex-col text-left">
                                <span className="font-cardo text-lg uppercase tracking-wider text-schubart-1 leading-none">{t.sealTitle}</span>
                                <span className="font-epicene-text text-[10px] tracking-widest uppercase text-schubart-4">{t.sealSub}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
