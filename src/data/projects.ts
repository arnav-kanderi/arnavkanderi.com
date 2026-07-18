/**
 * Add or edit project cards here — the Projects section renders this list directly.
 * `href`/`repoHref` are optional; omit either to hide that link on the card.
 */
export interface Project {
  title: string;
  index: string;
  kicker: string;
  description: string;
  tags: string[];
  metric: { value: string; label: string };
  href?: string;
  repoHref?: string;
}

export const projects: Project[] = [
  {
    index: "01",
    title: "Stochastic Monte Carlo Simulation",
    kicker: "Computational finance",
    description:
      "A simulation engine for exploring stochastic price paths, risk distributions, and the behavior hidden behind a single expected value.",
    tags: ["Python", "Monte Carlo", "Quant Finance"],
    metric: { value: "10K+", label: "simulated paths" },
    href: undefined, // e.g. "https://your-demo-or-writeup.com"
    repoHref: "https://github.com/arnav-kanderi/Monte-Carlo-Simulations-FSA-25-26",
  },
  {
    index: "02",
    title: "Quantopolis",
    kicker: "Markets, made legible",
    description:
      "An evolving quantitative research workspace built to turn noisy market data into clear, testable signals and useful visual narratives.",
    tags: ["Data Engineering", "Research", "Visualization"],
    metric: { value: "Live", label: "research system" },
    href: undefined,
    repoHref: "https://github.com/arnav-kanderi/finance-platform",
  },
];
