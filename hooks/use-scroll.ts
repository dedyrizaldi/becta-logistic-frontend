"use client";

import { useEffect, useState } from "react";

const useScroll = (offset = 40) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > offset);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return isScrolled;
};

export default useScroll;
