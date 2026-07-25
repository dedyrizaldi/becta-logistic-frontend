const API_URL = (
  process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000"
).replace(/\/$/, "");

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const url = `${API_URL}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;

  // console.log("[API]", url);

  const response = await fetch(url, {
    ...options,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(options?.headers ?? {}),
    },
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    let message = response.statusText;

    try {
      const error = await response.json();
      message = error.message ?? response.statusText;
    } catch {
      // Ignore JSON parse error
    }

    throw new Error(`API Error (${response.status}): ${message}`);
  }

  return response.json() as Promise<T>;
}
