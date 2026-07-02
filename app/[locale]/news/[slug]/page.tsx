import { notFound } from "next/navigation";

import { createMetadata } from "@/lib/seo";

import { dummyNews } from "@/components/sections/news/dummy-news";

import ArticleHeader from "@/components/sections/news-detail/article-header";
import ArticleContent from "@/components/sections/news-detail/article-content";
import ArticleShare from "@/components/sections/news-detail/article-share";
import AuthorCard from "@/components/sections/news-detail/author-card";
// import RelatedNews from "@/components/sections/news-detail/related-news";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const news = dummyNews.find((item) => item.slug === slug);

  if (!news) {
    return {};
  }

  return createMetadata({
    title: news.title,
    description: news.excerpt,
    path: `/news/${news.slug}`,
    image: news.image,
  });
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const news = dummyNews.find((item) => item.slug === slug);

  if (!news) {
    notFound();
  }

  return (
    <>
      <ArticleHeader news={news} />

      <ArticleContent
        content={`
          <h2>Marine Logistics Excellence</h2>

          <p>
            PT Becta Logistics successfully completed another
            heavy equipment transportation project using our
            Landing Craft Tank fleet.
          </p>

          <p>
            The project demonstrates our commitment to providing
            safe, reliable and efficient marine transportation
            services throughout Indonesia.
          </p>

          <blockquote>
            Safety and reliability remain the foundation
            of every operation carried out by PT Becta Logistics.
          </blockquote>

          <h3>Project Highlights</h3>

          <ul>
            <li>Heavy equipment transportation</li>
            <li>Professional marine crew</li>
            <li>Nationwide coverage</li>
            <li>24/7 operational support</li>
          </ul>

          <p>
            Through continuous improvement and operational
            excellence, PT Becta Logistics continues to support
            industrial growth across Indonesia.
          </p>
        `}
      />

      <AuthorCard />

      <ArticleShare title={news.title} />

      {/* <RelatedNews currentSlug={news.slug} /> */}
    </>
  );
}
