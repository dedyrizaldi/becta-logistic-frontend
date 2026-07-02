"use client";

import { ReactNode } from "react";
import { useRouter } from "@/i18n/navigation";

import { usePageTransition } from "./page-transition";

interface LoadingLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const LoadingLink = ({ href, children, className }: LoadingLinkProps) => {
  const router = useRouter();

  const { startTransition } = usePageTransition();

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    startTransition();

    await new Promise((resolve) => setTimeout(resolve, 500));

    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default LoadingLink;
