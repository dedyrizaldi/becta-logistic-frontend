"use client";

import Image from "next/image";

import type { TrustedClient } from "@/types/homepage";

import { mediaUrl } from "@/lib/media";

interface TrustedClientsProps {
  clients: TrustedClient[];
}

const TrustedClients = ({ clients }: TrustedClientsProps) => {
  if (!clients.length) return null;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D8A41D]">
            Trusted Clients
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#0B2F63]">
            Companies That Trust Us
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            We have successfully supported logistics and marine transportation
            projects for companies across Indonesia.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="
                flex
                h-24
                items-center
                justify-center
                rounded-xl
                border
                border-slate-100
                bg-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <Image
                src={mediaUrl(client.logo)}
                alt={client.name}
                width={130}
                height={60}
                className="
                  max-h-12
                  w-auto
                  object-contain
                  grayscale
                  opacity-70
                  transition-all
                  duration-300
                  hover:grayscale-0
                  hover:opacity-100
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
