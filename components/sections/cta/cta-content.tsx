"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const CTAContent = () => {
  const t = useTranslations("cta");

  return (
    <div className="max-w-xl">
      {/* Title */}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="
          text-white
          mt-18 sm:mt-0
          text-xl
          sm:text-3xl
          md:text-4xl
          font-black
          leading-tight
        "
      >
        {t("title")}
      </motion.h2>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.15,
        }}
        viewport={{ once: true }}
        className="
          mt-4

          max-w-lg

          text-sm
          leading-7

          text-white/80

        "
      >
        {t("description")}
      </motion.p>

      {/* Button */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
        viewport={{ once: true }}
        className="mt-8"
      >
        <Link
          href="/contact"
          className="
            group

            inline-flex
            items-center
            gap-3

            rounded-md

            bg-[#D8A41D]

            px-6
            py-3

            text-sm
            font-bold
            uppercase
            tracking-wider

            text-white

            transition-all
            duration-300

            hover:-translate-y-1
            hover:bg-[#C89210]
            hover:shadow-xl
          "
        >
          {t("button")}

          <ArrowRight
            size={18}
            className="
              transition-transform
              duration-300

              group-hover:translate-x-1
            "
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default CTAContent;
