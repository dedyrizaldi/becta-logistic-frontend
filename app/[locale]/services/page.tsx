import PageBanner from "@/components/common/page-banner/page-banner";
import Services from "@/components/sections/services/services";
import CTA from "@/components/sections/cta/cta";

import { createMetadata } from "@/lib/seo";
import { getHomepage } from "@/services/homepage.service";

export const metadata = createMetadata({
  title: "Our Services | PT Becta Logistics",
  description:
    "Learn more about PT Becta Logistics and our experience in marine logistics and LCT transportation.",
  path: "/services",
});

export default async function ServicesPage() {
  const homepage = await getHomepage();

  return (
    <>
      <PageBanner
        title="Our Services"
        description="Comprehensive marine transportation solutions across Indonesia."
        image="/cta/cta-bg.png"
      />

      <Services services={homepage.featured_services ?? []} />

      <CTA />
    </>
  );
}
