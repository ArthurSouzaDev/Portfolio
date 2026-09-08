import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import OrcamentoTool from "@/components/contrate/OrcamentoTool";

export const metadata: Metadata = {
  title: "Simular orçamento — Arthur Souza",
  description:
    "Simule o preço da sua landing page e envie o briefing pelo WhatsApp. Estimativa na hora, sem compromisso.",
};

export default function OrcamentoPage() {
  return (
    <section className="px-6 py-32 sm:px-12">
      <Reveal className="mx-auto mb-6 max-w-4xl">
        <Link
          href="/contrate"
          className="text-[0.7rem] tracking-[0.1em] text-azul uppercase hover:text-terracota"
        >
          ← Voltar
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        <SectionHeader title="Orçamento" num="→" />
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mb-16 max-w-4xl">
        <p className="max-w-xl text-[0.85rem] leading-relaxed text-texto/70">
          Em dois passos: simule uma faixa de preço e me conte sobre o projeto. No final, tudo é
          enviado pelo WhatsApp em uma mensagem que você revisa antes.
        </p>
      </Reveal>

      <OrcamentoTool />
    </section>
  );
}
