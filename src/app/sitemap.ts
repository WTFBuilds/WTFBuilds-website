import type { MetadataRoute } from "next";

const BASE = "https://www.wtfbuilds.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/projects", "/robotics", "/about"].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
  }));
}
