import { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";

const routes = [
  "",
  "/about",
  "/services",
  "/gallery",
  "/reviews",
  "/contact",
  "/book-appointment",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://oaza-mobile-mechanic.vercel.app";
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${base}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.7,
      });
    }
  }

  return entries;
}
