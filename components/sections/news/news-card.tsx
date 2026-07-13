"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight, CalendarDays, User } from "lucide-react";
import { motion } from "framer-motion";

import type { News } from "@/types/news";
import { mediaUrl } from "@/lib/media";

interface NewsCardProps {
  news: News;
}

const NewsCard = ({ news }: NewsCardProps) => {
  const thumbnail = mediaUrl(news.thumbnail);

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
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
      <Link href={`/news/${news.slug}`}>
        <div className="relative h-[220px] overflow-hidden bg-slate-100">
          <Image
            src={thumbnail}
            alt={news.title}
            fill
            unoptimized
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <span
            className="
              absolute
              left-4
              top-4
              rounded-full
              bg-[#D8A41D]
              px-3
              py-1
              text-[11px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-white
            "
          >
            {news.category.name}
          </span>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-5 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <CalendarDays size={15} />

            <span>
              {new Date(news.published_at).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <User size={15} />

            <span>{news.author}</span>
          </div>
        </div>

        <Link href={`/news/${news.slug}`}>
          <h3
            className="
              mt-4
              line-clamp-2
              text-2xl
              font-bold
              leading-8
              text-[#071C3A]
              transition-colors
              group-hover:text-[#D8A41D]
            "
          >
            {news.title}
          </h3>
        </Link>

        <p
          className="
            mt-4
            line-clamp-3
            text-[15px]
            leading-7
            text-slate-600
          "
        >
          {news.excerpt}
        </p>

        <div
          className="
            mt-6
            flex
            items-center
            justify-between
          "
        >
          <span className="text-sm font-medium text-slate-400">
            {news.views} Views
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
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default NewsCard;
