import Image from "next/image";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import type { Project } from "@/lib/projects";

export default function CaseGrid({ projects }: { projects: Project[] }) {
  return (
    <RevealGroup className="mx-auto grid max-w-4xl gap-px sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <RevealItem key={project.href}>
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex h-full flex-col border-l-2 border-transparent bg-bege transition-[background-color,border-color] duration-300 hover:border-terracota hover:bg-perola"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-perola/60">
              {project.imagem ? (
                <Image
                  src={project.imagem}
                  alt={`Captura de tela do site ${project.name}`}
                  fill
                  sizes="(min-width: 1024px) 22rem, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                // Placeholder até as capturas de tela entrarem em /public.
                <div
                  className="flex h-full items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="font-display text-4xl text-terracota/25 italic">
                    {project.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-2 px-6 py-6">
              {project.nicho && (
                <p className="text-[0.6rem] tracking-[0.15em] text-terracota uppercase">
                  {project.nicho}
                </p>
              )}
              <p className="font-display text-lg leading-tight text-escuro">{project.name}</p>
              {project.descricao && (
                <p className="text-[0.75rem] leading-relaxed text-texto/70">{project.descricao}</p>
              )}
              <span className="mt-auto pt-3 text-[0.65rem] tracking-[0.1em] text-azul uppercase transition-colors group-hover:text-terracota">
                Ver site →
              </span>
            </div>
          </a>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
