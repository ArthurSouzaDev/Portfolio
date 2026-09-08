export type Project = {
  name: string;
  href: string;
  stack: string;
  /** true enquanto o link real ainda não foi adicionado. */
  placeholder?: boolean;
  /** Segmento do cliente — exibido no CaseGrid da área "Contrate seu serviço". */
  nicho?: string;
  /** Uma frase sobre o projeto, para o card do CaseGrid. */
  descricao?: string;
  /**
   * Screenshot em /public. Enquanto não houver, o CaseGrid renderiza um
   * placeholder tipográfico — basta preencher este campo para trocar.
   */
  imagem?: string;
};

export const backendProjects: Project[] = [
  {
    name: "Data Collector Seplan",
    href: "https://github.com/ArthurSouzaDev/DataCollectorSeplan",
    stack: "Python · API · ETL",
  },
  {
    name: "InventoryManager",
    href: "https://github.com/ArthurSouzaDev/InventoryManager",
    stack: "C# · RestApi · MongoDB (Em desenvolvimento)",
  },
  {
    name: "Project Escalas 3.0",
    href: "https://github.com/ArthurSouzaDev/Project-Escalas-3.0",
    stack: "Js · SupaBase",
  },
];

/**
 * Landing pages publicadas. Para adicionar uma nova: troque `href: "#"` pelo
 * link real, remova `placeholder: true` e ajuste `stack`.
 */
export const landingPageProjects: Project[] = [
  {
    name: "morningstar photographies",
    href: "https://morningstarphotografie.com.br",
    stack: "NextJs · Type · React",
    placeholder: false,
    nicho: "Fotografia",
    descricao: "Portfólio visual com galeria e contato direto para orçamento de ensaios.",
  },
  {
    name: "Tudo On Telecomunicações",
    href: "https://landing-page-tudo-on.vercel.app",
    stack: "NextJs · Type · React",
    placeholder: false,
    nicho: "Telecomunicações",
    descricao: "Página de planos de internet com captação de leads pelo WhatsApp.",
  },
  {
    name: "Zero Lixo Palmas",
    href: "https://landing-page-coletivo-lixo.vercel.app",
    stack: "NextJs · Type · React",
    placeholder: false,
    nicho: "Coletivo ambiental",
    descricao: "Site institucional do coletivo, com agenda de ações e formulário de adesão.",
  },
];
