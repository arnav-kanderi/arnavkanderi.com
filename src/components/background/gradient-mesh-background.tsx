"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Ambient, scroll-reactive backdrop shared by the whole page.
 *
 * Three large blurred blobs sit behind all content at low opacity. Each blob
 * has two independent motions layered on top of each other via nested
 * elements (so their transforms don't clobber one another):
 *  - an outer transform driven by scroll progress (position/opacity/rotation)
 *  - an inner CSS keyframe "drift" for slow idle motion even while static
 *
 * Only `transform` and `opacity` are animated, so this stays cheap on the
 * compositor thread and doesn't trigger layout/paint on scroll or on mobile.
 * `prefers-reduced-motion` disables both the scroll-linked and idle motion,
 * leaving a calm static gradient.
 */
export function GradientMeshBackground() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const blobOneY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const blobOneOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.3, 0.15]);

  const blobTwoY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const blobTwoX = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const blobThreeY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const blobThreeRotate = useTransform(scrollYProgress, [0, 1], [0, 25]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      <motion.div
        style={
          prefersReducedMotion
            ? undefined
            : { y: blobOneY, opacity: blobOneOpacity }
        }
        className="absolute -left-1/4 -top-1/4 h-[60vw] w-[60vw] max-h-[700px] max-w-[700px]"
      >
        <div
          className={`h-full w-full rounded-full bg-[var(--glow-primary)]/70 ${
            prefersReducedMotion ? "" : "animate-drift-slow"
          }`}
          style={{ filter: "blur(110px)" }}
        />
      </motion.div>

      <motion.div
        style={
          prefersReducedMotion ? undefined : { y: blobTwoY, x: blobTwoX }
        }
        className="absolute right-[-15%] top-1/4 h-[50vw] w-[50vw] max-h-[600px] max-w-[600px]"
      >
        <div
          className={`h-full w-full rounded-full bg-[var(--glow-secondary)]/20 ${
            prefersReducedMotion ? "" : "animate-drift-medium"
          }`}
          style={{ filter: "blur(100px)" }}
        />
      </motion.div>

      <motion.div
        style={
          prefersReducedMotion
            ? undefined
            : { y: blobThreeY, rotate: blobThreeRotate }
        }
        className="absolute bottom-[-20%] left-1/4 h-[55vw] w-[55vw] max-h-[650px] max-w-[650px]"
      >
        <div
          className={`h-full w-full rounded-full bg-[var(--glow-secondary)]/15 ${
            prefersReducedMotion ? "" : "animate-drift-slow"
          }`}
          style={{ filter: "blur(120px)" }}
        />
      </motion.div>
    </div>
  );
}
