import NewsHero from "@/components/sections/news/news-hero";
import NewsSection from "@/components/sections/news";

import { getNews } from "@/services/news.service";

interface NewsPageProps {
  searchParams: Promise<{
    page?: string;
    q?: string;
    category?: string;
    sort?: "latest" | "oldest" | "popular" | "title";
  }>;
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const params = await searchParams;

  const page = Number(params.page ?? 1);

  const response = await getNews({
    page,
    search: params.q,
    category: params.category,
    sort: params.sort,
  });

  return (
    <>
      <NewsHero />

      <NewsSection news={response.data} meta={response.meta} />
    </>
  );
}
