import { createContext, useContext } from "react";
import type Lenis from "lenis";

export const LenisContext = createContext<React.RefObject<Lenis | null> | null>(null);

/**
 * Returns a scrollTo function powered by Lenis.
 * Usage: const scrollTo = useLenisScroll();
 *        scrollTo("#contact");
 */
export function useLenisScroll() {
  const lenisRef = useContext(LenisContext);

  return (target: string | HTMLElement | number, options?: { duration?: number; offset?: number }) => {
    const lenis = lenisRef?.current;
    if (!lenis) {
      // Fallback: native scroll if Lenis isn't ready
      if (typeof target === "string") {
        const el = document.querySelector(target);
        el?.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    lenis.scrollTo(target as string, {
      duration: options?.duration ?? 1.6,
      offset: options?.offset ?? -72, // account for fixed navbar height
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };
}
