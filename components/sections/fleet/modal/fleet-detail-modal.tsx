"use client";

import { useEffect, useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";

import { Loader2, X } from "lucide-react";

import { getFleetDetail, type FleetDetail } from "@/services/fleet.service";

import FleetActions from "./fleet-actions";
import FleetGallery from "./fleet-gallery";
import FleetHeader from "./fleet-header";
import FleetLoading from "./fleet-loading";
import FleetOverview from "./fleet-overview";
import FleetSpecification from "./fleet-specification";

interface Props {
  slug: string | null;
  open: boolean;
  onOpenChange(open: boolean): void;
}

export default function FleetDetailModal({ slug, open, onOpenChange }: Props) {
  const [fleet, setFleet] = useState<FleetDetail | null>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open || !slug) return;

    const load = async () => {
      try {
        setLoading(true);

        const response = await getFleetDetail(slug);

        setFleet(response.data.fleet);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [slug, open]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* Overlay */}

        <Dialog.Overlay
          className="
            fixed
            inset-0
            z-[9998]

            bg-black/70

            backdrop-blur-sm
          "
        />

        {/* Modal */}

        <Dialog.Content
          className="
            fixed

            left-1/2
            top-1/2

            z-[9999]

            h-[92vh]

            w-[96vw]

            max-w-[1280px]

            -translate-x-1/2
            -translate-y-1/2

            overflow-hidden

            rounded-[28px]

            bg-[#F8FAFC]

            shadow-[0_25px_80px_rgba(0,0,0,.45)]

            outline-none
          "
        >
          {/* Close */}

          <Dialog.Close asChild>
            <button
              className="
                absolute

                right-5
                top-5

                z-50

                flex

                h-10
                w-10

                items-center
                justify-center

                rounded-full

                bg-white

                shadow-lg

                transition

                hover:scale-105
              "
            >
              <X size={18} />
            </button>
          </Dialog.Close>

          {/* Scroll */}

          <div className="h-full overflow-y-auto">
            {loading && <FleetLoading />}

            {!loading && fleet && (
              <>
                <FleetHeader fleet={fleet} />

                <div
                  className="
                    mx-auto

                    max-w-6xl

                    space-y-12

                    px-5

                    py-10

                    lg:px-8
                  "
                >
                  <FleetGallery fleet={fleet} />

                  <FleetSpecification fleet={fleet} />

                  <FleetOverview fleet={fleet} />

                  <FleetActions fleet={fleet} />
                </div>
              </>
            )}

            {!loading && !fleet && (
              <div
                className="
                  flex

                  h-full

                  items-center

                  justify-center
                "
              >
                <Loader2
                  className="
                    h-10

                    w-10

                    animate-spin
                  "
                />
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
