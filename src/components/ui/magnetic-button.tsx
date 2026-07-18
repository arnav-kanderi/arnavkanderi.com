"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";

/**
 * Subtle magnetic hover: the button nudges a few px toward the cursor and
 * springs back on leave. Capped range keeps it tasteful rather than gimmicky.
 * Disabled entirely under prefers-reduced-motion.
 */
export function MagneticButton({
  children,
  className,
  href,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}) {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  const MAX_OFFSET = 8;

  function handlePointerMove(e: PointerEvent<HTMLElement>) {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set((relX / (rect.width / 2)) * MAX_OFFSET);
    y.set((relY / (rect.height / 2)) * MAX_OFFSET);
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  const sharedProps = {
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
    style: prefersReducedMotion ? undefined : { x: springX, y: springY },
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 25 },
    className,
  };

  if (href) {
    return (
      <motion.a href={href} {...sharedProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" onClick={onClick} {...sharedProps}>
      {children}
    </motion.button>
  );
}
