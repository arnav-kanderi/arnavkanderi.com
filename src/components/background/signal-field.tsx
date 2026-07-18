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
  const gridY = useTransform(smooth, [0, 1], [0, -96]);
  const gridX = useTransform(smooth, [0, 1], [0, 36]);
  const haloOneRotate = useTransform(smooth, [0, 1], [0, 210]);
  const haloOneX = useTransform(smooth, [0, 1], [0, -150]);
  const haloOneY = useTransform(smooth, [0, 1], [0, 110]);
  const haloTwoRotate = useTransform(smooth, [0, 1], [0, -165]);
  const haloTwoX = useTransform(smooth, [0, 1], [0, 125]);
  const haloTwoY = useTransform(smooth, [0, 1], [0, -90]);
  const nodeOneX = useTransform(smooth, [0, 1], ["8vw", "72vw"]);
  const nodeOneY = useTransform(smooth, [0, 0.5, 1], ["72vh", "18vh", "58vh"]);
  const nodeTwoX = useTransform(smooth, [0, 1], ["82vw", "18vw"]);
  const nodeTwoY = useTransform(smooth, [0, 1], ["24vh", "76vh"]);
  const eqOneX = useTransform(smooth, [0, 1], ["-12vw", "54vw"]);
  const eqOneY = useTransform(smooth, [0, 1], [0, 80]);
  const eqTwoX = useTransform(smooth, [0, 1], ["18vw", "-58vw"]);
  const eqTwoY = useTransform(smooth, [0, 1], [0, -65]);
  const eqThreeX = useTransform(smooth, [0, 1], ["-22vw", "62vw"]);
  const eqThreeY = useTransform(smooth, [0, 1], [0, -95]);
  const eqFourX = useTransform(smooth, [0, 1], ["22vw", "-55vw"]);
  const eqFourY = useTransform(smooth, [0, 1], [0, 75]);
  const eqFiveX = useTransform(smooth, [0, 1], ["-18vw", "48vw"]);
  const eqSixX = useTransform(smooth, [0, 1], ["10vw", "-48vw"]);
  const eqSevenX = useTransform(smooth, [0, 1], ["-8vw", "62vw"]);

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
      <motion.div style={reduced ? undefined : { x: gridX, y: gridY }} className="absolute -inset-24 technical-grid opacity-[0.24]" />
      <motion.div style={reduced ? undefined : { x: haloOneX, y: haloOneY, rotate: haloOneRotate }} className="ambient-halo halo-one" />
      <motion.div style={reduced ? undefined : { x: haloTwoX, y: haloTwoY, rotate: haloTwoRotate }} className="ambient-halo halo-two" />
      <motion.div style={reduced ? undefined : { x: nodeOneX, y: nodeOneY }} className="tracking-node"><span>α</span></motion.div>
      <motion.div style={reduced ? undefined : { x: nodeTwoX, y: nodeTwoY }} className="tracking-node node-secondary"><span>β</span></motion.div>
      <div className="scroll-signal"><motion.i style={reduced ? undefined : { scaleY: smooth }} /></div>
      <div className="diagonal-beam beam-one" />
      <div className="diagonal-beam beam-two" />
      <div className="equation-field">
        <motion.div style={reduced ? undefined : { x: eqOneX, y: eqOneY }} className="quant-equation equation-bs-pde"><span>BLACK–SCHOLES / PDE</span><strong>∂V/∂t + ½σ²S² ∂²V/∂S² + rS ∂V/∂S − rV = 0</strong></motion.div>
        <motion.div style={reduced ? undefined : { x: eqTwoX, y: eqTwoY }} className="quant-equation equation-gbm"><span>GEOMETRIC BROWNIAN MOTION</span><strong>dSₜ = μSₜdt + σSₜdWₜ</strong></motion.div>
        <motion.div style={reduced ? undefined : { x: eqThreeX, y: eqThreeY }} className="quant-equation equation-ito"><span>ITÔ / LEMMA</span><strong>df = (fₜ + μSfₛ + ½σ²S²fₛₛ)dt + σSfₛdWₜ</strong></motion.div>
        <motion.div style={reduced ? undefined : { x: eqFourX, y: eqFourY }} className="quant-equation equation-call"><span>EUROPEAN CALL / CLOSED FORM</span><strong>C = S₀Φ(d₁) − Ke⁻ʳᵀΦ(d₂)</strong><small>d₁ = [ln(S₀/K) + (r + ½σ²)T] / σ√T · d₂ = d₁ − σ√T</small></motion.div>
        <motion.div style={reduced ? undefined : { x: eqFiveX }} className="quant-equation equation-greeks"><span>SENSITIVITY / GREEKS</span><strong>Δ = Φ(d₁) &nbsp; Γ = φ(d₁)/(Sσ√T)</strong><small>ν = Sφ(d₁)√T · Θ = −Sφ(d₁)σ/(2√T) − rKe⁻ʳᵀΦ(d₂)</small></motion.div>
        <motion.div style={reduced ? undefined : { x: eqSixX }} className="quant-equation equation-risk-neutral"><span>RISK-NEUTRAL VALUATION</span><strong>V₀ = e⁻ʳᵀ 𝔼^Q[H(Sₜ)]</strong></motion.div>
        <motion.div style={reduced ? undefined : { x: eqSevenX }} className="quant-equation equation-ou"><span>MEAN REVERSION / ORNSTEIN–UHLENBECK</span><strong>dXₜ = θ(μ − Xₜ)dt + σdWₜ</strong></motion.div>
      </div>
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
