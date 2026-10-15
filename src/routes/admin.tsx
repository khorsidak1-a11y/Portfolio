import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { getAdminOverview, lockSite } from "@/lib/gate.functions";

export const Route = createFileRoute("/admin")({
  loader: () => getAdminOverview(),
  head: () => ({
    meta: [
      { title: "Admin — Khorsid Kader" },
      { name: "description", content: "Adgangskodebeskyttet administration." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Admin,
});

function Admin() {
  const { projects } = Route.useLoaderData();
  const router = useRouter();
  const lock = useServerFn(lockSite);

  async function onLock() {
    await lock({});
    await router.navigate({ to: "/unlock" });
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Administration
          </p>
          <h1 className="mt-2 text-3xl font-semibold">Hej Khorsid</h1>
        </div>
        <button
          onClick={onLock}
          className="border border-border px-4 py-2 font-mono text-xs hover:border-primary"
        >
          Lås siden igen
        </button>
      </div>

      <section className="mt-10 border border-border bg-card p-6">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Dine projekter ({projects.length})
        </h2>
        <ul className="mt-4 divide-y divide-border">
          {projects.map((p) => (
            <li key={p.slug} className="flex items-center justify-between py-3">
              <span>
                <span className="mr-3 font-mono text-xs text-primary">{p.no}</span>
                {p.title}
                <span className="ml-3 font-mono text-xs text-muted-foreground">{p.year}</span>
              </span>
              <Link
                to="/projekter/$slug"
                params={{ slug: p.slug }}
                className="font-mono text-xs text-primary hover:underline"
              >
                Se side →
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6 border border-border bg-card p-6">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Sådan redigerer du siden
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Selve indholdet (tekster, billeder, projekter) redigeres via Lovable-editoren —
          skriv bare hvad du vil ændre i chatten, fx &quot;skift teksten på forsiden&quot;
          eller &quot;tilføj et nyt projekt&quot;. Denne admin-side er dit beskyttede
          overblik over sidens indhold.
        </p>
      </section>
    </main>
  );
}
