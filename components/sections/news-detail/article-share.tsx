"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

interface ArticleShareProps {
  title: string;
}

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export default function ArticleShare({ title }: ArticleShareProps) {
  const t = useTranslations("news-detail");

  const pathname = usePathname();

  const shareUrl = `${SITE_URL}${pathname}`;

  const encodedUrl = encodeURIComponent(shareUrl);

  const encodedTitle = encodeURIComponent(title);

  const socials = useMemo(
    () => [
      {
        name: "Facebook",
        href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        Icon: FaFacebookF,
      },
      {
        name: "LinkedIn",
        href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        Icon: FaLinkedinIn,
      },
      {
        name: "WhatsApp",
        href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
        Icon: FaWhatsapp,
      },
      {
        name: "X",
        href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
        Icon: FaXTwitter,
      },
    ],
    [encodedTitle, encodedUrl],
  );

  return (
    <section className="pb-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 rounded-[20px] border border-slate-200 bg-white p-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D8A41D]">
              {t("share")}
            </p>

            <h3 className="mt-2 text-2xl font-black text-[#071C3A]">
              {t("shareTitle")}
            </h3>
          </div>

          <div className="flex flex-wrap gap-4">
            {socials.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  text-slate-600
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#D8A41D]
                  hover:bg-[#D8A41D]
                  hover:text-white
                "
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
