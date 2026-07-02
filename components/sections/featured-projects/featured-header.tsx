"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const FeaturedHeader = () => {
  const t = useTranslations("featuredProjects");

  return (
    <div
      className="
        flex
        h-full
        flex-col
        justify-center
      "
    >
      {/* Badge */}

      <div className="flex items-center gap-2">
        <div className="h-px w-8 bg-[#D8A41D]" />

        <span
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.30em]
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
          text-[22px]
          font-black
          leading-tight
          text-white

          lg:text-[28px]

          xl:text-[30px]
        "
      >
        {t("title")}
      </h2>

      {/* Description */}

      <p
        className="
          mt-4
          text-[13px]
          leading-6
          text-slate-300
        "
      >
        {t("description")}
      </p>

      {/* Button */}

      <div className="mt-7">
        <Button
          className="
            h-9
            rounded-md
            bg-[#D8A41D]
            px-4

            text-[11px]
            font-bold
            uppercase
            tracking-wider

            text-[#071C3A]

            transition-all
            duration-300

            hover:bg-[#E3B63A]
          "
        >
          {t("button")}

          <ArrowRight className="ml-2 h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
};

export default FeaturedHeader;
