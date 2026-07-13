"use client";

import { Tag } from "lucide-react";

interface ArticleTagsProps {
  tags: string[];
}

export default function ArticleTags({ tags }: ArticleTagsProps) {
  if (!tags.length) {
    return null;
  }

  return (
    <section className="py-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <div className="mb-6 flex items-center gap-3">
            <Tag className="text-[#D8A41D]" size={22} />

            <h2 className="text-2xl font-black text-[#071C3A]">Tags</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full
                  border
                  border-[#D8A41D]/30
                  bg-white
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-[#071C3A]
                  transition
                  hover:border-[#D8A41D]
                  hover:bg-[#D8A41D]
                  hover:text-white
                "
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
