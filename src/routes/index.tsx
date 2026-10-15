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
  ["CAD", "Fusion 360 · SolidWorks"],
  ["Tegninger", "Arbejdstegninger og tolerancer"],
  ["Mekanismer", "Samlinger og kinematik"],
  ["Analyse", "Beregninger · Python · CFD"],
  ["Prototyper", "3D-print og fysisk afprøvning"],
  ["Måling", "Skydelære og mikrometerskrue"],
];

function Index() {
  return (
    <>
      <section className="blueprint relative overflow-hidden border-b">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr] md:py-20">
          <div>
            <p className="label-mono animate-rise">
              Maskinteknik · DTU · Søger studiejob
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
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Jeg læser til diplomingeniør i maskinteknik på DTU. Jeg kan godt lide at gå fra en CAD-model til noget,
                jeg kan samle og teste — og finde ud af, hvorfor det ikke altid virker første gang.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg"><Link to="/projekter">Se mine projekter →</Link></Button>
                <Button asChild size="lg" variant="outline"><Link to="/kontakt">Kontakt mig</Link></Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={250} className="self-end">
            <dl className="border-t font-mono text-sm">
              {[
                ["Uddannelse", "Diplomingeniør, Maskinteknik – DTU"],
                ["Fokus", "CAD · Konstruktion · Produktion"],
                ["Tilgængelig", "8–20 t/uge, Kbh. og omegn"],
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
              <Typewriter text="Fra skitse til prototype" />
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
            {skills.map(([t, d], i) => (
              <Reveal key={t} delay={i * 60}>
                <div className="border-t pt-5">
                  <h3 className="text-lg font-semibold">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
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
            Jeg kan arbejde hele onsdagen, fredag eftermiddag og i weekenderne.
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
