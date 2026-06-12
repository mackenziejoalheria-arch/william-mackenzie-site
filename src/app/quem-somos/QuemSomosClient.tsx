'use client';

import Image from "next/image";
import WhatsAppLink from "@/components/WhatsAppLink";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslations } from "@/translations";

export default function QuemSomosClient() {
  const { language } = useLanguage();
  const t = getTranslations(language).aboutPage;

  return (
    <main className="bg-schubart-6 min-h-screen pt-24 md:pt-32 pb-20 overflow-hidden text-schubart-1">
      {/* Hero Section */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto mb-20 md:mb-32">
        <div className="flex flex-col items-center text-center space-y-6 animate-fade-in">
          <h1 className="font-cardo text-headlines-m md:text-headlines-l tracking-[0.3em] font-light" style={{ fontFamily: 'var(--font-cardo)' }}>
            {t.heroTitle}
          </h1>
          <p className="font-epicene-text text-body-m md:text-body-l max-w-2xl text-schubart-2">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Minha Historia Section */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto mb-20 md:mb-32">
        <div className="flex flex-col md:row gap-12 md:gap-24 items-center">
          <div className="w-full md:w-1/2 relative aspect-[3/4] md:aspect-[4/5] overflow-hidden group shadow-2xl rounded-sm">
            <Image
              src="/images/william.png"
              alt="William Mackenzie"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105 animate-float"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-8 flex flex-col justify-center">
            <h2 className="font-pp-hatton text-headlines-s md:text-headlines-m tracking-widest text-schubart-1">
              {t.storyTitle}
            </h2>
            <div className="space-y-4 font-epicene-text text-body-s md:text-body-m text-schubart-2 leading-relaxed">
              <p>{t.storyP1}</p>
              <p>{t.storyP2}</p>
              <p>{t.storyP3}</p>
              <p>{t.storyP4}</p>
              <p>{t.storyP5}</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Workshop Section */}
      <section className="bg-schubart-5 py-20 px-4 md:px-8 mb-20 md:mb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-24 items-center">
            <div className="w-full md:w-1/2 relative aspect-video md:aspect-square overflow-hidden group">
              <Image
                src="/images/oficina.png"
                alt="Workshop"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="font-pp-hatton text-headlines-s md:text-headlines-m tracking-widest text-schubart-6">
                {t.workshopTitle}
              </h2>
              <div className="space-y-6 font-epicene-text text-body-s md:text-body-m text-schubart-6/80 leading-relaxed">
                <p>{t.workshopP1}</p>
                <p>{t.workshopP2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Na Midia Section */}
      <section id="midia" className="px-4 md:px-8 max-w-[1400px] mx-auto mb-20 md:mb-32 scroll-mt-24 md:scroll-mt-32">
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="space-y-4 max-w-3xl">
            <h2 className="font-pp-hatton text-headlines-s md:text-headlines-m tracking-widest text-schubart-1">
              {t.mediaTitle}
            </h2>
            <p className="font-epicene-text text-body-m text-schubart-2 leading-relaxed">
              {t.mediaDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="relative aspect-square overflow-hidden group shadow-xl">
              <Image
                src="/images/media-3.jpg"
                alt="Media"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden group shadow-xl">
              <Image
                src="/images/media-1.jpg"
                alt="Media"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden group shadow-xl">
              <Image
                src="/images/media-2.jpg"
                alt="Media"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="bg-schubart-5 py-20 px-4 md:px-8 mb-20 md:mb-32 relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-pp-hatton text-headlines-s md:text-headlines-m tracking-widest text-schubart-6">
              {t.testimonialsTitle}
            </h2>
            <p className="font-epicene-text text-body-m text-schubart-6/80 max-w-2xl mx-auto">
              {t.testimonialsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Depoimento Iracema */}
            <div className="bg-schubart-6 p-8 shadow-2xl flex flex-col h-full group border border-schubart-6/10">
              <div className="flex-grow space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-schubart-2">
                    <Image
                      src="/images/depoimento-iracema.jpg.jpg"
                      alt="Iracema Rio Grande"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-pp-hatton text-body-l uppercase text-schubart-1">Iracema Rio Grande</h3>
                    <p className="font-epicene-text text-body-s text-schubart-2">Renovação de Votos</p>
                  </div>
                </div>
                
                <div className="bg-white/5 p-4 border border-schubart-2/20 mb-6 flex flex-col items-center rounded-sm">
                  <p className="font-epicene-text text-sm text-schubart-2 uppercase tracking-widest mb-3 text-center">
                    {t.testimonialsInfo}
                  </p>
                  <div className="w-full bg-white/10 rounded-full overflow-hidden shadow-inner p-1">
                    <audio controls className="w-full h-10 outline-none" style={{ filter: 'invert(1) grayscale(1) opacity(0.8)' }}>
                      <source src="/audio/testimonial-iracema-new.oga" type="audio/ogg" />
                      {t.testimonialsAudioError}
                    </audio>
                  </div>
                </div>

                <div className="relative aspect-[4/3] w-full overflow-hidden group-hover:shadow-lg transition-all duration-500 rounded-sm">
                   <Image
                      src="/images/aliancas-iracema.jpg.jpg"
                      alt="Alianças"
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                </div>
              </div>
            </div>

            {/* Depoimento Isabela */}
            <div className="bg-schubart-6 p-8 shadow-2xl flex flex-col h-full group border border-schubart-6/10">
              <div className="flex-grow flex flex-col space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-schubart-2 flex-shrink-0">
                    <div className="w-full h-full bg-schubart-5 flex items-center justify-center text-schubart-6 font-pp-hatton text-2xl">
                      I
                    </div>
                  </div>
                  <div>
                    <h3 className="font-pp-hatton text-body-l uppercase text-schubart-1">Isabela Marinho</h3>
                    <p className="font-epicene-text text-body-s text-schubart-2">Noivado</p>
                  </div>
                </div>
                
                <div className="flex-grow flex flex-col justify-center">
                  <div className="font-epicene-text text-body-m md:text-body-l text-schubart-2 italic leading-relaxed relative bg-white/5 p-6 border border-schubart-2/20 h-full flex flex-col justify-center rounded-sm">
                    <span className="text-6xl absolute -top-4 -left-2 text-schubart-2/20 font-serif leading-none">"</span>
                    <p className="mb-4 relative z-10">
                      Boa tarde William! Tudo bem? Os dias foram tão corridos que não consegui te mandar mensagem antes. Mas chegou tudo certinho e ficamos admirados com todo o seu cuidado. Ficaram lindas e os tamanhos ficaram perfeitos!
                    </p>
                    <p className="relative z-10">
                      Muito obrigada pelo seu trabalho! Deus o abençoe e que você cresça e prospere cada vez mais!
                    </p>
                  </div>
                </div>

                <div className="relative aspect-[4/3] w-full overflow-hidden group-hover:shadow-lg transition-all duration-500 mt-6 rounded-sm">
                   <Image
                      src="/images/depoimento-isabela.jpg.jpg"
                      alt="Anel de Noivado"
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                </div>
              </div>
            </div>

            {/* Depoimento Eric */}
            <div className="bg-schubart-6 p-8 shadow-2xl flex flex-col h-full group border border-schubart-6/10">
              <div className="flex-grow flex flex-col space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-schubart-2 flex-shrink-0">
                     <div className="w-full h-full bg-schubart-5 flex items-center justify-center text-schubart-6 font-pp-hatton text-2xl">
                      E
                    </div>
                  </div>
                  <div>
                    <h3 className="font-pp-hatton text-body-l uppercase text-schubart-1">Eric Alves</h3>
                    <p className="font-epicene-text text-body-s text-schubart-2">Anel Exclusivo</p>
                  </div>
                </div>

                <div className="flex-grow flex flex-col justify-center">
                   <div className="font-epicene-text text-body-m md:text-body-l text-schubart-2 italic leading-relaxed relative bg-white/5 p-6 border border-schubart-2/20 h-full flex flex-col justify-center rounded-sm text-center">
                    <span className="text-6xl absolute -top-4 -left-2 text-schubart-2/20 font-serif leading-none">"</span>
                    <p className="relative z-10 text-xl font-medium tracking-wide">
                      Um momento inesquecível.
                    </p>
                   </div>
                </div>

                <div className="relative aspect-[4/5] w-full overflow-hidden group-hover:shadow-lg transition-all duration-500 rounded-sm">
                   <Image
                      src="/images/depoimento-eric.jpg"
                      alt="Anel exclusivo"
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                </div>
              </div>
            </div>

            {/* Depoimento Orestes */}
            <div className="bg-schubart-6 p-8 shadow-2xl flex flex-col h-full group border border-schubart-6/10">
              <div className="flex-grow space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-schubart-2 flex-shrink-0">
                     <div className="w-full h-full bg-schubart-5 flex items-center justify-center text-schubart-6 font-pp-hatton text-2xl">
                      O
                    </div>
                  </div>
                  <div>
                    <h3 className="font-pp-hatton text-body-l uppercase text-schubart-1">Orestes Romeiro</h3>
                    <p className="font-epicene-text text-body-s text-schubart-2">Noivado</p>
                  </div>
                </div>
                
                 <div className="flex-grow flex flex-col justify-center mb-6">
                  <div className="font-epicene-text text-body-m md:text-body-l text-schubart-2 italic leading-relaxed relative bg-white/5 p-6 border border-schubart-2/20 h-full flex flex-col justify-center rounded-sm">
                    <span className="text-6xl absolute -top-4 -left-2 text-schubart-2/20 font-serif leading-none">"</span>
                    <p className="mb-4 relative z-10">
                      William, mais uma vez muito obrigado!
                    </p>
                    <p className="mb-4 relative z-10">
                      Desculpa essa confusão da logistica
                    </p>
                    <p className="relative z-10">
                      Ficou otimo!
                    </p>
                  </div>
                </div>

                <div className="relative aspect-[3/4] w-full overflow-hidden group-hover:shadow-lg transition-all duration-500 rounded-sm">
                   <Image
                      src="/images/depoimento-oreste.jpg"
                      alt="Noivado"
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Channel Section */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto mb-20 md:mb-32">
        <div className="flex flex-col items-center text-center space-y-8 mb-16">
          <div className="flex items-center justify-center gap-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-12 h-12 text-[#FF0000]"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <h2 className="font-pp-hatton text-headlines-s md:text-headlines-m tracking-widest text-schubart-1">
              {t.youtubeTitle}
            </h2>
          </div>
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="font-epicene-text text-body-m md:text-body-l text-schubart-2">
              {t.youtubeDesc}
            </p>
            <p className="font-epicene-text text-body-s text-schubart-2/80">
              {t.youtubeSubDesc}
            </p>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="aspect-video w-full rounded-sm overflow-hidden shadow-xl border border-schubart-6/10 bg-schubart-5 relative">
             <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/-a3UrsV4ezM" 
                title="Produção de Joias - William Mackenzie" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
          </div>
          <div className="aspect-video w-full rounded-sm overflow-hidden shadow-xl border border-schubart-6/10 bg-schubart-5 relative hidden md:block">
             <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/n-m7OHiP8Ww" 
                title="Bastidores Alta Joalheria - William Mackenzie" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
          </div>
          <div className="aspect-video w-full rounded-sm overflow-hidden shadow-xl border border-schubart-6/10 bg-schubart-5 relative hidden lg:block">
             <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/vttQyvudaYc" 
                title="Entrevista Especial - William Mackenzie" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <a 
            href="https://www.youtube.com/@williammackenzie.oficial" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-[#FF0000] text-white uppercase font-epicene-text tracking-widest hover:bg-[#CC0000] transition-colors duration-300 rounded-sm"
          >
            {t.youtubeCTA}
          </a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 flex flex-col items-center text-center pb-20">
        <h3 className="font-cardo text-headlines-s uppercase mb-8" style={{ fontFamily: 'var(--font-cardo)' }}>
          {t.ctaTitle}
        </h3>
        <WhatsAppLink
          message="Olá! Conheci a história da William Mackenzie pelo site e gostaria de agendar uma consulta."
          label="quem_somos_final_cta"
          className="px-8 py-4 border border-schubart-2 text-schubart-1 uppercase font-epicene-text tracking-widest hover:bg-schubart-1 hover:text-schubart-6 transition-colors duration-300"
        >
          {t.ctaButton}
        </WhatsAppLink>
      </section>
    </main>
  );
}
