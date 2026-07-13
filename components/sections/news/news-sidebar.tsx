"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import type { News } from "@/types/news";
import { mediaUrl } from "@/lib/media";

interface NewsSidebarProps {
  news: News[];
}

const NewsSidebar = ({ news }: NewsSidebarProps) => {
  const t = useTranslations("news-page");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [keyword, setKeyword] = useState(() => searchParams.get("q") ?? "");

  /**
   * Auto Search (Debounce)
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentKeyword = searchParams.get("q") ?? "";
      const nextKeyword = keyword.trim();

      // Tidak melakukan request jika keyword tidak berubah
      if (currentKeyword === nextKeyword) {
        return;
      }

      const params = new URLSearchParams(searchParams.toString());

      if (nextKeyword) {
        params.set("q", nextKeyword);
      } else {
        params.delete("q");
      }

      params.delete("page");

      const query = params.toString();

      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    }, 400);

    return () => clearTimeout(timer);
  }, [keyword, pathname, router, searchParams]);

  const categories = Object.values(
    news.reduce(
      (acc, item) => {
        const slug = item.category.slug;

        if (!acc[slug]) {
          acc[slug] = {
            slug,
            name: item.category.name,
            total: 0,
          };
        }

        acc[slug].total++;

        return acc;
      },
      {} as Record<
        string,
        {
          slug: string;
          name: string;
          total: number;
        }
      >,
    ),
  );

  const tags = [
    "LCT",
    "Marine",
    "Shipping",
    "Heavy Equipment",
    "Logistics",
    "Indonesia",
  ];

  return (
    <aside className="space-y-8">
      {/* Search */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="mb-5 text-xl font-bold text-[#071C3A]">{t("search")}</h3>

        <div className="relative">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
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

          <div
            className="
              pointer-events-none
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          >
            <Search size={18} />
          </div>
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
              key={category.slug}
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

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs">
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
          {news.slice(0, 4).map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="group flex gap-4"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                <Image
                  src={mediaUrl(item.thumbnail)}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-110"
                />
              </div>

              <div className="flex-1">
                <h4 className="line-clamp-2 font-semibold text-[#071C3A] transition group-hover:text-[#D8A41D]">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm text-slate-500">
                  {new Date(item.published_at).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
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
