"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const OfficeLeaflet = dynamic(() => import("./office-leaflet"), {
  ssr: false,
});

export default function OfficeMap() {
  const t = useTranslations("contact-page");

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[.3em] text-[#D8A41D]">
            {t("office")}
          </span>

          <h2 className="mt-3 text-4xl font-black text-[#071C3A]">
            {t("findUs")}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            {t("officeDescription")}
          </p>
        </div>

        <div className="h-[520px] overflow-hidden rounded-[10px] shadow-xl">
          <OfficeLeaflet />
        </div>
      </div>
    </section>
  );
}
