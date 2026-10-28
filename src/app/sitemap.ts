import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.seo.siteUrl;
  const routes = [
    "",
    "/photography-videography",
    "/wedding-cards-printing",
    "/gallery",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.85,
  }));
}

