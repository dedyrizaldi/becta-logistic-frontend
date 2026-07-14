"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Download, Ship } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { mediaUrl } from "@/lib/media";
import type { FleetDetail } from "@/services/fleet.service";

interface FleetHeaderProps {
  fleet: FleetDetail;
}

export default function FleetHeader({ fleet }: FleetHeaderProps) {
  const heroImage = fleet.gallery?.[0]?.url ?? fleet.thumbnail;

  return (
    <section className="relative h-[260px] overflow-hidden md:h-[340px] lg:h-[400px]">
      {/* Background */}

      <Image
        src={mediaUrl(heroImage)}
        alt={fleet.title}
        fill
        priority
        unoptimized
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#071C3A]/95 via-[#071C3A]/70 to-[#071C3A]/20" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Content */}

      <div className="absolute inset-0">
        <div className="mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-6 md:px-8 md:pb-8 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:pb-10">
          {/* Left */}

          <div className="max-w-2xl">
            <Badge className="rounded-full bg-[#D8A41D] px-4 py-1.5 text-xs font-semibold text-[#071C3A] hover:bg-[#D8A41D]">
              <Ship className="mr-2 h-3.5 w-3.5" />

              {fleet.category.name}
            </Badge>

            <h1 className="mt-4 text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
              {fleet.title}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-white/80">
              <span>Fleet Code</span>

              <span className="h-1 w-1 rounded-full bg-white/60" />

              <span>{fleet.code}</span>
            </div>

            {fleet.excerpt && (
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 md:text-base">
                {fleet.excerpt}
              </p>
            )}
          </div>

          {/* Right */}

          <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
            {fleet.brochure && (
              <Link
                href={fleet.brochure}
                target="_blank"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#D8A41D] px-5 text-sm font-semibold text-[#071C3A] transition hover:scale-[1.02]"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </Link>
            )}

            <button className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
              Request Charter
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
