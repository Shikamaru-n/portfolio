"use client";

import { useEffect, useRef } from "react";
import { inView } from "framer-motion/dom";
import { animate } from "framer-motion/dom/mini";

type RevealProps = {
  children: React.ReactNode;
  delay?: number; // seconds
  className?: string;
};

// Fades content up slightly the first time it scrolls into view.
// The HTML is always fully visible: only content that starts below the screen is
// hidden (by JavaScript, after the page loads) and then faded in. So the first
// paint is never delayed, and nothing animates for visitors who prefer reduced motion.
// Uses Framer Motion's small `inView` and `animate` helpers to keep the bundle light.
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return; // already on screen

    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    let timer: number | undefined;

    const stop = inView(
      el,
      () => {
        timer = window.setTimeout(() => {
          // Clear the hiding styles and start the fade in the same frame
          el.style.opacity = "";
          el.style.transform = "";
          animate(
            el,
            { opacity: [0, 1], transform: ["translateY(16px)", "translateY(0)"] },
            { duration: 0.45, ease: "easeOut" },
          );
        }, delay * 1000);
        stop();
      },
      { margin: "0px 0px -60px 0px" },
    );

    return () => {
      stop();
      window.clearTimeout(timer);
      el.style.opacity = "";
      el.style.transform = "";
    };
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
