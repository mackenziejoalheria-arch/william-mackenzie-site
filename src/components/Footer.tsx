'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/translations';

export default function Footer() {
    const { language } = useLanguage();
    const t = getTranslations(language).footer;
    const h = getTranslations(language).header;
    const common = getTranslations(language).common;

    return (
        <>
            {/* Mobile Footer */}
            <div data-whatsapp-trigger className="md:hidden bg-schubart-1 text-schubart-5">
                <div className="max-w-[1900px] mx-auto py-16 px-4">
                    <div className="space-y-12">

                        {/* Newsletter */}
                        <div className="space-y-4 max-w-[330px] mx-auto">
                            <h3 className="font-pp-hatton text-schubart-4 text-headlines-s tracking-widest text-center">{t.newsletterTitle}</h3>
                            <div className="font-epicene-text text-body-xs-caps text-center text-schubart-4 transition-colors">
                                <p className="normal-case text-schubart-4">{t.newsletterDesc}</p>
                                <form action="https://formsubmit.co/mackenziejoalheria@gmail.com" method="POST" className="mt-16 space-y-4">
                                    <div className="flex items-center border-b border-schubart-4">
                                        <input type="text" name="nome" placeholder={common.namePlaceholder ?? 'Nome'} className="bg-transparent w-full py-2 focus:outline-none text-body-xs-caps placeholder:text-schubart-4 text-schubart-4" required />
                                    </div>
                                    <div className="flex items-center border-b border-schubart-4">
                                        <input type="email" name="email" placeholder={t.emailPlaceholder} className="bg-transparent w-full py-2 focus:outline-none text-body-xs-caps placeholder:text-schubart-4 text-schubart-4" required />
                                    </div>
                                    <div className="flex items-start gap-3 text-left">
                                        <input type="checkbox" id="consent-mobile" className="shrink-0 appearance-none h-[14px] w-[14px] rounded-full border border-schubart-4 checked:bg-schubart-4 checked:border-schubart-4 focus:outline-none transition-colors cursor-pointer mt-0.5" required />
                                        <label htmlFor="consent-mobile" className="text-[10px] leading-normal text-schubart-4 cursor-pointer">
                                            {t.consent} <Link href="/politica-de-privacidade" className="underline">{t.privacyPolicy}</Link>.
                                        </label>
                                    </div>
                                    <div className="flex justify-center">
                                        <button type="submit" className="px-8 py-2 border border-schubart-4 text-schubart-4 hover:bg-schubart-4 hover:text-schubart-1 transition-colors disabled:opacity-50 text-[12px]">{t.subscribe}</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Kontakt */}
                        <div className="space-y-4 max-w-[330px] mx-auto">
                            <h3 className="font-pp-hatton text-schubart-4 text-headlines-s tracking-widest text-center">{t.contact}</h3>
                            <div className="font-epicene-text text-body-xs-caps text-center text-schubart-4 transition-colors">
                                <a href="https://wa.me/5512996026915" target="_blank" rel="noopener noreferrer" className="block hover:text-schubart-5 transition-colors">+55 12 99602 6915</a>
                                <a href="mailto:williammackenziejoalheria@gmail.com" className="block hover:text-schubart-5 transition-colors">WILLIAMMACKENZIEJOALHERIA@GMAIL.COM</a>
                                <p>—</p>
                                <a href="https://www.instagram.com/williammackenzie_joalheria/" target="_blank" rel="noopener noreferrer" className="block hover:text-schubart-5 transition-colors">INSTAGRAM</a>
                                <a href="https://www.youtube.com/@williammackenzie.oficial" target="_blank" rel="noopener noreferrer" className="block hover:text-schubart-5 transition-colors">YOUTUBE</a>
                            </div>
                        </div>

                        {/* Standorte */}
                        <div className="space-y-4 max-w-[330px] mx-auto">
                            <h3 className="font-pp-hatton text-schubart-4 text-headlines-s tracking-widest text-center">{t.navigation}</h3>
                            <ul className="space-y-3 font-epicene-text text-body-m md:text-body-l text-center">
                                <li>
                                    <Link href="/" className="hover:text-schubart-1 transition-colors">
                                        {h.home}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/quem-somos" className="hover:text-schubart-1 transition-colors">
                                        {h.about}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/aliancas" className="hover:text-schubart-1 transition-colors">
                                        {h.wedding}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/aneis-de-noivado" className="hover:text-schubart-1 transition-colors">
                                        {h.engagement}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/aneis-de-formatura" className="hover:text-schubart-1 transition-colors">
                                        {h.graduation}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/reaproveitamento-de-ouro" className="hover:text-schubart-1 transition-colors">
                                        {h.reaproveitamento}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Links and Copyright */}
                        <div className="flex flex-col gap-4 pt-8 border-t border-schubart-3 text-schubart-4 font-epicene-text text-body-xs-caps text-center">
                            <div className="flex flex-col gap-4">
                                <Link href="/aviso-legal" className="hover:text-schubart-5 transition-colors">{t.legal}</Link>
                                <Link href="/politica-de-privacidade" className="hover:text-schubart-5 transition-colors">{t.privacyPolicy}</Link>
                                <Link href="/cookies" className="hover:text-schubart-5 transition-colors cursor-pointer">{t.cookies}</Link>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-cardo tracking-widest text-[10px]" style={{ fontFamily: 'var(--font-cardo)' }}>© 2026 WILLIAM MACKENZIE</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Desktop Footer */}
            <div data-whatsapp-trigger className="hidden md:block bg-schubart-1 text-schubart-5">
                <div className="relative h-[700px] bg-transparent" style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}>
                    <div className="fixed bottom-0 h-[700px] w-full bg-schubart-1 text-schubart-5 -z-10">
                        <div className="max-w-[1900px] mx-auto py-[4rem] px-4">
                            <div className="grid grid-cols-3 gap-12 mb-24 mx-auto">
                                {/* Newsletter */}
                                <div className="space-y-4 max-w-[330px] mx-auto">
                                    <h3 className="font-pp-hatton text-schubart-4 text-headlines-s uppercase text-center">{t.newsletterTitle}</h3>
                                    <div className="font-epicene-text text-body-xs-caps text-center text-schubart-4 transition-colors">
                                        <p className="normal-case text-schubart-4">{t.newsletterDesc}</p>
                                        <form action="https://formsubmit.co/mackenziejoalheria@gmail.com" method="POST" className="mt-8 space-y-4">
                                            <div className="flex items-center border-b border-schubart-4">
                                                <input type="text" name="nome" placeholder={common.namePlaceholder ?? 'Nome'} className="bg-transparent w-full py-2 focus:outline-none text-body-xs-caps placeholder:text-schubart-4 text-schubart-4" required />
                                            </div>
                                            <div className="flex items-center border-b border-schubart-4">
                                                <input type="email" name="email" placeholder={t.emailPlaceholder} className="bg-transparent w-full py-2 focus:outline-none text-body-xs-caps placeholder:text-schubart-4 text-schubart-4" required />
                                            </div>
                                            <div className="flex items-start gap-3 text-left">
                                                <input type="checkbox" id="consent-desktop" className="shrink-0 appearance-none h-[14px] w-[14px] rounded-full border border-schubart-4 checked:bg-schubart-4 checked:border-schubart-4 focus:outline-none transition-colors cursor-pointer mt-0.5" required />
                                                <label htmlFor="consent-desktop" className="text-[10px] leading-normal text-schubart-4 cursor-pointer">
                                                    {t.consent} <Link href="/politica-de-privacidade" className="underline">{t.privacyPolicy}</Link>.
                                                </label>
                                            </div>
                                            <div className="flex justify-center">
                                                <button type="submit" className="px-8 py-2 border border-schubart-4 text-schubart-4 hover:bg-schubart-4 hover:text-schubart-1 transition-colors disabled:opacity-50 text-[12px]">{t.subscribe}</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                {/* Middle Column */}
                                <div className="space-y-24">
                                    <div className="space-y-4 max-w-[330px] mx-auto">
                                        <h3 className="font-pp-hatton text-schubart-4 text-headlines-s uppercase text-center">{t.contact}</h3>
                                        <div className="font-epicene-text text-body-xs-caps text-center text-schubart-4 transition-colors">
                                            <a href="https://wa.me/5512996026915" target="_blank" rel="noopener noreferrer" className="block hover:text-schubart-5 transition-colors">+55 12 99602 6915</a>
                                            <a href="mailto:williammackenziejoalheria@gmail.com" className="block hover:text-schubart-5 transition-colors">WILLIAMMACKENZIEJOALHERIA@GMAIL.COM</a>
                                            <p>—</p>
                                            <a href="https://www.instagram.com/williammackenzie_joalheria/" target="_blank" rel="noopener noreferrer" className="block hover:text-schubart-5 transition-colors">INSTAGRAM</a>
                                            <a href="https://www.youtube.com/@williammackenzie.oficial" target="_blank" rel="noopener noreferrer" className="block hover:text-schubart-5 transition-colors">YOUTUBE</a>
                                        </div>
                                    </div>
                                    <div className="space-y-4 max-w-[330px] mx-auto">
                                        <h3 className="font-pp-hatton text-schubart-4 text-headlines-s uppercase text-center">{t.locations}</h3>
                                        <div className="font-epicene-text text-body-xs-caps text-center text-schubart-4 transition-colors">
                                            <div className="space-y-1 uppercase tracking-widest">
                                                <div>CAÇAPAVA</div>
                                                <div>SÃO PAULO</div>
                                                <div>SEG–SEX: 09:00 ÀS 19:30</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-24">
                                    <div className="space-y-4 max-w-[330px] mx-auto">
                                        <h3 className="font-pp-hatton text-schubart-4 text-headlines-s tracking-widest text-center uppercase">{t.navigation}</h3>
                                        <div className="font-epicene-text text-body-xs-caps text-center text-schubart-4 transition-colors flex flex-col gap-2">
                                            <Link href="/" className="hover:text-schubart-5 transition-colors">
                                                {h.home}
                                            </Link>
                                            <Link href="/quem-somos" className="hover:text-schubart-5 transition-colors">
                                                {h.about}
                                            </Link>
                                            <Link href="/aliancas" className="hover:text-schubart-5 transition-colors">
                                                {h.wedding}
                                            </Link>
                                            <Link href="/aneis-de-noivado" className="hover:text-schubart-5 transition-colors">
                                                {h.engagement}
                                            </Link>
                                            <Link href="/aneis-de-formatura" className="hover:text-schubart-5 transition-colors">
                                                {h.graduation}
                                            </Link>
                                            <Link href="/reaproveitamento-de-ouro" className="hover:text-schubart-5 transition-colors">
                                                {h.reaproveitamento}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-between items-center pt-[1.25rem] border-t border-schubart-3 text-schubart-4 font-epicene-text text-body-xs-caps">
                                <div className="flex gap-8">
                                    <Link href="/aviso-legal" className="hover:text-schubart-5 transition-colors">{t.legal}</Link>
                                    <Link href="/politica-de-privacidade" className="hover:text-schubart-5 transition-colors">{t.privacyPolicy}</Link>
                                    <Link href="/cookies" className="hover:text-schubart-5 transition-colors cursor-pointer">{t.cookies}</Link>
                                </div>
                                <div className="flex gap-8">
                                    <span className="font-cardo tracking-widest text-[10px]" style={{ fontFamily: 'var(--font-cardo)' }}>© 2026 WILLIAM MACKENZIE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
