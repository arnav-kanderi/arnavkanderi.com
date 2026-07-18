import { GradientMeshBackground } from "@/components/background/gradient-mesh-background";
import { SiteNav } from "@/components/nav/site-nav";
import { Hero } from "@/components/sections/hero";
import { SignalField } from "@/components/background/signal-field";
import { PortfolioSections } from "@/components/sections/portfolio-sections";
import { PersonalityMarks } from "@/components/background/personality-marks";

export default function Home() {
  return (
    <>
      <GradientMeshBackground />
      <SignalField />
      <SiteNav />
      <main className="relative">
        <PersonalityMarks />
        <Hero />
        <PortfolioSections />
      </main>
    </>
  );
}
