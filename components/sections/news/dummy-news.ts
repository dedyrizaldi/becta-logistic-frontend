export interface NewsItem {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  publishedAt: string;
  author: string;
  featured?: boolean;
}

export const dummyNews: NewsItem[] = [
  {
    id: 1,
    slug: "lct-becta-successfully-delivers-heavy-equipment",
    title:
      "LCT Becta Successfully Delivers Heavy Equipment to Eastern Indonesia",
    excerpt:
      "PT Becta Logistics successfully completed heavy equipment transportation using Landing Craft Tank vessels to support industrial development in Eastern Indonesia.",
    category: "Projects",
    image: "/cta/cta-bg.png",
    publishedAt: "15 July 2026",
    author: "Becta Logistics",
    featured: true,
  },

  {
    id: 2,
    slug: "marine-logistics-for-mining-projects",
    title: "Supporting Mining Projects Through Reliable Marine Logistics",
    excerpt:
      "Our experienced marine logistics team ensures safe and efficient transportation for mining equipment across the Indonesian archipelago.",
    category: "Logistics",
    image: "/cta/cta-bg.png",
    publishedAt: "10 July 2026",
    author: "Becta Logistics",
  },

  {
    id: 3,
    slug: "expanding-lct-fleet-capabilities",
    title: "Expanding Our LCT Fleet to Meet Growing Customer Demand",
    excerpt:
      "Becta Logistics continues investing in fleet expansion to provide better marine transportation solutions throughout Indonesia.",
    category: "Company",
    image: "/cta/cta-bg.png",
    publishedAt: "5 July 2026",
    author: "Becta Logistics",
  },

  {
    id: 4,
    slug: "safe-marine-transportation-standards",
    title: "Maintaining High Safety Standards in Marine Transportation",
    excerpt:
      "Safety remains our highest priority through strict operational procedures and experienced crews.",
    category: "Safety",
    image: "/cta/cta-bg.png",
    publishedAt: "30 June 2026",
    author: "Becta Logistics",
  },

  {
    id: 5,
    slug: "port-logistics-services-indonesia",
    title: "Integrated Port Logistics Services Across Indonesia",
    excerpt:
      "Our logistics network continues to expand, serving major ports and industrial areas throughout Indonesia.",
    category: "Logistics",
    image: "/cta/cta-bg.png",
    publishedAt: "25 June 2026",
    author: "Becta Logistics",
  },

  {
    id: 6,
    slug: "new-lct-charter-services",
    title: "Introducing Flexible LCT Charter Services",
    excerpt:
      "Customers can now choose flexible charter periods tailored to project requirements and operational schedules.",
    category: "Services",
    image: "/cta/cta-bg.png",
    publishedAt: "20 June 2026",
    author: "Becta Logistics",
  },

  {
    id: 7,
    slug: "new-lcst-charter-services",
    title: "Introducing Flexible LCT Charter Services",
    excerpt:
      "Customers can now choose flexible charter periods tailored to project requirements and operational schedules.",
    category: "Services",
    image: "/cta/cta-bg.png",
    publishedAt: "20 June 2026",
    author: "Becta Logistics",
  },
];
