import { createFileRoute } from "@tanstack/react-router";
import { Typewriter, Reveal } from "@/components/motion";
import { additionalSoftware, hardwarePlatforms } from "@/lib/experience";

const title = "Om mig – Khorsid Abdul Kader";
const desc = "Uddannelse, erhvervserfaring, IT-programmer, sprog og certifikater for maskinteknikstuderende på DTU.";

export const Route = createFileRoute("/om")({
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
  component: About,
});

const timeline = [
  ["2026 – 2030", "Diplomingeniør i Maskinteknik, DTU Ballerup", "1. semester. Interesse for CAD, konstruktion og produktion."],
  ["Jun – sep 2026", "Pakkeomdeler, PostNord Næstved", "Ansvar for sikker og rettidig levering i et fysisk krævende arbejde. Bevarede overblikket under tidspres, prioriterede opgaver selvstændigt og håndterede kundehenvendelser roligt og professionelt."],
  ["2023 – 2026", "HTX, EUC Sjælland Næstved", "Matematik, fysik og teknikfag DDU A. Gennemsnit 9. 12 i RC-fly og robotarm."],
  ["2023 – 2026", "Ungarbejder, Netto Næstved", "Kundeservice, kasse og vareopfyldning i travle perioder."],
  ["2023 – 2024", "Næstved Unge Grønne Iværksættere", "Projekt om unges privatøkonomi, præsenteret for bankrådgivere."],
];

const tools = [
  ["Fusion 360", "4½ år"],
  ["Excel", "6 år"],
  ["Mathcad", "3 år"],
  ["Python", "3 år"],
  ["SimScale (CFD)", "2 år"],
  ["SolidWorks", "1 år"],
];

function About() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="label-mono">Om mig</p>
      <h1 className="mt-2 text-4xl font-bold sm:text-5xl"><Typewriter text="Struktureret, praktisk og nysgerrig." highlight="nysgerrig." /></h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Jeg kan lide at forstå, hvordan ting virker – og så bygge dem bedre. Fra PostNord har jeg lært at planlægge
        mine egne opgaver og levere under tidspres. I fritiden går jeg op i styrketræning og teknik.
      </p>

      <div className="mt-16 grid gap-16 lg:grid-cols-[1.4fr_1fr]">
        <section>
          <h2 className="label-mono">Uddannelse & erfaring</h2>
          <ol className="mt-6 border-l">
            {timeline.map(([d, t, s]) => (
              <Reveal key={t}><li className="relative pb-8 pl-6">
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 bg-accent" />
                <p className="font-mono text-xs text-muted-foreground">{d}</p>
                <h3 className="mt-1 font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s}</p>
              </li></Reveal>
            ))}
          </ol>
        </section>

        <aside className="space-y-10">
          <section>
            <h2 className="label-mono">IT-programmer</h2>
            <ul className="mt-4 border-t">
              {tools.map(([t, y]) => (
                <li key={t} className="flex justify-between gap-4 border-b py-2.5">
                  <span>{t}</span>
                  <span className="font-mono text-sm text-muted-foreground">{y}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-muted-foreground">Også: Scrum, Trello, PrusaSlicer og Cura.</p>
            <h3 className="mt-6 font-semibold">Andre programmer, jeg har arbejdet med</h3>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
              {additionalSoftware.map((tool) => <li key={tool}>{tool}</li>)}
            </ul>
            <h3 className="mt-6 font-semibold">Hardwareplatforme</h3>
            <p className="mt-2 text-sm text-muted-foreground">{hardwarePlatforms.join(" · ")}</p>
          </section>
          <section>
            <h2 className="label-mono">Sprog</h2>
            <p className="mt-3">Dansk og engelsk – flydende</p>
            <p className="text-sm text-muted-foreground">Arabisk og kurdisk – god mundtlig forståelse</p>
          </section>
          <section>
            <h2 className="label-mono">Certifikater</h2>
            <p className="mt-3">Kørekort B · Varevognscertifikat (DEKRA, 2026)</p>
          </section>
          <a href="/CV_KhorsidKader.pdf" target="_blank" rel="noreferrer" className="inline-block bg-accent px-5 py-3 font-medium text-accent-foreground">
            Download fuldt CV (PDF)
          </a>
        </aside>
      </div>
    </div>
  );
}
