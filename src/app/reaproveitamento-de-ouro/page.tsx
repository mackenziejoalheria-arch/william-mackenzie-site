import type { Metadata } from "next";
import ReaproveitamentoClient from "./ReaproveitamentoClient";

export const metadata: Metadata = {
  title: "Reaproveitamento de Ouro 18k em Caçapava",
  description: "Transforme joias antigas em peças exclusivas em ouro 18k em Caçapava-SP. Avaliação técnica, fundição e design artesanal sob medida.",
  keywords: ["reaproveitamento de ouro", "ouro 18k", "transformar joias antigas", "refundir ouro", "joia sob medida", "Caçapava"],
  alternates: { canonical: "/reaproveitamento-de-ouro/" },
};

export default function ReaproveitamentoPage() {
  return <ReaproveitamentoClient />;
}
