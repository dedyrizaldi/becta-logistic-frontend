import {
  CalendarDays,
  Cog,
  Flag,
  Gauge,
  MoveHorizontal,
  MoveVertical,
  Package,
  Ruler,
  Ship,
  Users,
} from "lucide-react";

import type { FleetDetail } from "@/services/fleet.service";

interface FleetSpecificationProps {
  fleet: FleetDetail;
}

interface SpecItem {
  label: string;
  value: string | number;
  icon: React.ElementType;
  suffix?: string;
}

export default function FleetSpecification({ fleet }: FleetSpecificationProps) {
  const specs: SpecItem[] = [
    {
      label: "Length Overall",
      value: fleet.specification.loa,
      suffix: "m",
      icon: Ruler,
    },
    {
      label: "Beam",
      value: fleet.specification.beam,
      suffix: "m",
      icon: MoveHorizontal,
    },
    {
      label: "Depth",
      value: fleet.specification.depth,
      suffix: "m",
      icon: MoveVertical,
    },
    {
      label: "Gross Tonnage",
      value: fleet.specification.gt,
      icon: Ship,
    },
    {
      label: "Cargo Capacity",
      value: fleet.specification.cargo_capacity,
      suffix: "Ton",
      icon: Package,
    },
    {
      label: "Main Engine",
      value: fleet.technical.engine ?? "-",
      icon: Cog,
    },
    {
      label: "Speed",
      value: fleet.technical.speed ?? "-",
      suffix: fleet.technical.speed != null ? "Knots" : undefined,
      icon: Gauge,
    },
    {
      label: "Crew",
      value: fleet.technical.crew ?? "-",
      suffix: fleet.technical.crew != null ? "Persons" : undefined,
      icon: Users,
    },
    {
      label: "Built Year",
      value: fleet.technical.built_year ?? "-",
      icon: CalendarDays,
    },
    {
      label: "Flag",
      value: fleet.technical.flag ?? "-",
      icon: Flag,
    },
  ];

  return (
    <section
      className="
        rounded-3xl
        bg-white
        p-8
        shadow-sm
        ring-1
        ring-slate-200

        lg:p-12
      "
    >
      {/* Header */}

      <div className="mb-10">
        <span
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.35em]
            text-[#D8A41D]
          "
        >
          Technical Data
        </span>

        <h2
          className="
            mt-3
            text-2xl
            font-black
            text-[#071C3A]
          "
        >
          Fleet Specification
        </h2>

        <div
          className="
            mt-6
            h-1
            w-20
            rounded-full
            bg-[#D8A41D]
          "
        />
      </div>

      {/* Grid */}

      <div
        className="
          grid
          gap-6

          md:grid-cols-2

          xl:grid-cols-5
        "
      >
        {specs.map((spec) => {
          const Icon = spec.icon;

          return (
            <div
              key={spec.label}
              className="
                rounded-2xl

                border

                border-slate-200

                bg-slate-50

                p-6

                transition

                duration-300

                hover:-translate-y-1

                hover:border-[#D8A41D]

                hover:bg-white

                hover:shadow-lg
              "
            >
              <div
                className="
                  inline-flex

                  rounded-xl

                  bg-[#071C3A]

                  p-3

                  text-white
                "
              >
                <Icon size={22} />
              </div>

              <p
                className="
                  mt-6

                  text-xs

                  uppercase

                  tracking-wider

                  text-slate-500
                "
              >
                {spec.label}
              </p>

              <h3
                className="
                  mt-2

                  text-2xl

                  font-black

                  text-[#071C3A]
                "
              >
                {spec.value}

                {spec.suffix && (
                  <span
                    className="
                      ml-1

                      text-base

                      font-medium

                      text-slate-500
                    "
                  >
                    {spec.suffix}
                  </span>
                )}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
