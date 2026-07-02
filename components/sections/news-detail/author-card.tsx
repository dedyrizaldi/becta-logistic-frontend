"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

const AuthorCard = () => {
  const t = useTranslations("news-detail");

  return (
    <section className="pb-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div
          className="
            flex
            flex-col
            gap-6

            rounded-[20px]

            border
            border-slate-200

            bg-[#F8FAFC]

            p-8

            md:flex-row
            md:items-center
          "
        >
          {/* Avatar */}

          <div className="relative h-24 w-24 overflow-hidden rounded-full">
            <Image
              src="/images/team/admin.jpg"
              alt="Becta Logistics"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}

          <div className="flex-1">
            <span
              className="
                text-sm
                font-semibold

                uppercase
                tracking-[.2em]

                text-[#D8A41D]
              "
            >
              {t("writtenBy")}
            </span>

            <h3 className="mt-2 text-2xl font-black text-[#071C3A]">
              PT Becta Logistics
            </h3>

            <p className="mt-3 leading-7 text-slate-600">{t("description")}</p>

            <div className="mt-5 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Mail size={16} className="text-[#D8A41D]" />
                info@bectalogistics.com
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Phone size={16} className="text-[#D8A41D]" />
                +62 21 1234 5678
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorCard;
