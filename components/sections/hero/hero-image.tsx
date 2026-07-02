import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative">
      <Image
        src="/hero/lct.png"
        alt="becta logistics"
        width={760}
        height={620}
        priority
        className="
          h-auto
          w-full
          rounded-[32px]
          object-cover
        "
      />
    </div>
  );
};

export default HeroImage;
