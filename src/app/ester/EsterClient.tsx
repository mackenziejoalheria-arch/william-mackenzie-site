'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/translations';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function EsterClient() {
    const { language } = useLanguage();
    const tr = getTranslations(language);
    const t = tr.esterPage ?? getTranslations('en-us').esterPage;

    return (
        <main className="bg-schubart-6 min-h-screen text-schubart-1 selection:bg-schubart-1 selection:text-schubart-6 fade-in">
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <div className="absolute inset-0 bg-schubart-2/20"></div>
                    <Image
                        src="/images/banner.png"
                        alt={t.heroAlt}
                        fill
                        className="object-cover object-center opacity-40"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-schubart-6 via-transparent to-schubart-6/30"></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl pt-20 animate-fade-in-up">
                    <p className="font-epicene-text text-body-s-caps md:text-headlines-xs uppercase tracking-widest text-schubart-2 mb-4">
                        {t.collection}
                    </p>
                    <h1 className="font-cardo font-light text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[1.1] uppercase tracking-wide text-schubart-1">
                        {t.heroLine1}
                        <br />
                        {t.heroLine2}
                    </h1>
                </div>
            </section>

            <section className="py-24 md:py-32 px-4 md:px-12 xl:px-24 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
                    <div className="lg:w-1/2">
                        <div className="space-y-6 font-epicene-text text-body-m md:text-body-l leading-relaxed text-schubart-2">
                            <p>{t.whyP1}</p>
                            <p>{t.whyP2}</p>
                            <p>{t.whyP3}</p>
                            <ul className="list-disc pl-5 space-y-2 mt-4 text-schubart-1">
                                <li>{t.whyLi1}</li>
                                <li>{t.whyLi2}</li>
                                <li>{t.whyLi3}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative aspect-[16/10] w-full xl:max-w-2xl mx-auto">
                        <div className="relative w-full h-full rounded-sm shadow-xl overflow-hidden bg-schubart-2/10">
                            <Image
                                src="/images/ester3.png"
                                alt={t.stoneAlt}
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-schubart-5/10 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
                    <h3 className="font-pp-hatton text-body-s-caps tracking-widest uppercase text-schubart-2 mb-6">
                        {t.storyTitle}
                    </h3>
                    <p className="font-epicene-text text-body-l md:text-headlines-s leading-relaxed text-schubart-1 font-light italic mb-12">
                        &ldquo;{t.storyQuote}&rdquo;
                    </p>
                </div>
            </section>

            <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row-reverse gap-16 md:gap-24 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="font-cardo font-light text-headlines-s md:text-headlines-m uppercase mb-4">{t.stoneTitle}</h2>
                        <h3 className="font-epicene-text text-body-s-caps text-schubart-2 mb-8 uppercase tracking-widest">
                            {t.stoneSubtitle}
                        </h3>
                        <div className="space-y-6 font-epicene-text text-body-m md:text-body-l leading-relaxed text-schubart-2">
                            <p>{t.stoneP1}</p>
                            <p>{t.stoneP2}</p>
                            <p className="font-cardo text-schubart-1 text-headlines-xs md:text-headlines-s mt-8 leading-snug">
                                {t.stoneHighlight}
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative aspect-[4/5] w-full max-w-md mx-auto">
                        <div className="relative w-full h-full rounded-sm shadow-xl overflow-hidden bg-schubart-2/10">
                            <Image
                                src="/images/ester1.png"
                                alt={t.stoneAlt}
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4 w-full">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-cardo text-headlines-s md:text-headlines-m uppercase">{t.jewelTitle}</h2>
                        <p className="font-epicene-text text-body-l text-schubart-2 mt-4 max-w-2xl mx-auto">{t.jewelDesc}</p>
                    </div>

                    <div className="relative w-full flex justify-center bg-transparent overflow-hidden">
                        <video
                            src="/video/Ester.mov"
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            playsInline={true}
                            className="max-h-[80vh] max-w-full rounded-sm shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto border-t border-schubart-2/20">
                <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                        <div className="col-span-2 relative aspect-[4/3] bg-schubart-8 rounded-sm shadow-xl overflow-hidden">
                            <Image
                                src="/images/ester2.png"
                                alt={t.productAlt}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative aspect-square bg-schubart-8 rounded-sm overflow-hidden">
                            <Image
                                src="/images/ester1.png"
                                alt={t.detailAlt1}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative aspect-square bg-schubart-8 rounded-sm overflow-hidden">
                            <Image
                                src="/images/ester.png"
                                alt={t.detailAlt2}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left">
                        <h2 className="font-cardo font-light text-headlines-s md:text-headlines-m uppercase mb-4">{t.productTitle}</h2>
                        <h3 className="font-epicene-text text-body-m md:text-body-l text-schubart-2 mb-8 uppercase tracking-widest">
                            {t.productSubtitle}
                        </h3>

                        <p className="font-epicene-text text-body-m text-schubart-2 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                            {t.productDesc}
                        </p>

                        <div className="flex flex-col items-center md:items-start mb-10 border-b border-schubart-1/20 pb-6 w-full md:w-auto">
                            <span className="text-schubart-1 font-cardo text-headlines-m">
                                R$ 489,00
                            </span>
                            <span className="font-epicene-text text-body-m text-schubart-2 mt-1">
                                {t.installments}
                            </span>
                        </div>

                        <Link
                            href="https://loja.infinitepay.io/william-mackenzie/muq1276-anel-ester"
                            target="_blank"
                            className="inline-block px-12 py-5 border border-schubart-1 text-schubart-6 bg-schubart-1 font-pp-hatton uppercase tracking-widest text-body-s-caps hover:bg-transparent hover:text-schubart-1 transition-all duration-300 w-full md:w-auto text-center"
                        >
                            {t.cta}
                        </Link>

                        <div className="mt-8 flex flex-col gap-2 items-center md:items-start w-full opacity-80">
                            <span className="font-epicene-text text-[13px] tracking-widest uppercase text-schubart-1">{t.freeShipping}</span>
                            <span className="font-epicene-text text-body-xs-caps tracking-widest text-schubart-2">{t.securePayment}</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
