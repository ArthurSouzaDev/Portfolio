import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import Equalizer from "@/components/Equalizer";

const CATEGORIES = [
  {
    href: "/projetos/backend",
    num: "I",
    title: "Backend",
    desc: "APIs, microsserviços, ETL e arquitetura — os bastidores de cada sistema.",
    stack: "Python · C# · Node.js · MongoDB",
  },
  {
    href: "/projetos/landing-pages",
    num: "II",
    title: "Landing Pages",
    desc: "Interfaces e experiências de front-end publicadas para clientes e projetos próprios.",
    stack: "NextJS · React · Type · Design",
  },
];

export default function ProjetosOverview() {
  return (
    <section id="projetos" className="bg-perola px-6 py-28 sm:px-12">
      <Reveal>
        <SectionHeader title="Projetos" num="03" />
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mb-14 flex max-w-4xl justify-center">
        <Equalizer bars={32} className="h-8 opacity-60" />
      </Reveal>

      <RevealGroup className="mx-auto flex max-w-4xl flex-col gap-px">
        {CATEGORIES.map((cat) => (
          <RevealItem key={cat.href}>
            <Link
              href={cat.href}
              className="group grid grid-cols-[3rem_1fr_auto] items-center gap-8 border-l-2 border-transparent bg-bege px-6 py-10 transition-[background-color,border-color,padding-left] duration-300 hover:border-terracota hover:bg-perola hover:pl-8"
            >
              <span className="font-display text-[0.65rem] tracking-[0.1em] text-terracota italic">{cat.num}</span>
              <div>
                <p className="mb-1 font-display text-2xl text-escuro">{cat.title}</p>
                <p className="mb-2 text-[0.8rem] leading-relaxed text-texto/70">{cat.desc}</p>
                <p className="text-[0.65rem] tracking-[0.1em] text-azul uppercase">{cat.stack}</p>
              </div>
              <span className="text-lg text-terracota opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
