"use client";

import type { Website } from "@/types/homepage";

interface CopyrightProps {
  website: Website;
}

const Copyright = ({ website }: CopyrightProps) => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-between
        gap-4

        border-t
        border-white/10

        py-6

        text-sm
        text-white/60

        md:flex-row
      "
    >
      <p>
        {website.copyright ??
          `© ${new Date().getFullYear()} ${website.company_name}. All rights reserved.`}
      </p>

      <p>
        Powered by{" "}
        <span className="font-semibold text-[#D8A41D]">Becta Logistics</span>
      </p>
    </div>
  );
};

export default Copyright;
