import type { MetadataRoute } from "next";

const BASE = "https://wtfbuilds.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/projects", "/robotics", "/about"].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
  }));
}
