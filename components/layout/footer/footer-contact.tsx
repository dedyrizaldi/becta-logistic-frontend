"use client";

import Link from "next/link";

import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import type { Website } from "@/types/homepage";

interface FooterContactProps {
  website: Website;
}

const FooterContact = ({ website }: FooterContactProps) => {
  return (
    <div>
      <h3 className="mb-6 text-lg font-bold">Contact Us</h3>

      <div className="space-y-5 text-sm">
        {website.address && (
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 shrink-0 text-[#D8A41D]" size={18} />

            <span className="leading-6 text-white/70">{website.address}</span>
          </div>
        )}

        {website.whatsapp && (
          <div className="flex items-center gap-3">
            <Phone className="shrink-0 text-[#D8A41D]" size={18} />

            <Link
              href={`tel:${website.whatsapp}`}
              className="text-white/70 transition hover:text-white"
            >
              {website.whatsapp}
            </Link>
          </div>
        )}

        {website.mobile && (
          <div className="flex items-center gap-3">
            <Phone className="shrink-0 text-[#D8A41D]" size={18} />

            <Link
              href={`tel:${website.mobile}`}
              className="text-white/70 transition hover:text-white"
            >
              {website.mobile}
            </Link>
          </div>
        )}

        {website.email && (
          <div className="flex items-center gap-3">
            <Mail className="shrink-0 text-[#D8A41D]" size={18} />

            <Link
              href={`mailto:${website.email}`}
              className="text-white/70 transition hover:text-white"
            >
              {website.email}
            </Link>
          </div>
        )}

        {website.office_hours && (
          <div className="flex items-start gap-3">
            <Clock3 className="mt-1 shrink-0 text-[#D8A41D]" size={18} />

            <span className="leading-6 text-white/70">
              {website.office_hours}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FooterContact;
