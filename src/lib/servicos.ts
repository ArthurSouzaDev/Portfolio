import { PRICING, formatarBRL } from "@/lib/pricing";

/** Número no formato aceito pelo wa.me: 55 + DDD + número. */
export const WHATSAPP = "5563992554716";

export function linkWhatsApp(mensagem: string): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}

/* ── O que está incluso em toda entrega ── */

export const entregas = [
  {
    titulo: "Design responsivo",
    descricao: "Layout que funciona bem no celular, tablet e desktop — sem versão quebrada.",
  },
  {
    titulo: "Performance",
    descricao: "Site leve e rápido. Carregamento otimizado de imagens e fontes.",
  },
  {
    titulo: "SEO básico",
    descricao: "Títulos, descrições e estrutura preparados para o Google encontrar seu site.",
  },
  {
    titulo: "WhatsApp flutuante",
    descricao: "Botão fixo de contato direto, incluso em todos os projetos.",
  },
  {
    titulo: "Publicação",
    descricao: "Deploy feito e site no ar, com HTTPS e domínio apontado.",
  },
  {
    titulo: "Código seu",
    descricao: "Depois da quitação, o projeto é seu. Sem amarras.",
  },
] as const;

/* ── Como o trabalho acontece ── */

export const processo = [
  {
    passo: "01",
    titulo: "Briefing",
    descricao:
      "Você me conta sobre o negócio, o objetivo da página e o que já tem pronto. É aqui que o escopo é definido.",
  },
  {
    passo: "02",
    titulo: "Proposta",
    descricao:
      "Envio o valor fechado, o prazo e o que está incluso. Aprovado, entra 50% de entrada para começar.",
  },
  {
    passo: "03",
    titulo: "Desenvolvimento",
    descricao:
      "Construo a página e te mostro para ajustar. Estão inclusas 2 rodadas de revisão.",
  },
  {
    passo: "04",
    titulo: "Entrega",
    descricao:
      "Site publicado, domínio apontado e tudo funcionando. A partir daí, com ou sem plano de manutenção.",
  },
] as const;

/* ── Template x Personalizada ── */

export const comparativo = [
  {
    modo: "Template",
    apartirDe: PRICING.bases.template,
    resumo: "Base pronta adaptada à sua marca.",
    itens: [
      "Estrutura já validada",
      "Cores, textos e imagens da sua marca",
      "Prazo curto (5 a 10 dias úteis)",
      "Menor investimento",
    ],
    para: "Para quem precisa estar no ar rápido e com bom custo.",
  },
  {
    modo: "Personalizada",
    apartirDe: PRICING.bases.personalizada,
    resumo: "Layout desenhado do zero para o seu negócio.",
    itens: [
      "Design exclusivo, sem cara de template",
      "Estrutura pensada para o seu público",
      "Animações e detalhes sob medida",
      "Prazo maior (15 a 30 dias úteis)",
    ],
    para: "Para quem quer se diferenciar da concorrência.",
  },
] as const;

/* ── Planos de manutenção ── */

export const planosManutencao = [
  {
    nome: "Essencial",
    mensal: PRICING.manutencao.essencial.mensal,
    anual: PRICING.manutencao.essencial.anual,
    destaque: true,
    itens: [
      "Acompanhamento técnico do site",
      "Atualizações de segurança e dependências",
      "Backup do código e dos assets",
      "Configurações de domínio, DNS e SSL",
      "1 pequena alteração por mês",
      "Suporte por e-mail (resposta em até 3 dias úteis)",
    ],
  },
  {
    nome: "Cuidado",
    mensal: PRICING.manutencao.cuidado.mensal,
    anual: PRICING.manutencao.cuidado.anual,
    destaque: false,
    itens: [
      "Tudo do plano Essencial",
      "Até 4 pequenas alterações por mês",
      "Relatório mensal de acessos",
      "Suporte por WhatsApp (resposta em até 1 dia útil)",
    ],
  },
  {
    nome: "Sem plano",
    mensal: 0,
    anual: 0,
    destaque: false,
    itens: [
      "Sem mensalidade",
      "O site continua seu e no ar normalmente",
      "Modificações cobradas de forma avulsa",
      "Correção de bugs grátis nos primeiros 30 dias",
    ],
  },
] as const;

/** As alterações inclusas nos planos não acumulam para os meses seguintes. */
export const notaManutencao =
  "As alterações inclusas nos planos não são acumulativas para os meses seguintes. Nova seção, nova página, redesign, integração ou mudança de escopo são orçados separadamente.";

export const transparenciaHospedagem =
  "A hospedagem hoje pode funcionar sem custo de servidor para o seu projeto. A manutenção é pelo acompanhamento, suporte, atualizações e pequenas mudanças que eu continuo realizando depois da entrega. Se algum dia o seu site precisar de uma hospedagem paga, eu aviso antes e a gente decide juntos, sem cobrança surpresa.";

/* ── Tabela de modificações avulsas ── */

