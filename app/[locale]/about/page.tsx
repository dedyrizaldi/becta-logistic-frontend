import PageBanner from "@/components/common/page-banner/page-banner";

import AboutSection from "@/components/sections/about/about";
import CTASection from "@/components/sections/cta/cta";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Us | PT Becta Logistics",
  description:
    "Learn more about PT Becta Logistics and our experience in marine logistics and LCT transportation.",
  path: "/about",
});

const AboutPage = () => {
  return (
    <>
      <PageBanner
        title="About Us"
        description="Trusted Marine Logistics Company Serving Indonesia Through Reliable Landing Craft Tank (LCT) Transportation."
        image="/hero/hero-2.png"
      />

      <AboutSection />

      <CTASection />
    </>
  );
};

export default AboutPage;
