"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import type { CSSProperties } from "react";

const paths = [
  "M0 132 C90 132 105 48 190 48 S292 190 380 130 S500 36 610 104 S730 174 860 86 S970 42 1100 104",
  "M0 174 C120 78 184 212 286 104 S450 84 548 158 S720 36 828 116 S998 158 1100 62",
  "M0 92 C102 182 188 40 300 124 S474 192 570 82 S760 152 858 106 S1010 24 1100 88",
];

export function SignalField() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 70, damping: 24, mass: 0.4 });
  const rotate = useTransform(smooth, [0, 1], [-7, 9]);
  const y = useTransform(smooth, [0, 1], [80, -120]);
  const scaleX = useTransform(smooth, [0, 1], [0.82, 1.12]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-[5] overflow-hidden opacity-60">
      <motion.svg
        viewBox="0 0 1100 240"
        preserveAspectRatio="none"
        style={reduced ? undefined : { rotate, y, scaleX }}
        className="absolute left-[-8vw] top-[42vh] h-[38vh] w-[116vw] overflow-visible"
      >
        <defs>
          <linearGradient id="signal-gradient" x1="0" x2="1">
            <stop offset="0" stopColor="var(--glow-secondary)" stopOpacity="0" />
            <stop offset=".48" stopColor="var(--glow-secondary)" stopOpacity=".7" />
            <stop offset="1" stopColor="var(--foreground)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {paths.map((path, index) => (
          <motion.path
            key={path}
            d={path}
            fill="none"
            stroke="url(#signal-gradient)"
            strokeWidth={index === 0 ? 1.4 : 0.65}
            strokeDasharray={index === 0 ? "5 8" : "2 12"}
            initial={reduced ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: index === 0 ? 0.7 : 0.3 }}
            transition={{ duration: 2.2, delay: 0.5 + index * 0.2, ease: "easeInOut" }}
          />
        ))}
      </motion.svg>
      <div className="absolute inset-0 technical-grid opacity-[0.18]" />
      <div className="ambient-halo halo-one" />
      <div className="ambient-halo halo-two" />
      <div className="signal-scan" />
      <div className="particle-field">
        {Array.from({ length: 18 }, (_, index) => (
          <i key={index} style={{ "--i": index } as CSSProperties} />
        ))}
      </div>
      <div className="coordinate-label coord-one">35.0017° N / 80.6701° W</div>
      <div className="coordinate-label coord-two">SIGNAL LOCKED · AK_001</div>
    </div>
  );
}
