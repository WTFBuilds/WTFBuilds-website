"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/**
 * The manifesto statement — words brighten as you scroll through it.
 */
export default function Manifesto() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const run = () => {
        const split = new SplitText(".manifesto-text", { type: "words" });
        gsap.fromTo(
          split.words,
          { opacity: 0.13 },
          {
            opacity: 1,
            stagger: 0.06,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 75%",
              end: "bottom 60%",
              scrub: 0.6,
            },
          },
        );
      };
      if (document.fonts?.ready) {
        document.fonts.ready.then(run);
      } else {
        run();
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="px-5 py-28 md:px-10 md:py-44">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">// the point</p>
      <p className="manifesto-text mt-8 max-w-5xl font-display text-3xl font-medium leading-[1.25] tracking-tight md:text-6xl md:leading-[1.15]">
        wtfbuilds is a playground, not a portfolio. we build the things we wish
        existed — <span className="text-accent">tools for students</span>, open
        source for everyone, <span className="text-accent">robots</span> for the
        hell of it. some of it works.{" "}
        <span className="text-outline">that&apos;s the point.</span>
      </p>
    </section>
  );
}
