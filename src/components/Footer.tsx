import Link from "next/link";
import PixelW from "./PixelW";

const COLS = [
  {
    head: "index",
    items: [
      { label: "builds", href: "/projects" },
      { label: "robotics", href: "/robotics" },
      { label: "about", href: "/about" },
    ],
  },
  {
    head: "outside",
    items: [
      { label: "github org ↗", href: "https://github.com/WTFBuilds", ext: true },
      { label: "invertisprep.in ↗", href: "https://www.invertisprep.in", ext: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="grid gap-12 px-5 py-16 md:grid-cols-[1fr_auto] md:items-end md:px-10 md:py-20">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
            // end of file — go build something
          </p>
          <p className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl">
            witness
            <br />
            the <span className="text-outline">future</span>
            <br />
            builds<span className="text-accent">.</span>
          </p>
        </div>
        <PixelW className="hidden h-32 w-32 text-muted/25 md:block" />
      </div>

      <div className="grid gap-8 border-t border-line px-5 py-10 font-mono text-xs md:grid-cols-3 md:px-10">
        {COLS.map((col) => (
          <div key={col.head}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted/60">[{col.head}]</p>
            <ul className="mt-4 space-y-2.5">
              {col.items.map((it) => (
                <li key={it.label}>
                  {"ext" in it && it.ext ? (
                    <a
                      href={it.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted transition-colors hover:text-accent"
                    >
                      {it.label}
                    </a>
                  ) : (
                    <Link href={it.href} className="text-muted transition-colors hover:text-accent">
                      {it.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted/60">[meta]</p>
          <p className="mt-4 leading-relaxed text-muted">
            no template. no lorem ipsum.
            <br />
            handcrafted on a dark theme.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-line px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted/70 md:flex-row md:items-center md:justify-between md:px-10">
        <span>© 2026 wtfbuilds — witness the future builds</span>
        <span>built in public. broken occasionally.</span>
        <span>28.38°N, 79.43°E — bareilly, in</span>
      </div>
    </footer>
  );
}
