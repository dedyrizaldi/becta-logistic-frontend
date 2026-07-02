import { cn } from "@/lib/utils";

interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4;
}

const Grid = ({ children, className, cols = 2 }: GridProps) => {
  const gridCols = {
    1: "grid-cols-1",

    2: "grid-cols-1 lg:grid-cols-2",

    3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",

    4: "grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={cn("grid gap-8", gridCols[cols], className)}>
      {children}
    </div>
  );
};

export default Grid;
