"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { CalendarDays, FolderOpen } from "lucide-react";

import type { News } from "@/types/homepage";
import { mediaUrl } from "@/lib/media";

interface ArticleHeaderProps {
  news: News;
}

const ArticleHeader = ({ news }: ArticleHeaderProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Image */}

      <div className="relative h-[320px] overflow-hidden md:h-[420px] lg:h-[560px]">
        <Image
          src={mediaUrl(news.thumbnail)}
          alt={news.title}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/45" />

        {/* Gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#071C3A]
            via-[#071C3A]/30
            to-transparent
          "
        />

        {/* Content */}

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-5xl px-6 pb-12 lg:px-8 lg:pb-20">
            {/* Category */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6 flex flex-wrap items-center gap-4"
            >
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
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
                <FolderOpen size={14} />

                {news.category.name}
              </span>

              <span
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-white/90
                "
              >
                <CalendarDays size={16} />

                {new Date(news.published_at).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </motion.div>

            {/* Title */}

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.5,
              }}
              className="
                max-w-4xl
                text-4xl
                font-black
                leading-tight
                text-white
                md:text-5xl
                lg:text-6xl
              "
            >
              {news.title}
            </motion.h1>

            {/* Excerpt */}

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              className="
                mt-8
                max-w-3xl
                text-lg
                leading-8
                text-white/80
                lg:text-xl
              "
            >
              {news.excerpt}
            </motion.p>

            {/* Author */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.3,
              }}
              className="mt-8 text-white/80"
            >
              By <strong>{news.author}</strong>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleHeader;
