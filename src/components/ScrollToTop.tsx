import { useEffect, useState } from "react";
import { useLenisScroll } from "@/hooks/use-lenis-scroll";
import { ArrowUp } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollTo = useLenisScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={() => scrollTo(0)}
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-8 right-8 z-[90] flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-background/50 text-primary shadow-lg backdrop-blur-xl transition-all duration-500 hover:bg-primary/10 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)]",
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
