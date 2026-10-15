import { Link } from "@tanstack/react-router";
import { ScrollProgress } from "./motion";

const nav = [
  { to: "/", label: "Forside" },
  { to: "/projekter", label: "Projekter" },
  { to: "/om", label: "Om mig" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center bg-primary font-mono text-sm font-bold text-primary-foreground">
            KK
          </span>
          <span className="hidden truncate font-semibold sm:block">Khorsid Abdul Kader</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {nav.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-2 py-1.5 text-muted-foreground transition-colors hover:text-foreground sm:px-3"
              activeProps={{ className: "text-foreground underline decoration-accent decoration-2 underline-offset-8" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="/CV_KhorsidKader.pdf"
            target="_blank"
            rel="noreferrer"
            className="ml-2 hidden bg-accent px-3 py-1.5 font-medium text-accent-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            Download CV
          </a>
        </nav>
      </div>
      <ScrollProgress />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-5 py-8 sm:flex-row">
        <span className="label-mono">© 2026 Khorsid Abdul Kader</span>
        <span className="label-mono">Maskinteknik · DTU Ballerup</span>
      </div>
    </footer>
  );
}
