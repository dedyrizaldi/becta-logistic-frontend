"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { usePathname } from "@/i18n/navigation";

import LoadingScreen from "./loading-screen";

interface TransitionContextType {
  startTransition: () => void;
}

const TransitionContext = createContext<TransitionContextType>({
  startTransition: () => {},
});

export const usePageTransition = () => useContext(TransitionContext);

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [loading, setLoading] = useState(false);

  const startTransition = () => {
    setLoading(true);
  };

  useEffect(() => {
    if (!loading) return;

    const timer = setTimeout(() => {
      setLoading(false);
    }, 350);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <TransitionContext.Provider
      value={{
        startTransition,
      }}
    >
      {children}

      <LoadingScreen show={loading} />
    </TransitionContext.Provider>
  );
}
