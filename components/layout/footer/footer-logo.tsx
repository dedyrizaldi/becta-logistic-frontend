"use client";

import Image from "next/image";
import Link from "next/link";

import type { Website } from "@/types/homepage";
import { mediaUrl } from "@/lib/media";

interface FooterLogoProps {
  website: Website;
}

const FooterLogo = ({ website }: FooterLogoProps) => {
  return (
    <div className="space-y-6">
      <Link href="/" className="inline-flex">
        <Image
          src={mediaUrl(website.logo)}
          alt={website.company_name}
          width={220}
          height={70}
          priority
          unoptimized
          className="h-23 w-auto object-contain"
        />
      </Link>

      <p
        className="
          max-w-md
          text-sm
          leading-7
          text-white/70
        "
      >
        {website.footer_text}
      </p>
    </div>
  );
};

export default FooterLogo;
