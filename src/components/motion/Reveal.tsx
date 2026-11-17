"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** vertical offset in px */
  y?: number;
  delay?: number;
};

/**
 * Scroll-triggered fade/rise. Initial hidden state is set via the
 * [data-reveal] attribute so the prefers-reduced-motion CSS override
 * can force content visible without JS.
 */
export default function Reveal({ children, className, y = 28, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }
    const anim = gsap.fromTo(
      el,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        delay,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      },
    );
    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [y, delay]);

  return (
    <div ref={ref} className={className} data-reveal style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
