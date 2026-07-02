"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

import { dummyNews } from "./dummy-news";

const categories = [
  {
    name: "Projects",
    total: 8,
  },
  {
    name: "Company",
    total: 4,
  },
  {
    name: "Services",
    total: 6,
  },
  {
    name: "Logistics",
    total: 9,
  },
  {
    name: "Safety",
    total: 3,
  },
];

const tags = [
  "LCT",
  "Marine",
  "Shipping",
  "Heavy Equipment",
  "Logistics",
  "Indonesia",
];

const NewsSidebar = () => {
  const t = useTranslations("news-page");

  return (
    <aside className="space-y-8">
      {/* Search */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="mb-5 text-xl font-bold text-[#071C3A]">{t("search")}</h3>

        <div className="relative">
          <input
            type="text"
            placeholder={t("searchPlaceholder")}
            className="
              h-12
              w-full
              rounded-xl
              border
              border-slate-200
              pl-4
              pr-12
              outline-none
              transition
              focus:border-[#D8A41D]
              focus:ring-4
              focus:ring-[#D8A41D]/20
            "
          />

          <Search
            size={18}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />
        </div>
      </div>

      {/* Categories */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="mb-5 text-xl font-bold text-[#071C3A]">
          {t("categories")}
        </h3>

        <div className="space-y-3">
          {categories.map((category) => (
            <button
              key={category.name}
              className="
                flex
                w-full
                items-center
                justify-between

                rounded-xl

                px-4
                py-3

                transition

                hover:bg-[#D8A41D]
                hover:text-white
              "
            >
              <span>{category.name}</span>

              <span
                className="
                  rounded-full
                  bg-slate-100
                  px-3
                  py-1
                  text-xs
                "
              >
                {category.total}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Posts */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="mb-5 text-xl font-bold text-[#071C3A]">
          {t("recentPosts")}
        </h3>

        <div className="space-y-5">
          {dummyNews.slice(0, 4).map((news) => (
            <Link
              key={news.id}
              href={`/news/${news.slug}`}
              className="flex gap-4 group"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-110"
                />
              </div>

              <div className="flex-1">
                <h4
                  className="
                    line-clamp-2
                    font-semibold
                    text-[#071C3A]
                    transition
                    group-hover:text-[#D8A41D]
                  "
                >
                  {news.title}
                </h4>

                <p className="mt-2 text-sm text-slate-500">
                  {news.publishedAt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tags */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="mb-5 text-xl font-bold text-[#071C3A]">{t("tags")}</h3>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <button
              key={tag}
              className="
                rounded-full

                border
                border-slate-200

                px-4
                py-2

                text-sm

                transition

                hover:border-[#D8A41D]
                hover:bg-[#D8A41D]
                hover:text-white
              "
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default NewsSidebar;
