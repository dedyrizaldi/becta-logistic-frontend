"use client";

import { motion } from "framer-motion";

import NewsCard from "./news-card";
import { dummyNews } from "./dummy-news";

const NewsGrid = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="
            grid
            gap-8

            md:grid-cols-2

            xl:grid-cols-3
          "
        >
          {dummyNews.map((item, index) => (
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
      </div>
    </section>
  );
};

export default NewsGrid;
