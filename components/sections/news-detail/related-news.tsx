"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

import type { News } from "@/types/news";
import { mediaUrl } from "@/lib/media";

interface RelatedNewsProps {
  news: News[];
}

export default function RelatedNews({ news }: RelatedNewsProps) {
  if (!news.length) {
    return null;
  }

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#D8A41D]">
            Related
          </span>

          <h2 className="mt-3 text-4xl font-black text-[#071C3A]">
            Related Articles
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
              className="
                group
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-lg
                transition
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              <Link href={`/news/${item.slug}`}>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={mediaUrl(item.thumbnail)}
                    alt={item.title}
                    fill
                    className="
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-110
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <span
                    className="
                      absolute
                      left-5
                      top-5
                      rounded-full
                      bg-[#D8A41D]
                      px-3
                      py-1
                      text-xs
                      font-bold
                      uppercase
                      text-white
                    "
                  >
                    {item.category.name}
                  </span>
                </div>
              </Link>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CalendarDays size={15} />

                  <span>
                    {new Date(item.published_at).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <Link href={`/news/${item.slug}`}>
                  <h3
                    className="
                      mt-4
                      line-clamp-2
                      text-2xl
                      font-bold
                      text-[#071C3A]
                      transition
                      group-hover:text-[#D8A41D]
                    "
                  >
                    {item.title}
                  </h3>
                </Link>

                <p className="mt-4 line-clamp-3 text-slate-600">
                  {item.excerpt}
                </p>

                <Link
                  href={`/news/${item.slug}`}
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    font-semibold
                    text-[#D8A41D]
                    transition
                    hover:gap-3
                  "
                >
                  Read Article
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
