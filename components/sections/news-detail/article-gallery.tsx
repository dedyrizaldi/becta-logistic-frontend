"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import type { NewsGallery } from "@/types/news";

interface ArticleGalleryProps {
  images: NewsGallery[];
}

export default function ArticleGallery({ images }: ArticleGalleryProps) {
  if (!images.length) {
    return null;
  }

  return (
    <section className="py-10">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-8 text-3xl font-black text-[#071C3A]">
          Project Gallery
        </h2>

        <div
          className="
            grid
            gap-6

            md:grid-cols-2

            lg:grid-cols-3
          "
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
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
                relative
                aspect-[4/3]
                overflow-hidden
                rounded-2xl
                shadow-lg
              "
            >
              <Image
                src={image.url}
                alt={`Gallery ${image.id}`}
                width={800}
                height={600}
                unoptimized
                className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-110
                "
              />

              <div
                className="
                  absolute
                  inset-0

                  bg-black/10

                  opacity-0

                  transition

                  group-hover:opacity-100
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
