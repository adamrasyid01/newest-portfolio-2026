"use client";

import { motion } from "framer-motion";

const backgroundLines = [
  "FRONTEND DEVELOPER",
  "NEXT.JS",
  "TYPESCRIPT",
  "REACT",
  "TAILWIND CSS",
  "SHADCN/UI",
  "WEB INTERFACE",
  "PORTFOLIO",
];

export function PortfolioBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--accent)/0.28),transparent_34%),radial-gradient(circle_at_bottom_right,hsl(var(--primary)/0.24),transparent_42%)]" />

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.75, 0.45],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-32 top-20 size-80 rounded-full bg-accent/30 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -45, 0],
          y: [0, 35, 0],
          scale: [1.08, 1, 1.08],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-32 bottom-40 size-96 rounded-full bg-primary/30 blur-3xl"
      />

      <div className="absolute inset-0 flex -rotate-6 flex-col justify-center gap-8">
        {backgroundLines.map((text, index) => (
          <motion.div
            key={text}
            animate={{
              x: index % 2 === 0 ? ["-45%", "0%"] : ["0%", "-45%"],
            }}
            transition={{
              duration: 24 + index * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="whitespace-nowrap text-5xl font-black tracking-tight text-muted-foreground/16 sm:text-7xl lg:text-8xl"
          >
            {text} • {text} • {text} • {text} •
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 bg-background/20" />
    </div>
  );
}
