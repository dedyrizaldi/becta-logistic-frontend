"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/shared/language-switcher";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { navigation } from "@/constants/navigation";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const t = useTranslations("navigation");

  return (
    <div className="xl:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        {/* Trigger */}

        <SheetTrigger asChild>
          <button
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              border
              border-slate-200
              bg-white/95
              shadow-sm
              transition-all
              duration-300

              hover:border-[#D8A41D]
            "
          >
            <Menu size={20} />
          </button>
        </SheetTrigger>

        {/* Drawer */}

        <SheetContent
          side="right"
          className="
            flex
            w-[300px]
            flex-col
            border-l
            border-slate-200
            bg-white
            p-0
          "
        >
          {/* Header */}

          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-slate-100
              px-5
              py-5
            "
          >
            <Image
              src="/logo/logo.png"
              alt="Becta Logistics"
              width={170}
              height={50}
              priority
              className="h-10 w-auto object-contain"
            />

            <SheetClose asChild>
              <button
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  transition-colors

                  hover:border-[#D8A41D]
                "
              >
                <X size={18} />
              </button>
            </SheetClose>
          </div>

          {/* Navigation */}

          <nav className="flex flex-col px-5 py-4">
            {navigation.map((item) => (
              <SheetClose asChild key={item.key}>
                <Link
                  href={item.href}
                  className="
                    flex
                    items-center
                    justify-between

                    border-b
                    border-slate-100

                    py-4

                    text-[14px]
                    font-semibold
                    uppercase
                    tracking-wide

                    text-slate-700

                    transition-all
                    duration-300

                    hover:pl-2
                    hover:text-[#D8A41D]
                  "
                >
                  {t(item.key)}
                </Link>
              </SheetClose>
            ))}
          </nav>

          {/* Footer */}

          <div
            className="
              mt-auto
              border-t
              border-slate-100
              px-5
              py-5
            "
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Language
            </p>

            <LanguageSwitcher />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
