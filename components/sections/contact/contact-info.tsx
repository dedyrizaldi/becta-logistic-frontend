"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Clock3 } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const socials = [
  {
    href: "https://facebook.com",
    icon: FaFacebookF,
    label: "Facebook",
  },
  {
    href: "https://instagram.com",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://youtube.com",
    icon: FaYoutube,
    label: "Youtube",
  },
];

const ContactInfo = () => {
  const t = useTranslations("contact-page");

  return (
    <div className="max-w-lg">
      {/* Badge */}

      <div className="flex items-center gap-2">
        <div className="h-px w-10 bg-[#D8A41D]" />

        <span
          className="
            text-xs
            font-bold
            uppercase
            tracking-[.3em]

            text-[#D8A41D]
          "
        >
          {t("badge")}
        </span>
      </div>

      {/* Title */}

      <h2
        className="
          mt-5

          text-4xl
          font-black

          text-[#071C3A]
        "
      >
        {t("title")}
      </h2>

      {/* Description */}

      <p
        className="
          mt-5

          leading-8

          text-slate-600
        "
      >
        {t("description")}
      </p>

      {/* Contact List */}

      <div className="mt-10 space-y-7">
        {/* Address */}

        <div className="flex gap-4">
          <div
            className="
              flex

              h-12
              w-12

              items-center
              justify-center

              rounded-xl

              bg-[#D8A41D]/10
            "
          >
            <MapPin className="text-[#D8A41D]" size={22} />
          </div>

          <div>
            <h4 className="font-bold text-[#071C3A]">{t("addressTitle")}</h4>

            <p className="mt-1 text-slate-600">{t("address")}</p>
          </div>
        </div>

        {/* Phone */}

        <div className="flex gap-4">
          <div
            className="
              flex

              h-12
              w-12

              items-center
              justify-center

              rounded-xl

              bg-[#D8A41D]/10
            "
          >
            <Phone className="text-[#D8A41D]" size={22} />
          </div>

          <div>
            <h4 className="font-bold text-[#071C3A]">{t("phoneTitle")}</h4>

            <Link
              href="tel:+628123456789"
              className="
                mt-1
                block

                text-slate-600

                transition-colors

                hover:text-[#D8A41D]
              "
            >
              +62 812-3456-789
            </Link>
          </div>
        </div>

        {/* Email */}

        <div className="flex gap-4">
          <div
            className="
              flex

              h-12
              w-12

              items-center
              justify-center

              rounded-xl

              bg-[#D8A41D]/10
            "
          >
            <Mail className="text-[#D8A41D]" size={22} />
          </div>

          <div>
            <h4 className="font-bold text-[#071C3A]">{t("emailTitle")}</h4>

            <Link
              href="mailto:info@bectalogistics.com"
              className="
                mt-1
                block

                text-slate-600

                transition-colors

                hover:text-[#D8A41D]
              "
            >
              info@bectalogistics.com
            </Link>
          </div>
        </div>

        {/* Office Hours */}

        <div className="flex gap-4">
          <div
            className="
              flex

              h-12
              w-12

              items-center
              justify-center

              rounded-xl

              bg-[#D8A41D]/10
            "
          >
            <Clock3 className="text-[#D8A41D]" size={22} />
          </div>

          <div>
            <h4 className="font-bold text-[#071C3A]">{t("hoursTitle")}</h4>

            <p className="mt-1 text-slate-600">
              Monday - Friday
              <br />
              08:00 - 17:00 WIB
            </p>
          </div>
        </div>
      </div>

      {/* Social */}

      <div className="mt-10 flex gap-3">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              className="
                flex

                h-11
                w-11

                items-center
                justify-center

                rounded-full

                bg-[#071C3A]

                text-white

                transition-all

                hover:-translate-y-1
                hover:bg-[#D8A41D]
              "
            >
              <Icon size={17} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
