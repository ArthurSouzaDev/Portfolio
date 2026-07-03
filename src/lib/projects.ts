export type Project = {
  name: string;
  href: string;
  stack: string;
  /** true enquanto o link real ainda não foi adicionado. */
  placeholder?: boolean;
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
  { name: "morningstar photographies", 
    href: "https://morningstarphotografie.com.br",
     stack: "NextJs · Type · React", 
     placeholder: false },
  { name: "Tudo On Telecomunicações", 
    href: "https://landing-page-tudo-on.vercel.app", 
    stack: "NextJs · Type · React", 
    placeholder: false },
  { name: "Zero Lixo Palmas",
    href: "https://landing-page-coletivo-lixo.vercel.app", 
    stack: "NextJs · Type · React",
    placeholder: false },
];
