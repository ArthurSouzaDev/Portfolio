import { RevealGroup, RevealItem } from "@/components/Reveal";
import type { Project } from "@/lib/projects";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

const ITEM_CLASSES =
  "group grid grid-cols-[3rem_1fr_auto] items-center gap-8 border-l-2 border-transparent bg-bege px-6 py-8 transition-[background-color,border-color,padding-left] duration-300";

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <RevealGroup className="mx-auto flex max-w-4xl flex-col gap-px">
      {projects.map((project, i) => (
        <RevealItem key={`${project.name}-${i}`}>
          {project.placeholder ? (
            <div className={`${ITEM_CLASSES} cursor-default opacity-60`}>
              <ProjectContent project={project} num={ROMAN[i] ?? String(i + 1)} />
            </div>
          ) : (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer noopener"
              className={`${ITEM_CLASSES} cursor-pointer hover:border-terracota hover:bg-perola hover:pl-8`}
            >
              <ProjectContent project={project} num={ROMAN[i] ?? String(i + 1)} />
            </a>
          )}
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

function ProjectContent({ project, num }: { project: Project; num: string }) {
  return (
    <>
      <span className="font-display text-[0.65rem] tracking-[0.1em] text-terracota italic">{num}</span>
      <div>
        <p className="mb-1 font-display text-xl text-escuro">{project.name}</p>
        <p className="text-[0.65rem] tracking-[0.1em] text-azul uppercase">{project.stack}</p>
      </div>
      <span className="text-base text-terracota opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-1 group-hover:opacity-100">
        {project.placeholder ? "" : "→"}
      </span>
    </>
  );
}
