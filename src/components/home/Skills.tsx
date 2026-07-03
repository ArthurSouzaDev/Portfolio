import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const SKILLS = [
  { icon: "⬡", name: "Backend & APIs", desc: "Python, REST e GraphQL. Criação de serviços escaláveis." },
  { icon: "◈", name: "Banco de Dados", desc: "PostgreSQL, MongoDB, Redis. Modelagem de dados." },
  {
    icon: "◎",
    name: "Infraestrutura",
    desc: "Docker, CI/CD, AWS e GCP. Deploy, monitoramento e manutenção de ambientes em produção.",
  },
  { icon: "⟐", name: "Arquitetura", desc: "Microsserviços, event-driven, DDD. Projetos que crescem sem virar caos." },
  {
    icon: "♩",
    name: "Solução Criativa",
    desc: "Pensamento musical aplicado à engenharia: padrão, variação, harmonia entre camadas.",
  },
  {
    icon: "◇",
    name: "Automação",
    desc: "Scripts, webhooks e integrações que eliminam trabalho repetitivo de forma confiável.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-bege px-6 py-28 sm:px-12">
      <Reveal>
        <SectionHeader title="Skills" num="02" />
      </Reveal>
      <RevealGroup className="mx-auto grid max-w-4xl grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((skill) => (
          <RevealItem key={skill.name} className="cursor-default border-l-2 border-transparent bg-perola px-7 py-8 transition-colors hover:border-terracota hover:bg-white">
            <span className="mb-4 block text-2xl grayscale-[0.3]">{skill.icon}</span>
            <p className="mb-1.5 text-[0.85rem] tracking-[0.08em] text-escuro">{skill.name}</p>
            <p className="text-[0.72rem] leading-[1.7] text-texto/55">{skill.desc}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
