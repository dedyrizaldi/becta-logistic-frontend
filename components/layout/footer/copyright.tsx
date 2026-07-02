"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

const Copyright = () => {
  const t = useTranslations("footer");

  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-between
        gap-4

        border-t
        border-white/10

        py-6

        text-sm

        text-white/60

        md:flex-row
      "
    >
      {/* Copyright */}

      <p className="text-center md:text-left">
        © {new Date().getFullYear()} Becta Logistics. {t("copyright")}
      </p>

      {/* Links */}

      <div
        className="
          flex
          items-center
          gap-6
        "
      >
        <Link
          href="/privacy-policy"
          className="
            transition-colors
            duration-300

            hover:text-[#D8A41D]
          "
        >
          {t("privacy")}
        </Link>

        <Link
          href="/terms"
          className="
            transition-colors
            duration-300

            hover:text-[#D8A41D]
          "
        >
          {t("terms")}
        </Link>
      </div>
    </div>
  );
};

export default Copyright;
