"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import type { Fleet } from "@/types/homepage";
import { mediaUrl } from "@/lib/media";

import { Button } from "@/components/ui/button";

interface FleetCardProps {
  fleet: Fleet;
}

const FleetCard = ({ fleet }: FleetCardProps) => {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      {/* Image */}

      <div className="relative overflow-hidden">
        <Image
          src={mediaUrl(fleet.thumbnail)}
          alt={fleet.title}
          width={600}
          height={350}
          className="
            h-[190px]
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        {/* Category */}

        <div
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-[#D8A41D]
            px-3
            py-1
            text-[10px]
            font-bold
            uppercase
            tracking-wider
            text-[#071C3A]
          "
        >
          {fleet.category.name}
        </div>
      </div>

      {/* Content */}

      <div className="p-6">
        {/* Title */}

        <h3
          className="
            text-lg
            font-bold
            uppercase
            text-[#0B2F63]
          "
        >
          {fleet.title}
        </h3>

        {/* Code */}

        <p
          className="
            mt-1
            text-sm
            font-medium
            text-[#D8A41D]
          "
        >
          {fleet.code}
        </p>

        {/* Specification */}

        <div
          className="
            mt-5
            grid
            grid-cols-2
            gap-x-5
            gap-y-4
          "
        >
          <div>
            <p className="text-xs text-slate-500">LOA</p>

            <p className="mt-1 font-semibold">{fleet.specification.loa} m</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">Beam</p>

            <p className="mt-1 font-semibold">{fleet.specification.beam} m</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">GT</p>

            <p className="mt-1 font-semibold">{fleet.specification.gt}</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">Capacity</p>

            <p className="mt-1 font-semibold">
              {fleet.specification.cargo_capacity} Ton
            </p>
          </div>
        </div>

        {/* Button */}

        <Button
          asChild
          variant="outline"
          className="
            mt-6
            w-full

            border-[#0B2F63]

            text-[#0B2F63]

            hover:bg-[#0B2F63]
            hover:text-white
          "
        >
          <Link href={`/fleet/${fleet.slug}`}>
            View Detail
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
};

export default FleetCard;
