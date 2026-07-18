import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";

function SectionLabel({ children, number }: { children: string; number: string }) {
  return <p className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-muted"><span className="text-[var(--glow-secondary)]">{number}</span><span className="h-px w-8 bg-border" />{children}</p>;
}

export function PortfolioSections() {
  return (
    <>
      <section id="about" className="section-shell min-h-screen py-32 sm:py-44">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <Reveal>
          <SectionLabel number="01">Profile / thesis</SectionLabel>
          <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
            I like problems where <em className="font-normal text-muted">mathematics meets uncertainty.</em>
          </h2>
          <div className="profile-separator" aria-hidden="true"><span /></div>
          <p className="bio-copy max-w-xl">{site.bio}</p>
        </Reveal>
        <Reveal delay={0.15} className="lg:justify-self-end">
          <div className="portrait-wrap w-full max-w-md">
            <div className="portrait-frame">
              <Image
                src="/Headshot.jpg"
                alt={`${site.name} portrait`}
                width={1040}
                height={1560}
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="portrait-image"
                priority
              />
            </div>
          </div>
        </Reveal>
        </div>
        <Reveal delay={0.1} className="mt-20">
          <div className="data-panel p-3">
            <div className="flex items-center justify-between border-b border-border px-4 py-3 font-mono text-[10px] uppercase tracking-[.2em] text-muted"><span>live profile</span><span className="flex items-center gap-2"><i className="status-dot" /> available</span></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">{site.highlights.map((item, i) => <div key={item.label} className="group flex min-h-36 flex-col justify-between border-b border-border px-4 py-5 sm:border-r lg:border-b-0 last:border-r-0"><span className="font-mono text-[10px] text-muted">0{i + 1} / {item.label}</span><strong className="mt-8 font-serif text-xl font-medium transition-transform group-hover:-translate-y-1">{item.value}</strong></div>)}</div>
          </div>
        </Reveal>
      </section>

      <section id="projects" className="section-shell py-32 sm:py-44">
        <Reveal><SectionLabel number="02">Selected builds</SectionLabel><div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 className="font-serif text-5xl tracking-[-.04em] sm:text-7xl">Proof of work.</h2><p className="max-w-sm text-sm leading-6 text-muted">Systems designed to test ideas, expose assumptions, and make complicated data easier to reason about.</p></div></Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, i) => <Reveal key={project.title} delay={i * .1}><a href={project.repoHref} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`} className="block"><article className="project-card group relative flex min-h-[460px] flex-col overflow-hidden rounded-[2rem] border border-border p-7 sm:p-10"><div className="project-orbit" /><div className="relative z-10 flex items-start justify-between font-mono text-[10px] uppercase tracking-[.2em] text-muted"><span>{project.index} / {project.kicker}</span><span className="repo-arrow">GitHub ↗</span></div><div className="relative z-10 mt-auto"><p className="mb-4 font-mono text-xs text-[var(--glow-secondary)]">{project.metric.value} <span className="text-muted">{project.metric.label}</span></p><h3 className="max-w-lg font-serif text-3xl leading-tight sm:text-4xl">{project.title}</h3><p className="mt-5 max-w-lg leading-7 text-muted">{project.description}</p><div className="mt-7 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-border bg-background/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider">{tag}</span>)}</div></div></article></a></Reveal>)}
        </div>
      </section>

      <section id="experience" className="section-shell min-h-screen py-32 sm:py-44">
        <Reveal><SectionLabel number="03">Current trajectory</SectionLabel><h2 className="max-w-4xl font-serif text-5xl tracking-[-.04em] sm:text-7xl">Learning in public.<br/><span className="text-muted">Building with intent.</span></h2></Reveal>
        <div className="mt-20 border-t border-border">
          {site.currently.map((item, i) => <Reveal key={item} delay={i * .07}><div className="timeline-row grid gap-3 border-b border-border py-8 sm:grid-cols-[80px_1fr_auto] sm:items-center"><span className="font-mono text-[10px] text-[var(--glow-secondary)]">0{i + 1}</span><h3 className="font-serif text-2xl sm:text-3xl">{item}</h3><span className="font-mono text-[10px] uppercase tracking-[.2em] text-muted">In progress</span></div></Reveal>)}
        </div>
      </section>

      <section id="contact" className="section-shell flex min-h-[88vh] flex-col justify-center py-32 text-center">
        <Reveal><SectionLabel number="04">Open channel</SectionLabel><p className="font-mono text-xs uppercase tracking-[.24em] text-muted">Have an ambitious problem?</p><a href={`mailto:${site.contact.email}`} className="contact-link mt-6 inline-block font-serif text-[clamp(3rem,10vw,9rem)] leading-none tracking-[-.06em]">Let&apos;s talk.</a><div className="mx-auto mt-12 flex max-w-xl flex-wrap justify-center gap-3"><a className="pill-link" href={site.contact.github} target="_blank" rel="noreferrer">GitHub ↗</a><a className="pill-link" href={site.contact.resumeHref} target="_blank" rel="noreferrer">Résumé ↗</a><a className="pill-link" href={`mailto:${site.contact.email}`}>Email ↗</a></div></Reveal>
      </section>
    </>
  );
}
