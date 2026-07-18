"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

function LakersMark() {
  return <Image src="/lakers-logo-transparent.png" alt="" width={447} height={447} className="personality-image lakers-image" />;
}

function CharizardMark() {
  return <Image src="/charizard-transparent.png" alt="" width={320} height={320} className="personality-image charizard-image" />;
}

function FootballMark() {
  return <svg viewBox="0 0 90 54" className="personality-svg football-svg"><defs><linearGradient id="leather" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b65339"/><stop offset="1" stopColor="#69251d"/></linearGradient></defs><path d="M3 27C14 8 29 3 45 3s31 5 42 24C76 46 61 51 45 51S14 46 3 27Z" fill="url(#leather)" stroke="#d97b60" strokeWidth="1.5"/><path d="M18 13c-4 8-4 20 0 28M72 13c4 8 4 20 0 28" fill="none" stroke="#f3eee9" strokeWidth="4"/><path d="M31 27h28M36 19v16M42 19v16M48 19v16M54 19v16" stroke="#fff" strokeWidth="2.3" strokeLinecap="round"/><path d="M9 27c11-9 23-13 36-13s25 4 36 13M9 27c11 9 23 13 36 13s25-4 36-13" fill="none" stroke="#3b100d" strokeWidth="1" opacity=".5"/></svg>;
}

export function PersonalityMarks() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 65, damping: 24, mass: 0.45 });
  const mambaRotate = useTransform(smooth, [0, 1], [3, 183]);
  const charizardRotate = useTransform(smooth, [0, 1], [-4, -144]);
  const footballRotate = useTransform(smooth, [0, 1], [6, 126]);

  return <div aria-hidden="true" className="personality-layer">
    <div className="page-mark mamba-mark"><div className="easter-egg"><motion.span className="mark-spinner" style={reduced ? undefined : { rotate: mambaRotate }}><LakersMark /></motion.span><span>LAKERS<br />8 · 24</span></div></div>
    <div className="page-mark charizard-mark"><div className="easter-egg"><motion.span className="mark-spinner" style={reduced ? undefined : { rotate: charizardRotate }}><CharizardMark /></motion.span><span>CHARIZARD / 006<br />FIRE · FLYING</span></div></div>
    <div className="page-mark football-mark"><div className="easter-egg"><motion.span className="mark-spinner" style={reduced ? undefined : { rotate: footballRotate }}><FootballMark /></motion.span><span>FOOTBALL<br />4TH &amp; 01</span></div></div>
  </div>;
}
