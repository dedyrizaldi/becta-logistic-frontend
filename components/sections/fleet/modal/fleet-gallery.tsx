"use client";

import { useMemo, useState } from "react";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Images } from "lucide-react";

import { mediaUrl } from "@/lib/media";
import type { FleetDetail } from "@/services/fleet.service";

interface FleetGalleryProps {
  fleet: FleetDetail;
}

export default function FleetGallery({ fleet }: FleetGalleryProps) {
  const images = useMemo(() => {
    if (fleet.gallery?.length) {
      return fleet.gallery;
    }

    return [
      {
        id: 0,
        url: fleet.thumbnail,
      },
    ];
  }, [fleet]);

  const [active, setActive] = useState(0);

  return (
    <section className="grid gap-8 lg:grid-cols-[1.7fr_0.8fr]">
      {/* LEFT */}

      <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{
              opacity: 0,
              scale: 1.03,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <Image
              src={mediaUrl(images[active].url)}
              alt={fleet.title}
              width={1400}
              height={900}
              unoptimized
              className="h-[420px] w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* THUMBNAILS */}

        <div className="flex gap-3 overflow-x-auto p-4">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setActive(index)}
              className={`
                relative
                h-20
                w-28
                flex-shrink-0
                overflow-hidden
                rounded-xl
                transition-all

                ${
                  active === index
                    ? "ring-4 ring-[#D8A41D]"
                    : "opacity-70 hover:opacity-100"
                }
              `}
            >
              <Image
                src={mediaUrl(image.url)}
                alt=""
                fill
                unoptimized
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT */}

      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-[#071C3A] p-3 text-white">
            <Images className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm font-medium text-slate-500">Fleet Gallery</p>

            <h3 className="text-xl font-bold text-[#071C3A]">
              {images.length} Photos
            </h3>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setActive(index)}
              className={`
                flex
                w-full
                items-center
                gap-4
                rounded-2xl
                border
                p-3
                text-left
                transition

                ${
                  active === index
                    ? "border-[#D8A41D] bg-[#FFF9EC]"
                    : "border-slate-200 hover:border-[#D8A41D]"
                }
              `}
            >
              <div className="relative h-20 w-28 overflow-hidden rounded-xl">
                <Image
                  src={mediaUrl(image.url)}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="font-semibold text-[#071C3A]">
                  Image {index + 1}
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  Fleet documentation
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
