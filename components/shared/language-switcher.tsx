"use client";

import { useTransition } from "react";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

const LanguageSwitcher = () => {
  const locale = useLocale();

  const router = useRouter();

  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();

  const changeLocale = (nextLocale: "id" | "en") => {
    if (nextLocale === locale) return;

    startTransition(() => {
      router.replace(pathname, {
        locale: nextLocale,
      });
    });
  };

  return (
    <div
      className="
        flex
        items-center
        rounded-full
        border
        border-slate-200
        bg-white/90
        p-1
        shadow-sm
        backdrop-blur-md
      "
    >
      <button
        disabled={isPending}
        onClick={() => changeLocale("id")}
        className={`
          rounded-full
          px-3
          py-1.5
          text-xs
          font-semibold
          transition-all
          duration-300

          ${
            locale === "id"
              ? "bg-[#D8A41D] text-white"
              : "text-slate-600 hover:text-[#0B2F63]"
          }
        `}
      >
        ID
      </button>

      <button
        disabled={isPending}
        onClick={() => changeLocale("en")}
        className={`
          rounded-full
          px-3
          py-1.5
          text-xs
          font-semibold
          transition-all
          duration-300

          ${
            locale === "en"
              ? "bg-[#D8A41D] text-white"
              : "text-slate-600 hover:text-[#0B2F63]"
          }
        `}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
