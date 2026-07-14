import type { FleetDetail } from "@/services/fleet.service";

interface FleetOverviewProps {
  fleet: FleetDetail;
}

export default function FleetOverview({ fleet }: FleetOverviewProps) {
  return (
    <section
      className="
        rounded-3xl
        bg-white
        p-8
        shadow-sm
        ring-1
        ring-slate-200

        lg:p-12
      "
    >
      {/* Header */}

      <div className="mb-10">
        <span
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.35em]
            text-[#D8A41D]
          "
        >
          Overview
        </span>

        <h2
          className="
            mt-3

            text-4xl

            font-black

            text-[#071C3A]
          "
        >
          About This Fleet
        </h2>

        <div
          className="
            mt-6

            h-1

            w-20

            rounded-full

            bg-[#D8A41D]
          "
        />
      </div>

      {/* Content */}

      <article
        className="
          prose

          prose-lg

          max-w-none

          prose-headings:font-black
          prose-headings:text-[#071C3A]

          prose-p:leading-8
          prose-p:text-slate-600

          prose-strong:text-[#071C3A]

          prose-a:text-[#D8A41D]

          prose-ul:text-slate-700
          prose-ol:text-slate-700

          prose-li:marker:text-[#D8A41D]

          prose-blockquote:border-l-4
          prose-blockquote:border-[#D8A41D]
          prose-blockquote:bg-[#FFF8E8]
          prose-blockquote:px-6
          prose-blockquote:py-3
          prose-blockquote:italic

          prose-img:rounded-2xl

          prose-table:w-full
          prose-table:border-collapse

          prose-thead:bg-[#071C3A]

          prose-th:border
          prose-th:border-slate-300
          prose-th:p-4
          prose-th:text-white

          prose-td:border
          prose-td:border-slate-300
          prose-td:p-4

          prose-tr:even:bg-slate-50
        "
        dangerouslySetInnerHTML={{
          __html: fleet.description,
        }}
      />
    </section>
  );
}
