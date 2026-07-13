"use client";

import FooterLogo from "./footer-logo";
import FooterLinks from "./footer-links";
import FooterContact from "./footer-contact";
import FooterCertifications from "./footer-certifications";
import Copyright from "./copyright";

import type { Website } from "@/types/homepage";

interface FooterProps {
  website: Website;
}

const Footer = ({ website }: FooterProps) => {
  return (
    <footer className="bg-[#071C3A] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="
            grid
            gap-10
            py-14
            lg:grid-cols-[1.6fr_.8fr_1fr_.8fr]
          "
        >
          <FooterLogo website={website} />

          <FooterLinks />

          <FooterContact website={website} />

          <FooterCertifications />
        </div>

        <Copyright website={website} />
      </div>
    </footer>
  );
};

export default Footer;
