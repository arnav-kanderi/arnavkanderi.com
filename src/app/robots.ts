import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://arnavkanderi.com/sitemap.xml",
    host: "https://arnavkanderi.com",
  };
}
