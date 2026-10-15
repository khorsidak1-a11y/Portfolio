import { Link } from "@tanstack/react-router";
import type { Project } from "@/lib/projects";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      to="/projekter/$slug"
      params={{ slug: p.slug }}
      className="group block"
    >
      <div className="relative aspect-[10/7] overflow-hidden border">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          width={1280}
          height={896}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 bg-background px-2 py-1 font-mono text-xs">{p.no}</span>
      </div>
      <div className="py-5">
        <div className="flex justify-between gap-2">
          <span className="label-mono">{p.category}</span>
          <span className="label-mono">{p.year}</span>
        </div>
        <h3 className="mt-2 text-xl font-semibold group-hover:text-accent">{p.title} →</h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
      </div>
    </Link>
  );
}
