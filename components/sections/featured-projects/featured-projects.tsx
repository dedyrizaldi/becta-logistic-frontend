import FeaturedHeader from "./featured-header";
import FeaturedMain from "./featured-main";
import FeaturedList from "./featured-list";

const FeaturedProjects = () => {
  return (
    <section
      id="projects"
      className="
        bg-[#071C3A]
        py-14
        lg:py-16
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
        <div
          className="
            grid
            items-center
            gap-5

            lg:grid-cols-[240px_minmax(0,1fr)_240px]

            xl:grid-cols-[250px_minmax(0,1fr)_250px]
          "
        >
          <FeaturedHeader />

          <FeaturedMain />

          <FeaturedList />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
