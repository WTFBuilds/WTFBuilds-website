import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
import PixelW from "@/components/PixelW";
import { ORG_GITHUB } from "@/lib/projects";

export const metadata: Metadata = {
  title: "about",
  description: "WTF = Witness The Future. Also the other thing. The story of the WTFBuilds playground.",
};

const PRINCIPLES = [
  { n: "01", t: "build first, plan enough", d: "a working ugly thing beats a beautiful roadmap. plan just enough to not die." },
  { n: "02", t: "open by default", d: "public repos, public logs, public mistakes. closed doors are for closets." },
  { n: "03", t: "ship in public", d: "everything we make gets launched before it's ready. that's how it gets ready." },
  { n: "04", t: "robots eventually", d: "every project list ends with robots. ours just got there faster." },
];

const TIMELINE = [
  { year: "2025", what: "invertisprep joins the org — our first flagship, free for every student" },
  { year: "2026", what: "this site. the playground goes public" },
  { year: "next", what: "build.001 follows its line. then things get ambitious" },
];

export default function AboutPage() {
  return (
    <div className="pb-28 pt-32 md:pt-44">
      <div className="px-5 md:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">// 03 — about</p>
          <h1 className="mt-4 font-display text-5xl font-bold uppercase tracking-tight md:text-8xl">
            wtf is wtfbuilds<span className="text-accent">?</span>
          </h1>
        </Reveal>

        <Reveal className="mt-10" y={32}>
          <p className="max-w-3xl font-display text-2xl font-medium leading-[1.3] tracking-tight md:text-4xl md:leading-[1.25]">
            wtf = <span className="text-accent">witness the future</span>. it
            also means the other thing. we answer to both.
          </p>
          <div className="mt-8 max-w-2xl space-y-5 leading-relaxed text-muted">
            <p>
              wtfbuilds started as a place to build without asking permission —
              no roadmap meetings, no design reviews, no &ldquo;is this on
              brand?&rdquo;. just people making the things they wish existed
              and shipping them in public.
            </p>
            <p>
              in 2025, <span className="text-text">invertisprep</span> — a
              study platform for invertis university students, packed with
              previous-year papers, notes and quizzes — was handed over to the
              org. it became our first flagship, and it stays free and
              login-less. forever.
            </p>
            <p>
              from here: open-source tools, web things that earn their
              existence, and a robotics lab that currently smells like flux.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-24 px-5 md:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">// how we work</p>
        </Reveal>
        <div className="mt-8 grid gap-px border border-line bg-line md:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={0.06 * i} y={20}>
              <div className="h-full bg-bg p-7 transition-colors hover:bg-surface">
                <span className="font-mono text-xs text-muted/50">{p.n}</span>
                <h3 className="mt-3 font-display text-xl font-bold lowercase tracking-tight">
                  {p.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-24 px-5 md:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">// so far</p>
          <div className="mt-8 max-w-3xl">
            {TIMELINE.map((t) => (
              <div key={t.year} className="flex items-baseline gap-6 border-b border-line/60 py-5 last:border-b-0">
                <span className="w-16 shrink-0 font-mono text-sm text-accent">{t.year}</span>
                <span className="text-sm leading-relaxed text-muted md:text-base">{t.what}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-24 px-5 md:px-10">
        <Reveal>
          <div className="flex flex-col items-start gap-8 border border-line bg-surface p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="flex items-center gap-6">
              <PixelW className="h-16 w-16 shrink-0" />
              <div>
                <p className="font-display text-2xl font-bold lowercase tracking-tight md:text-3xl">
                  have a build that belongs here?
                </p>
                <p className="mt-1 text-sm text-muted">
                  bring it. we merge PRs and argue about naming conventions.
                </p>
              </div>
            </div>
            <a
              href={ORG_GITHUB}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 border border-accent bg-accent px-7 py-4 font-mono text-xs uppercase tracking-[0.25em] text-bg transition-colors hover:bg-transparent hover:text-accent"
            >
              join the org ↗
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
