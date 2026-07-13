import PageBanner from "@/components/common/page-banner/page-banner";
import CTA from "@/components/sections/cta/cta";
import FleetSection from "@/components/sections/fleet/fleet";

import { createMetadata } from "@/lib/seo";
import { getHomepage } from "@/services/homepage.service";

export const metadata = createMetadata({
  title: "Our Fleet | PT Becta Logistics",
  description:
    "Learn more about PT Becta Logistics and our experience in marine logistics and LCT transportation.",
  path: "/fleet",
});

export default async function FleetPage() {
  const homepage = await getHomepage();

  return (
    <>
      <PageBanner
        title="Our Fleet"
        description="Discover our diverse and modern fleet of marine vessels."
        image="/cta/cta-bg.png"
      />

      <FleetSection fleets={homepage.featured_fleets} />
      <CTA />
    </>
  );
}
