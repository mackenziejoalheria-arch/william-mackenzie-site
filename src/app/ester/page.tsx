import type { Metadata } from "next";
import EsterClient from "./EsterClient";

export const metadata: Metadata = {
  title: "Ester — A Joia da Mulher que Desperta para o Seu Valor",
  description: "A Coleção Ester traz elegância, presença, coragem e um valor oculto. Descubra a joia que desperta o propósito de cada mulher.",
  keywords: ["anel ester", "coleção ester", "anéis de luxo", "william mackenzie", "joia com propósito"],
  alternates: { canonical: "/ester/" },
};

export default function EsterPage() {
  return <EsterClient />;
}
