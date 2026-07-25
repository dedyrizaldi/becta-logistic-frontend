import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  /**
   * React
   */
  reactStrictMode: true,

  /**
   * Remove "X-Powered-By: Next.js"
   */
  poweredByHeader: false,

  /**
   * Enable gzip/brotli compression
   */
  compress: true,

  /**
   * Remote Images
   */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.becta.co.id",
        pathname: "/storage/**",
      },
    ],
  },

  /**
   * Development only
   */
  ...(process.env.NODE_ENV === "development"
    ? {
        allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
      }
    : {}),

  /**
   * Security Headers
   */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-site",
          },
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
