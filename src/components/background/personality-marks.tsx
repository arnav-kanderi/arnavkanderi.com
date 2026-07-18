"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

function LakersMark() {
  return <Image src="/lakers-logo-transparent.png" alt="" width={447} height={447} className="personality-image lakers-image" />;
}

function CharizardMark() {
  return <Image src="/charizard-transparent.png" alt="" width={320} height={320} className="personality-image charizard-image" />;
}

function PanthersMark() {
  return <Image src="/panthers-transparent.png" alt="" width={305} height={165} className="personality-image panthers-image" />;
}

export function PersonalityMarks() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 65, damping: 24, mass: 0.45 });
  const mambaRotate = useTransform(smooth, [0, 1], [3, 183]);
  const charizardRotate = useTransform(smooth, [0, 1], [-4, -144]);
  const panthersRotate = useTransform(smooth, [0, 1], [6, 96]);

  return <div aria-hidden="true" className="personality-layer">
    <div className="page-mark mamba-mark"><motion.span className="mark-spinner" style={reduced ? undefined : { rotate: mambaRotate }}><LakersMark /></motion.span></div>
    <div className="page-mark charizard-mark"><div className="easter-egg"><motion.span className="mark-spinner" style={reduced ? undefined : { rotate: charizardRotate }}><CharizardMark /></motion.span><span>CHARIZARD / 006<br />FIRE · FLYING</span></div></div>
    <div className="page-mark panthers-mark"><div className="easter-egg"><motion.span className="mark-spinner" style={reduced ? undefined : { rotate: panthersRotate }}><PanthersMark /></motion.span><span>CAROLINA<br />KEEP POUNDING</span></div></div>
  </div>;
}
