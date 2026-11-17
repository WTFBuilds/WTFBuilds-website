import { W_BLOCKS } from "@/lib/pixel-w";

type PixelWProps = {
  className?: string;
  /** render the two lime pixels (default true) */
  accent?: boolean;
};

/**
 * Static SVG of the pixel "W" mark. Uses currentColor for the white
 * blocks so parents control its color via text-* classes.
 */
export default function PixelW({ className, accent = true }: PixelWProps) {
  return (
    <svg viewBox="0 0 5 5" className={className} aria-hidden="true">
      {W_BLOCKS.map((b, i) => (
        <rect
          key={i}
          x={b.x + 0.07}
          y={b.y + 0.07}
          width={0.86}
          height={0.86}
          rx={0.17}
          fill={b.accent && accent ? "var(--color-accent)" : "currentColor"}
        />
      ))}
    </svg>
  );
}
