export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface HomepageData {
  website: Website;
  hero: Hero[];
  trusted_clients: TrustedClient[];
  journey: Journey[];
  featured_services: Service[];
  featured_projects: Project[];
  featured_fleets: Fleet[];
  latest_news: News[];
}

export interface Website {
  company_name: string;
  tagline: string;
  company_description: string;
  email: string;
  phone: string;
  mobile: string;
  whatsapp: string;
  fax: string;
  address: string;
  latitude: number | null;
  longitude: number | null;
  google_maps: string;
  office_hours: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  tiktok: string;
  twitter: string;
  footer_text: string;
  copyright: string;
  default_seo_title: string;
  default_seo_description: string;
  logo: string | null;
  footer_logo: string | null;
  favicon: string | null;
  og_image: string | null;
}

export interface Hero {
  id: number;
  title: string;
  subtitle: string;
  description: string;

  primary_button: {
    text: string;
    url: string;
  };

  secondary_button: {
    text: string;
    url: string;
  };

  desktop_image: string;
  mobile_image: string;

  sort_order: number;
  is_active: boolean;
}

export interface TrustedClient {
  id: number;
  name: string;
  logo: string;
  sort_order?: number;
}

export interface Journey {
  id: number;
  title: string;
  subtitle: string;
  description: string;

  button: {
    text: string;
    url: string;
  };

  image: string;

  sort_order: number;
  is_active: boolean;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Service {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail: string | null;
  category: Category;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  client: string;
  location: string;
  excerpt: string;
  completed_at: string;
  thumbnail: string | null;
  category: Category;
}

export interface FleetSpecification {
  loa: string;
  beam: string;
  depth: string;
  gt: number;
  cargo_capacity: number;
}

export interface Fleet {
  id: number;
  title: string;
  slug: string;
  code: string;
  excerpt: string;
  thumbnail: string | null;
  category: Category;
  specification: FleetSpecification;
}

export interface News {
  id: number;
  title: string;
  slug: string;

  author: string;
  source: string | null;

  excerpt: string;
  description: string;

  reading_time: string | null;

  views: number;

  published_at: string;

  thumbnail: string | null;
  cover: string | null;

  gallery: {
    id: number;
    url: string;
  }[];

  category: Category;

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
