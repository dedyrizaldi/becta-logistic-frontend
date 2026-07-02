export interface HeroSlide {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    eyebrow: "marine logistics",
    title: "Reliable Marine Logistics & LCT Charter",
    description:
      "Providing safe, efficient and reliable marine transportation services across Indonesia.",
    image: "/hero/hero-1.png",
  },
  {
    id: 2,
    eyebrow: "heavy equipment",
    title: "Heavy Equipment Transportation",
    description:
      "Supporting mining, construction and infrastructure projects safely and on schedule.",
    image: "/hero/hero-2.png",
  },
  {
    id: 3,
    eyebrow: "project cargo",
    title: "Integrated Project Cargo Solutions",
    description:
      "Trusted marine logistics partner for industrial and offshore operations.",
    image: "/hero/hero-3.png",
  },
];
