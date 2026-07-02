"use client";

import { services } from "@/constants/services";
import ServiceCard from "./service-card";

const ServiceGrid = () => {
  return (
    <div
      className="
        grid
        gap-[5px]

        sm:grid-cols-2

        lg:grid-cols-3

        xl:grid-cols-6
      "
    >
      {services.map((service) => (
        <ServiceCard
          key={service.key}
          serviceKey={service.key}
          image={service.image}
        />
      ))}
    </div>
  );
};

export default ServiceGrid;
