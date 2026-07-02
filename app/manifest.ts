import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Becta Logistics",

    short_name: "Becta",

    description: "Trusted Marine Logistics & LCT Transportation Company",

    start_url: "/",

    display: "standalone",

    background_color: "#071C3A",

    theme_color: "#071C3A",

    icons: [
      {
        src: "/favicon/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
