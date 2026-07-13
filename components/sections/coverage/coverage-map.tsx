"use client";

import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const CoverageLeaflet = dynamic(() => import("./coverage-leaflet"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#D8A41D] border-t-transparent" />
    </div>
  ),
});

const CoverageMap = () => {
  const t = useTranslations("coverage-home");

  return (
    <div
      className="
        relative
        h-[330px]
        overflow-hidden
        bg-[#071C3A]
      "
    >
      {/* Header */}

      <div className="absolute left-8 top-6 z-[1000]">
        <div className="flex items-center gap-2">
          <div className="h-px w-8 bg-[#D8A41D]" />

          <span
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-[#D8A41D]
            "
          >
            {t("badge")}
          </span>
        </div>
      </div>

      {/* Map */}

      <div className="absolute inset-0">
        <CoverageLeaflet />
      </div>

      {/* Button */}

      {/* <button
        className="
          absolute
          bottom-5
          left-8
          z-[1000]

          flex
          items-center
          gap-2

          rounded-md

          border
          border-white/20

          bg-[#071C3A]/80

          px-4
          py-2

          text-[11px]
          font-semibold
          uppercase
          tracking-wide

          text-white

          backdrop-blur-md

          transition-all

          hover:bg-[#D8A41D]
          hover:border-[#D8A41D]
        "
      >
        {t("viewMap")}

        <ArrowRight size={14} />
      </button> */}
    </div>
  );
};

export default CoverageMap;
