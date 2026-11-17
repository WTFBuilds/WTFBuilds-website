import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
import Terminal from "@/components/Terminal";
import StatusLED from "@/components/StatusLED";
import { ORG_GITHUB, type Status } from "@/lib/projects";

export const metadata: Metadata = {
  title: "robotics",
  description: "The WTFBuilds robotics division — builds in progress, parts in transit, optimism fully charged.",
};

const BUILDS: { n: string; name: string; status: Status; meta: string }[] = [
  { n: "001", name: "line follower", status: "building", meta: "chassis done · brains pending · parts in transit" },
  { n: "002", name: "arm.mk1", status: "planned", meta: "torque math in progress" },
  { n: "003", name: "[classified]", status: "planned", meta: "if we tell you, we'd have to debug it" },
];

export default function RoboticsPage() {
  return (
    <div className="pb-28 pt-32 md:pt-44">
      <div className="px-5 md:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">// division 02</p>
          <h1 className="mt-4 font-display text-5xl font-bold uppercase tracking-tight md:text-8xl">
            robotics lab<span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            hardware is just software with trust issues. this is where we earn
            it — one motor, one exploded wiring diagram, one 3am solder joint
            at a time.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid items-center gap-12 px-5 lg:grid-cols-2 md:px-10">
        <Reveal>
          <Terminal
            title="wtfbuilds — robotics.lab"
            lines={[
              { prompt: "$", text: "wtfbuilds --division robotics --status" },
              { prompt: ">", text: "checking inventory ................ done" },
              { prompt: ">", text: "chassis: assembled  |  mcu: flashed" },
              { prompt: ">", text: "line sensor: calibrating (line won)" },
              { prompt: ">", text: "next milestone: first autonomous run" },
            ]}
          />
        </Reveal>
        <Reveal delay={0.12}>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">// build log</p>
          <div className="mt-6">
            {BUILDS.map((b) => (
              <div
                key={b.n}
                className="flex items-baseline gap-4 border-b border-line/60 py-4 last:border-b-0"
              >
                <span className="font-mono text-xs text-muted/50">{b.n}</span>
                <span className="font-display text-xl font-bold lowercase tracking-tight">
                  {b.name}
                </span>
                <StatusLED status={b.status} className="shrink-0" />
                <span className="leader hidden md:block" aria-hidden="true" />
                <span className="hidden shrink-0 font-mono text-[11px] text-muted/70 md:block">
                  {b.meta}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-20 px-5 md:px-10">
        <Reveal>
          <div className="border border-dashed border-line p-8 md:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">// funding</p>
            <p className="mt-5 max-w-2xl font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              no sponsors yet — every part bought out of pocket. want your name
              on a servo? it&apos;s a genuinely cheap way into a robot&apos;s
              heart.
            </p>
            <a
              href={ORG_GITHUB}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block border border-accent/60 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.25em] text-accent transition-colors hover:bg-accent hover:text-bg"
            >
              fund a servo ↗
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
