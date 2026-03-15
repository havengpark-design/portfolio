"use client";

import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

export default function FadeIn({
  children,
  delay = 0,
  className = "",
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.07, rootMargin: "0px 0px -28px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      // Once transition completes, remove all transform/opacity overrides so this
      // element no longer creates a stacking context — this prevents any child
      // position:fixed overlays (e.g. lightbox) from being trapped inside it.
      onTransitionEnd={() => { if (visible) setSettled(true); }}
      style={
        settled
          ? { ...style }
          : {
              ...style,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(22px)",
              transition: `opacity 0.65s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.65s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
              willChange: "opacity, transform",
            }
      }
    >
      {children}
    </div>
  );
}
