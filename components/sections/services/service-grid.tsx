"use client";

import type { Service } from "@/types/homepage";

import ServiceCard from "./service-card";

interface ServiceGridProps {
  services: Service[];
}

const ServiceGrid = ({ services }: ServiceGridProps) => {
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
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceGrid;
