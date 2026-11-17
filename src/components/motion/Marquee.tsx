import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  /** seconds for one full loop */
  duration?: number;
};

/**
 * Infinite CSS marquee. Content is rendered twice; the animation slides
 * the row -50% so the loop is seamless. Pauses under reduced motion.
 */
export default function Marquee({ children, className = "", duration = 30 }: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="animate-marquee flex w-max"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
