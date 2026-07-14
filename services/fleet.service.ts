import { apiFetch } from "@/lib/api";

export interface FleetDetailResponse {
  success: boolean;
  message: string;
  data: {
    fleet: FleetDetail;
    related_fleets: FleetSummary[];
  };
}

export interface FleetSummary {
  id: number;
  title: string;
  slug: string;
  code: string;
  excerpt: string | null;
  thumbnail: string;
  category: {
    id: number;
    name: string;
    slug: string;
  };
  specification: {
    loa: string;
    beam: string;
    depth: string;
    gt: number;
    cargo_capacity: number;
  };
}

export interface FleetDetail extends FleetSummary {
  description: string;

  gallery: {
    id: number;
    url: string;
  }[];

  brochure: string | null;

  technical: {
    engine: string | null;
    speed: string | null;
    crew: number | null;
    built_year: string | null;
    flag: string | null;
  };

  featured: boolean;

  published: boolean;

  meta: {
    title: string;
    description: string;
  };
}

export async function getFleetDetail(
  slug: string,
): Promise<FleetDetailResponse> {
  return apiFetch<FleetDetailResponse>(`/api/v1/fleets/${slug}`);
}
