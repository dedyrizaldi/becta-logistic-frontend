"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const certifications = [
  {
    name: "ISO 9001",
    image: "/certifications/iso-9001.png",
  },
  {
    name: "ISO 14001",
    image: "/certifications/iso-14001.png",
  },
  {
    name: "ISO 45001",
    image: "/certifications/iso-45001.png",
  },
];

const FooterCertifications = () => {
  const t = useTranslations("footer");

  return (
    <div>
      {/* Title */}

      <h3
        className="
          mb-6

          text-lg
          font-bold

          text-white
        "
      >
        {t("certifications")}
      </h3>

      {/* Description */}

      <p
        className="
          mb-6

          text-sm
          leading-6

          text-white/70
        "
      >
        {t("certificationsDescription")}
      </p>

      {/* Logos */}

      <div className="flex flex-wrap gap-3">
        {certifications.map((item) => (
          <div
            key={item.name}
            className="
              flex
              h-14
              w-14

              items-center
              justify-center

              rounded-lg

              border
              border-white/10

              bg-white

              p-2

              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            <Image
              src={item.image}
              alt={item.name}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterCertifications;
