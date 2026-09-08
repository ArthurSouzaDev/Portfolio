"use client";

import { useId, useState, type FormEvent } from "react";
import { resumirEstimativa, type EstimativaInput } from "@/lib/pricing";
import { linkWhatsApp } from "@/lib/servicos";

const OBJETIVOS = [
  "Gerar leads / contatos",
  "Vender um produto ou serviço",
  "Receber agendamentos",
  "Apresentação institucional",
] as const;

const PLANOS = ["Ainda não sei", "Sem plano", "Essencial", "Cuidado"] as const;

type Briefing = {
  nome: string;
  contato: string;
  nicho: string;
  publicoAlvo: string;
  negocio: string;
  objetivo: string;
  temLogo: string;
  dominio: string;
  manutencao: string;
  referencias: string;
  prazo: string;
  orcamento: string;
};

const BRIEFING_INICIAL: Briefing = {
  nome: "",
  contato: "",
  nicho: "",
  publicoAlvo: "",
  negocio: "",
  objetivo: OBJETIVOS[0],
  temLogo: "Não",
  dominio: "",
  manutencao: PLANOS[0],
  referencias: "",
  prazo: "",
  orcamento: "",
};

/** Monta a mensagem que será aberta no WhatsApp. */
function montarMensagem(b: Briefing, estimativa: EstimativaInput): string {
  const linhas = [
    "Olá, Arthur! Quero um orçamento de landing page.",
    "",
    "— MEUS DADOS —",
    `Nome: ${b.nome}`,
    `Contato: ${b.contato}`,
    `Nicho / segmento: ${b.nicho}`,
  ];

  if (b.publicoAlvo.trim()) linhas.push(`Público-alvo: ${b.publicoAlvo}`);
  if (b.negocio.trim()) linhas.push(`Sobre o negócio: ${b.negocio}`);
  linhas.push(`Objetivo da página: ${b.objetivo}`);
  linhas.push(`Já tenho logo/identidade: ${b.temLogo}`);
  linhas.push(`Domínio: ${b.dominio.trim() || "ainda não tenho"}`);
  if (b.referencias.trim()) linhas.push(`Referências que gosto: ${b.referencias}`);
  if (b.prazo.trim()) linhas.push(`Prazo desejado: ${b.prazo}`);
  if (b.orcamento.trim()) linhas.push(`Orçamento previsto: ${b.orcamento}`);
  linhas.push(`Interesse em manutenção: ${b.manutencao}`);

  linhas.push("", "— SIMULAÇÃO NO SITE —", resumirEstimativa(estimativa));

  return linhas.join("\n");
}

