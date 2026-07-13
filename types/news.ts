export interface NewsCard {
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
  category: Category;
}

export interface NewsDetail extends NewsCard {
  description: string;
  cover: string | null;
  gallery: {
    id: number;
    url: string;
  }[];
  tags: string[];
  meta: {
    title: string | null;
    description: string | null;
  };
  featured: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}
