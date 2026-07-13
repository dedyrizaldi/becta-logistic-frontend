import { apiFetch } from "@/lib/api";

import type { NewsDetailResponse, NewsListResponse } from "@/types/news";

interface GetNewsParams {
  page?: number;
  search?: string;
  category?: string;
  sort?: "latest" | "oldest" | "popular" | "title";
}

export async function getNews(
  params: GetNewsParams = {},
): Promise<NewsListResponse> {
  const searchParams = new URLSearchParams();

  if (params.page) {
    searchParams.set("page", params.page.toString());
  }

  if (params.search) {
    searchParams.set("q", params.search);
  }

  if (params.category) {
    searchParams.set("category", params.category);
  }

  if (params.sort) {
    searchParams.set("sort", params.sort);
  }

  const query = searchParams.toString();

  return apiFetch<NewsListResponse>(`/api/v1/news${query ? `?${query}` : ""}`);
}

export async function getFeaturedNews(): Promise<NewsListResponse> {
  return apiFetch<NewsListResponse>("/api/v1/news/featured");
}

export async function getNewsDetail(slug: string): Promise<NewsDetailResponse> {
  return apiFetch<NewsDetailResponse>(`/api/v1/news/${slug}`);
}
