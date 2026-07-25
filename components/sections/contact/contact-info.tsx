"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import type { Website } from "@/types/homepage";

interface ContactInfoProps {
  website: Website;
}

const ContactInfo = ({ website }: ContactInfoProps) => {
  const t = useTranslations("contact-page");

  const socials = [
    {
      href: website.facebook,
      icon: FaFacebookF,
      label: "Facebook",
    },
    {
      href: website.instagram,
      icon: FaInstagram,
      label: "Instagram",
    },
    {
      href: website.linkedin,
      icon: FaLinkedinIn,
      label: "LinkedIn",
    },
    {
      href: website.youtube,
      icon: FaYoutube,
      label: "Youtube",
    },
  ].filter((item) => item.href);

  return (
    <div className="max-w-lg">
      {/* Badge */}

      <div className="flex items-center gap-2">
        <div className="h-px w-10 bg-[#D8A41D]" />

        <span className="text-xs font-bold uppercase tracking-[.3em] text-[#D8A41D]">
          {t("badge")}
        </span>
      </div>

      {/* Title */}

      <h2 className="mt-5 text-4xl font-black text-[#071C3A]">{t("title")}</h2>

      {/* Description */}

      <p className="mt-5 leading-8 text-slate-600">{t("description")}</p>

      {/* Contact List */}

      <div className="mt-10 space-y-7">
        {/* Address */}

        <div className="flex gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D8A41D]/10">
            <MapPin className="text-[#D8A41D]" size={22} />
          </div>

          <div>
            <h4 className="font-bold text-[#071C3A]">{t("addressTitle")}</h4>

            <p className="mt-1 whitespace-pre-line text-slate-600">
              {website.address}
            </p>
          </div>
        </div>

        {/* Phone */}

        <div className="flex gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D8A41D]/10">
            <Phone className="text-[#D8A41D]" size={22} />
          </div>

          <div>
            <h4 className="font-bold text-[#071C3A]">{t("phoneTitle")}</h4>

            <Link
              href={`tel:${website.phone}`}
              className="mt-1 block text-slate-600 transition-colors hover:text-[#D8A41D]"
            >
              {website.phone}
            </Link>

            {website.mobile && (
              <Link
                href={`tel:${website.mobile}`}
                className="block text-slate-600 transition-colors hover:text-[#D8A41D]"
              >
                {website.mobile}
              </Link>
            )}
          </div>
        </div>

        {/* Email */}

        <div className="flex gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D8A41D]/10">
            <Mail className="text-[#D8A41D]" size={22} />
          </div>

          <div>
            <h4 className="font-bold text-[#071C3A]">{t("emailTitle")}</h4>

            <Link
              href={`mailto:${website.email}`}
              className="mt-1 block text-slate-600 transition-colors hover:text-[#D8A41D]"
            >
              {website.email}
            </Link>
          </div>
        </div>

        {/* Office Hours */}

        <div className="flex gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D8A41D]/10">
            <Clock3 className="text-[#D8A41D]" size={22} />
          </div>

          <div>
            <h4 className="font-bold text-[#071C3A]">{t("hoursTitle")}</h4>

            <p className="mt-1 whitespace-pre-line text-slate-600">
              {website.office_hours}
            </p>
          </div>
        </div>
      </div>

      {/* Social */}

      {socials.length > 0 && (
        <div className="mt-10 flex gap-3">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#071C3A] text-white transition-all hover:-translate-y-1 hover:bg-[#D8A41D]"
              >
                <Icon size={17} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
