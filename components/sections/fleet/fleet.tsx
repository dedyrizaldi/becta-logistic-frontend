import FleetHeader from "./fleet-header";
import FleetSlider from "./fleet-slider";

const Fleet = () => {
  return (
    <section
      id="fleet"
      className="
        bg-[#F8FAFC]
        py-16

        lg:py-8
      "
    >
      <div
        className="
          mx-auto
          max-w-[1280px]
          px-5

          lg:px-6
        "
      >
        <FleetHeader />

        <div className="mt-12">
          <FleetSlider />
        </div>
      </div>
    </section>
  );
};

export default Fleet;
