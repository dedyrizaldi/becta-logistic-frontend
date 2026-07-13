import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ArticleContent from "@/components/sections/news-detail/article-content";
import ArticleHeader from "@/components/sections/news-detail/article-header";
import ArticleShare from "@/components/sections/news-detail/article-share";
import AuthorCard from "@/components/sections/news-detail/author-card";
import ArticleGallery from "@/components/sections/news-detail/article-gallery";
import RelatedNews from "@/components/sections/news-detail/related-news";
import ArticleTags from "@/components/sections/news-detail/article-tags";

import { createMetadata } from "@/lib/seo";
import { getNewsDetail } from "@/services/news.service";

interface NewsDetailPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const response = await getNewsDetail(slug);

    const news = response.data.news;

    return createMetadata({
      title: news.meta?.title || news.title,
      description: news.meta?.description || news.excerpt,
      image: news.cover ?? news.thumbnail ?? undefined,
      path: `/news/${news.slug}`,
    });
  } catch {
    return createMetadata({
      title: "News",
      description: "Latest News",
    });
  }
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;

  let response;

  try {
    response = await getNewsDetail(slug);
  } catch {
    notFound();
  }

  const news = response.data.news;
  console.log(news.gallery);

  const relatedNews = response.data.related_news;

  return (
    <>
      <ArticleHeader news={news} />

      <ArticleContent content={news.description} />

      <ArticleGallery images={news.gallery} />

      <ArticleTags tags={news.tags} />

      <AuthorCard />

      <ArticleShare title={news.title} />

      <RelatedNews news={relatedNews} />
    </>
  );
}
