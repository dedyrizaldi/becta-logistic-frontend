"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

const NewsPagination = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <button
        className="
          flex
          h-11
          w-11
          items-center
          justify-center

          rounded-xl

          border
          border-slate-200

          transition

          hover:border-[#D8A41D]
          hover:bg-[#D8A41D]
          hover:text-white
        "
      >
        <ChevronLeft size={18} />
      </button>

      {[1, 2, 3].map((page) => (
        <button
          key={page}
          className={`
            h-11
            w-11

            rounded-xl

            font-semibold

            transition

            ${
              page === 1
                ? "bg-[#D8A41D] text-white"
                : "border border-slate-200 hover:border-[#D8A41D] hover:bg-[#D8A41D] hover:text-white"
            }
          `}
        >
          {page}
        </button>
      ))}

      <button
        className="
          flex
          h-11
          w-11
          items-center
          justify-center

          rounded-xl

          border
          border-slate-200

          transition

          hover:border-[#D8A41D]
          hover:bg-[#D8A41D]
          hover:text-white
        "
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default NewsPagination;
