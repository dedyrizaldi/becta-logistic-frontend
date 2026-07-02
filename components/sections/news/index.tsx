"use client";

import NewsGrid from "./news-grid";
import NewsPagination from "./news-pagination";
import NewsSidebar from "./news-sidebar";

const NewsSection = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* News */}

          <div className="lg:col-span-8">
            <NewsGrid />

            <div className="mt-14">
              <NewsPagination />
            </div>
          </div>

          {/* Sidebar */}

          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <NewsSidebar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