export default function FormOrcamento({ estimativa }: { estimativa: EstimativaInput }) {
  const [b, setB] = useState<Briefing>(BRIEFING_INICIAL);
  const [tentouEnviar, setTentouEnviar] = useState(false);
  const idPrefix = useId();

  const campo = (nome: keyof Briefing) => `${idPrefix}-${nome}`;
  const set = (nome: keyof Briefing, valor: string) => setB((atual) => ({ ...atual, [nome]: valor }));

  const faltando = {
    nome: !b.nome.trim(),
    contato: !b.contato.trim(),
    nicho: !b.nicho.trim(),
  };
  const valido = !faltando.nome && !faltando.contato && !faltando.nicho;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTentouEnviar(true);
    if (!valido) return;
    window.open(linkWhatsApp(montarMensagem(b, estimativa)), "_blank", "noopener,noreferrer");
  }

  const erro = (mostrar: boolean) => (tentouEnviar && mostrar ? "border-terracota" : "border-terracota/20");

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-7">
      {/* Nome + contato */}
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor={campo("nome")} className={LABEL}>
            Seu nome <span className="text-terracota">*</span>
          </label>
          <input
            id={campo("nome")}
            type="text"
            value={b.nome}
            onChange={(e) => set("nome", e.target.value)}
            aria-invalid={tentouEnviar && faltando.nome}
            className={`${INPUT} ${erro(faltando.nome)}`}
          />
        </div>
        <div>
          <label htmlFor={campo("contato")} className={LABEL}>
            WhatsApp ou e-mail <span className="text-terracota">*</span>
          </label>
          <input
            id={campo("contato")}
            type="text"
            value={b.contato}
            onChange={(e) => set("contato", e.target.value)}
            aria-invalid={tentouEnviar && faltando.contato}
            className={`${INPUT} ${erro(faltando.contato)}`}
          />
        </div>
      </div>

      {/* Nicho */}
      <div>
        <label htmlFor={campo("nicho")} className={LABEL}>
          Nicho / segmento <span className="text-terracota">*</span>
        </label>
        <input
          id={campo("nicho")}
          type="text"
          placeholder="Ex.: odontologia, advocacia, academia, loja de roupas"
          value={b.nicho}
          onChange={(e) => set("nicho", e.target.value)}
          aria-invalid={tentouEnviar && faltando.nicho}
          className={`${INPUT} ${erro(faltando.nicho)}`}
        />
      </div>

      {/* Público-alvo */}
      <div>
        <label htmlFor={campo("publicoAlvo")} className={LABEL}>
          Quem é o público ideal que a página precisa convencer?
        </label>
        <textarea
          id={campo("publicoAlvo")}
          rows={2}
          placeholder="Ex.: pequenos empresários que precisam atrair clientes pelo WhatsApp"
          value={b.publicoAlvo}
          onChange={(e) => set("publicoAlvo", e.target.value)}
          className={`${INPUT} resize-y border-terracota/20`}
        />
      </div>

      {/* Sobre o negócio */}
      <div>
        <label htmlFor={campo("negocio")} className={LABEL}>
          Conte um pouco sobre o negócio
        </label>
        <textarea
          id={campo("negocio")}
          rows={3}
          value={b.negocio}
          onChange={(e) => set("negocio", e.target.value)}
          className={`${INPUT} resize-y border-terracota/20`}
        />
      </div>

      {/* Objetivo + logo */}
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor={campo("objetivo")} className={LABEL}>
            Objetivo da página
          </label>
          <select
            id={campo("objetivo")}
            value={b.objetivo}
            onChange={(e) => set("objetivo", e.target.value)}
            className={`${INPUT} border-terracota/20`}
          >
            {OBJETIVOS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={campo("temLogo")} className={LABEL}>
            Já tem logo / identidade visual?
          </label>
          <select
            id={campo("temLogo")}
            value={b.temLogo}
            onChange={(e) => set("temLogo", e.target.value)}
            className={`${INPUT} border-terracota/20`}
          >
            <option value="Não">Não</option>
            <option value="Sim">Sim</option>
          </select>
        </div>
      </div>

      {/* Domínio + manutenção */}
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor={campo("dominio")} className={LABEL}>
            Já tem domínio registrado? Qual?
          </label>
          <input
            id={campo("dominio")}
            type="text"
            placeholder="seunegocio.com.br — ou deixe em branco"
            value={b.dominio}
            onChange={(e) => set("dominio", e.target.value)}
            className={`${INPUT} border-terracota/20`}
          />
          <p className="mt-2 text-[0.68rem] leading-relaxed text-texto/50">
            O domínio é registrado e pago por você, no seu nome. Eu faço a configuração.
          </p>
        </div>
        <div>
          <label htmlFor={campo("manutencao")} className={LABEL}>
            Interesse em plano de manutenção
          </label>
          <select
            id={campo("manutencao")}
            value={b.manutencao}
            onChange={(e) => set("manutencao", e.target.value)}
            className={`${INPUT} border-terracota/20`}
          >
            {PLANOS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Referências */}
      <div>
        <label htmlFor={campo("referencias")} className={LABEL}>
          Sites de referência que você gosta
        </label>
        <textarea
          id={campo("referencias")}
          rows={2}
          placeholder="Cole os links, um por linha"
          value={b.referencias}
          onChange={(e) => set("referencias", e.target.value)}
          className={`${INPUT} resize-y border-terracota/20`}
        />
      </div>

      {/* Prazo + orçamento */}
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor={campo("prazo")} className={LABEL}>
            Prazo desejado
          </label>
          <input
            id={campo("prazo")}
            type="text"
            placeholder="Ex.: até o fim do mês"
            value={b.prazo}
            onChange={(e) => set("prazo", e.target.value)}
            className={`${INPUT} border-terracota/20`}
          />
        </div>
        <div>
          <label htmlFor={campo("orcamento")} className={LABEL}>
            Orçamento previsto <span className="text-texto/40">(opcional)</span>
          </label>
          <input
            id={campo("orcamento")}
            type="text"
            value={b.orcamento}
            onChange={(e) => set("orcamento", e.target.value)}
            className={`${INPUT} border-terracota/20`}
          />
        </div>
      </div>

      {/* Envio */}
      <div className="mt-2">
        {tentouEnviar && !valido && (
          <p role="alert" className="mb-4 text-[0.75rem] text-terracota">
            Preencha nome, contato e nicho para continuar.
          </p>
        )}
        <button
          type="submit"
          className="w-full bg-terracota px-8 py-4 text-[0.7rem] tracking-[0.12em] text-perola uppercase transition-opacity hover:opacity-85 sm:w-auto"
        >
          Enviar pelo WhatsApp
        </button>
        <p className="mt-4 text-[0.7rem] leading-relaxed text-texto/55">
          O botão abre o WhatsApp com a mensagem já montada — nada é armazenado neste site. Você
          revisa antes de enviar.
        </p>
      </div>
    </form>
  );
}

const LABEL = "mb-2 block text-[0.65rem] tracking-[0.12em] text-terracota uppercase";

const INPUT =
  "w-full border bg-perola px-4 py-3 text-[0.8rem] text-escuro outline-none transition-colors placeholder:text-texto/35 focus:border-terracota";
