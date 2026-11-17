import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
import ProjectsGrid from "@/components/ProjectsGrid";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "builds",
  description: "Everything WTFBuilds has shipped, broken, or promised — web, open source, tools, robotics.",
};

export default function ProjectsPage() {
  const live = PROJECTS.filter((p) => p.status === "live").length;
  const building = PROJECTS.filter((p) => p.status === "building").length;
  const planned = PROJECTS.filter((p) => p.status === "planned").length;

  return (
    <div className="px-5 pb-28 pt-32 md:px-10 md:pt-44">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">// index</p>
        <h1 className="mt-4 font-display text-5xl font-bold uppercase tracking-tight md:text-8xl">
          all builds<span className="text-accent">.</span>
        </h1>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {live} live · {building} building · {planned} planned — {PROJECTS.length} entries, zero
          committees
        </p>
      </Reveal>

      <Reveal className="mt-14" y={36}>
        <ProjectsGrid projects={PROJECTS} />
      </Reveal>
    </div>
  );
}