export const modificacoes = [
  {
    servico: "Alteração pequena avulsa",
    valor: `${formatarBRL(PRICING.manutencao.edicaoAvulsa)}`,
    obs: "Texto, imagem, preço, link, contato ou alteração equivalente",
  },
  {
    servico: "Pacote de até 3 pequenas alterações",
    valor: formatarBRL(180),
    obs: "Para mudanças solicitadas em conjunto",
  },
  {
    servico: "Nova seção simples",
    valor: `a partir de ${formatarBRL(180)}`,
    obs: "Mantendo a identidade e a estrutura visual existentes",
  },
  {
    servico: "Nova seção mais trabalhada",
    valor: `a partir de ${formatarBRL(250)}`,
    obs: "Seções com layout ou conteúdo mais elaborado",
  },
  {
    servico: "Nova página",
    valor: `a partir de ${formatarBRL(350)}`,
    obs: "Valor varia conforme conteúdo e complexidade",
  },
  {
    servico: "Alteração visual / layout",
    valor: `a partir de ${formatarBRL(200)}`,
    obs: "Mudanças que vão além de simples conteúdo",
  },
  {
    servico: "Nova integração ou funcionalidade",
    valor: "sob orçamento",
    obs: "Integrações, formulários especiais, automações e funcionalidades novas",
  },
] as const;

export const pequenasAlteracoes = [
  "troca de texto",
  "troca de imagem",
  "alteração de preço",
  "alteração de telefone, WhatsApp ou outros dados de contato",
  "troca ou correção de links",
  "atualização de horário ou informação comercial",
  "inclusão ou substituição de um depoimento",
] as const;

/* ── Termos resumidos ── */

export const termos = [
  {
    titulo: "Pagamento",
    texto: "50% na aprovação da proposta, 50% na entrega. Via Pix ou cartão de crédito.",
  },
  {
    titulo: "Prazo",
    texto:
      "Template: 5 a 10 dias úteis. Personalizada: 15 a 30 dias úteis. O prazo começa quando todo o conteúdo é entregue.",
  },
  {
    titulo: "Revisões",
    texto: "2 rodadas de ajustes inclusas. Rodadas extras ou mudança de escopo são orçadas à parte.",
  },
  {
    titulo: "O que você fornece",
    texto:
      "Textos (ou contrata a criação de copy), imagens e logo em boa resolução, e os acessos necessários.",
  },
  {
    titulo: "Propriedade",
    texto:
      "O código é seu após a quitação. Posso exibir o trabalho no portfólio, salvo pedido de sigilo.",
  },
  { titulo: "Garantia", texto: "Correção de bugs de código por 30 dias após a entrega, sem custo." },
] as const;

/* ── FAQ ── */

export const faq = [
  {
    pergunta: "Qual a diferença entre template e site personalizado?",
    resposta:
      "No template eu parto de uma base pronta e adapto à sua marca — é mais rápido e mais barato. No personalizado o layout é desenhado do zero para o seu negócio, com estrutura e visual exclusivos.",
  },
  {
    pergunta: "Quanto tempo leva?",
    resposta:
      "Template fica pronto em 5 a 10 dias úteis. Personalizada, entre 15 e 30 dias úteis. O prazo só começa a contar quando eu recebo todo o conteúdo.",
  },
  {
    pergunta: "O que eu preciso te enviar?",
    resposta:
      "Textos, imagens e logo em boa resolução, além das informações de contato do negócio. Se você não tiver os textos, posso criar a copy como serviço adicional.",
  },
  {
    pergunta: "Como funciona o pagamento?",
    resposta:
      "50% na aprovação da proposta para iniciar e 50% na entrega. Pagamento via Pix ou cartão de crédito.",
  },
  {
    pergunta: "Quantas rodadas de revisão estão incluídas?",
    resposta:
      "Duas rodadas de ajustes. Se precisar de mais rodadas ou mudar o escopo do projeto, isso é orçado à parte.",
  },
  {
    pergunta: "Preciso comprar domínio?",
    resposta:
      "Sim. O domínio é registrado e pago por você, no seu nome ou CNPJ — assim ele é realmente seu e você nunca fica dependente de terceiros. Um .com.br no Registro.br custa por volta de R$ 40 por ano. Eu faço toda a configuração do apontamento.",
  },
  {
    pergunta: "E a hospedagem, tem custo?",
    resposta: transparenciaHospedagem,
  },
  {
    pergunta: "Por que pagar manutenção se a hospedagem é grátis?",
    resposta:
      "A manutenção não é aluguel de servidor. É o acompanhamento técnico depois da entrega: atualizações de segurança, backup, suporte e as pequenas alterações do dia a dia, sem precisar pedir um orçamento novo a cada ajuste. É opcional — você pode ficar sem plano e pagar apenas quando precisar de alguma modificação.",
  },
  {
    pergunta: "Posso cancelar a manutenção depois?",
    resposta:
      "Pode, a qualquer momento. O projeto continua sendo seu: transfiro a hospedagem para a sua conta e entrego o repositório com as instruções de publicação. O domínio já está no seu nome, então nada muda quanto a isso.",
  },
  {
    pergunta: "O código é meu?",
    resposta:
      "Sim. Depois da quitação, o projeto é integralmente seu — você pode continuar com outro profissional se quiser.",
  },
  {
    pergunta: "E se eu quiser um e-mail com o meu domínio?",
    resposta:
      "O e-mail profissional (contato@seudominio.com) não está incluso, porque é um serviço pago à parte. Se você contratar um Google Workspace ou Zoho, eu configuro os registros necessários sem custo adicional.",
  },
] as const;
