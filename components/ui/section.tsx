import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section id={id} className={cn("py-15 lg:py-28", className)}>
      {children}
    </section>
  );
};

export default Section;
