'use client';

import Image from "next/image";
import TrustSection from "@/components/TrustSection";
import WhatsAppLink from "@/components/WhatsAppLink";
import ProductGrid from "@/components/ProductGrid";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslations } from "@/translations";
import { Gema } from "@/lib/gemas";
import { Rates } from "@/lib/currency";

export default function AneisDeNoivadoClient({
  gemas,
  rates,
}: {
  gemas: Gema[];
  rates: Rates | null;
}) {
  const { language } = useLanguage();
  const t = getTranslations(language).catalogsPage;
  const common = getTranslations(language).common;

  return (
    <main className="bg-schubart-6 min-h-screen pt-24 md:pt-32 pb-20 overflow-hidden text-schubart-1">
      {/* Intro Section */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto mb-16 md:mb-24">
        <div className="flex flex-col items-center text-center space-y-6 animate-fade-in">
          <h1 className="font-cardo text-headlines-m md:text-headlines-l tracking-[0.3em] font-light" style={{ fontFamily: 'var(--font-cardo)' }}>
            {t.noivadoTitle}
          </h1>
          <p className="font-epicene-text text-body-m md:text-body-l max-w-2xl text-schubart-2">
            O símbolo definitivo de um compromisso eterno. Cada anel é meticulosamente desenhado para celebrar a singularidade da sua história de amor.
          </p>
        </div>
      </section>

      {gemas.length > 0 && (
        <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 mb-20 md:mb-32">
          <ProductGrid gemas={gemas} rates={rates} category="noivado" />
        </section>
      )}

       {/* Certified Diamonds & Video Section */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto mb-20 md:mb-32 mt-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="w-full md:w-1/2 space-y-8 flex flex-col justify-center">
            <h2 className="font-pp-hatton text-headlines-s md:text-headlines-m tracking-widest text-schubart-1">
              Diamantes Certificados
            </h2>
            <div className="space-y-6 font-epicene-text text-body-s md:text-body-m text-schubart-2 leading-relaxed">
              <p>
                A excelência de um anel de noivado começa com a seleção da pedra perfeita. Trabalhamos apenas com diamantes de altíssimo padrão, cuidadosamente avaliados em critérios rigorosos de pureza, cor e lapidação.
              </p>
              <p>
                Cada gema principal é acompanhada por certificações internacionais de laboratórios renomados como o <strong className="text-schubart-1">IGI (International Gemological Institute)</strong>. Nossos diamantes, cultivados ou naturais, garantem brilho eterno, origem ética e máxima precisão técnica.
              </p>
              <p>
                Assista ao vídeo para conferir de perto o fogo e a dispersão de luz de um diamante perfeitamente lapidado, lado a lado com seu certificado gemológico original.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center gap-4 sm:gap-8 relative min-h-[500px]">
            <div className="absolute opacity-20 sm:opacity-100 sm:relative w-[200px] lg:w-[250px] aspect-[4/5] overflow-hidden shadow-2xl rounded-sm -rotate-6 hover:rotate-0 transition-all duration-700 border border-schubart-2/20 z-0 sm:z-10 group cursor-default left-0 sm:left-auto">
              <Image
                src="/images/noivado-cerificado.jpg.jpg"
                alt="Certificado IGI Internacional de Diamantes"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 200px, 250px"
              />
            </div>
            <div className="relative w-full max-w-[300px] aspect-[9/16] overflow-hidden rounded-sm shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-schubart-2/50 z-20 hover:scale-[1.02] transition-all duration-500 bg-schubart-6">
              <video 
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/video/certificado-tiktok.mp4.mp4" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
          </div>
        </div>
      </section>

       {/* Technical Design Section */}
       <section className="bg-schubart-5 py-20 px-4 md:px-8 mb-20 md:mb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-24 items-center">
             <div className="w-full md:w-1/2 space-y-8">
              <h2 className="font-pp-hatton text-headlines-s md:text-headlines-m tracking-widest text-schubart-6">
                Design Exclusivo e Precisão
              </h2>
              <div className="space-y-6 font-epicene-text text-body-s md:text-body-m text-schubart-6/80 leading-relaxed">
                <p>
                  A joalheria é uma união entre arte e engenharia. Para materializar o anel dos seus sonhos, começamos com esboços técnicos detalhados que avaliam proporção, conforto e segurança.
                </p>
                <p>
                 Cada curvatura, cravação de diamantes no aro e espessura do metal são calculadas à mão. O resultado é uma peça de alta joalheria customizada, estruturalmente perfeita para ser usada todos os dias e durar por gerações.
                </p>
              </div>
            </div>
             <div className="w-full md:w-1/2 relative aspect-square overflow-hidden group">
              <Image
                src="/images/noivado-esboco.jpg.jpg"
                alt="Esboço técnico e proporções do anel de noivado"
                fill
                className="object-contain bg-[#FAF5EE] transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Flipbook Catalog Section */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 mb-20 md:mb-32">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-pp-hatton text-headlines-s md:text-headlines-m tracking-widest text-schubart-2">
            Catálogo de Inspirações
          </h2>
          <p className="font-epicene-text text-body-m text-schubart-2/80 max-w-2xl mx-auto">
            Dê uma olhada em alguns de nossos designs mais queridos.
          </p>
        </div>
        <div className="w-full h-[500px] sm:h-[600px] md:h-[800px] bg-[#fbfbf9] shadow-2xl border border-schubart-6/10 relative z-10 overflow-hidden rounded-sm">
          <iframe 
            allowFullScreen={true}
            allow="clipboard-write"
            scrolling="no"
            className="w-full h-full" 
            src="https://heyzine.com/flip-book/5dfc57ba9e.html" 
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </section>

      {/* Trust and Credibility Section */}
      <TrustSection />

      {/* Call to Action */}
      <section className="px-4 flex flex-col items-center text-center pb-20 pt-20 border-t border-schubart-2/20 mt-20">
        <h3 className="font-cardo text-headlines-s uppercase mb-8" style={{ fontFamily: 'var(--font-cardo)' }}>
          {common.talkToUs}
        </h3>
        <WhatsAppLink
          message="Olá! Gostaria de falar sobre um anel de noivado em ouro 18k com diamante certificado."
          label="noivado_final_cta"
          className="px-8 py-4 border border-schubart-2 text-schubart-1 uppercase font-epicene-text tracking-widest hover:bg-schubart-1 hover:text-schubart-6 transition-colors duration-300"
        >
          {common.contactUs}
        </WhatsAppLink>
      </section>
    </main>
  );
}
