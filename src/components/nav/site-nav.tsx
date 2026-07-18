"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function SiteNav() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <nav className="flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-border bg-surface/70 px-4 py-2.5 shadow-sm backdrop-blur-xl">
        <a
          href="#home"
          className="flex items-center gap-2 font-serif text-base font-medium tracking-tight"
        >
          <span className="status-dot" /> AK
        </a>

        <ul className="hidden items-center gap-1 sm:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className={`relative ${item.id === "home" ? "hidden" : ""}`}>
              <a
                href={`#${item.id}`}
                className="relative block rounded-full px-3 py-1.5 font-sans text-sm text-muted transition-colors hover:text-foreground"
              >
                {activeId === item.id && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-accent/10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className={`relative ${
                    activeId === item.id ? "text-foreground" : ""
                  }`}
                >
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  );
}
