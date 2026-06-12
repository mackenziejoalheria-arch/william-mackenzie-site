'use client';

import TrustSection from '@/components/TrustSection';
import WhatsAppLink from '@/components/WhatsAppLink';
import ProductGrid from '@/components/ProductGrid';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/translations';
import { Gema } from '@/lib/gemas';
import { Rates } from '@/lib/currency';

export default function FormaturaClient({
  gemas,
  rates,
}: {
  gemas: Gema[];
  rates: Rates | null;
}) {
  const { language } = useLanguage();
  const t = getTranslations(language).formaturaPage ?? getTranslations('en-us').formaturaPage;

  return (
    <main className="bg-schubart-6 min-h-screen pt-24 md:pt-32 pb-20 overflow-hidden text-schubart-1">
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto mb-16 md:mb-24">
        <div className="flex flex-col items-center text-center space-y-6 animate-fade-in">
          <h1 className="font-cardo text-headlines-m md:text-headlines-l tracking-[0.3em] font-light" style={{ fontFamily: 'var(--font-cardo)' }}>
            {t.h1}
          </h1>
          <p className="font-epicene-text text-body-m md:text-body-l max-w-2xl text-schubart-2">
            {t.intro}
          </p>
        </div>
      </section>

      {gemas.length > 0 && (
        <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 mb-20 md:mb-32">
          <ProductGrid gemas={gemas} rates={rates} category="formatura" />
        </section>
      )}

      <section className="px-4 md:px-8 max-w-[1400px] mx-auto mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="w-full md:w-1/2 space-y-8 flex flex-col justify-center">
            <h2 className="font-pp-hatton text-headlines-s md:text-headlines-m tracking-widest text-schubart-1">
              {t.originTitle}
            </h2>
            <div className="space-y-6 font-epicene-text text-body-s md:text-body-m text-schubart-2 leading-relaxed">
              <p>{t.originP1}</p>
              <p>{t.originP2}</p>
              <p>{t.originP3}</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-[320px] aspect-[9/16] overflow-hidden rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.6)] border border-schubart-2/30 bg-schubart-6 group hover:scale-[1.02] transition-transform duration-500">
              <video className="w-full h-full object-cover" controls playsInline preload="metadata">
                <source src="/video/pedrapreciosa.mp4.mp4" type="video/mp4" />
                {t.videoUnsupported}
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 max-w-[1400px] mx-auto mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-16 items-center">
          <div className="w-full md:w-1/2 space-y-8 flex flex-col justify-center">
            <h2 className="font-pp-hatton text-headlines-s md:text-headlines-m tracking-widest text-schubart-1">
              {t.lawTitle}
            </h2>
            <div className="space-y-6 font-epicene-text text-body-s md:text-body-m text-schubart-2 leading-relaxed">
              <p>{t.lawP1}</p>
              <p>{t.lawP2}</p>
              <p>{t.lawP3}</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-[320px] aspect-[9/16] overflow-hidden rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.6)] border border-schubart-2/30 bg-schubart-6 group hover:scale-[1.02] transition-transform duration-500">
              <video className="w-full h-full object-cover" controls playsInline preload="metadata">
                <source src="/video/anel-de-formatura.mp4.mp4" type="video/mp4" />
                {t.videoUnsupported}
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 mb-20 md:mb-32">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-pp-hatton text-headlines-s md:text-headlines-m tracking-widest text-schubart-2">
            {t.catalogTitle}
          </h2>
          <p className="font-epicene-text text-body-m text-schubart-2/80 max-w-2xl mx-auto">
            {t.catalogDesc}
          </p>
        </div>
        <div className="w-full h-[500px] sm:h-[600px] md:h-[800px] bg-[#fbfbf9] shadow-2xl border border-schubart-6/10 relative z-10 overflow-hidden rounded-sm">
          <iframe
            allowFullScreen
            allow="clipboard-write"
            scrolling="no"
            className="w-full h-full"
            src="https://heyzine.com/flip-book/bc9d146902.html"
            style={{ border: 'none' }}
            title={t.catalogTitle}
          />
        </div>
      </section>

      <TrustSection />

      <section className="px-4 flex flex-col items-center text-center pb-20 pt-20 border-t border-schubart-2/20 mt-20">
        <h3 className="font-cardo text-headlines-s uppercase mb-8" style={{ fontFamily: 'var(--font-cardo)' }}>
          {t.ctaTitle}
        </h3>
        <WhatsAppLink
          message={t.whatsappMessage}
          label="formatura_final_cta"
          className="px-8 py-4 border border-schubart-2 text-schubart-1 uppercase font-epicene-text tracking-widest hover:bg-schubart-1 hover:text-schubart-6 transition-colors duration-300"
        >
          {t.ctaButton}
        </WhatsAppLink>
      </section>
    </main>
  );
}
