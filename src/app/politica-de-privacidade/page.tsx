'use client';

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslations } from "@/translations";

export default function PoliticaPrivacidade() {
  const { language } = useLanguage();
  const t = getTranslations(language).privacyPage;
  const common = getTranslations(language).common;

  return (
    <main className="bg-schubart-6 min-h-screen pt-32 pb-20 px-4 md:px-8 text-schubart-1">
      <div className="max-w-3xl mx-auto space-y-12 animate-fade-in">
        <header className="text-center space-y-4">
          <h1 className="font-cardo text-headlines-m tracking-[0.3em] font-light" style={{ fontFamily: 'var(--font-cardo)' }}>
            {t.title}
          </h1>
          <div className="w-20 h-px bg-schubart-2 mx-auto"></div>
        </header>

        <section className="font-epicene-text text-body-m text-schubart-2 leading-relaxed space-y-8">
          <div className="space-y-4">
            <h2 className="font-pp-hatton text-body-l tracking-widest text-schubart-1">{t.section1Title}</h2>
            <p>
              {t.section1Text}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-pp-hatton text-body-l tracking-widest text-schubart-1">{t.section2Title}</h2>
            <p>
              {t.section2Text}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-pp-hatton text-body-l tracking-widest text-schubart-1">{t.section3Title}</h2>
            <p>
              {t.section3Text}
            </p>
          </div>
        </section>

        <footer className="pt-12 flex justify-center border-t border-schubart-2/10">
          <Link 
            href="/" 
            className="px-8 py-4 border border-schubart-2 text-schubart-1 uppercase font-epicene-text tracking-widest hover:bg-schubart-1 hover:text-schubart-6 transition-colors duration-300"
          >
            {common.backToHome}
          </Link>
        </footer>
      </div>
    </main>
  );
}
