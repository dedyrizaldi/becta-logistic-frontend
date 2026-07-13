"use client";

import { motion } from "framer-motion";

import type { News } from "@/types/news";

import NewsCard from "./news-card";

interface NewsGridProps {
  news: News[];
}

const NewsGrid = ({ news }: NewsGridProps) => {
  if (!news.length) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 py-20 text-center">
        <h3 className="text-2xl font-bold text-[#071C3A]">No News Found</h3>

        <p className="mt-3 text-slate-500">
          There are currently no news articles available.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        grid
        gap-8

        md:grid-cols-2

        xl:grid-cols-3
      "
    >
      {news.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.45,
            delay: index * 0.08,
          }}
        >
          <NewsCard news={item} />
        </motion.div>
      ))}
    </div>
  );
};

export default NewsGrid;
