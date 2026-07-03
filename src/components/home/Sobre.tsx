import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const TAGS = ["Node.js", "Python", "C#", "MongoDb", "Arquitetura", "APIs REST"];

export default function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-escuro px-6 py-28 sm:px-12">
      <p
        className="pointer-events-none absolute top-12 right-12 text-6xl tracking-[1rem] text-bege opacity-[0.04]"
        aria-hidden="true"
      >
        ♩♪♫♬
      </p>

      <div className="mx-auto grid max-w-4xl items-start gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <Reveal className="flex flex-col">
          <p className="mb-4 text-[0.65rem] tracking-[0.2em] text-verde uppercase">01 — Sobre</p>
          <h2 className="mb-2 font-display text-4xl leading-tight text-perola">
            Arthur
            <br />
            Souza
          </h2>
          <p className="text-[0.75rem] tracking-[0.1em] text-azul uppercase">
            Backend Developer &amp; Solution Architect
          </p>

          <div className="relative mt-10 h-[200px] w-[200px] shrink-0 justify-self-center before:absolute before:-inset-2.5 before:border before:border-terracota/25 after:absolute after:-bottom-4.5 after:-left-4.5 after:h-20 after:w-20 after:border-b after:border-l after:border-terracota after:opacity-40 sm:justify-self-start">
            <Image
              src="/GitIcon.jpeg"
              alt="Arthur Souza"
              width={200}
              height={200}
              className="block h-[200px] w-[200px] object-cover grayscale-[20%] contrast-[1.05] transition-[filter] duration-400 hover:grayscale-0 hover:contrast-100"
            />
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
              <svg viewBox="0 0 200 200" className="h-full w-full">
                <g opacity={0.12} stroke="#974315" strokeWidth={0.8}>
                  <line x1={0} y1={155} x2={200} y2={155} />
                  <line x1={0} y1={163} x2={200} y2={163} />
                  <line x1={0} y1={171} x2={200} y2={171} />
                  <line x1={0} y1={179} x2={200} y2={179} />
                  <line x1={0} y1={187} x2={200} y2={187} />
                </g>
              </svg>
            </div>
          </div>

          <div className="mt-8 opacity-35" aria-hidden="true">
            <svg width={180} height={50} viewBox="0 0 180 50">
              <g stroke="#F0EDE4" strokeWidth={0.8} opacity={0.5}>
                <line x1={20} y1={10} x2={180} y2={10} />
                <line x1={20} y1={18} x2={180} y2={18} />
                <line x1={20} y1={26} x2={180} y2={26} />
                <line x1={20} y1={34} x2={180} y2={34} />
                <line x1={20} y1={42} x2={180} y2={42} />
              </g>
              <text x={5} y={40} fontSize={38} fill="#F0EDE4" opacity={0.4} fontFamily="serif">
                𝄞
              </text>
              <ellipse cx={70} cy={20} rx={7} ry={5} fill="#974315" opacity={0.7} />
              <line x1={77} y1={20} x2={77} y2={2} stroke="#974315" strokeWidth={1.2} />
              <ellipse cx={100} cy={30} rx={7} ry={5} fill="#974315" opacity={0.7} />
              <line x1={107} y1={30} x2={107} y2={12} stroke="#974315" strokeWidth={1.2} />
              <ellipse cx={130} cy={14} rx={7} ry={5} fill="#974315" opacity={0.7} />
              <line x1={137} y1={14} x2={137} y2={-4} stroke="#974315" strokeWidth={1.2} />
              <ellipse cx={158} cy={26} rx={7} ry={5} fill="#974315" opacity={0.7} />
              <line x1={165} y1={26} x2={165} y2={8} stroke="#974315" strokeWidth={1.2} />
            </svg>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mb-8 font-serif text-xl leading-[1.85] text-bege/80">
            Desenvolvo APIs, microsserviços e arquiteturas que escalam como uma orquestra em pleno ensaio. A música me
            ensinou que estrutura e liberdade coexistem — e aplico isso em cada solução que construo.
          </p>
          <p className="mb-8 -mt-2 font-serif text-base leading-[1.85] text-bege/80">
            Atualmente disponível para projetos freelance e consultorias.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="border border-verde/40 px-3.5 py-1.5 text-[0.65rem] tracking-[0.1em] text-verde uppercase transition-colors hover:border-verde hover:text-perola"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
