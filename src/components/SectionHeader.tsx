export default function SectionHeader({ title, num }: { title: string; num: string }) {
  return (
    <div className="mx-auto mb-16 flex max-w-4xl items-baseline gap-6">
      <h2 className="font-display text-4xl text-escuro">{title}</h2>
      <div className="h-px flex-1 bg-terracota/20" />
      <span className="text-[0.65rem] tracking-[0.15em] text-terracota">{num}</span>
    </div>
  );
}
