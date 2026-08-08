import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { locationPages } from "@/lib/locations";
import { servicePages } from "@/lib/seo-pages";
import { routeUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-08-09T00:00:00+05:30");
  const core = [
    { path: "", priority: 1, frequency: "weekly" as const },
    { path: "/about", priority: 0.7, frequency: "monthly" as const },
    { path: "/services", priority: 0.9, frequency: "monthly" as const },
    { path: "/industries", priority: 0.75, frequency: "monthly" as const },
    { path: "/portfolio", priority: 0.75, frequency: "monthly" as const },
    { path: "/pricing", priority: 0.75, frequency: "monthly" as const },
    { path: "/contact", priority: 0.8, frequency: "monthly" as const },
    { path: "/blog", priority: 0.8, frequency: "weekly" as const },
    { path: "/privacy-policy", priority: 0.2, frequency: "yearly" as const },
    { path: "/terms-and-conditions", priority: 0.2, frequency: "yearly" as const },
  ];

  return [
    ...core.map((item) => ({
      url: routeUrl(item.path),
      lastModified: updated,
      changeFrequency: item.frequency,
      priority: item.priority,
    })),
    ...servicePages.map((service) => ({
      url: routeUrl(service.slug),
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...locationPages.map((location) => ({
      url: routeUrl(location.slug),
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: location.office ? 0.85 : 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: routeUrl(`blog/${post.slug}`),
      lastModified: new Date(`${post.published}T00:00:00+05:30`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
