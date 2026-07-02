import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "white";
  className?: string;
}

const Logo = ({ size = "lg", variant = "default", className }: LogoProps) => {
  const logoSize = {
    sm: {
      width: 130,
      height: 40,
    },
    md: {
      width: 155,
      height: 46,
    },
    lg: {
      width: 180,
      height: 54,
    },
  };

  return (
    <Link href="/" className={cn("inline-flex items-center", className)}>
      <Image
        src={variant === "white" ? "/logo/logo-white.png" : "/logo/logo.png"}
        alt="becta logistics"
        width={logoSize[size].width}
        height={logoSize[size].height}
        priority
      />
    </Link>
  );
};

export default Logo;
