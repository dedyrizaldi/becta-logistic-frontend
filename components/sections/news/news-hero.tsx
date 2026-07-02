"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const NewsHero = () => {
  const t = useTranslations("news-page");

  return (
    <section className="relative h-[420px] overflow-hidden">
      {/* Background */}

      <Image
        src="/cta/cta-bg.png"
        alt="Latest News"
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-[#071C3A]/75" />

      {/* Gradient */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#071C3A]
          via-[#071C3A]/70
          to-transparent
        "
      />

      {/* Content */}

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="
              inline-block

              rounded-full

              border
              border-[#D8A41D]

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
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="
              mt-6

              max-w-3xl

              text-5xl
              font-black

              leading-tight

              text-white

              lg:text-6xl
            "
          >
            {t("title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="
              mt-6

              max-w-2xl

              text-lg

              leading-8

              text-white/80
            "
          >
            {t("description")}
          </motion.p>

          {/* Breadcrumb */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.35,
            }}
            className="
              mt-10

              flex
              items-center
              gap-2

              text-sm

              text-white/70
            "
          >
            <Link href="/" className="transition hover:text-[#D8A41D]">
              {t("home")}
            </Link>

            <ChevronRight size={16} />

            <span className="text-[#D8A41D]">{t("news")}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsHero;
