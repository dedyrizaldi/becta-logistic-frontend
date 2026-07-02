"use client";

import { useTranslations } from "next-intl";

const JourneyHeader = () => {
  const t = useTranslations("journey");

  return (
    <div
      className="
        mx-auto
        max-w-3xl
        text-center
      "
    >
      {/* Badge */}

      <div className="flex items-center justify-center gap-3">
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

        <div className="h-px w-10 bg-[#D8A41D]" />
      </div>

      {/* Title */}

      <h2
        className="
          mt-4
          text-[28px]
          font-black
          leading-tight
          text-[#0B2F63]

          md:text-[34px]

          lg:text-[38px]
        "
      >
        {t("title")}
      </h2>
    </div>
  );
};

export default JourneyHeader;
