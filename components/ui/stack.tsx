import { cn } from "@/lib/utils";

interface StackProps {
  children: React.ReactNode;
  className?: string;
  gap?: "sm" | "md" | "lg";
}

const Stack = ({ children, className, gap = "md" }: StackProps) => {
  const gaps = {
    sm: "space-y-4",

    md: "space-y-6",

    lg: "space-y-10",
  };

  return <div className={cn(gaps[gap], className)}>{children}</div>;
};

export default Stack;
