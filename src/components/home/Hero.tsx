"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { W_BLOCKS } from "@/lib/pixel-w";
import { ORG_GITHUB } from "@/lib/projects";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(".hero-fade, .hero-line, .hero-block", { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      // headline: chars rise out of a line mask once fonts are ready
      const run = () => {
        gsap.set(".hero-line", { opacity: 1 });
        const split = new SplitText(".hero-line", { type: "chars", mask: "lines" });
        gsap.from(split.chars, {
          yPercent: 115,
          stagger: 0.016,
          duration: 0.9,
          ease: "power4.out",
          delay: 0.25,
        });
      };
      if (document.fonts?.ready) {
        document.fonts.ready.then(run);
      } else {
        run();
      }

      // pixel W assembles block by block
      gsap.fromTo(
        ".hero-block",
        { opacity: 0, scale: 0.3, y: -12 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: { each: 0.055, from: "random" },
          duration: 0.7,
          ease: "back.out(2.2)",
          delay: 0.15,
        },
      );

      // the two lime pixels breathe once assembled
      gsap.to(".hero-block-accent", {
        scale: 1.12,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut",
        delay: 1.4,
        stagger: 0.25,
      });

      gsap.fromTo(
        ".hero-fade",
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 1.05, stagger: 0.12 },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative flex min-h-svh flex-col justify-center overflow-hidden px-5 pb-24 pt-24 md:px-10"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="hero-fade font-mono text-xs uppercase tracking-[0.3em] text-accent" style={{ opacity: 0 }}>
            // est. 2026 — shipping in public
          </p>
          <h1 className="mt-6 font-display text-[clamp(3.2rem,10vw,8.5rem)] font-bold uppercase leading-[0.92] tracking-tight">
            <span className="hero-line block" style={{ opacity: 0 }}>
              witness
            </span>
            <span className="hero-line block" style={{ opacity: 0 }}>
              the <span className="text-outline-accent">future</span>
            </span>
            <span className="hero-line block" style={{ opacity: 0 }}>
              builds<span className="text-accent">.</span>
            </span>
          </h1>
          <p
            className="hero-fade mt-8 max-w-md font-mono text-sm leading-relaxed text-muted"
            style={{ opacity: 0 }}
          >
            &gt; wtf = witness the future. also the other thing.
            <br />
            we build what we wish existed — tools, open source,
            robots. some of it works. that&apos;s the point.
          </p>
          <div className="hero-fade mt-10 flex flex-wrap gap-4" style={{ opacity: 0 }}>
            <Link
              href="/projects"
              className="border border-line px-6 py-3.5 font-mono text-xs uppercase tracking-[0.25em] transition-colors hover:border-accent hover:bg-accent hover:text-bg"
            >
              view builds →
            </Link>
            <a
              href={ORG_GITHUB}
              target="_blank"
              rel="noreferrer"
              className="border border-accent/60 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.25em] text-accent transition-colors hover:bg-accent hover:text-bg"
            >
              github ↗
            </a>
          </div>
        </div>

        {/* the pixel W, assembled live */}
        <div className="mx-auto grid w-max grid-cols-5 gap-2.5" aria-hidden="true">
          {W_BLOCKS.map((b, i) => (
            <div
              key={i}
              className={`hero-block aspect-square w-[clamp(2.6rem,5.5vw,4.8rem)] rounded-[24%] transition-opacity hover:opacity-60 ${
                b.accent ? "hero-block-accent bg-accent" : "bg-text"
              }`}
              style={{ gridColumn: b.x + 1, gridRow: b.y + 1, opacity: 0 }}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-x-5 bottom-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted/70 md:inset-x-10">
        <span className="hero-fade" style={{ opacity: 0 }}>
          scroll <span className="animate-blink">↓</span>
        </span>
        <span className="hero-fade hidden md:block" style={{ opacity: 0 }}>
          28.38°N, 79.43°E — bareilly, in
        </span>
        <span className="hero-fade" style={{ opacity: 0 }}>
          status: <span className="text-accent">online</span>
        </span>
      </div>
    </section>
  );
}
