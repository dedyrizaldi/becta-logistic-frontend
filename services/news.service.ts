import { apiFetch } from "@/lib/api";
import { ApiResponse, News } from "@/types/homepage";
import { NewsDetail } from "@/types/news";

export interface NewsResponse {
  data: News[];
  links: {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

export interface NewsDetailResponse {
  news: NewsDetail;
  related_news: News[];
}

/**
 * GET /api/v1/news
 */
export async function getNews(page = 1): Promise<NewsResponse> {
  const response = await apiFetch<
    ApiResponse<News[]> & {
      links: NewsResponse["links"];
      meta: NewsResponse["meta"];
    }
  >(`/api/v1/news?page=${page}`);

  return {
    data: response.data,
    links: response.links,
    meta: response.meta,
  };
}

/**
 * GET /api/v1/news/{slug}
 */
export async function getNewsDetail(slug: string): Promise<NewsDetailResponse> {
  const response = await apiFetch<ApiResponse<NewsDetailResponse>>(
    `/api/v1/news/${slug}`,
  );

  return response.data;
}
