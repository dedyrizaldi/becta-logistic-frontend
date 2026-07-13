export interface NewsCategory {
  id: number;
  name: string;
  slug: string;
}

export interface News {
  id: number;
  title: string;
  slug: string;
  author: string;
  source: string | null;
  excerpt: string;
  reading_time: string | null;
  views: number;
  published_at: string;
  thumbnail: string | null;
  category: NewsCategory;
}

/* -------------------------------------------------------------------------- */
/*                                   DETAIL                                   */
/* -------------------------------------------------------------------------- */

export interface NewsGallery {
  id: number;
  url: string;
}

export interface NewsMeta {
  title: string;
  description: string;
}

export interface NewsDetail extends News {
  description: string;
  cover: string | null;
  gallery: NewsGallery[];
  tags: string[];
  meta: NewsMeta;
  featured: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface NewsDetailResponse {
  success: boolean;
  message: string;
  data: {
    news: NewsDetail;
    related_news: News[];
  };
}

/* -------------------------------------------------------------------------- */
/*                                 PAGINATION                                 */
/* -------------------------------------------------------------------------- */

export interface PaginationLink {
  url: string | null;
  label: string;
  page: number | null;
  active: boolean;
}

export interface PaginationMeta {
  current_page: number;
  from: number | null;
  last_page: number;
  links: PaginationLink[];
  path: string;
  per_page: number;
  to: number | null;
  total: number;
}

export interface PaginationUrls {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
}

export interface NewsListResponse {
  success: boolean;
  message: string;
  data: News[];
  links: PaginationUrls;
  meta: PaginationMeta;
}
