"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PixelW from "./PixelW";
import Scramble from "./motion/Scramble";

const LINKS = [
  { href: "/projects", n: "01", label: "builds" },
  { href: "/robotics", n: "02", label: "robotics" },
  { href: "/about", n: "03", label: "about" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggle = (next: boolean) => {
    setOpen(next);
    window.dispatchEvent(new Event(next ? "lenis:stop" : "lenis:start"));
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/75 backdrop-blur-md">
        <div className="flex h-14 items-center justify-between px-5 md:px-10">
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            onClick={() => toggle(false)}
          >
            <PixelW className="h-[18px] w-[18px] text-text transition-transform duration-300 group-hover:rotate-90" />
            <span className="font-display text-lg font-bold tracking-tight">
              wtf<span className="text-muted transition-colors group-hover:text-accent">builds</span>
            </span>
          </Link>

          {/* desktop */}
          <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.2em] md:flex">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`transition-colors ${
                  pathname === l.href ? "text-accent" : "text-muted hover:text-text"
                }`}
              >
                <span className="text-muted/50">{l.n}/</span>{" "}
                <Scramble text={l.label} />
              </Link>
            ))}
            <a
              href="https://github.com/WTFBuilds"
              target="_blank"
              rel="noreferrer"
              className="border border-line px-3 py-1.5 text-accent transition-colors hover:border-accent hover:bg-accent hover:text-bg"
            >
              github ↗
            </a>
          </nav>

          {/* mobile trigger */}
          <button
            aria-label={open ? "close menu" : "open menu"}
            aria-expanded={open}
            onClick={() => toggle(!open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`h-[2px] w-6 bg-text transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-text transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-[2px] w-6 bg-text transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-bg px-8 pb-10 pt-28 transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-6">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => toggle(false)}
              className={`font-display text-5xl font-bold uppercase tracking-tight transition-colors ${
                pathname === l.href ? "text-accent" : "text-text"
              }`}
            >
              <span className="mr-3 font-mono text-xs font-normal tracking-[0.3em] text-muted">{l.n}</span>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="space-y-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
          <p>witness the future builds</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="https://github.com/WTFBuilds" target="_blank" rel="noreferrer" className="text-accent">
              github ↗
            </a>
            <a href="https://www.instagram.com/wtfbuilds/" target="_blank" rel="noreferrer" className="transition-colors hover:text-text">
              instagram ↗
            </a>
            <a href="https://www.linkedin.com/company/wtfbuilds/" target="_blank" rel="noreferrer" className="transition-colors hover:text-text">
              linkedin ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
