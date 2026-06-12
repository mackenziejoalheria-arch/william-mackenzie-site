import type { Metadata } from "next";
import QuemSomosClient from "./QuemSomosClient";

export const metadata: Metadata = {
  title: "A História de William Mackenzie | Alta Joalheria Artesanal",
  description: "Conheça William Mackenzie, mestre joalheiro dedicado à criação de joias exclusivas em ouro 18k. Tradição, arte e excelência em cada detalhe.",
  keywords: ["William Mackenzie", "joalheiro", "alta joalheria", "joias artesanais", "quem somos", "história joalheria"],
  alternates: { canonical: "/quem-somos/" },
};

export default function QuemSomos() {
  return <QuemSomosClient />;
}
