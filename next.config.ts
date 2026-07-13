import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.becta.co.id",
        pathname: "/storage/**",
      },
    ],
  },
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
};

export default withNextIntl(nextConfig);
