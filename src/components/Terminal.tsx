"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export type TermLine = { prompt: string; text: string };

type TerminalProps = {
  lines: TermLine[];
  title?: string;
  className?: string;
};

/**
 * Terminal block that types its lines when scrolled into view.
 * The full transcript is rendered sr-only for screen readers / no-JS.
 */
export default function Terminal({ lines, title = "wtfbuilds — build.lab", className = "" }: TerminalProps) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const textEls = Array.from(el.querySelectorAll<HTMLElement>("[data-term-text]"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      textEls.forEach((t) => (t.textContent = t.dataset.termText ?? ""));
      return;
    }

    const ctx = gsap.context(() => {
      textEls.forEach((t) => (t.textContent = ""));
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
      });
      textEls.forEach((t) => {
        const full = t.dataset.termText ?? "";
        tl.fromTo(
          t,
          { text: { value: "" } },
          {
            text: { value: full },
            duration: Math.max(0.35, full.length * 0.026),
            ease: "none",
          },
          ">+=0.1",
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className={`border border-line bg-surface ${className}`}>
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2 w-2 rounded-[2px] bg-muted/40" aria-hidden="true" />
        <span className="h-2 w-2 rounded-[2px] bg-muted/40" aria-hidden="true" />
        <span className="h-2 w-2 rounded-[2px] bg-accent/70" aria-hidden="true" />
        <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted/70">
          {title}
        </span>
      </div>
      <div className="space-y-2.5 p-5 font-mono text-[13px] leading-relaxed md:text-sm">
        {lines.map((l, i) => (
          <p key={i} className="flex gap-3">
            <span className={l.prompt === "$" ? "text-accent" : "text-muted/60"}>{l.prompt}</span>
            <span className="text-text/85" data-term-text={l.text} />
          </p>
        ))}
        <p className="flex gap-3">
          <span className="text-accent">$</span>
          <span className="inline-block h-[14px] w-[8px] translate-y-[3px] bg-accent animate-blink" aria-hidden="true" />
        </p>
      </div>
      <p className="sr-only">{lines.map((l) => l.text).join(". ")}</p>
    </div>
  );
}
