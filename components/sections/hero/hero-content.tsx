"use client";

import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import Stat from "@/components/ui/stat";

const HeroContent = () => {
  const t = useTranslations("hero");

  return (
    <div className="max-w-[400px]">
      {/* Badge */}

      <div className="inline-flex items-center rounded-full border border-[#D8A41D]/20 bg-white/85 px-3 py-1 mt-15 backdrop-blur-md">
        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#0B2F63]">
          {t("badge")}
        </span>
      </div>

      {/* Heading */}

      <h1
        className="
          mt-3
          text-[22px]
          font-black
          uppercase
          leading-[1]
          tracking-tight
          text-[#0B2F63]

          sm:text-[28px]
          md:text-[32px]
          lg:text-[36px]
          xl:text-[40px]
        "
      >
        {t("title1")}
        <br />
        {t("title2")}
        <br />
        {t("title3")}
        <br />
        <span className="text-[#D8A41D]">{t("title4")}</span>
      </h1>

      {/* Description */}

      <p
        className="
          mt-3
          max-w-[360px]
          text-[12px]
          leading-6
          text-slate-600
        "
      >
        {t("description")}
      </p>

      {/* Button */}

      <div className="mt-5 flex flex-wrap gap-2.5">
        <Button
          className="
            h-9
            rounded-md
            bg-[#0B2F63]
            px-4
            text-[#D8A41D]
            text-[11px]
            font-semibold
            uppercase
            hover:bg-[#08254F]
          "
        >
          {t("primaryButton")}
          <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
        </Button>

        <Button
          variant="outline"
          asChild
          className="
            h-9
            rounded-md
            border-[#0B2F63]
            bg-white/90
            px-4
            text-[11px]
            font-semibold
            uppercase
          "
        >
          <Link href="/fleet">{t("secondaryButton")}</Link>
        </Button>
      </div>

      {/* Statistic */}

      <div
        className="
          mt-6
          grid
          grid-cols-3
          gap-3
          border-t
          border-slate-300/40
          pt-4
        "
      >
        <Stat number="20+" label={t("stats.experience")} />

        <Stat number="35+" label={t("stats.fleet")} />

        <Stat number="500+" label={t("stats.projects")} />
      </div>
    </div>
  );
};

export default HeroContent;
