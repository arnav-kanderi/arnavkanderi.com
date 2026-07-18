"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { fadeUp, fadeUpReduced, staggerContainer } from "@/lib/motion";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const item = prefersReducedMotion ? fadeUpReduced : fadeUp;

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pb-16 pt-28 sm:px-10 lg:px-16"
    >
      <motion.div
        variants={staggerContainer(prefersReducedMotion ? 0.06 : 0.14, 0.1)}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-7xl"
      >
        <motion.p
          variants={item}
          className="mb-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted"
        >
          <span className="status-dot" /> Based in {site.location} · Available to collaborate
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-6xl font-serif text-[clamp(4.2rem,11vw,10rem)] font-medium leading-[0.82] tracking-[-0.065em]"
        >
          Arnav <span className="text-muted">Kanderi.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-10 max-w-xl font-sans text-xl leading-snug sm:ml-[36%] sm:text-2xl"
        >
          {site.headline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-4 sm:ml-[36%]"
        >
          <MagneticButton
            href={`mailto:${site.contact.email}`}
            className="inline-flex items-center rounded-full bg-accent px-6 py-3 font-sans text-sm font-medium text-accent-foreground shadow-sm transition-shadow hover:shadow-lg"
          >
            Start a conversation ↗
          </MagneticButton>

          <motion.a
            href={site.contact.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="inline-flex items-center rounded-full border border-border px-6 py-3 font-sans text-sm font-medium transition-colors hover:bg-accent/5"
          >
            GitHub
          </motion.a>

          <motion.a
            href={site.contact.resumeHref}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="inline-flex items-center rounded-full border border-border px-6 py-3 font-sans text-sm font-medium transition-colors hover:bg-accent/5"
          >
            Resume
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div variants={item} className="absolute bottom-7 left-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.2em] text-muted sm:left-10 lg:left-16"><span className="scroll-line" /> Scroll to explore</motion.div>
    </section>
  );
}
