import Link from "next/link";

import { ArrowRight, Download, FileText, MessageCircle } from "lucide-react";

import type { FleetDetail } from "@/services/fleet.service";

interface FleetActionsProps {
  fleet: FleetDetail;
}

export default function FleetActions({ fleet }: FleetActionsProps) {
  // sementara hardcode dulu.
  // nanti kita ganti memakai Website Settings API.
  const whatsapp = "6281294366116";

  const message = encodeURIComponent(`Hello Becta Logistics,

I am interested in chartering the following vessel:

Fleet : ${fleet.title}
Code  : ${fleet.code}

Please send me:
• Fleet availability
• Charter quotation
• Operational information

Thank you.`);

  return (
    <section
      className="
        overflow-hidden
        rounded-3xl

        bg-gradient-to-r

        from-[#071C3A]

        via-[#0B2F63]

        to-[#123D7A]

        p-10

        text-white
      "
    >
      <div
        className="
          flex

          flex-col

          gap-10

          lg:flex-row

          lg:items-center

          lg:justify-between
        "
      >
        {/* LEFT */}

        <div className="max-w-2xl">
          <p
            className="
              text-sm

              font-semibold

              uppercase

              tracking-[0.35em]

              text-[#D8A41D]
            "
          >
            Ready To Charter?
          </p>

          <h2
            className="
              mt-4

              text-4xl

              font-black

              leading-tight
            "
          >
            Request This Fleet
          </h2>

          <p
            className="
              mt-6

              text-lg

              leading-8

              text-white/80
            "
          >
            Download the latest fleet brochure or contact our operations team
            for availability, quotation, and voyage planning.
          </p>
        </div>

        {/* RIGHT */}

        <div
          className="
            flex

            flex-col

            gap-4

            sm:flex-row
          "
        >
          {fleet.brochure && (
            <Link
              href={fleet.brochure}
              target="_blank"
              className="
                inline-flex

                items-center

                gap-3

                rounded-2xl

                bg-white

                px-7

                py-4

                font-semibold

                text-[#071C3A]

                transition

                duration-300

                hover:-translate-y-1

                hover:shadow-xl
              "
            >
              <Download size={20} />
              Download Brochure
            </Link>
          )}

          <Link
            href={`https://wa.me/${whatsapp}?text=${message}`}
            target="_blank"
            className="
              inline-flex

              items-center

              gap-3

              rounded-2xl

              bg-[#D8A41D]

              px-7

              py-4

              font-semibold

              text-[#071C3A]

              transition

              duration-300

              hover:-translate-y-1

              hover:shadow-xl
            "
          >
            <MessageCircle size={20} />
            Request Charter
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* FOOTER */}

      <div
        className="
          mt-10

          border-t

          border-white/10

          pt-6
        "
      >
        <div
          className="
            flex

            items-center

            gap-3

            text-white/70
          "
        >
          <FileText size={18} />
          Fleet brochure is provided in PDF format.
        </div>
      </div>
    </section>
  );
}
