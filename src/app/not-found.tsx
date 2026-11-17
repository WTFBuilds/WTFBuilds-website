import Link from "next/link";
import { W_BLOCKS } from "@/lib/pixel-w";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-5 pb-16 text-center">
      {/* the W, missing one block */}
      <svg viewBox="0 0 5 5" className="h-28 w-28" aria-hidden="true">
        {W_BLOCKS.map((b, i) => {
          const missing = i === 4; // one block from the right arm fell off
          return missing ? (
            <rect
              key={i}
              x={b.x + 0.07}
              y={b.y + 0.07}
              width={0.86}
              height={0.86}
              rx={0.17}
              fill="none"
              stroke="var(--color-muted)"
              strokeDasharray="0.14 0.12"
              strokeWidth={0.045}
            />
          ) : (
            <rect
              key={i}
              x={b.x + 0.07}
              y={b.y + 0.07}
              width={0.86}
              height={0.86}
              rx={0.17}
              fill={b.accent ? "var(--color-accent)" : "currentColor"}
            />
          );
        })}
      </svg>

      <h1 className="mt-10 font-display text-7xl font-bold tracking-tight md:text-9xl">
        404<span className="text-accent">.</span>
      </h1>
      <p className="mt-4 font-mono text-sm text-muted">
        &gt; build not found. it probably exists on some branch.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="border border-accent bg-accent px-6 py-3.5 font-mono text-xs uppercase tracking-[0.25em] text-bg transition-colors hover:bg-transparent hover:text-accent"
        >
          ← back to base
        </Link>
        <Link
          href="/projects"
          className="border border-line px-6 py-3.5 font-mono text-xs uppercase tracking-[0.25em] transition-colors hover:border-text"
        >
          view builds →
        </Link>
      </div>
    </div>
  );
}
