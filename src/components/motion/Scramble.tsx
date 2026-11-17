"use client";

import { useCallback, useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const CHARS = "!<>-_\\/[]{}=+*^?#01";

type ScrambleProps = {
  text: string;
  className?: string;
  /** "hover" re-scrambles on mouse enter, "load" plays once on mount */
  trigger?: "hover" | "load";
};

export default function Scramble({ text, className, trigger = "hover" }: ScrambleProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const play = useCallback(() => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      duration: 0.55,
      scrambleText: { text, chars: CHARS, speed: 1.5 },
    });
  }, [text]);

  useEffect(() => {
    if (trigger === "load") {
      // let fonts settle before measuring/drawing
      const t = setTimeout(play, 300);
      return () => clearTimeout(t);
    }
  }, [trigger, play]);

  return (
    <span ref={ref} className={className} onMouseEnter={trigger === "hover" ? play : undefined}>
      {text}
    </span>
  );
}
