/**
 * Configuração de preços da área "Contrate seu serviço".
 *
 * Todos os valores vivem aqui — para reajustar a tabela basta editar este
 * arquivo, sem tocar em componente nenhum.
 */

export const PRICING = {
  bases: {
    template: 600,
    personalizada: 1000,
  },
  /** Seções já inclusas na base; acima disso cobra-se por seção. */
  secoesInclusas: 4,
  valorSecaoExtra: { template: 120, personalizada: 180 },
  addons: {
    copywriting: { label: "Criação dos textos (copy)", valor: 300 },
    identidadeVisual: { label: "Identidade visual / logo", valor: 400 },
    animacoesAvancadas: { label: "Animações avançadas", valor: 300 },
    multiIdioma: { label: "Versão em outro idioma", valor: 400 },
    seoAvancado: { label: "SEO on-page avançado", valor: 250 },
    blogCms: { label: "Blog / CMS simples", valor: 500 },
    formularioContato: {
      label: "Formulário de contato (WhatsApp ou serviço externo)",
      valor: 150,
    },
    analytics: { label: "Google Analytics / Meta Pixel", valor: 100 },
    integracaoCrm: { label: "Integração com CRM / e-mail mkt", valor: 250 },
    deployDominio: { label: "Deploy + configuração de domínio/DNS", valor: 150 },
  },
  /** Entrega em menos de 7 dias. */
  urgenciaMultiplicador: 1.3,
  /** Teto da faixa exibida: min ... min * margem. */
  margemFaixaSuperior: 1.25,
  /** Manutenção não entra na faixa da landing page — é mostrada à parte. */
  manutencao: {
    essencial: { mensal: 39, anual: 390 },
    cuidado: { mensal: 59, anual: 590 },
    edicaoAvulsa: 90,
  },
  dominio: {
    porContaDoCliente: true,
    /** Apenas informativo — o cliente paga direto ao registrador. */
    estimativaAnual: { comBr: 40, pontoCom: 70 },
  },
} as const;

export type Modo = keyof typeof PRICING.bases;
export type AddonKey = keyof typeof PRICING.addons;

export const ADDON_KEYS = Object.keys(PRICING.addons) as AddonKey[];

export type EstimativaInput = {
  modo: Modo;
  secoes: number;
  addons: Record<AddonKey, boolean>;
  urgente: boolean;
};

export type Estimativa = {
  min: number;
  max: number;
};

export const SECOES_MIN = 1;
export const SECOES_MAX = 10;

/** Arredonda para o múltiplo de 50 mais próximo. */
function arredonda50(valor: number): number {
  return Math.round(valor / 50) * 50;
}

export function estimativaInicial(): EstimativaInput {
  return {
    modo: "template",
    secoes: PRICING.secoesInclusas,
    addons: Object.fromEntries(ADDON_KEYS.map((k) => [k, false])) as Record<AddonKey, boolean>,
    urgente: false,
  };
}

export function estimar({ modo, secoes, addons, urgente }: EstimativaInput): Estimativa {
  let total = PRICING.bases[modo];

  const secoesExtras = Math.max(0, secoes - PRICING.secoesInclusas);
  total += secoesExtras * PRICING.valorSecaoExtra[modo];

  for (const key of ADDON_KEYS) {
    if (addons[key]) total += PRICING.addons[key].valor;
  }

  if (urgente) total *= PRICING.urgenciaMultiplicador;

  return {
    min: arredonda50(total),
    max: arredonda50(total * PRICING.margemFaixaSuperior),
  };
}

const BRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export function formatarBRL(valor: number): string {
  return BRL.format(valor);
}

export function formatarFaixa({ min, max }: Estimativa): string {
  return `${formatarBRL(min)} – ${formatarBRL(max)}`;
}

/** Resumo textual das escolhas, usado na mensagem do WhatsApp. */
export function resumirEstimativa(input: EstimativaInput): string {
  const { modo, secoes, addons, urgente } = input;
  const linhas = [
    `Tipo: ${modo === "template" ? "A partir de template" : "Personalizada"}`,
    `Seções: ${secoes}`,
  ];

  const marcados = ADDON_KEYS.filter((k) => addons[k]).map((k) => PRICING.addons[k].label);
  linhas.push(`Adicionais: ${marcados.length ? marcados.join(", ") : "nenhum"}`);

  if (urgente) linhas.push("Entrega urgente (menos de 7 dias)");

  linhas.push(`Estimativa: ${formatarFaixa(estimar(input))}`);

  return linhas.join("\n");
}
