import { GradientMeshBackground } from "@/components/background/gradient-mesh-background";
import { SiteNav } from "@/components/nav/site-nav";
import { Hero } from "@/components/sections/hero";
import { SignalField } from "@/components/background/signal-field";
import { PortfolioSections } from "@/components/sections/portfolio-sections";
import { PersonalityMarks } from "@/components/background/personality-marks";
import { site } from "@/data/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Student",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Waxhaw",
    addressRegion: "NC",
    addressCountry: "US",
  },
  url: "https://arnavkanderi.com",
  sameAs: [site.contact.github],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
