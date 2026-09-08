import Link from "next/link";
import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import CaseGrid from "@/components/contrate/CaseGrid";
import FaqAccordion from "@/components/contrate/FaqAccordion";
import { landingPageProjects } from "@/lib/projects";
import { formatarBRL, PRICING } from "@/lib/pricing";
import {
  comparativo,
  entregas,
  faqCategorias,
  modificacoes,
  notaManutencao,
  pequenasAlteracoes,
  planosManutencao,
  processo,
  termos,
  transparenciaHospedagem,
} from "@/lib/servicos";

export const metadata: Metadata = {
  title: "Contrate seu serviço — Arthur Souza",
  description:
    "Landing pages sob medida a partir de R$ 600. Simule o valor do seu projeto, envie o briefing e receba um orçamento pelo WhatsApp.",
};

export default function ContratePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="px-6 pt-32 pb-20 sm:px-12">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="mb-4 text-[0.65rem] tracking-[0.2em] text-terracota uppercase">
              Contrate seu serviço
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-2xl font-display text-[clamp(2.2rem,6vw,4rem)] leading-[1.1] text-escuro">
              Landing pages que <em className="text-terracota">convertem</em>.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-[0.85rem] leading-relaxed text-texto/70">
              Páginas rápidas, responsivas e feitas para o seu negócio ser encontrado e
              contratado. A partir de {formatarBRL(PRICING.bases.template)} no modelo template ou{" "}
              {formatarBRL(PRICING.bases.personalizada)} no design personalizado.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contrate/orcamento"
                className="bg-terracota px-8 py-4 text-[0.7rem] tracking-[0.12em] text-perola uppercase transition-opacity hover:opacity-85"
              >
                Simular preço
              </Link>
              <a
                href="#trabalhos"
                className="border border-terracota/30 px-8 py-4 text-[0.7rem] tracking-[0.12em] text-terracota uppercase transition-colors hover:border-terracota"
              >
                Ver trabalhos
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── O que entrego ── */}
      <section className="bg-bege/40 px-6 py-24 sm:px-12">
        <Reveal>
          <SectionHeader title="O que entrego" num="01" />
        </Reveal>
        <RevealGroup className="mx-auto grid max-w-4xl gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {entregas.map((item) => (
            <RevealItem key={item.titulo}>
              <div className="border-l-2 border-terracota/25 pl-5">
                <p className="mb-1.5 font-display text-lg text-escuro">{item.titulo}</p>
                <p className="text-[0.75rem] leading-relaxed text-texto/70">{item.descricao}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* ── Template x Personalizada ── */}
      <section className="px-6 py-24 sm:px-12">
        <Reveal>
          <SectionHeader title="Template ou personalizada" num="02" />
        </Reveal>
        <RevealGroup className="mx-auto grid max-w-4xl gap-px md:grid-cols-2">
          {comparativo.map((opcao) => (
            <RevealItem key={opcao.modo}>
              <div className="flex h-full flex-col bg-bege px-8 py-10">
                <p className="font-display text-2xl text-escuro">{opcao.modo}</p>
                <p className="mt-1 text-[0.7rem] tracking-[0.1em] text-terracota uppercase">
                  a partir de {formatarBRL(opcao.apartirDe)}
                </p>
                <p className="mt-4 text-[0.8rem] leading-relaxed text-texto/75">{opcao.resumo}</p>
                <ul className="mt-6 flex flex-col gap-2.5">
                  {opcao.itens.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[0.75rem] leading-relaxed text-texto/70"
                    >
                      <span className="text-terracota" aria-hidden="true">
                        ·
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-8 text-[0.7rem] leading-relaxed text-azul italic">
                  {opcao.para}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* ── Processo ── */}
      <section className="bg-bege/40 px-6 py-24 sm:px-12">
        <Reveal>
          <SectionHeader title="Como funciona" num="03" />
        </Reveal>
        <RevealGroup className="mx-auto flex max-w-4xl flex-col gap-px">
          {processo.map((etapa) => (
            <RevealItem key={etapa.passo}>
              <div className="grid grid-cols-[3rem_1fr] items-start gap-6 bg-perola px-6 py-8 sm:gap-8">
                <span className="font-display text-[0.7rem] tracking-[0.1em] text-terracota italic">
                  {etapa.passo}
                </span>
                <div>
                  <p className="mb-1.5 font-display text-xl text-escuro">{etapa.titulo}</p>
                  <p className="text-[0.78rem] leading-relaxed text-texto/70">{etapa.descricao}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* ── Manutenção & modificações ── */}
      <section id="manutencao" className="px-6 py-24 sm:px-12">
        <Reveal>
          <SectionHeader title="Manutenção" num="04" />
        </Reveal>

        <Reveal delay={0.05} className="mx-auto mb-12 max-w-4xl">
          <p className="max-w-2xl text-[0.82rem] leading-relaxed text-texto/75">
            A manutenção é <strong className="font-normal text-escuro">opcional</strong>. Com
            plano, você tem acompanhamento contínuo e pequenas alterações inclusas, sem pedir
            orçamento a cada ajuste. Sem plano, o site continua seu e no ar — você paga apenas
            quando precisar de alguma modificação.
          </p>
        </Reveal>

        <RevealGroup className="mx-auto mb-6 grid max-w-4xl gap-px md:grid-cols-3">
          {planosManutencao.map((plano) => (
            <RevealItem key={plano.nome}>
              <div
                className={`flex h-full flex-col px-7 py-9 ${
                  plano.destaque ? "bg-terracota text-perola" : "bg-bege"
                }`}
              >
                <p
                  className={`font-display text-xl ${
                    plano.destaque ? "text-perola" : "text-escuro"
                  }`}
                >
                  {plano.nome}
                </p>

                {plano.mensal > 0 ? (
                  <p className="mt-2">
                    <span
                      className={`font-display text-3xl ${
                        plano.destaque ? "text-perola" : "text-terracota"
                      }`}
                    >
                      {formatarBRL(plano.mensal)}
                    </span>
                    <span
                      className={`text-[0.7rem] ${
                        plano.destaque ? "text-perola/70" : "text-texto/60"
                      }`}
                    >
                      /mês
                    </span>
                    <span
                      className={`mt-1 block text-[0.68rem] tracking-[0.08em] ${
                        plano.destaque ? "text-bege" : "text-azul"
                      }`}
                    >
                      ou {formatarBRL(plano.anual)}/ano · 2 meses grátis
                    </span>
                  </p>
                ) : (
                  <p className="mt-2">
                    <span className="font-display text-3xl text-terracota">R$ 0</span>
                    <span className="mt-1 block text-[0.68rem] tracking-[0.08em] text-azul">
                      sem mensalidade
                    </span>
                  </p>
                )}

                <ul className="mt-7 flex flex-col gap-2.5">
                  {plano.itens.map((item) => (
                    <li
                      key={item}
                      className={`flex gap-3 text-[0.75rem] leading-relaxed ${
                        plano.destaque ? "text-perola/85" : "text-texto/70"
                      }`}
                    >
                      <span
                        className={plano.destaque ? "text-bege" : "text-terracota"}
                        aria-hidden="true"
                      >
                        ·
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.05} className="mx-auto max-w-4xl">
          <p className="text-[0.7rem] leading-relaxed text-texto/55">{notaManutencao}</p>
        </Reveal>

        {/* Transparência sobre hospedagem */}
        <Reveal delay={0.1} className="mx-auto mt-12 max-w-4xl">
          <blockquote className="border-l-2 border-terracota bg-bege/50 px-7 py-7">
            <p className="text-[0.8rem] leading-relaxed text-texto/80 italic">
              {transparenciaHospedagem}
            </p>
          </blockquote>
        </Reveal>

        {/* O que é pequena alteração */}
        <Reveal delay={0.1} className="mx-auto mt-12 max-w-4xl">
          <p className="mb-3 font-display text-lg text-escuro">O que é uma pequena alteração</p>
          <p className="mb-4 text-[0.78rem] leading-relaxed text-texto/70">
            Mudanças que não alteram a estrutura principal do projeto:
          </p>
          <ul className="flex flex-wrap gap-2">
            {pequenasAlteracoes.map((item) => (
              <li
                key={item}
                className="border border-terracota/20 px-3 py-1.5 text-[0.68rem] text-texto/70"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[0.75rem] leading-relaxed text-texto/60">
            Nova seção, nova página, redesign, integração ou funcionalidade nova não entram como
            pequena alteração — são cobrados separadamente, conforme a tabela abaixo.
          </p>
        </Reveal>

        {/* Tabela de modificações */}
        <Reveal delay={0.1} className="mx-auto mt-12 max-w-4xl">
          <p className="mb-5 font-display text-lg text-escuro">Modificações avulsas</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[34rem] border-collapse text-left">
              <thead>
                <tr className="border-b border-terracota/20">
                  <th className="pb-3 text-[0.62rem] font-normal tracking-[0.12em] text-terracota uppercase">
                    Serviço
                  </th>
                  <th className="pb-3 text-right text-[0.62rem] font-normal tracking-[0.12em] text-terracota uppercase">
                    Valor
                  </th>
                  <th className="hidden pb-3 pl-8 text-[0.62rem] font-normal tracking-[0.12em] text-terracota uppercase sm:table-cell">
                    Observação
                  </th>
                </tr>
              </thead>
              <tbody>
                {modificacoes.map((linha) => (
                  <tr key={linha.servico} className="border-b border-terracota/10">
                    <td className="py-4 pr-4 text-[0.78rem] text-escuro">{linha.servico}</td>
                    <td className="py-4 text-right text-[0.78rem] whitespace-nowrap text-terracota">
                      {linha.valor}
                    </td>
                    <td className="hidden py-4 pl-8 text-[0.72rem] leading-relaxed text-texto/60 sm:table-cell">
                      {linha.obs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[0.72rem] leading-relaxed text-texto/60">
            O domínio é registrado e pago por você, no seu nome — em torno de{" "}
            {formatarBRL(PRICING.dominio.estimativaAnual.comBr)}/ano para um .com.br. Eu faço a
            configuração.
          </p>
        </Reveal>
      </section>

      {/* ── Trabalhos entregues ── */}
      <section id="trabalhos" className="bg-bege/40 px-6 py-24 sm:px-12">
        <Reveal>
          <SectionHeader title="Trabalhos entregues" num="05" />
        </Reveal>
        <CaseGrid projects={landingPageProjects} />
      </section>

      {/* ── FAQ ── */}
      <section className="px-6 py-24 sm:px-12">
        <Reveal>
          <SectionHeader title="Dúvidas frequentes" num="06" />
        </Reveal>
        <Reveal delay={0.05} className="mx-auto max-w-4xl">
          <FaqAccordion categorias={faqCategorias} />
        </Reveal>
      </section>

      {/* ── Termos resumidos ── */}
      <section className="bg-bege/40 px-6 py-24 sm:px-12">
        <Reveal>
          <SectionHeader title="Como trabalhamos" num="07" />
        </Reveal>
        <RevealGroup className="mx-auto grid max-w-4xl gap-x-10 gap-y-7 sm:grid-cols-2">
          {termos.map((termo) => (
            <RevealItem key={termo.titulo}>
              <div>
                <p className="mb-1.5 text-[0.65rem] tracking-[0.15em] text-terracota uppercase">
                  {termo.titulo}
                </p>
                <p className="text-[0.78rem] leading-relaxed text-texto/70">{termo.texto}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden bg-terracota px-6 py-28 sm:px-12">
        <div
          className="pointer-events-none absolute -right-20 -bottom-20 h-[300px] w-[300px] rounded-full border-[60px] border-perola/[0.07]"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex max-w-4xl flex-wrap items-end justify-between gap-10">
          <Reveal>
            <h2 className="max-w-lg font-display text-[clamp(1.8rem,4.5vw,3rem)] leading-[1.15] text-perola">
              Vamos colocar o seu negócio <em className="text-bege">no ar.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/contrate/orcamento"
              className="inline-block bg-perola px-8 py-4 text-[0.7rem] tracking-[0.12em] text-terracota uppercase transition-opacity hover:opacity-85"
            >
              Simular e pedir orçamento
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
