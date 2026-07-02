"use client";

import { useEffect, useState } from "react";
import Navbar from "./navbar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        z-[999]
        w-full
        transition-all
        duration-300
        ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <Navbar isScrolled={isScrolled} />
    </header>
  );
};

export default Header;
