"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { CATEGORIES, type Category, type Project } from "@/lib/projects";

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [cat, setCat] = useState<Category | "all">("all");
  const filtered = cat === "all" ? projects : projects.filter((p) => p.category === cat);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="filter builds by category">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setCat(c.id)}
            aria-pressed={cat === c.id}
            className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
              cat === c.id
                ? "border-accent bg-accent text-bg"
                : "border-line text-muted hover:border-muted hover:text-text"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} index={projects.indexOf(p)} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 font-mono text-sm text-muted">&gt; nothing here yet. reserved space.</p>
      )}
    </div>
  );
}
