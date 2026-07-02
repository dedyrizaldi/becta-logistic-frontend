import Stat from "@/components/ui/stat";

const HeroStats = () => {
  return (
    <div className="mt-16 grid grid-cols-3 gap-10">
      <Stat number="20+" label="years experience" />

      <Stat number="35+" label="fleet units" />

      <Stat number="500+" label="completed projects" />
    </div>
  );
};

export default HeroStats;
