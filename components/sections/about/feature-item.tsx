import { ShieldCheck, Clock3, MapPinned } from "lucide-react";

interface FeatureItemProps {
  icon: "shield" | "clock" | "map";
  title: string;
  description: string;
}

const icons = {
  shield: ShieldCheck,
  clock: Clock3,
  map: MapPinned,
};

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => {
  const Icon = icons[icon];

  return (
    <div
      className="
        group
        flex
        items-start
        gap-4
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-[#D8A41D]/30
          bg-[#D8A41D]/10
          transition-all
          duration-300

          group-hover:bg-[#D8A41D]
        "
      >
        <Icon
          className="
            h-6
            w-6
            text-[#D8A41D]
            transition-colors
            duration-300

            group-hover:text-white
          "
        />
      </div>

      {/* Content */}

      <div>
        <h3
          className="
            text-[15px]
            font-bold
            text-[#0B2F63]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            text-[13px]
            leading-6
            text-slate-500
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;
