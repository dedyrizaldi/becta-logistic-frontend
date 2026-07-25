import PageBanner from "@/components/common/page-banner/page-banner";

import ContactInfo from "@/components/sections/contact/contact-info";
import ContactForm from "@/components/sections/contact/contact-form";
import OfficeMap from "@/components/sections/contact/office-map";
import CTA from "@/components/sections/cta/cta";

import { createMetadata } from "@/lib/seo";
import { getHomepage } from "@/services/homepage.service";

export const metadata = createMetadata({
  title: "Contact | PT Becta Logistics",
  description:
    "Get in touch with PT Becta Logistics for professional marine logistics, LCT charter, heavy equipment transportation, and project cargo services throughout Indonesia.",
  path: "/contact",
});

export default async function ContactPage() {
  const homepage = await getHomepage();

  return (
    <>
      <PageBanner
        title="Contact Us"
        description="Get in touch with our marine logistics specialists."
        image="/hero/hero-3.png"
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <ContactInfo website={homepage.website} />

          <ContactForm />
        </div>
      </section>

      <OfficeMap website={homepage.website} />
      <CTA />
    </>
  );
}
