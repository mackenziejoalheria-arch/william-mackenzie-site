'use client';

import YouTubeSection from '@/components/YouTubeSection';
import WhatsAppLink from '@/components/WhatsAppLink';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/translations';

export default function ReaproveitamentoClient() {
    const { language } = useLanguage();
    const t = getTranslations(language).reaproveitamentoPage;

    const steps = [
        { title: t.step1Title, desc: t.step1Desc },
        { title: t.step2Title, desc: t.step2Desc },
        { title: t.step3Title, desc: t.step3Desc },
    ];

    return (
        <main className="min-h-screen bg-schubart-6">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-4 overflow-hidden">
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h1 className="font-pp-hatton text-headlines-m md:text-headlines-l uppercase mb-6 text-schubart-1 tracking-[0.2em]">
                        {t.title}
                    </h1>
                    <p className="font-epicene-text text-body-m md:text-body-l text-schubart-2 max-w-2xl mx-auto leading-relaxed opacity-80">
                        {t.description}
                    </p>
                </div>

                {/* Background Large Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
                    <span className="font-cardo text-[30vw] uppercase leading-none text-white whitespace-nowrap">
                        TRANSFORMAR
                    </span>
                </div>
            </section>

            {/* YouTube Video Section */}
            <YouTubeSection
                videoId="GfQ4hVV-EBQ"
                title={t.videoTitle}
                description={t.videoDesc}
            />

            {/* Process Steps Section */}
            <section className="py-20 md:py-32 bg-schubart-6 border-t border-schubart-2/10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="font-pp-hatton text-headlines-s md:text-headlines-m uppercase text-center mb-16 tracking-widest text-schubart-1">
                        {t.processTitle}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 rounded-full border border-schubart-2/30 flex items-center justify-center mb-6 font-pp-hatton text-xl text-schubart-2 transition-all duration-500 group-hover:bg-schubart-2 group-hover:text-schubart-6">
                                    0{index + 1}
                                </div>
                                <h3 className="font-pp-hatton text-body-l uppercase mb-4 text-schubart-1 tracking-wider">
                                    {step.title}
                                </h3>
                                <p className="font-epicene-text text-body-m text-schubart-2 leading-relaxed opacity-70">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-32 bg-schubart-1 text-schubart-6">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="font-pp-hatton text-headlines-s md:text-headlines-m uppercase mb-8 tracking-widest">
                        {t.ctaTitle}
                    </h2>
                    <WhatsAppLink
                        message="Olá! Gostaria de um orçamento para reaproveitar ouro em uma nova joia em Caçapava."
                        label="reaproveitamento_final_cta"
                        className="inline-flex items-center justify-center px-8 py-4 border border-schubart-6 text-schubart-6 uppercase font-epicene-text tracking-widest hover:bg-schubart-6 hover:text-schubart-1 transition-colors duration-300"
                    >
                        {t.ctaButton}
                    </WhatsAppLink>
                </div>
            </section>
        </main>
    );
}
