import type { Metadata } from "next";
import { getGemasByCategory } from "@/lib/gemas-store";
import { getRates } from "@/lib/currency";
import AneisDeNoivadoClient from "./AneisDeNoivadoClient";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Anéis de Noivado em Ouro 18k em Caçapava",
  description: "Anéis de noivado sob medida em ouro 18k em Caçapava-SP. Diamantes certificados IGI, design exclusivo e orçamento pelo WhatsApp.",
  keywords: ["anéis de noivado", "diamantes certificados", "IGI diamonds", "anéis de diamante", "Caçapava", "São José dos Campos"],
  alternates: { canonical: "/aneis-de-noivado/" },
};

export default async function AneisDeNoivado() {
  const gemas = getGemasByCategory('noivado');
  const rates = await getRates();
  return <AneisDeNoivadoClient gemas={gemas} rates={rates} />;
}
