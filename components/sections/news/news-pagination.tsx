"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";

import type { PaginationMeta } from "@/types/news";

interface NewsPaginationProps {
  meta: PaginationMeta;
}

const NewsPagination = ({ meta }: NewsPaginationProps) => {
  const searchParams = useSearchParams();

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    if (page <= 1) {
      params.delete("page");
    } else {
      params.set("page", page.toString());
    }

    const query = params.toString();

    return query ? `?${query}` : "";
  };

  return (
    <div className="flex items-center justify-center gap-3">
      {/* Previous */}

      <Link
        href={createPageUrl(meta.current_page - 1)}
        className={`
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          transition

          ${
            meta.current_page === 1
              ? "pointer-events-none border-slate-200 text-slate-300"
              : "border-slate-200 hover:border-[#D8A41D] hover:bg-[#D8A41D] hover:text-white"
          }
        `}
      >
        <ChevronLeft size={18} />
      </Link>

      {/* Pages */}

      {meta.links
        .filter((item) => item.page !== null)
        .map((item) => (
          <Link
            key={item.page}
            href={createPageUrl(item.page!)}
            className={`
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              font-semibold
              transition

              ${
                item.active
                  ? "bg-[#D8A41D] text-white"
                  : "border border-slate-200 hover:border-[#D8A41D] hover:bg-[#D8A41D] hover:text-white"
              }
            `}
          >
            {item.page}
          </Link>
        ))}

      {/* Next */}

      <Link
        href={createPageUrl(meta.current_page + 1)}
        className={`
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          transition

          ${
            meta.current_page === meta.last_page
              ? "pointer-events-none border-slate-200 text-slate-300"
              : "border-slate-200 hover:border-[#D8A41D] hover:bg-[#D8A41D] hover:text-white"
          }
        `}
      >
        <ChevronRight size={18} />
      </Link>
    </div>
  );
};

export default NewsPagination;
