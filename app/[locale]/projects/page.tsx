import PageBanner from "@/components/common/page-banner/page-banner";
import CTA from "@/components/sections/cta/cta";
import FeatureProject from "@/components/sections/featured-projects/featured-projects";

import { createMetadata } from "@/lib/seo";
import { getHomepage } from "@/services/homepage.service";

export const metadata = createMetadata({
  title: "Our Projects | PT Becta Logistics",
  description:
    "Explore our completed marine logistics projects across Indonesia.",
  path: "/projects",
});

export default async function ProjectsPage() {
  const homepage = await getHomepage();

  return (
    <>
      <PageBanner
        title="Our Projects"
        description="Explore our completed marine logistics projects across Indonesia."
        image="/hero/hero-1.png"
      />

      <FeatureProject projects={homepage.featured_projects} />

      <CTA />
    </>
  );
}
