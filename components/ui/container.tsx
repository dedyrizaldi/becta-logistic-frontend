import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1400px] px-2 md:px-8 xl:px-10",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
