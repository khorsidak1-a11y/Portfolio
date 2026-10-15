import { createFileRoute } from "@tanstack/react-router";
import { Typewriter, Reveal } from "@/components/motion";

const title = "Kontakt – Khorsid Abdul Kader";
const desc = "Kontakt Khorsid Abdul Kader om studiejob inden for CAD, konstruktion eller produktion.";

export const Route = createFileRoute("/kontakt")({
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
  component: Contact,
});

const links = [
  ["E-mail", "Khorsidak1@gmail.com", "mailto:Khorsidak1@gmail.com"],
  ["Telefon", "+45 52 67 11 13", "tel:+4552671113"],
  ["LinkedIn", "khorsid-kader", "https://www.linkedin.com/in/khorsid-kader-b8925b254"],
];

function Contact() {
  return (
    <section className="blueprint blueprint-move">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="label-mono">Kontakt</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-bold sm:text-6xl">
          <Typewriter text="Har I et studiejob inden for CAD, konstruktion eller produktion?" highlight="CAD, konstruktion eller produktion?" />
        </h1>
        <Reveal delay={300}>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Tilgængelig 8–20 timer om ugen i København og omegn – hele onsdagen, fredag eftermiddag
            og i weekenderne.
          </p>
        </Reveal>
        <ul className="mt-12 max-w-2xl border bg-card">
          {links.map(([k, v, href], i) => (
            <Reveal key={k} delay={400 + i * 120}>
              <li>
                <a
                  href={href}
                   target={href?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 border-b px-5 py-5 transition-all hover:bg-muted hover:pl-7"
                >
                  <span className="label-mono">{k}</span>
                  <span className="truncate text-lg font-medium group-hover:text-accent">{v} →</span>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
