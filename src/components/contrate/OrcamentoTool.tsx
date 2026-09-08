"use client";

import { useState } from "react";
import EstimadorPreco from "@/components/contrate/EstimadorPreco";
import FormOrcamento from "@/components/contrate/FormOrcamento";
import { estimativaInicial, type EstimativaInput } from "@/lib/pricing";

/**
 * Junta o estimador e o briefing. O estado da simulação vive aqui para que a
 * mensagem do WhatsApp saia com o resumo do que o cliente escolheu.
 */
export default function OrcamentoTool() {
  const [estimativa, setEstimativa] = useState<EstimativaInput>(estimativaInicial);

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-20">
      <section aria-labelledby="simulador-titulo">
        <h2
          id="simulador-titulo"
          className="mb-2 font-display text-2xl text-escuro"
        >
          1. Simule o valor
        </h2>
        <p className="mb-9 text-[0.8rem] leading-relaxed text-texto/65">
          Monte o projeto do seu jeito e veja uma faixa de preço na hora.
        </p>
        <EstimadorPreco value={estimativa} onChange={setEstimativa} />
      </section>

      <section aria-labelledby="briefing-titulo">
        <h2 id="briefing-titulo" className="mb-2 font-display text-2xl text-escuro">
          2. Conte sobre o projeto
        </h2>
        <p className="mb-9 text-[0.8rem] leading-relaxed text-texto/65">
          Quanto mais detalhe, mais preciso fica o orçamento. Os campos com{" "}
          <span className="text-terracota">*</span> são obrigatórios.
        </p>
        <FormOrcamento estimativa={estimativa} />
      </section>
    </div>
  );
}
