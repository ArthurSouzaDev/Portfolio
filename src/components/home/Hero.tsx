import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import FloatingNotes from "@/components/FloatingNotes";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-16 sm:px-12">
      <HeroStaff />
      <FloatingNotes />

      <Reveal className="relative z-10 max-w-2xl">
        <p className="mb-6 flex items-center gap-3 text-[0.65rem] tracking-[0.2em] text-azul uppercase">
          <span className="block h-px w-8 bg-azul" />
          Portfólio — Backend Dev &amp; Músico
        </p>
        <h1 className="mb-6 font-display text-[clamp(3rem,7vw,6rem)] leading-[1.05] text-escuro">
          Código que
          <br />
          <em className="text-terracota not-italic italic">ressoa.</em>
        </h1>
        <p className="mb-12 max-w-md text-[0.8rem] leading-[1.9] text-texto/60">
          Apaixonado pelo Backend. Cada sistema tem sua própria partitura — e eu a escrevo linha a linha.
        </p>
        <Link
          href="#contato"
          className="inline-flex items-center gap-2.5 border border-terracota px-7 py-3.5 text-[0.72rem] tracking-[0.12em] text-terracota uppercase transition-colors hover:bg-terracota hover:text-perola"
        >
          ↳ Falar sobre seu projeto
        </Link>
      </Reveal>
    </section>
  );
}

function HeroStaff() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 1400 800" preserveAspectRatio="none" className="h-full w-full">
        <g opacity={0.06} stroke="#974315" strokeWidth={1}>
          {/* Pauta 1 */}
          <line x1={0} y1={160} x2={1400} y2={160} />
          <line x1={0} y1={175} x2={1400} y2={175} />
          <line x1={0} y1={190} x2={1400} y2={190} />
          <line x1={0} y1={205} x2={1400} y2={205} />
          <line x1={0} y1={220} x2={1400} y2={220} />
          {/* Pauta 2 */}
          <line x1={0} y1={420} x2={1400} y2={420} />
          <line x1={0} y1={435} x2={1400} y2={435} />
          <line x1={0} y1={450} x2={1400} y2={450} />
          <line x1={0} y1={465} x2={1400} y2={465} />
          <line x1={0} y1={480} x2={1400} y2={480} />
          {/* Pauta 3 */}
          <line x1={0} y1={640} x2={1400} y2={640} />
          <line x1={0} y1={655} x2={1400} y2={655} />
          <line x1={0} y1={670} x2={1400} y2={670} />
          <line x1={0} y1={685} x2={1400} y2={685} />
          <line x1={0} y1={700} x2={1400} y2={700} />
          {/* Notas decorativas na pauta 1 */}
          <ellipse cx={200} cy={183} rx={9} ry={6} fill="#974315" opacity={0.5} />
          <line x1={209} y1={183} x2={209} y2={148} stroke="#974315" strokeWidth={1.5} />
          <ellipse cx={340} cy={197} rx={9} ry={6} fill="#974315" opacity={0.5} />
          <line x1={349} y1={197} x2={349} y2={162} stroke="#974315" strokeWidth={1.5} />
          <ellipse cx={460} cy={168} rx={9} ry={6} fill="#974315" opacity={0.5} />
          <line x1={469} y1={168} x2={469} y2={133} stroke="#974315" strokeWidth={1.5} />
          <ellipse cx={580} cy={190} rx={9} ry={6} fill="#974315" opacity={0.5} />
          <line x1={589} y1={190} x2={589} y2={155} stroke="#974315" strokeWidth={1.5} />
          <ellipse cx={700} cy={175} rx={9} ry={6} fill="#974315" opacity={0.5} />
          <line x1={709} y1={175} x2={709} y2={140} stroke="#974315" strokeWidth={1.5} />
          {/* Clave de sol estilizada */}
          <text x={60} y={215} fontSize={60} fill="#974315" opacity={0.4} fontFamily="serif">
            𝄞
          </text>
          <text x={60} y={475} fontSize={60} fill="#974315" opacity={0.4} fontFamily="serif">
            𝄞
          </text>
          {/* Notas pauta 2 */}
          <ellipse cx={250} cy={443} rx={9} ry={6} fill="#974315" opacity={0.5} />
          <line x1={259} y1={443} x2={259} y2={408} stroke="#974315" strokeWidth={1.5} />
          <ellipse cx={400} cy={428} rx={9} ry={6} fill="#974315" opacity={0.5} />
          <line x1={409} y1={428} x2={409} y2={393} stroke="#974315" strokeWidth={1.5} />
          <ellipse cx={520} cy={458} rx={9} ry={6} fill="#974315" opacity={0.5} />
          <line x1={529} y1={458} x2={529} y2={423} stroke="#974315" strokeWidth={1.5} />
          {/* Colcheia flag */}
          <path d="M349 162 Q370 148 360 135" stroke="#974315" strokeWidth={1.5} fill="none" />
        </g>
      </svg>
    </div>
  );
}
