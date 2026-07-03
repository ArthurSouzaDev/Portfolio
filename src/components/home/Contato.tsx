import { Reveal } from "@/components/Reveal";

const LINKS = [
  { href: "mailto:arthursouzadev13@gmail.com", icon: "✉", label: "arthursouzadev13@gmail.com" },
  { href: "https://github.com/ArthurSouzaDev", icon: "⌥", label: "github.com/ArthurSouzaDev" },
  { href: "https://www.linkedin.com/in/arthursouzs/", icon: "◈", label: "linkedin.com/in/arthursouzs" },
];

export default function Contato() {
  return (
    <section id="contato" className="relative overflow-hidden bg-terracota px-6 py-28 sm:px-12">
      <div
        className="pointer-events-none absolute -right-20 -bottom-20 h-[300px] w-[300px] rounded-full border-[60px] border-perola/[0.07]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-4xl flex-wrap items-end justify-between gap-12">
        <Reveal>
          <h2 className="max-w-lg font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.15] text-perola">
            Vamos criar algo que <em className="text-bege not-italic italic">vale a pena ouvir.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2} className="flex flex-col gap-4">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
              className="flex items-center gap-3 text-[0.75rem] tracking-[0.1em] text-perola opacity-70 transition-opacity hover:opacity-100"
            >
              <span className="text-lg">{link.icon}</span> {link.label}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
