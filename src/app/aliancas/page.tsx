import type { Metadata } from "next";
import { getGemasByCategory } from "@/lib/gemas-store";
import { getRates } from "@/lib/currency";
import AliancasClient from "./AliancasClient";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Alianças de Casamento em Ouro 18k em Caçapava",
  description: "Alianças de casamento artesanais em ouro 18k em Caçapava-SP. Designs personalizados, atendimento com hora marcada e orçamento pelo WhatsApp.",
  keywords: ["alianças", "casamento", "ouro 18k", "alianças personalizadas", "Caçapava", "São José dos Campos"],
  alternates: { canonical: "/aliancas/" },
};

export default async function Aliancas() {
  const gemas = getGemasByCategory('aliancas');
  const rates = await getRates();
  return <AliancasClient gemas={gemas} rates={rates} />;
}
