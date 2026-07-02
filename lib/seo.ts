import type { Metadata } from "next";

const BASE_URL = "https://becta.co.id";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function createMetadata({
  title,
  description,
  path = "",
  image = "/opengraph-image.jpg",
}: SeoProps): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    metadataBase: new URL(BASE_URL),

    title,

    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,

      siteName: "Becta Logistics",

      locale: "en_US",

      type: "website",

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
