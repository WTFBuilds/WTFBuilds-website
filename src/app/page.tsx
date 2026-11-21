import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/home/Hero";
import Manifesto from "@/components/home/Manifesto";
import Marquee from "@/components/motion/Marquee";
import Reveal from "@/components/motion/Reveal";
import Terminal from "@/components/Terminal";
import StatusLED from "@/components/StatusLED";
import ProjectCard from "@/components/ProjectCard";
import { ORG_GITHUB, PROJECTS } from "@/lib/projects";

const TICKER = ["build", "ship", "break", "rebuild"];

const LATEST_SLUGS = ["ai-resume-builder", "melon-mc-engine"];

function Ticker() {
  return (
    <div className="border-y border-line py-5">
      <Marquee duration={26}>
        {TICKER.map((t, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`px-6 font-display text-5xl font-bold uppercase tracking-tight md:text-7xl ${
                i % 2 ? "text-outline" : "text-text"
              }`}
            >
              {t}
            </span>
            <span className="h-3 w-3 rounded-[3px] bg-accent" aria-hidden="true" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}

function Featured() {
  const featured = PROJECTS.find((p) => p.featured)!;
  const latest = LATEST_SLUGS.map((s) => PROJECTS.find((p) => p.slug === s)).filter(
    (p): p is (typeof PROJECTS)[number] => Boolean(p),
  );
  return (
    <section className="px-5 py-24 md:px-10 md:py-32">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">// 01 — flagship</p>
        <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">
          first blood<span className="text-accent">.</span>
        </h2>
      </Reveal>

      <Reveal className="mt-12" y={36}>
        <a
          href={featured.links?.site}
          target="_blank"
          rel="noreferrer"
          className="group grid gap-8 border border-line bg-surface p-7 transition-colors duration-300 hover:border-accent/50 md:grid-cols-[1fr_400px] md:items-center md:p-10"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-5">
              <span
                className="text-outline text-outline-thin font-display text-5xl font-bold leading-none transition-colors group-hover:[-webkit-text-stroke-color:var(--color-accent)] md:text-6xl"
                aria-hidden="true"
              >
                001
              </span>
              <StatusLED status={featured.status} />
            </div>
            <h3 className="font-display text-3xl font-bold lowercase tracking-tight md:text-4xl">
              {featured.name}
            </h3>
            <p className="max-w-lg leading-relaxed text-muted">{featured.tagline}</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent/80">
              &gt; {featured.note}
            </p>
            <div className="mt-3 flex items-center gap-6 font-mono text-sm">
              <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
                visit ↗
              </span>
              <span className="text-muted transition-colors group-hover:text-text">repo ↗</span>
              <span className="text-xs text-muted/70">{featured.year}</span>
            </div>
          </div>
          {featured.image && (
            <div className="relative overflow-hidden rounded-[10px] border border-line">
              <Image
                src={featured.image.src}
                width={featured.image.width}
                height={featured.image.height}
                alt={featured.image.alt}
                className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          )}
        </a>
      </Reveal>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {latest.map((p) => (
          <Reveal key={p.slug} delay={0.08}>
            <ProjectCard project={p} index={PROJECTS.indexOf(p)} />
          </Reveal>
        ))}
        <Reveal delay={0.16}>
          <div className="flex h-full flex-col gap-4 border border-dashed border-line p-7 transition-colors hover:border-muted">
            <span className="font-mono text-[10px] tracking-[0.25em] text-muted/60">000</span>
            <h3 className="font-display text-xl font-bold lowercase tracking-tight text-muted">
              open slot
            </h3>
            <p className="text-sm leading-relaxed text-muted/80">
              reserved for whatever we break next. bring ideas.
            </p>
            <StatusLED status="planned" className="mt-auto" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function RoboticsTeaser() {
  return (
    <section className="px-5 pb-24 md:px-10 md:pb-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">// 02 — the lab</p>
          <h2 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl">
            robots
            <br />
            <span className="text-outline">soon.</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            hardware is just software with trust issues. we&apos;re earning that
            trust one build at a time — servos, sensors, and a worrying amount
            of optimism.
          </p>
          <Link
            href="/robotics"
            className="mt-8 inline-block border border-line px-6 py-3.5 font-mono text-xs uppercase tracking-[0.25em] transition-colors hover:border-accent hover:bg-accent hover:text-bg"
          >
            enter the lab →
          </Link>
        </Reveal>
        <Reveal delay={0.12}>
          <Terminal
            lines={[
              { prompt: "$", text: "wtfbuilds --division robotics" },
              { prompt: ">", text: "allocating build space .......... done" },
              { prompt: ">", text: "loading: servos, sensors, stubbornness" },
              { prompt: ">", text: "builds planned: 03 — details classified" },
              { prompt: ">", text: "status: waiting_on_parts" },
            ]}
          />
        </Reveal>
      </div>
    </section>
  );
}

function Board() {
  return (
    <section className="px-5 pb-24 md:px-10 md:pb-32">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">// 03 — status</p>
        <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">
          now building<span className="text-accent">.</span>
        </h2>
      </Reveal>

      <Reveal className="mt-12" y={36}>
        <div className="border border-line bg-surface">
          <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted/70">
              now_building.log
            </span>
            <span className="flex gap-1" aria-hidden="true">
              {Array.from({ length: 14 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-[1px] ${
                    (i * 7) % 13 < 4 ? "bg-accent" : "bg-muted/20"
                  }`}
                />
              ))}
            </span>
          </div>
          <div className="px-5 py-2">
            {PROJECTS.map((p) => {
              const href = p.links?.site ?? p.links?.repo;
              return (
                <div
                  key={p.slug}
                  className="flex items-baseline gap-3 border-b border-line/60 py-3.5 font-mono text-sm last:border-b-0"
                >
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="text-text/90 transition-colors hover:text-accent"
                    >
                      {p.name}
                    </a>
                  ) : (
                    <span className="text-text/90">{p.name}</span>
                  )}
                  <StatusLED status={p.status} className="shrink-0" />
                  <span className="leader hidden sm:block" aria-hidden="true" />
                  <span className="hidden shrink-0 text-xs text-muted/70 sm:block">{p.note}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Join() {
  return (
    <section className="border-t border-line px-5 py-28 md:px-10 md:py-40">
      <Reveal className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">// 04 — join</p>
        <h2 className="mt-8 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-8xl">
          got a build
          <br />
          in you<span className="text-accent">?</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl leading-relaxed text-muted">
          no committees. no permission slips. open an issue, ship a PR, or just
          come argue about actuator choices. the playground is public.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={ORG_GITHUB}
            target="_blank"
            rel="noreferrer"
            className="border border-accent bg-accent px-7 py-4 font-mono text-xs uppercase tracking-[0.25em] text-bg transition-colors hover:bg-transparent hover:text-accent"
          >
            join the org ↗
          </a>
          <Link
            href="/about"
            className="border border-line px-7 py-4 font-mono text-xs uppercase tracking-[0.25em] transition-colors hover:border-text"
          >
            how we work →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Manifesto />
      <Featured />
      <RoboticsTeaser />
      <Board />
      <Join />
    </>
  );
}
