"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import LanguageSwitcher from "@/components/shared/language-switcher";
import Container from "@/components/ui/container";

import MobileMenu from "./mobile-menu";

import { navigation } from "@/constants/navigation";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const t = useTranslations("navigation");

  return (
    <Container>
      <div
        className={`
          flex
          items-center
          justify-between
          transition-all
          duration-300

          ${isScrolled ? "h-16 lg:h-[72px]" : "h-[70px] lg:h-[82px]"}
        `}
      >
        {/* Logo */}

        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo/logo.png"
            alt="Becta Logistics"
            width={230}
            height={68}
            priority
            className="
              h-10
              w-auto
              object-contain

              lg:h-12
            "
          />
        </Link>

        {/* Desktop Navigation */}

        <nav
          className="
            hidden
            xl:flex
            items-center
            gap-8
          "
        >
          {navigation.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="
                group
                relative

                text-[13px]
                font-semibold
                uppercase
                tracking-[0.08em]

                text-slate-800

                transition-colors
                duration-300

                hover:text-[#D8A41D]
              "
            >
              {t(item.key)}

              <span
                className="
                  absolute
                  -bottom-2
                  left-0

                  h-[2px]
                  w-0

                  bg-[#D8A41D]

                  transition-all
                  duration-300

                  group-hover:w-full
                "
              />
            </Link>
          ))}
        </nav>

        {/* Right */}

        <div
          className="
            hidden
            xl:flex
            items-center
            gap-4
          "
        >
          <LanguageSwitcher />
        </div>

        {/* Mobile */}

        <MobileMenu />
      </div>
    </Container>
  );
};

export default Navbar;
