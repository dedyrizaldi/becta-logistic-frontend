"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

interface BreadcrumbProps {
  current?: string;
}

const routeLabels: Record<string, string> = {
  about: "about",
  services: "services",
  fleet: "fleet",
  projects: "projects",
  contact: "contact",
  news: "news",
};

const Breadcrumb = ({ current }: BreadcrumbProps) => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("breadcrumb");

  const segments = pathname
    .split("/")
    .filter(Boolean)
    .filter((segment) => segment !== locale);

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-sm text-white/80"
    >
      {/* Home */}

      <Link
        href="/"
        className="
          flex
          items-center
          gap-2

          transition-colors

          hover:text-[#D8A41D]
        "
      >
        <Home size={16} />

        {t("home")}
      </Link>

      {segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join("/")}`;

        const isLast = index === segments.length - 1;

        return (
          <div key={href} className="flex items-center gap-2">
            <ChevronRight size={15} className="text-white/40" />

            {isLast ? (
              <span className="font-semibold text-[#D8A41D]">
                {current ?? t(routeLabels[segment] ?? segment)}
              </span>
            ) : (
              <Link
                href={href}
                className="
                  transition-colors

                  hover:text-[#D8A41D]
                "
              >
                {t(routeLabels[segment] ?? segment)}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
