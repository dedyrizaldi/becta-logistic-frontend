import CoverageMap from "./coverage-map";
import CoverageStats from "./coverage-stats";

const Coverage = () => {
  return (
    <section id="coverage">
      <div className="mx-auto max-w-8xl">
        <div
          className="
            overflow-hidden
            shadow-lg
            lg:grid
            lg:grid-cols-[1.35fr_1fr]
          
          "
        >
          {/* LEFT */}

          <CoverageMap />

          {/* RIGHT */}

          <CoverageStats />
        </div>
      </div>
    </section>
  );
};

export default Coverage;
