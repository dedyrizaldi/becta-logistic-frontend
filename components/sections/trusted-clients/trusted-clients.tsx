"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const clients = [
  {
    name: "Pertamina",
    logo: "/clients/pertamina.png",
  },
  {
    name: "Adaro",
    logo: "/clients/adaro.png",
  },
  {
    name: "PAMA",
    logo: "/clients/pama.png",
  },
  {
    name: "PLN",
    logo: "/clients/pln.png",
  },
  {
    name: "Freeport",
    logo: "/clients/freeport.png",
  },
  {
    name: "WIKA",
    logo: "/clients/wika.png",
  },
];

const TrustedClients = () => {
  const t = useTranslations("trustedClients");

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D8A41D]">
            {t("badge")}
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#0B2F63]">
            {t("title")}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            {t("description")}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.name}
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
                src={client.logo}
                alt={client.name}
                width={130}
                height={50}
                className="
                  max-h-10
                  w-auto
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
