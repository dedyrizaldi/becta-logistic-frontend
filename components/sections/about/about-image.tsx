import Image from "next/image";
import { useTranslations } from "next-intl";

const AboutImage = () => {
  const t = useTranslations("about");

  return (
    <div className="relative">
      {/* Main Image */}

      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src="/hero/hero-1.png"
          alt="Becta Logistics"
          width={900}
          height={650}
          priority
          className="
            h-[430px]
            w-full
            object-cover
            transition-transform
            duration-700
            hover:scale-105
          "
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2F63]/20 via-transparent to-transparent" />
      </div>

      {/* Floating Experience Card */}

      <div
        className="
          absolute
          -bottom-8
          left-8
          rounded-[6px]
          bg-white
          px-7
          py-5
          shadow-2xl
        "
      >
        <h3 className="text-4xl font-black text-[#0B2F63]">20+</h3>

        <p className="mt-1 text-sm font-medium text-slate-500">{t("year")}</p>
      </div>
    </div>
  );
};

export default AboutImage;
