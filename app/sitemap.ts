import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { templates } from "@/lib/templates";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pair = (en: string, es: string, priority: number): MetadataRoute.Sitemap => {
    const languages = { en: `${SITE_URL}${en}`, es: `${SITE_URL}${es}` };
    return [
      { url: `${SITE_URL}${en}`, lastModified: now, priority, alternates: { languages } },
      { url: `${SITE_URL}${es}`, lastModified: now, priority, alternates: { languages } },
    ];
  };
  return [
    ...pair("/", "/es", 1),
    ...pair("/pack", "/es/pack", 0.9),
    ...templates.filter((t) => t.lang === "en").flatMap((t) => pair(`/templates/${t.slug}`, `/templates/${t.alt}`, 0.7)),
    { url: `${SITE_URL}/privacy`, lastModified: now, priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: now, priority: 0.2 },
  ];
}
