"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

interface FleetCardProps {
  image: string;
  name: string;
  length: string;
  beam: string;
  cargo: string;
  speed: string;
  status: "available" | "chartered";
}

const FleetCard = ({
  image,
  name,
  length,
  beam,
  cargo,
  speed,
  status,
}: FleetCardProps) => {
  const t = useTranslations("fleet");

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
          src={image}
          alt={name}
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

        {/* Status */}

        <div
          className={`
            absolute
            left-4
            top-4

            rounded-full

            px-3
            py-1

            text-[10px]
            font-bold
            uppercase
            tracking-wider

            ${
              status === "available"
                ? "bg-green-500 text-white"
                : "bg-orange-500 text-white"
            }
          `}
        >
          {t(status)}
        </div>
      </div>

      {/* Content */}

      <div className="p-6">
        <h3
          className="
            text-lg
            font-bold
            uppercase
            text-[#0B2F63]
          "
        >
          {name}
        </h3>

        {/* Spec */}

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
            <p className="text-xs text-slate-500">{t("length")}</p>

            <p className="mt-1 font-semibold">{length}</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">{t("beam")}</p>

            <p className="mt-1 font-semibold">{beam}</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">{t("cargo")}</p>

            <p className="mt-1 font-semibold">{cargo}</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">{t("speed")}</p>

            <p className="mt-1 font-semibold">{speed}</p>
          </div>
        </div>

        {/* Button */}

        <Button
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
          View Detail
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </article>
  );
};

export default FleetCard;
