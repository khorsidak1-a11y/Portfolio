import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { projects, type Project } from "@/lib/projects";
import { smallProjects } from "@/lib/experience";
import { Typewriter, Reveal } from "@/components/motion";

const title = "Projekter – Khorsid Abdul Kader";
const desc = "Robotarm, RC-fly, CFD af koblede kar og en GSM-telefonløsning – ingeniørprojekter fra problem til prototype.";

export const Route = createFileRoute("/projekter/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <p className="label-mono">{projects.length} projekter · Produktstudier</p>
      <h1 className="mt-2 text-4xl font-bold sm:text-6xl"><Typewriter text="Projekter" speed={70} /></h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Konstruktion, beregninger og forsøg fra HTX og mit studie på DTU. Her er både det, der lykkedes, og det, jeg måtte arbejde videre med.
      </p>

      <div className="mt-16 space-y-24">
        {projects.map((p, i) => <Row key={p.slug} p={p} flip={i % 2 === 1} />)}
      </div>

      <section className="mt-24 border-t pt-12">
        <p className="label-mono">Små projekter</p>
        <h2 className="mt-3 text-3xl font-semibold">Et nærmere blik på hverdagsmekanik</h2>
        {smallProjects.map((project) => (
          <article key={project.title} className="mt-10">
            <Reveal>
              <p className="label-mono">{project.category}</p>
              <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
              <div className="mt-5 grid gap-5 text-muted-foreground md:grid-cols-2">
                <p className="leading-relaxed">{project.introduction}</p>
                <p className="leading-relaxed">{project.process}</p>
              </div>
            </Reveal>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {project.observations.map(([heading, text]) => (
                <Reveal key={heading} className="border-t pt-5">
                  <h4 className="font-semibold">{heading}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-8 max-w-3xl border-l-2 border-accent pl-5">
              <h4 className="font-semibold">Det tog jeg med mig</h4>
              <p className="mt-2 leading-relaxed text-muted-foreground">{project.learned}</p>
            </Reveal>
          </article>
        ))}
      </section>
    </section>
  );
}

function Row({ p, flip }: { p: Project; flip: boolean }) {
  const [hover, setHover] = useState(false);
  return (
    <Reveal>
      <Link
        to="/projekter/$slug"
        params={{ slug: p.slug }}
        className="group grid items-center gap-8 md:grid-cols-[1.2fr_1fr]"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className={`relative aspect-[10/7] overflow-hidden border transition-shadow duration-500 group-hover:shadow-glow ${flip ? "md:order-2" : ""}`}>
          <img src={p.image} alt={p.title} loading="lazy" width={1280} height={896}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${hover && p.drawing ? "scale-110 opacity-0" : "scale-100 opacity-100"}`} />
          {p.drawing && (
            <img src={p.drawing} alt={`Teknisk tegning – ${p.title}`} loading="lazy" width={1280} height={896}
              className={`absolute inset-0 h-full w-full object-contain bg-card transition-all duration-700 ${hover ? "scale-100 opacity-100" : "scale-95 opacity-0"}`} />
          )}
          <span className="absolute left-3 top-3 bg-background/90 px-2 py-1 font-mono text-xs">{p.no}</span>
          {p.drawing && <span className="label-mono absolute bottom-3 right-3 bg-background/90 px-2 py-1">{hover ? "Teknisk tegning" : "Foto / tegning"}</span>}
        </div>
        <div>
          <span className="font-mono text-sm text-accent">Projekt {p.no}</span>
          <div className="mt-2 flex gap-3"><span className="label-mono">{p.category}</span><span className="label-mono">· {p.year}</span></div>
          <h3 className="mt-2 text-3xl font-semibold">{p.title}</h3>
          <p className="label-mono mt-5 text-accent">Problem</p>
          <p className="mt-1 line-clamp-4 text-muted-foreground">{p.problem}</p>
          <span className="mt-5 inline-block border-b border-accent pb-0.5 text-sm transition-all group-hover:pr-4">Se projektet →</span>
        </div>
      </Link>
    </Reveal>
  );
}
