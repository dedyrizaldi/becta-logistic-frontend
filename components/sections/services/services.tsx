import ServiceGrid from "./service-grid";
import ServiceHeader from "./service-header";

const Services = () => {
  return (
    <section id="services" className="bg-[#F8FAFC] py-15">
      <div className="mx-auto max-w-7xl px-6">
        <ServiceHeader />

        <ServiceGrid />
      </div>
    </section>
  );
};

export default Services;
