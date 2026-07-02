import Hero from "@/components/sections/hero/hero";
import TrustedClients from "@/components/sections/trusted-clients/trusted-clients";
import About from "@/components/sections/about/about";
import Services from "@/components/sections/services/services";
import FeaturedProjects from "@/components/sections/featured-projects/featured-projects";
import Journey from "@/components/sections/journey/journey";
import Fleet from "@/components/sections/fleet/fleet";
import Coverage from "@/components/sections/coverage/coverage";
import Cta from "@/components/sections/cta/cta";
import { createMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const newMetaData: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  ),
};

export const metadata = createMetadata({
  title: "PT Becta Logistics | Marine Logistics & LCT Transportation",
  description:
    "PT Becta Logistics provides reliable Landing Craft Tank (LCT) charter, heavy equipment transportation, and marine logistics services across Indonesia.",
  path: "/",
});

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustedClients />
      <About />
      <Services />
      <FeaturedProjects />
      <Journey />
      <Fleet />
      <Coverage />
      <Cta />
    </main>
  );
}
