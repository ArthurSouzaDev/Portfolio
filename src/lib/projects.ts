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
  {
    name: "Dev te pergunta",
    href: "https://github.com/ArthurSouzaDev/devtepergunta",
    stack: "Next Js",
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
    descricao:
      "Portfólio visual com galeria e contato direto para orçamento de ensaios.",
    imagem: "/cases/morningstar.jpg",
  },
    {
    name: "Dr Felipe Damascena",
    href: "https://landing-page-dr-felipe.vercel.app/",
    stack: "NextJs · Type · React",
    placeholder: false,
    nicho: "Saúde",
    descricao:
      "Site institucional para Dr Felipe Damascena especialista em saúde vascular.",
    imagem: "/cases/felipe.jpg"
  },
  {
    name: "Wchoa salão e estética ",
    href: "https://landing-page-wchoa.vercel.app",
    stack: "NextJs · Type · React",
    placeholder: false,
    nicho: "Estética",
    descricao: "Salão de beleza e estética em Palmas-TO.",
    imagem: "/cases/wchoa.jpg",
  },
  {
    name: "Cintra musics",
    href: "https://landing-page-cintra-music.vercel.app/",
    stack: "NextJs · Type · React",
    placeholder: false,
    nicho: "Luthier",
    descricao:
      "Luthieria Artesanal - instrumentos de cordas.",
    imagem: "/cases/cintras.jpg"
  },
  {
    name: "Dr Débora Portilho",
    href: "https://landing-page-dra-debora.vercel.app/",
    stack: "NextJs · Type · React",
    placeholder: false,
    nicho: "Saúde",
    descricao:
      "Site institucional para Dra Débora Portilho especialista em Endocrinologia Clínica.",
    imagem: "/cases/debora.jpg"
  },
    {
    name: "Tudo On Telecomunicações",
    href: "https://landing-page-tudo-on.vercel.app",
    stack: "NextJs · Type · React",
    placeholder: false,
    nicho: "Telecomunicações",
    descricao: "Página de planos de internet com captação de leads pelo WhatsApp.",
    imagem: "/cases/tudo-on.jpg",
  },
];
