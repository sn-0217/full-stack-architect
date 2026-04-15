import { ReactNode } from "react";
import { useLenis } from "@/hooks/use-lenis";
import { LenisContext } from "@/hooks/use-lenis-scroll";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useLenis();

  return (
    <LenisContext.Provider value={lenisRef}>
      {children}
    </LenisContext.Provider>
  );
}

