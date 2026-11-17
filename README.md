# WTFBuilds-website

Main website for WTFBuilds — witness the future builds.

A builder playground: web tools, open source and robots, shipped in public.
Home of [InvertisPrep](https://www.invertisprep.in).

## Stack

- **Next.js 15** (App Router, TypeScript) + **Tailwind CSS v4**
- **GSAP** — ScrollTrigger, SplitText, ScrambleText, Text (all free since 3.13)
- **Lenis** — smooth scroll, wired into GSAP's ticker
- Deployed on **Vercel**

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Add a build

Everything on the site is driven by one file: [`src/lib/projects.ts`](src/lib/projects.ts).
Add an object, push, done:

```ts
{
  slug: "your-thing",
  name: "your.thing",
  tagline: "one line, no corporate voice",
  category: "web",            // web | open-source | tool | robotics
  status: "live",             // live | building | planned
  year: "2026",
  links: { site: "https://...", repo: "https://..." },
  note: "small mono footnote (optional)",
  featured: true,             // puts it in the flagship card on home (optional)
}
```

## Routes

| Route       | What                                              |
| ----------- | ------------------------------------------------- |
| `/`         | hero, ticker, manifesto, flagship, board, join    |
| `/projects` | filterable grid of every build                    |
| `/robotics` | the robotics lab + build log                      |
| `/about`    | the story, principles, timeline                   |
| `404`       | a pixel W with a missing block                    |

Respect for `prefers-reduced-motion` is built in — Lenis and the heavy GSAP
work switch off automatically.
