"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";

type Note = {
  symbol: string;
  top: string;
  right: string;
  size: string;
  delay: number;
  /** Quanto a nota se desloca em px ao mover o mouse — cria profundidade de paralaxe. */
  depth: number;
};

const NOTES: Note[] = [
  { symbol: "♩", top: "25%", right: "8%", size: "2.5rem", delay: 0, depth: 18 },
  { symbol: "♪", top: "55%", right: "20%", size: "1.8rem", delay: 2, depth: 30 },
  { symbol: "♫", top: "70%", right: "12%", size: "3rem", delay: 4, depth: 12 },
];

export default function FloatingNotes() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 15, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 15, mass: 0.6 });

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {NOTES.map((note, i) => (
        <ParallaxNote key={i} note={note} springX={springX} springY={springY} />
      ))}
    </div>
  );
}

function ParallaxNote({
  note,
  springX,
  springY,
}: {
  note: Note;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
}) {
  const x = useTransform(springX, (v) => v * note.depth);
  const y = useTransform(springY, (v) => v * note.depth);

  return (
    <motion.div className="absolute" style={{ top: note.top, right: note.right, x, y }}>
      <span
        className="animate-float-note block text-terracota/[0.07] select-none"
        style={{ fontSize: note.size, animationDelay: `${note.delay}s` }}
      >
        {note.symbol}
      </span>
    </motion.div>
  );
}
