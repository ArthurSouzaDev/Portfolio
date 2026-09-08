"use client";

import { useId, useMemo } from "react";
import {
  ADDON_KEYS,
  estimar,
  formatarBRL,
  formatarFaixa,
  PRICING,
  SECOES_MAX,
  SECOES_MIN,
  type EstimativaInput,
  type Modo,
} from "@/lib/pricing";

const MODOS: { valor: Modo; rotulo: string; descricao: string }[] = [
  {
    valor: "template",
    rotulo: "Template",
    descricao: "Base pronta adaptada à sua marca",
  },
  {
    valor: "personalizada",
    rotulo: "Personalizada",
    descricao: "Design exclusivo, do zero",
  },
];

type Props = {
  value: EstimativaInput;
  onChange: (value: EstimativaInput) => void;
};

export default function EstimadorPreco({ value, onChange }: Props) {
  const secoesId = useId();
  const urgenteId = useId();

  const faixa = useMemo(() => estimar(value), [value]);

  const secoesExtras = Math.max(0, value.secoes - PRICING.secoesInclusas);

  return (
    <div className="flex flex-col gap-10">
      {/* ── Tipo de projeto ── */}
      <fieldset>
        <legend className="mb-4 text-[0.65rem] tracking-[0.15em] text-terracota uppercase">
          Tipo de projeto
        </legend>
        <div className="grid gap-px sm:grid-cols-2">
          {MODOS.map((modo) => {
            const ativo = value.modo === modo.valor;
            return (
              <label
                key={modo.valor}
                className={`cursor-pointer border-l-2 px-6 py-5 transition-colors ${
                  ativo
                    ? "border-terracota bg-bege"
                    : "border-transparent bg-bege/40 hover:bg-bege/70"
                }`}
              >
                <input
                  type="radio"
                  name="modo"
                  value={modo.valor}
                  checked={ativo}
                  onChange={() => onChange({ ...value, modo: modo.valor })}
                  className="sr-only"
                />
                <span className="block font-display text-lg text-escuro">{modo.rotulo}</span>
                <span className="mt-0.5 block text-[0.72rem] text-texto/65">{modo.descricao}</span>
                <span className="mt-2 block text-[0.65rem] tracking-[0.1em] text-terracota uppercase">
                  a partir de {formatarBRL(PRICING.bases[modo.valor])}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* ── Seções ── */}
      <div>
        <label
          htmlFor={secoesId}
          className="mb-4 block text-[0.65rem] tracking-[0.15em] text-terracota uppercase"
        >
          Quantas seções a página terá?
        </label>
        <div className="flex items-center gap-5">
          <input
            id={secoesId}
            type="range"
            min={SECOES_MIN}
            max={SECOES_MAX}
            step={1}
            value={value.secoes}
            onChange={(e) => onChange({ ...value, secoes: Number(e.target.value) })}
            className="h-1 w-full cursor-pointer appearance-none rounded bg-terracota/20 accent-terracota"
          />
          <span className="w-8 shrink-0 text-right font-display text-2xl text-escuro">
            {value.secoes}
          </span>
        </div>
        <p className="mt-2.5 text-[0.7rem] leading-relaxed text-texto/55">
          {PRICING.secoesInclusas} seções já inclusas na base.{" "}
          {secoesExtras > 0
            ? `${secoesExtras} extra${secoesExtras > 1 ? "s" : ""} × ${formatarBRL(
                PRICING.valorSecaoExtra[value.modo],
              )}.`
            : "Ex.: topo, sobre, serviços e contato."}
        </p>
      </div>

      {/* ── Adicionais ── */}
      <fieldset>
        <legend className="mb-4 text-[0.65rem] tracking-[0.15em] text-terracota uppercase">
          Adicionais
        </legend>
        <div className="grid gap-px sm:grid-cols-2">
          {ADDON_KEYS.map((key) => {
            const addon = PRICING.addons[key];
            const ativo = value.addons[key];
            return (
              <label
                key={key}
                className={`flex cursor-pointer items-start gap-3 px-5 py-4 transition-colors ${
                  ativo ? "bg-bege" : "bg-bege/40 hover:bg-bege/70"
                }`}
              >
                <input
                  type="checkbox"
                  checked={ativo}
                  onChange={(e) =>
                    onChange({
                      ...value,
                      addons: { ...value.addons, [key]: e.target.checked },
                    })
                  }
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-terracota"
                />
                <span className="flex-1 text-[0.75rem] leading-snug text-texto/80">
                  {addon.label}
                </span>
                <span className="shrink-0 text-[0.7rem] whitespace-nowrap text-terracota">
                  +{formatarBRL(addon.valor)}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* ── Urgência ── */}
      <div>
        <label
          htmlFor={urgenteId}
          className={`flex cursor-pointer items-start gap-3 border-l-2 px-5 py-4 transition-colors ${
            value.urgente ? "border-terracota bg-bege" : "border-transparent bg-bege/40"
          }`}
        >
          <input
            id={urgenteId}
            type="checkbox"
            checked={value.urgente}
            onChange={(e) => onChange({ ...value, urgente: e.target.checked })}
            className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-terracota"
          />
          <span className="flex-1">
            <span className="block text-[0.78rem] text-escuro">Entrega urgente</span>
            <span className="mt-0.5 block text-[0.7rem] text-texto/60">
              Menos de 7 dias — prioridade na fila
            </span>
          </span>
          <span className="shrink-0 text-[0.7rem] whitespace-nowrap text-terracota">
            +{Math.round((PRICING.urgenciaMultiplicador - 1) * 100)}%
          </span>
        </label>
      </div>

      {/* ── Resultado ── */}
      <div className="border-l-2 border-terracota bg-terracota/[0.06] px-7 py-7">
        <p className="text-[0.62rem] tracking-[0.15em] text-terracota uppercase">
          Estimativa do projeto
        </p>
        <p
          className="mt-2 font-display text-[clamp(1.6rem,4.5vw,2.4rem)] leading-tight text-escuro"
          aria-live="polite"
        >
          {formatarFaixa(faixa)}
        </p>
        <p className="mt-3 text-[0.72rem] leading-relaxed text-texto/60">
          Estimativa. O valor final é definido depois do briefing, conforme o escopo real do
          projeto. Pagamento em 50% na aprovação e 50% na entrega.
        </p>

        <div className="mt-6 border-t border-terracota/15 pt-5">
          <p className="text-[0.62rem] tracking-[0.15em] text-terracota uppercase">
            Manutenção opcional
          </p>
          <p className="mt-2 text-[0.75rem] leading-relaxed text-texto/70">
            Essencial {formatarBRL(PRICING.manutencao.essencial.mensal)}/mês ou{" "}
            {formatarBRL(PRICING.manutencao.essencial.anual)}/ano · Cuidado{" "}
            {formatarBRL(PRICING.manutencao.cuidado.mensal)}/mês ou{" "}
            {formatarBRL(PRICING.manutencao.cuidado.anual)}/ano.
          </p>
          <p className="mt-2 text-[0.72rem] leading-relaxed text-texto/55">
            Domínio à parte, registrado e pago por você (~
            {formatarBRL(PRICING.dominio.estimativaAnual.comBr)}/ano no .com.br).
          </p>
        </div>
      </div>
    </div>
  );
}
