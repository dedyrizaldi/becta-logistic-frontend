import type { MetadataRoute } from "next";

const baseUrl = "https://becta.co.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/fleet", "/projects", "/contact"];

  return routes.flatMap((route) => [
    {
      url: `${baseUrl}/id${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "" ? 1 : 0.8,
    },
    {
      url: `${baseUrl}/en${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "" ? 1 : 0.8,
    },
  ]);
}
