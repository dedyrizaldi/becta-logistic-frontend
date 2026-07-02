import JourneyHeader from "./journey-header";
import JourneyTimeline from "./journey-timeline";

const Journey = () => {
  return (
    <section
      id="journey"
      className="
        bg-white
        py-16
        lg:py-20
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
        <JourneyHeader />

        <div className="mt-12">
          <JourneyTimeline />
        </div>
      </div>
    </section>
  );
};

export default Journey;
