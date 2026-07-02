"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

const FleetHeader = () => {
  const t = useTranslations("fleet");

  return (
    <div
      className="
        flex
        flex-col
        gap-8

        lg:flex-row
        lg:items-end
        lg:justify-between
      "
    >
      {/* Left */}

      <div className="max-w-3xl">
        {/* Badge */}

        <div className="flex items-center gap-3">
          <div className="h-px w-10 bg-[#D8A41D]" />

          <span
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[#D8A41D]
            "
          >
            {t("badge")}
          </span>
        </div>

        {/* Title */}

        <h2
          className="
            mt-4
            text-[30px]
            font-black
            leading-tight
            text-[#0B2F63]

            md:text-[38px]
          "
        >
          {t("title")}
        </h2>

        {/* Description */}

        <p
          className="
            mt-5
            max-w-2xl

            text-[15px]
            leading-7
            text-slate-600
          "
        >
          {t("description")}
        </p>
      </div>

      {/* Right */}

      <Button
        className="
          h-11
          rounded-lg

          bg-[#0B2F63]

          px-6

          text-[12px]
          font-semibold
          uppercase
          tracking-wider

          hover:bg-[#08254F]
        "
      >
        {t("viewAll")}

        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default FleetHeader;
