"use client";

import DOMPurify from "isomorphic-dompurify";

interface ArticleContentProps {
  content: string;
}

export default function ArticleContent({ content }: ArticleContentProps) {
  console.log(content);

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        <article
          className="
            prose
            prose-lg
            max-w-none

            prose-slate

            prose-headings:text-[#071C3A]
            prose-headings:font-black

            prose-h1:text-5xl
            prose-h2:text-4xl
            prose-h3:text-3xl

            prose-p:text-slate-700
            prose-p:leading-8

            prose-a:text-[#D8A41D]
            prose-a:no-underline
            hover:prose-a:underline

            prose-strong:text-[#071C3A]

            prose-li:marker:text-[#D8A41D]

            prose-blockquote:border-[#D8A41D]
            prose-blockquote:text-slate-700
            prose-blockquote:not-italic

            prose-img:rounded-2xl
            prose-img:shadow-xl

            prose-table:block
            prose-table:w-full
            prose-table:overflow-x-auto

            prose-th:bg-[#071C3A]
            prose-th:text-white

            prose-td:border
            prose-th:border

            prose-code:text-[#D8A41D]

            prose-pre:rounded-2xl
            prose-pre:bg-[#071C3A]

            prose-hr:border-slate-300
          "
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(content),
          }}
        />
      </div>
    </section>
  );
}
