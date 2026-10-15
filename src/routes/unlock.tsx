import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { unlockSite } from "@/lib/gate.functions";

export const Route = createFileRoute("/unlock")({
  head: () => ({
    meta: [
      { title: "Adgang — Khorsid Kader" },
      { name: "description", content: "Adgangskodebeskyttet område." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Unlock,
});

function Unlock() {
  const router = useRouter();
  const unlock = useServerFn(unlockSite);
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError(false);
    const password = new FormData(e.currentTarget).get("password") as string;
    const { ok } = await unlock({ data: { password } });
    setBusy(false);
    if (ok) await router.navigate({ to: "/admin" });
    else setError(true);
  }

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm border border-border bg-card p-8"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Beskyttet område
        </p>
        <h1 className="mt-2 text-2xl font-semibold">Indtast adgangskode</h1>
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          autoFocus
          className="mt-6 w-full border border-border bg-background px-3 py-2 font-mono text-sm outline-none focus:border-primary"
          placeholder="Adgangskode"
        />
        {error && (
          <p className="mt-3 font-mono text-xs text-destructive">
            Forkert adgangskode — prøv igen.
          </p>
        )}
        <button
          type="submit"
          disabled={busy}
          className="mt-6 w-full bg-primary px-4 py-2 font-mono text-sm font-medium text-primary-foreground disabled:opacity-50"
        >
          {busy ? "Kontrollerer…" : "Lås op"}
        </button>
      </form>
    </main>
  );
}
