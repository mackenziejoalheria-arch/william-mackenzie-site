import Hero from "@/components/Hero";
import LocalProofSection from "@/components/LocalProofSection";
import TextBlock from "@/components/TextBlock";
import VideoSection from "@/components/VideoSection";
import ProductList from "@/components/ProductList";
import CatalogShowcase from "@/components/CatalogShowcase";
import SilviaTestimonial from "@/components/SilviaTestimonial";
import { getGemasByCategory } from "@/lib/gemas-store";
import { getRates } from "@/lib/currency";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "William Mackenzie | Joalheria artesanal em Caçapava",
  description: "Alianças, anéis de noivado e joias sob medida em ouro 18k em Caçapava-SP. Atendimento com hora marcada, garantia vitalícia e orçamento pelo WhatsApp.",
  alternates: { canonical: "/" },
};

export default async function Home() {
  const rates = await getRates();

  return (
    <main className="bg-schubart-6 min-h-screen">
      <Hero />
      <LocalProofSection />
      <TextBlock />
      <VideoSection />
      <ProductList />
      <SilviaTestimonial />
      <CatalogShowcase gemas={getGemasByCategory('pedras')} rates={rates} category="pedras" />
      <CatalogShowcase gemas={getGemasByCategory('aliancas')} rates={rates} category="aliancas" />
      <CatalogShowcase gemas={getGemasByCategory('noivado')} rates={rates} category="noivado" />
      <CatalogShowcase gemas={getGemasByCategory('formatura')} rates={rates} category="formatura" />
    </main>
  );
}
