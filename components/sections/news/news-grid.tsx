"use client";

import { motion } from "framer-motion";

import type { News } from "@/types/homepage";

import NewsCard from "./news-card";

interface NewsGridProps {
  news: News[];
}

const NewsGrid = ({ news }: NewsGridProps) => {
  if (!news.length) {
    return (
      <div className="py-20 text-center text-slate-500">No news available.</div>
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
            y: 40,
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
