"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { usePathname } from "@/i18n/navigation";

import LoadingScreen from "./loading-screen";

interface TransitionContextType {
  loading: boolean;
  startTransition: () => void;
  stopTransition: () => void;
}

const TransitionContext = createContext<TransitionContextType>({
  loading: false,
  startTransition: () => {},
  stopTransition: () => {},
});

export const usePageTransition = () => useContext(TransitionContext);

interface TransitionProviderProps {
  children: ReactNode;
}

export default function TransitionProvider({
  children,
}: TransitionProviderProps) {
  const pathname = usePathname();

  const [loading, setLoading] = useState(false);

  const startTransition = () => {
    setLoading(true);
  };

  const stopTransition = () => {
    setLoading(false);
  };

  // Otomatis menutup loading ketika route berubah
  useEffect(() => {
    if (!loading) return;

    const timer = setTimeout(() => {
      setLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <TransitionContext.Provider
      value={{
        loading,
        startTransition,
        stopTransition,
      }}
    >
      {children}

      <LoadingScreen show={loading} />
    </TransitionContext.Provider>
  );
}
