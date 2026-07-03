type EqualizerProps = {
  bars?: number;
  className?: string;
  barClassName?: string;
};

/**
 * Barras de equalizador puramente decorativas. Alturas/atrasos são derivados
 * do índice (determinístico) para evitar mismatch de hidratação com valores
 * aleatórios.
 */
export default function Equalizer({ bars = 24, className = "", barClassName = "bg-terracota/30" }: EqualizerProps) {
  return (
    <div className={`flex items-end gap-[3px] ${className}`} aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className={`animate-eq-bar w-[3px] rounded-full ${barClassName}`}
          style={{
            height: `${12 + ((i * 37) % 28)}px`,
            animationDelay: `${(i % 8) * 0.12}s`,
            animationDuration: `${0.9 + (i % 5) * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}
