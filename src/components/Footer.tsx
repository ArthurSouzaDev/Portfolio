export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 bg-escuro px-6 py-8 sm:px-12">
      <p className="text-[0.65rem] tracking-[0.1em] text-perola/30">
        © {new Date().getFullYear()} Arthur Souza — Todos os direitos reservados
      </p>
      <p className="flex items-center gap-1.5 text-[0.65rem] tracking-[0.08em] text-verde">
        ♩ Feito com código e compasso
      </p>
    </footer>
  );
}
