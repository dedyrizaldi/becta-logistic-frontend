"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

const FooterLinks = () => {
  const t = useTranslations("footer");

  const links = [
    {
      href: "/",
      label: t("home"),
    },
    {
      href: "/about",
      label: t("about"),
    },
    {
      href: "/services",
      label: t("services"),
    },
    {
      href: "/fleet",
      label: t("fleet"),
    },
    {
      href: "/projects",
      label: t("projects"),
    },
    {
      href: "/contact",
      label: t("contact"),
    },
  ];

  return (
    <div>
      {/* Title */}

      <h3
        className="
          mb-6

          text-lg
          font-bold

          text-white
        "
      >
        {t("quickLinks")}
      </h3>

      {/* Links */}

      <nav className="space-y-3">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="
              group

              flex
              items-center
              gap-2

              text-sm

              text-white/70

              transition-all
              duration-300

              hover:translate-x-1
              hover:text-[#D8A41D]
            "
          >
            <ChevronRight
              size={15}
              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            />

            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default FooterLinks;
