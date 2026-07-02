import AboutImage from "./about-image";
import AboutContent from "./about-content";

const About = () => {
  return (
    <section className="bg-white py-3">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <AboutImage />

        <AboutContent />
      </div>
    </section>
  );
};

export default About;
