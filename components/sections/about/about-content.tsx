"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import FeatureItem from "./feature-item";

const AboutContent = () => {
  const t = useTranslations("about");

  return (
    <div className="max-w-[560px]">
      {/* Badge */}

      <span
        className="
          text-sm
          font-semibold
          uppercase
          tracking-[0.3em]
          text-[#D8A41D]
        "
      >
        {t("title")}
      </span>

      {/* Title */}

      <h2
        className="
          mt-2
          text-3xl
          font-black
          leading-tight
          text-[#0B2F63]

          md:text-4xl

          xl:text-5xl
        "
      >
        {t("title-1")}
      </h2>

      {/* Description */}

      <p
        className="
          mt-6
          text-base
          leading-8
          text-slate-600
        "
      >
        {t("description")}
      </p>

      {/* Features */}

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <FeatureItem
          icon="shield"
          title={t("features.safety.title")}
          description={t("features.safety.description")}
        />

        <FeatureItem
          icon="clock"
          title={t("features.delivery.title")}
          description={t("features.delivery.description")}
        />

        <FeatureItem
          icon="map"
          title={t("features.coverage.title")}
          description={t("features.coverage.description")}
        />
      </div>

      {/* Button */}
      {/* 
      <div className="mt-10">
        <Button
          className="
            h-11
            rounded-md
            bg-[#0B2F63]
            px-6
            text-sm
            font-semibold
            uppercase
            hover:bg-[#08254F]
            text-white
          "
        >
          {t("button")}

          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div> */}
    </div>
  );
};

export default AboutContent;
