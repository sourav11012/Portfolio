import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Reveal — anime.js scroll reveal wrapper.
 * Fades + rises children into view once, with an optional stagger for groups.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 30,
  duration = 950,
  staggerBy = 0,
  as: Tag = "div",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = staggerBy > 0 ? el.children : el;
    if (reduceMotion) return;

    // Park everything hidden until it enters the viewport.
    animate(targets, { opacity: 0, duration: 0 });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animate(targets, {
            opacity: [0, 1],
            translateY: [y, 0],
            duration,
            delay: staggerBy > 0 ? stagger(staggerBy, { start: delay }) : delay,
            easing: "easeOutExpo",
          });
          io.disconnect();
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, y, duration, staggerBy]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

export function usePrefersReducedMotion() {
  return reduceMotion;
}
