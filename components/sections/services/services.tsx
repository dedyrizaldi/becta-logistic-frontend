import type { Service } from "@/types/homepage";

import ServiceGrid from "./service-grid";
import ServiceHeader from "./service-header";

interface ServicesProps {
  services: Service[];
}

const Services = ({ services }: ServicesProps) => {
  return (
    <section id="services" className="bg-[#F8FAFC] py-15">
      <div className="mx-auto max-w-7xl px-6">
        <ServiceHeader />

        <ServiceGrid services={services} />
      </div>
    </section>
  );
};

export default Services;
