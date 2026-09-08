"use client";

import { useId, useState } from "react";

type FaqCategoria = {
  titulo: string;
  itens: readonly {
    pergunta: string;
    resposta: string;
  }[];
};

type FaqAccordionProps = {
  categorias: readonly FaqCategoria[];
};

export default function FaqAccordion({ categorias }: FaqAccordionProps) {
  const accordionId = useId();
  const [aberto, setAberto] = useState<string | null>(null);
  const [animar, setAnimar] = useState(false);

  return (
    <div className="grid gap-x-10 gap-y-12 lg:grid-cols-3">
      {categorias.map((categoria, categoriaIndex) => {
        const tituloId = `${accordionId}-categoria-${categoriaIndex}`;

        return (
          <section key={categoria.titulo} aria-labelledby={tituloId}>
            <h3
              id={tituloId}
              className="mb-3 text-[0.65rem] tracking-[0.15em] text-terracota uppercase"
            >
              {categoria.titulo}
            </h3>

            <div className="border-t border-terracota/15">
              {categoria.itens.map((item, itemIndex) => {
                const itemId = `${categoriaIndex}-${itemIndex}`;
                const botaoId = `${accordionId}-botao-${itemId}`;
                const painelId = `${accordionId}-painel-${itemId}`;
                const estaAberto = aberto === itemId;
                const transicao = animar
                  ? "transition-[grid-template-rows,opacity] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none"
                  : "transition-none";

                return (
                  <div key={item.pergunta} className="border-b border-terracota/15">
                    <h4>
                      <button
                        id={botaoId}
                        type="button"
                        aria-expanded={estaAberto}
                        aria-controls={painelId}
                        onPointerDown={() => setAnimar(true)}
                        onKeyDown={() => setAnimar(false)}
                        onClick={() => setAberto(estaAberto ? null : itemId)}
                        className="flex min-h-12 w-full cursor-pointer items-center justify-between gap-4 py-4 text-left text-[0.8rem] leading-relaxed text-escuro transition-colors hover:text-terracota focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracota"
                      >
                        <span>{item.pergunta}</span>
                        <span
                          aria-hidden="true"
                          className={`shrink-0 text-lg leading-none text-terracota motion-reduce:transition-none ${
                            animar
                              ? "transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]"
                              : "transition-none"
                          } ${estaAberto ? "rotate-45" : "rotate-0"}`}
                        >
                          +
                        </span>
                      </button>
                    </h4>

                    <div
                      id={painelId}
                      aria-labelledby={botaoId}
                      aria-hidden={!estaAberto}
                      className={`grid ${transicao} ${
                        estaAberto ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pr-7 pb-5 text-[0.75rem] leading-[1.75] text-texto/70">
                          {item.resposta}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
