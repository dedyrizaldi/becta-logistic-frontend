"use client";

import Image from "next/image";
import Link from "next/link";

import { CalendarDays, Clock3, Eye, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

import type { NewsDetail } from "@/types/news";
import { mediaUrl } from "@/lib/media";

interface ArticleHeaderProps {
  news: NewsDetail;
}

export default function ArticleHeader({ news }: ArticleHeaderProps) {
  const locale = useLocale();

  const heroImage = mediaUrl(news.thumbnail);

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background */}

      <div className="relative h-[420px] lg:h-[600px]">
        <Image
          src={heroImage}
          alt={news.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/55" />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#071C3A]/90 via-[#071C3A]/55 to-transparent" />

        {/* Gold Glow */}

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#D8A41D]/10 blur-3xl" />
      </div>

      {/* Content */}

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            {/* Breadcrumb */}

            <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/70">
              <Link
                href={`/${locale}`}
                className="transition hover:text-[#D8A41D]"
              >
                Home
              </Link>

              <ChevronRight size={15} />

              <Link
                href={`/${locale}/news`}
                className="transition hover:text-[#D8A41D]"
              >
                News
              </Link>

              <ChevronRight size={15} />

              <span className="text-white">{news.category.name}</span>
            </nav>

            {/* Category */}

            <span
              className="
                inline-flex
                rounded-full
                bg-[#D8A41D]
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-white
              "
            >
              {news.category.name}
            </span>

            {/* Title */}

            <h1
              className="
                mt-6
                max-w-4xl
                text-4xl
                font-black
                leading-tight
                text-white
                lg:text-6xl
              "
            >
              {news.title}
            </h1>

            {/* Meta */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-6
                text-white/80
              "
            >
              <div className="flex items-center gap-2">
                <CalendarDays size={18} />

                <span>
                  {new Date(news.published_at).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>

              {news.reading_time && (
                <div className="flex items-center gap-2">
                  <Clock3 size={18} />

                  <span>{news.reading_time} min read</span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <Eye size={18} />

                <span>{news.views} Views</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
