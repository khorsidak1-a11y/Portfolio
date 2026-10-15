import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import { Typewriter, Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/projekter/$slug")({
  loader: ({ params }) => {
    const p = projects.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return { slug: p.slug };
  },
  head: ({ loaderData }) => {
    const p = projects.find((x) => x.slug === loaderData?.slug);
    if (!p) return { meta: [{ title: "Projekt ikke fundet" }, { name: "robots", content: "noindex" }] };
    const t = `${p.title} – Khorsid Abdul Kader`;
    return {
      meta: [
        { title: t },
        { name: "description", content: p.summary },
        { property: "og:title", content: t },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectPage,
});

function ProjectNotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24">
      <h1 className="text-3xl font-bold">Projektet findes ikke</h1>
      <Link to="/projekter" className="mt-4 inline-block text-accent">← Tilbage til projekter</Link>
    </div>
  );
}

function ProjectPage() {
  const { slug } = Route.useLoaderData();
  const idx = projects.findIndex((x) => x.slug === slug);
  const p = projects[idx];
  const next = projects[(idx + 1) % projects.length];
  if (!p || !next) return <ProjectNotFound />;

  return (
    <article className="mx-auto max-w-6xl px-5 py-12">
      <Link to="/projekter" className="label-mono hover:text-foreground">← Alle projekter</Link>
      <div className="mt-6 grid gap-8 md:grid-cols-[1fr_18rem]">
        <div>
          <p className="label-mono">{p.no} · {p.category}</p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl"><Typewriter key={p.slug} text={p.title} speed={35} /></h1>
          <p className="mt-4 text-lg text-muted-foreground">{p.summary}</p>
        </div>
        <dl className="self-end border bg-card font-mono text-sm">
          {[["År", p.year], ["Rolle", p.role], ["Værktøjer", p.tools.join(", ")]].map(([k, v]) => (
            <div key={k} className="border-b px-4 py-3 last:border-b-0">
              <dt className="text-xs text-muted-foreground">{k}</dt>
              <dd className="mt-1">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a href={p.image} target="_blank" rel="noreferrer" aria-label={`Åbn billede — ${p.title}`} className="mt-10 block border bg-card">
        <img src={p.image} alt={p.title} width={1280} height={896} className="max-h-[42rem] w-full object-contain" />
      </a>

      {p.gallery && p.gallery.length > 0 && (
        <section className="mt-10" aria-label="Projektbilleder">
          <h2 className="label-mono">Projektbilleder</h2>
          <div className="mt-5 grid items-start gap-6 sm:grid-cols-2">
            {p.gallery.map((image) => (
              <figure key={image.url}>
                <a href={image.url} target="_blank" rel="noreferrer" aria-label={`Åbn billede — ${image.caption}`} className="block border bg-card">
                  <img src={image.url} alt={image.caption} loading="lazy" className="aspect-[4/3] w-full object-contain" />
                </a>
                <figcaption className="mt-3 text-sm text-muted-foreground">{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <div className="mt-12 grid gap-12 md:grid-cols-[12rem_1fr]">
        <Section label="Problemet">
          <p>{p.problem}</p>
          {p.inspiration && (
            <a href={p.inspiration.url} target="_blank" rel="noreferrer" className="mt-3 inline-block text-base text-accent underline underline-offset-4">
              {p.inspiration.label} ↗
            </a>
          )}
        </Section>
        <Section label="Udfordring"><p>{p.challenge}</p></Section>
        <Section label="Proces">
          <ol className="space-y-3">
            {p.process.map((s, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </Section>
        {p.drawings && p.drawings.length > 0 && (
          <Section label="Arbejdstegninger">
            <div className="space-y-8">
              {p.drawings.map((image) => (
                <figure key={image.url}>
                  <a href={image.url} target="_blank" rel="noreferrer" className="block border transition-shadow hover:shadow-glow">
                    <img src={image.url} alt={image.caption} loading="lazy" className="w-full" />
                  </a>
                  <figcaption className="mt-2 text-sm text-muted-foreground">{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </Section>
        )}
        {p.documents && p.documents.length > 0 && (
          <Section label="Dokumentation">
            <div className="space-y-6">
              {p.documents.map((document) => (
                <div key={document.url}>
                  <Button asChild variant="outline" className="h-auto min-h-10 max-w-full whitespace-normal text-left">
                    <a href={document.url} target="_blank" rel="noreferrer"><FileText className="shrink-0" />{document.label}</a>
                  </Button>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">{document.format}</p>
                  {document.note && <p className="mt-2 text-sm text-muted-foreground">{document.note}</p>}
                </div>
              ))}
            </div>
          </Section>
        )}
        <Section label="Resultat"><p>{p.result}</p></Section>
        {p.report && (
          <Section label="SOP-rapport">
            {p.report.url ? (
              <Button asChild variant="outline"><a href={p.report.url} target="_blank" rel="noreferrer"><FileText />{p.report.label}</a></Button>
            ) : (
              <>
                <Button variant="outline" disabled><FileText />{p.report.label}</Button>
                <p className="mt-3 text-sm text-muted-foreground">Rapporten er endnu ikke tilgængelig her.</p>
              </>
            )}
          </Section>
        )}
        <Section label="Det lærte jeg"><p>{p.learned}</p></Section>
      </div>

      <Link
        to="/projekter/$slug"
        params={{ slug: next.slug }}
        className="group mt-20 flex items-center justify-between border-t pt-8"
      >
        <span className="label-mono">Næste projekt</span>
        <span className="text-2xl font-semibold group-hover:text-accent">{next.title} →</span>
      </Link>
    </article>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <>
      <h2 className="label-mono pt-1">{label}</h2>
      <Reveal className="max-w-2xl text-lg leading-relaxed">{children}</Reveal>
    </>
  );
}
