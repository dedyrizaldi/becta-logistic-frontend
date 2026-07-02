"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

import type { NewsItem } from "./dummy-news";

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
      }}
      viewport={{
        once: true,
      }}
      className="
        group

        overflow-hidden

        rounded-2xl

        border
        border-slate-200

        bg-white

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-[#D8A41D]
        hover:shadow-xl
      "
    >
      {/* Image */}

      <Link href={`/news/${news.slug}`}>
        <div className="relative h-[185px] overflow-hidden">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="
              object-cover

              transition-transform
              duration-500

              group-hover:scale-105
            "
          />

          {/* Overlay */}

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-t

              from-black/40
              via-transparent
              to-transparent
            "
          />

          {/* Category */}

          <span
            className="
              absolute
              left-4
              top-4

              rounded-full

              bg-[#D8A41D]

              px-3
              py-1

              text-[10px]
              font-bold

              uppercase
              tracking-[0.15em]

              text-white
            "
          >
            {news.category}
          </span>
        </div>
      </Link>

      {/* Content */}

      <div className="p-5">
        {/* Date */}

        <div
          className="
            mb-3

            flex
            items-center
            gap-2

            text-xs

            text-slate-500
          "
        >
          <CalendarDays size={14} />

          <span>{news.publishedAt}</span>
        </div>

        {/* Title */}

        <Link href={`/news/${news.slug}`}>
          <h3
            className="
              line-clamp-2

              text-xl
              font-bold

              leading-7

              text-[#071C3A]

              transition-colors

              group-hover:text-[#D8A41D]
            "
          >
            {news.title}
          </h3>
        </Link>

        {/* Excerpt */}

        <p
          className="
            mt-3

            line-clamp-2

            text-[15px]

            leading-7

            text-slate-600
          "
        >
          {news.excerpt}
        </p>

        {/* Footer */}

        <div
          className="
            mt-5

            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-sm

              font-medium

              text-slate-400
            "
          >
            {news.author}
          </span>

          <Link
            href={`/news/${news.slug}`}
            className="
              inline-flex
              items-center
              gap-2

              font-semibold

              text-[#D8A41D]

              transition-all

              hover:gap-3
            "
          >
            Read More
            <ArrowRight size={17} className="transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default NewsCard;
