import PageBanner from "@/components/common/page-banner/page-banner";

import ContactInfo from "@/components/sections/contact/contact-info";
import ContactForm from "@/components/sections/contact/contact-form";
import OfficeMap from "@/components/sections/contact/office-map";

import CTA from "@/components/sections/cta/cta";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact | PT Becta Logistics",
  description:
    "Learn more about PT Becta Logistics and our experience in marine logistics and LCT transportation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        description="Get in touch with our marine logistics specialists."
        image="/hero/hero-3.png"
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <ContactInfo />

          <ContactForm />
        </div>
      </section>

      <OfficeMap />

      <CTA />
    </>
  );
}
