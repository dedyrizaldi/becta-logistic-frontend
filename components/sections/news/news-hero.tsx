"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const NewsHero = () => {
  const t = useTranslations("news-page");
  const locale = useLocale();

  return (
    <section className="relative isolate h-[420px] overflow-hidden lg:h-[540px]">
      {/* Background */}

      <Image
        src="/cta/cta-bg.png"
        alt={t("title")}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center transition-transform duration-[8000ms] scale-105"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-[#071C3A]/75" />

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#071C3A] via-[#071C3A]/70 to-transparent" />

      {/* Gold Light */}

      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#D8A41D]/10 blur-3xl" />

      {/* Bottom Fade */}

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent" />

      {/* Content */}

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-[#D8A41D]
                bg-[#D8A41D]/10
                px-5
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#D8A41D]
              "
            >
              {t("badge")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="
              mt-7
              max-w-4xl
              text-4xl
              font-black
              leading-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            {t("title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-white/80
              lg:text-lg
            "
          >
            {t("description")}
          </motion.p>

          {/* Breadcrumb */}

          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.35,
            }}
            className="mt-10"
          >
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
              <li>
                <Link
                  href={`/${locale}`}
                  className="transition hover:text-[#D8A41D]"
                >
                  {t("home")}
                </Link>
              </li>

              <li>
                <ChevronRight size={15} />
              </li>

              <li className="font-medium text-[#D8A41D]">{t("news")}</li>
            </ol>
          </motion.nav>
        </div>
      </div>
    </section>
  );
};

export default NewsHero;
