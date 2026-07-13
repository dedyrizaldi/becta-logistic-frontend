import Hero from "@/components/sections/hero/hero";
import TrustedClients from "@/components/sections/trusted-clients/trusted-clients";
import About from "@/components/sections/about/about";
import Services from "@/components/sections/services/services";
import FeaturedProjects from "@/components/sections/featured-projects/featured-projects";
import Fleet from "@/components/sections/fleet/fleet";
import Coverage from "@/components/sections/coverage/coverage";
import Cta from "@/components/sections/cta/cta";

import { createMetadata } from "@/lib/seo";
import { getHomepage } from "@/services/homepage.service";

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

export default async function HomePage() {
  const homepage = await getHomepage();

  return (
    <main>
      <Hero hero={homepage.hero} />

      <TrustedClients clients={homepage.trusted_clients} />

      <About />

      <Services services={homepage.featured_services} />

      <FeaturedProjects projects={homepage.featured_projects} />

      <Fleet fleets={homepage.featured_fleets} />

      <Coverage />

      <Cta />
    </main>
  );
}
