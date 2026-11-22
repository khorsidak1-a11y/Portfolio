import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Typewriter, Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";

const title = "Khorsid Abdul Kader – Maskinteknik, DTU | Portfolio";
const desc =
  "Portfolio for maskinteknikstuderende på DTU: CAD i Fusion 360 og SolidWorks, konstruktion, beregninger og prototyper.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

const skills = [
  ["CAD og konstruktion", "Partmodeller og assemblies i SolidWorks og Fusion 360 med fokus på funktion, pasform og montage.", "ballofix-ventil", "Se Ballofix-modellen"],
  ["Teknisk dokumentation", "Samlingstegninger og arbejdstegninger, der gør konstruktionen tydelig for andre.", "ballofix-ventil", "Se min aflevering"],
  ["Prototyper og montage", "Klargøring til 3D-print, samling af mekaniske dele og forbedringer ud fra den fysiske prototype.", "sproejtepumpe", "Se sprøjtepumpen"],
  ["Beregning og data", "Matematiske modeller, databehandling og visualisering i Python, Excel og Mathcad.", "koblede-kar", "Se model og forsøg"],
  ["Simulering og vurdering", "CFD i SimScale og sammenligning med målinger for at forstå modellens begrænsninger.", "koblede-kar", "Se CFD-projektet"],
  ["Samarbejde og projektarbejde", "Erfaring med opgavefordeling, Scrum og Trello samt vurdering af, hvad næste prototype skal forbedre.", "rc-fly", "Se RC-flyprojektet"],
] as const;

function Index() {
  return (
    <>
      <section className="blueprint relative overflow-hidden border-b">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr] md:py-20">
          <div>
            <p className="label-mono animate-rise">
              Maskinteknikstuderende · DTU · Søger studiejob
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-6xl">
              <Typewriter
                text="Khorsid Kader"
                highlight=" Kader"
                speed={40}
                delay={200}
              />
            </h1>
            <Reveal delay={150}>
              <p className="mt-6 text-2xl font-semibold sm:text-3xl">CAD, konstruktion og prototyper.</p>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                Jeg søger et studiejob, hvor jeg kan bidrage med 3D-modeller, tekniske tegninger,
                prototypearbejde og analyse. Mine projekter fra DTU og HTX viser, hvordan jeg arbejder
                fra konstruktion og beregning til montage, forsøg og forbedringer.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg"><Link to="/projekter">Se mine projekter →</Link></Button>
                <Button asChild size="lg" variant="outline"><a href="/CV_KhorsidKader.pdf" target="_blank" rel="noreferrer">Se mit CV (PDF)</a></Button>
                <Button asChild size="lg" variant="ghost"><Link to="/kontakt">Kontakt mig</Link></Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={250} className="self-end">
            <dl className="border-t font-mono text-sm">
              {[
                ["Uddannelse", "Diplomingeniør i maskinteknik · 1. semester"],
                ["Fokus", "CAD · Konstruktion · Produktion"],
                ["Omfang", "8–20 timer om ugen · København og omegn"],
                ["Arbejdsdage", "Alle hverdage og i weekenden"],
                ["Sprog", "Dansk · Engelsk"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-3 border-b py-3">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="label-mono">Udvalgte projekter</p>
            <h2 className="mt-2 text-3xl font-bold">
              <Typewriter text="Se, hvad jeg har arbejdet med" />
            </h2>
          </div>
          <Link to="/projekter" className="shrink-0 text-sm font-medium hover:text-accent">
            Alle projekter →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 150}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="label-mono">Kompetencer</p>
          <h2 className="mt-2 text-3xl font-bold">
            <Typewriter text="Hvad jeg kan bidrage med" />
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map(([t, d, slug, label], i) => (
              <Reveal key={t} delay={i * 60}>
                <div className="border-t pt-5">
                  <h3 className="text-lg font-semibold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                  <Link to="/projekter/$slug" params={{ slug }} className="mt-4 inline-block text-sm text-accent underline-offset-4 hover:underline">{label} →</Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Link to="/om" className="mt-8 inline-block text-sm text-accent">Programmer, erfaring og uddannelse →</Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20 text-center">
        <h2 className="text-3xl font-bold">
          <Typewriter text="Leder I efter en engageret studentermedhjælper?" />
        </h2>
        <Reveal delay={300}>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Jeg er tilgængelig alle hverdage og i weekenden.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:Khorsidak1@gmail.com"
              className="bg-accent px-5 py-3 font-medium text-accent-foreground transition-transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              Skriv til mig
            </a>
            <a href="/CV_KhorsidKader.pdf" target="_blank" rel="noreferrer" className="border border-foreground px-5 py-3 font-medium">
              Download CV
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
