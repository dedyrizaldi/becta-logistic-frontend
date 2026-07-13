import { apiFetch } from "@/lib/api";
import { ApiResponse, HomepageData } from "@/types/homepage";

/**
 * Homepage Service
 *
 * GET /api/v1/homepage
 */
export async function getHomepage(): Promise<HomepageData> {
  const response = await apiFetch<ApiResponse<HomepageData>>("/api/v1/home");

  return response.data;
}
