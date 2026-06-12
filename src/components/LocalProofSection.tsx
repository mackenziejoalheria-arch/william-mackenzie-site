'use client';

import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/translations';

export default function LocalProofSection() {
  const { language } = useLanguage();
  const t = getTranslations(language).localProof;

  return (
    <section className="bg-schubart-6 px-5 py-12 md:px-8 md:py-16" aria-label={t.ariaLabel}>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
        {t.items.map((proof: { value: string; label: string }) => (
          <div key={proof.value} className="border border-schubart-3/70 bg-white px-5 py-7 shadow-[0_18px_50px_rgba(26,26,26,0.04)] transition-transform duration-300 hover:-translate-y-1">
            <p className="font-cardo text-[1.45rem] leading-tight text-schubart-1 md:text-[1.75rem]" style={{ fontFamily: 'var(--font-cardo)' }}>
              {proof.value}
            </p>
            <p className="mx-auto mt-3 max-w-[190px] font-epicene-text text-[0.68rem] uppercase leading-relaxed tracking-[0.18em] text-schubart-2/75">
              {proof.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
