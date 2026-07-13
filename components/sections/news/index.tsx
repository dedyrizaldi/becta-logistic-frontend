import type { News, PaginationMeta } from "@/types/news";

import NewsGrid from "./news-grid";
import NewsPagination from "./news-pagination";
import NewsSidebar from "./news-sidebar";

interface NewsSectionProps {
  news: News[];
  meta: PaginationMeta;
}

const NewsSection = ({ news, meta }: NewsSectionProps) => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* News */}

          <div className="lg:col-span-8">
            <NewsGrid news={news} />

            {meta.last_page > 1 && (
              <div className="mt-14">
                <NewsPagination meta={meta} />
              </div>
            )}
          </div>

          {/* Sidebar */}

          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <NewsSidebar news={news} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
