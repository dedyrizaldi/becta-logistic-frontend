import { notFound } from "next/navigation";

import { createMetadata } from "@/lib/seo";

import { getNewsDetail } from "@/services/news.service";

import ArticleHeader from "@/components/sections/news-detail/article-header";
import ArticleContent from "@/components/sections/news-detail/article-content";
import ArticleShare from "@/components/sections/news-detail/article-share";
import AuthorCard from "@/components/sections/news-detail/author-card";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  try {
    const response = await getNewsDetail(slug);

    return createMetadata({
      title: response.news.title,
      description: response.news.excerpt,
      path: `/news/${response.news.slug}`,
      image: response.news.thumbnail ?? undefined,
    });
  } catch {
    return {};
  }
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;

  let response;

  try {
    response = await getNewsDetail(slug);
  } catch {
    notFound();
  }

  const news = response.news;

  return (
    <>
      <ArticleHeader news={news} />

      <ArticleContent content={news.description} />
      <AuthorCard />

      <ArticleShare title={news.title} />
    </>
  );
}
