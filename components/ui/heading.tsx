import { cn } from "@/lib/utils";

interface HeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const Heading = ({
  eyebrow,
  title,
  description,
  align = "left",
}: HeadingProps) => {
  return (
    <div className={cn(align === "center" && "text-center")}>
      {eyebrow && (
        <span
          className="
          mb-3
          inline-flex
          rounded-full
          bg-blue-100
          px-4
          py-2
          text-xs
          font-bold
          uppercase
          tracking-[0.2em]
          text-[var(--primary)]
        "
        >
          {eyebrow}
        </span>
      )}

      <h2
        className="
        mt-5
        text-4xl
        font-extrabold
        leading-tight
        text-slate-900
        lg:text-5xl
      "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
          mt-6
          max-w-2xl
          text-lg
          leading-8
          text-slate-500
        "
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default Heading;
