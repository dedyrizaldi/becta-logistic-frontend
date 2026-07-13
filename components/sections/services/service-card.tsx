"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import type { Service } from "@/types/homepage";
import { mediaUrl } from "@/lib/media";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <article
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-slate-200
        bg-white
        p-4
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#D8A41D]
        hover:shadow-xl

        lg:p-5
      "
    >
      {/* Gold Line */}

      <div
        className="
          absolute
          left-0
          top-0
          h-[3px]
          w-0
          bg-[#D8A41D]
          transition-all
          duration-300

          group-hover:w-full
        "
      />

      {/* Thumbnail */}

      <div className="flex justify-center">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#0B2F63]/5
            transition-all
            duration-300

            group-hover:bg-[#D8A41D]/10

            lg:h-16
            lg:w-16
          "
        >
          <Image
            src={mediaUrl(service.thumbnail)}
            alt={service.title}
            width={50}
            height={50}
            className="
              h-10
              w-10
              object-contain
              transition-transform
              duration-300

              group-hover:scale-110

              lg:h-12
              lg:w-12
            "
          />
        </div>
      </div>

      {/* Category */}

      <p
        className="
          mt-4
          text-center
          text-[10px]
          font-bold
          uppercase
          tracking-[0.25em]
          text-[#D8A41D]
        "
      >
        {service.category.name}
      </p>

      {/* Title */}

      <h3
        className="
          mt-2
          text-center
          text-[13px]
          font-bold
          uppercase
          leading-5
          tracking-wide
          text-[#0B2F63]

          lg:text-[15px]
          lg:leading-6
        "
      >
        {service.title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-3
          line-clamp-3
          flex-1
          text-center
          text-[11px]
          leading-5
          text-slate-500

          lg:text-[13px]
          lg:leading-6
        "
      >
        {service.excerpt}
      </p>

      {/* Read More */}
      {/* 
      <Link
        href={`/services/${service.slug}`}
        className="
          mt-auto
          flex
          items-center
          justify-center
          gap-2
          pt-5

          text-[10px]
          font-bold
          uppercase
          tracking-wider
          text-[#0B2F63]

          transition-colors
          duration-300

          hover:text-[#D8A41D]

          lg:pt-6
          lg:text-xs
        "
      >
        Read More
        <ArrowRight
          size={14}
          className="
            transition-transform
            duration-300

            group-hover:translate-x-1
          "
        />
      </Link> */}
    </article>
  );
};

export default ServiceCard;
