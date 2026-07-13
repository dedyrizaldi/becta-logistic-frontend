const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";

/**
 * Generate full media url from backend.
 *
 * Example:
 * /storage/1/image.jpg
 *
 * =>
 *
 * https://admin.becta.co.id/storage/1/image.jpg
 */
export function mediaUrl(path: string | null | undefined): string {
  if (!path) {
    return "/file.svg";
  }

  // Already absolute URL
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${API_URL}${path}`;
}
