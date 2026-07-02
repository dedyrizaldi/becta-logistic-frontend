import { createMetadata } from "@/lib/seo";

import PageBanner from "@/components/common/page-banner/page-banner";
import NewsSection from "@/components/sections/news";

export const metadata = createMetadata({
  title: "News | PT Becta Logistics",
  description:
    "Stay updated with the latest news, projects, and company information from PT Becta Logistics.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <>
      <PageBanner
        title="News"
        description="Stay updated with the latest news, projects, and company information from PT Becta Logistics."
        image="/cta/cta-bg.png"
      />

      <NewsSection />
    </>
  );
}
