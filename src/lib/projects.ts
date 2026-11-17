export type Category = "web" | "open-source" | "tool" | "robotics";
export type Status = "live" | "building" | "planned";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: Category;
  status: Status;
  year: string;
  links?: { site?: string; repo?: string };
  featured?: boolean;
  /** small mono footnote shown on the card */
  note?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "invertisprep",
    name: "InvertisPrep",
    tagline:
      "Previous-year papers, notes, syllabus and quizzes for Invertis University students. Free, no login, forever.",
    category: "web",
    status: "live",
    year: "2025 →",
    links: { site: "https://www.invertisprep.in" },
    featured: true,
    note: "transferred to the wtfbuilds org — our first flagship",
  },
  {
    slug: "wtfbuilds-website",
    name: "wtfbuilds.site",
    tagline:
      "The site you're on right now. Next.js, gsap, lenis, and considerably more pixel blocks than necessary.",
    category: "web",
    status: "live",
    year: "2026",
    links: { repo: "https://github.com/WTFBuilds/WTFBuilds-website" },
    note: "handcrafted — no template was harmed",
  },
  {
    slug: "build-001-line-follower",
    name: "build.001 — line follower",
    tagline: "First robot out of the lab. It follows a line. The line is not negotiable.",
    category: "robotics",
    status: "building",
    year: "2026",
    note: "chassis done · brains pending · parts in transit",
  },
  {
    slug: "build-002-arm-mk1",
    name: "build.002 — arm.mk1",
    tagline: "A robotic arm that will, eventually, hand us our own screwdriver. Payback for everything.",
    category: "robotics",
    status: "planned",
    year: "2026",
    note: "torque math in progress",
  },
  {
    slug: "untitled-tool-01",
    name: "untitled tool 01",
    tagline: "Reserved slot for the first open-source tool. Name pending, intent not.",
    category: "tool",
    status: "planned",
    year: "2026",
    note: "slot open — what lands here is undecided, that's the fun part",
  },
  {
    slug: "untitled-oss-01",
    name: "untitled oss 01",
    tagline: "Reserved slot for an open-source drop. Got something that should be here? Open an issue.",
    category: "open-source",
    status: "planned",
    year: "2026",
    note: "slot open",
  },
];

export const CATEGORIES: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "all" },
  { id: "web", label: "web" },
  { id: "open-source", label: "open source" },
  { id: "tool", label: "tools" },
  { id: "robotics", label: "robotics" },
];

export const ORG_GITHUB = "https://github.com/WTFBuilds";
