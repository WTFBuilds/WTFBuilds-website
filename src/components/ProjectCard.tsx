import type { Category, Project } from "@/lib/projects";
import StatusLED from "./StatusLED";

const CAT: Record<Category, string> = {
  web: "web",
  "open-source": "open source",
  tool: "tool",
  robotics: "robotics",
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const p = project;
  return (
    <article className="group relative flex flex-col gap-4 border border-line bg-bg p-6 transition-colors duration-300 hover:border-accent/50 hover:bg-surface md:p-7">
      <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.25em]">
        <span className="text-muted/70">
          {String(index + 1).padStart(3, "0")} <span className="text-muted/40">/ {p.year}</span>
        </span>
        <StatusLED status={p.status} />
      </div>

      <div>
        <h3 className="font-display text-2xl font-bold lowercase tracking-tight">{p.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{p.tagline}</p>
      </div>

      {p.note && (
        <p className="font-mono text-[10px] text-muted/60">&gt; {p.note}</p>
      )}

      <div className="mt-auto flex items-center justify-between pt-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted/70">
          [{CAT[p.category]}]
        </span>
        <div className="flex gap-4 font-mono text-xs">
          {p.links?.site && (
            <a
              href={p.links.site}
              target="_blank"
              rel="noreferrer"
              className="text-accent transition-transform hover:-translate-y-0.5"
            >
              visit ↗
            </a>
          )}
          {p.links?.repo && (
            <a
              href={p.links.repo}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-colors hover:text-text"
            >
              repo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
