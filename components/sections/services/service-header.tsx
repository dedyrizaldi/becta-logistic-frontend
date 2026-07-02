"use client";

import { useTranslations } from "next-intl";

const ServiceHeader = () => {
  const t = useTranslations("services");

  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {/* Badge */}

      <div className="flex items-center justify-center gap-3">
        <div className="h-px w-10 bg-[#D8A41D]" />

        <span
          className="
            text-[11px]
            font-bold
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
          mt-[1px]
          text-[30px]
          font-black
          leading-tight
          text-[#0B2F63]

          md:text-[38px]

          xl:text-[44px]
        "
      >
        {t("title")}
      </h2>

      {/* Description */}

      <p
        className="
          mx-auto
          mt-[1px]
          max-w-2xl
          text-[15px]
          leading-7
          text-slate-600
        "
      >
        {t("description")}
      </p>
    </div>
  );
};

export default ServiceHeader;
