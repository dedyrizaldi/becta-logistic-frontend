"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

const FooterContact = () => {
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
        {t("contactTitle")}
      </h3>

      <div className="space-y-5">
        {/* Address */}

        <div className="flex items-start gap-3">
          <MapPin size={18} className="mt-1 shrink-0 text-[#D8A41D]" />

          <p
            className="
              text-sm
              leading-6

              text-white/70
            "
          >
            {t("address")}
          </p>
        </div>

        {/* Phone */}

        <div className="flex items-center gap-3">
          <Phone size={18} className="shrink-0 text-[#D8A41D]" />

          <Link
            href="tel:+6281234567890"
            className="
              text-sm

              text-white/70

              transition-colors

              hover:text-[#D8A41D]
            "
          >
            +62 812-3456-7890
          </Link>
        </div>

        {/* Email */}

        <div className="flex items-center gap-3">
          <Mail size={18} className="shrink-0 text-[#D8A41D]" />

          <Link
            href="mailto:info@bectalogistics.com"
            className="
              text-sm

              text-white/70

              transition-colors

              hover:text-[#D8A41D]
            "
          >
            info@bectalogistics.com
          </Link>
        </div>

        {/* Website */}

        <div className="flex items-center gap-3">
          <Globe size={18} className="shrink-0 text-[#D8A41D]" />

          <Link
            href="https://www.bectalogistics.com"
            target="_blank"
            className="
              text-sm

              text-white/70

              transition-colors

              hover:text-[#D8A41D]
            "
          >
            www.bectalogistics.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
