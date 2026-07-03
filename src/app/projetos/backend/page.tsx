import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import ProjectList from "@/components/ProjectList";
import { backendProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projetos Backend — Arthur Souza",
  description: "APIs, microsserviços, ETL e arquitetura desenvolvidos por Arthur Souza.",
};

export default function BackendProjectsPage() {
  return (
    <section className="px-6 py-32 sm:px-12">
      <Reveal className="mx-auto mb-6 max-w-4xl">
        <Link href="/#projetos" className="text-[0.7rem] tracking-[0.1em] text-azul uppercase hover:text-terracota">
          ← Voltar
        </Link>
      </Reveal>
      <Reveal delay={0.05}>
        <SectionHeader title="Projetos Backend" num="I" />
      </Reveal>
      <ProjectList projects={backendProjects} />
    </section>
  );
}
