import Hero from "@/components/home/Hero";
import Sobre from "@/components/home/Sobre";
import Skills from "@/components/home/Skills";
import ProjetosOverview from "@/components/home/ProjetosOverview";
import Contato from "@/components/home/Contato";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Skills />
      <ProjetosOverview />
      <Contato />
    </>
  );
}
