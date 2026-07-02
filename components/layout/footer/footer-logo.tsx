"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

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
    label: "YouTube",
  },
];

const FooterLogo = () => {
  const t = useTranslations("footer");

  return (
    <div className="max-w-sm">
      {/* Logo */}

      <Link href="/" className="inline-block">
        <Image
          src="/logo/footer-logo-white.png"
          alt="Becta Logistics"
          width={180}
          height={52}
          priority
          className="h-auto w-auto object-contain"
        />
      </Link>

      {/* Description */}

      <p
        className="
          mt-6

          text-sm
          leading-7

          text-white/70
        "
      >
        {t("description")}
      </p>

      {/* Social Media */}

      <div className="mt-8 flex items-center gap-3">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="
                group

                flex
                h-10
                w-10

                items-center
                justify-center

                rounded-full

                border
                border-white/15

                bg-white/5

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#D8A41D]
                hover:bg-[#D8A41D]
                hover:shadow-lg
              "
            >
              <Icon
                size={16}
                className="
                  text-white/80

                  transition-all
                  duration-300

                  group-hover:scale-110
                  group-hover:text-white
                "
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FooterLogo;
