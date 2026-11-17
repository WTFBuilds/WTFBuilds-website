import type { Status } from "@/lib/projects";

const MAP: Record<Status, { label: string; dot: string }> = {
  live: { label: "live", dot: "bg-accent shadow-[0_0_8px_var(--color-accent)]" },
  building: { label: "building", dot: "bg-text animate-led" },
  planned: { label: "planned", dot: "bg-muted/50" },
};

export default function StatusLED({ status, className = "" }: { status: Status; className?: string }) {
  const s = MAP[status];
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-[2px] ${s.dot}`} aria-hidden="true" />
      {s.label}
    </span>
  );
}
