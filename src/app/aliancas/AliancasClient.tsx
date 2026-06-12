'use client';

import TrustSection from "@/components/TrustSection";
import WhatsAppLink from "@/components/WhatsAppLink";
import ProductGrid from "@/components/ProductGrid";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslations } from "@/translations";
import { Gema } from "@/lib/gemas";
import { Rates } from "@/lib/currency";

export default function AliancasClient({
  gemas,
  rates,
}: {
  gemas: Gema[];
  rates: Rates | null;
}) {
  const { language } = useLanguage();
  const common = getTranslations(language).common;
  const t = getTranslations(language).catalogsPage;
  const a = getTranslations(language).aliancasPage ?? getTranslations('en-us').aliancasPage;

  return (
    <main className="bg-schubart-6 min-h-screen pt-24 md:pt-32 pb-20 overflow-hidden text-schubart-1">
      {/* Intro Section */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto mb-12 md:mb-20">
        <div className="flex flex-col items-center text-center space-y-6 animate-fade-in">
          <h1 className="font-cardo text-headlines-m md:text-headlines-l tracking-[0.3em] font-light" style={{ fontFamily: 'var(--font-cardo)' }}>
            {a.h1}
          </h1>
          <p className="font-epicene-text text-body-m md:text-body-l max-w-2xl text-schubart-2">
            {a.intro}
          </p>
          <WhatsAppLink
            message={a.whatsappMessageTop}
            label="aliancas_top_cta"
            className="inline-flex items-center justify-center px-8 py-4 bg-schubart-1 text-schubart-6 uppercase font-epicene-text tracking-[0.16em] hover:bg-schubart-2 transition-colors duration-300"
          >
            {a.whatsappCta}
          </WhatsAppLink>
        </div>
      </section>

      {gemas.length > 0 && (
        <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 mb-20 md:mb-32">
          <ProductGrid gemas={gemas} rates={rates} category="aliancas" />
        </section>
      )}

      {/* Flipbook Catalogs Section */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 mb-20 md:mb-32 space-y-20">
        
        {/* Catalog 1: Alianças */}
        <div>
          <h2 className="font-pp-hatton text-headlines-s text-center tracking-widest text-schubart-2 mb-8">
            {t.aliancasTitle}
          </h2>
          <div className="w-full h-[500px] sm:h-[600px] md:h-[800px] bg-[#fbfbf9] shadow-2xl border border-schubart-6/10 relative z-10 overflow-hidden rounded-sm">
            <iframe 
              allowFullScreen={true}
              allow="clipboard-write"
              scrolling="no"
              className="w-full h-full" 
              src="https://heyzine.com/flip-book/57d6a59cc8.html" 
              style={{ border: 'none' }}
            ></iframe>
          </div>
        </div>

        {/* Catalog 2: Bodas */}
        <div>
          <h2 className="font-pp-hatton text-headlines-s text-center tracking-widest text-schubart-2 mb-8">
            {t.bodasTitle}
          </h2>
          <div className="w-full h-[500px] sm:h-[600px] md:h-[800px] bg-[#fbfbf9] shadow-2xl border border-schubart-6/10 relative z-10 overflow-hidden rounded-sm">
            <iframe 
              allowFullScreen={true}
              allow="clipboard-write"
              scrolling="no"
              className="w-full h-full" 
              src="https://heyzine.com/flip-book/2b8280c4cb.html" 
              style={{ border: 'none' }}
            ></iframe>
          </div>
        </div>

      </section>

      {/* Trust and Credibility Section */}
      <TrustSection />

      {/* Custom Section - Tailor-made */}
      <section className="bg-schubart-5 py-20 px-4 md:px-8 my-20 md:my-32">
        <div className="max-w-[1400px] mx-auto text-center space-y-8">
          <h2 className="font-pp-hatton text-headlines-s md:text-headlines-m tracking-widest text-schubart-6">
            {common.customProduction}
          </h2>
          <div className="font-epicene-text text-body-m text-schubart-6/80 max-w-3xl mx-auto leading-relaxed space-y-4">
            <p>
              {common.customProductionDesc}
            </p>
          </div>
          <div className="pt-8 block">
            <WhatsAppLink
              message={a.whatsappMessageCustom}
              label="aliancas_custom_section"
              className="px-8 py-4 border border-schubart-6/30 text-schubart-6 uppercase font-epicene-text tracking-widest hover:bg-schubart-6 hover:text-schubart-1 transition-colors duration-300"
            >
              {common.scheduleConsultation}
            </WhatsAppLink>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 flex flex-col items-center text-center pb-20">
        <h3 className="font-cardo text-headlines-s uppercase mb-8" style={{ fontFamily: 'var(--font-cardo)' }}>
          {common.talkToUs}
        </h3>
        <WhatsAppLink
          message={a.whatsappMessageFinal}
          label="aliancas_final_cta"
          className="px-8 py-4 border border-schubart-2 text-schubart-1 uppercase font-epicene-text tracking-widest hover:bg-schubart-1 hover:text-schubart-6 transition-colors duration-300"
        >
          {common.contactUs}
        </WhatsAppLink>
      </section>
    </main>
  );
}
