"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
      return;
    }

    // Inject a runtime <style> tag — highest possible CSS priority
    const style = document.createElement("style");
    style.id = "cursor-none-override";
    style.textContent = `
      *, *::before, *::after,
      html, body, a, button, input, select, textarea,
      [role="button"], [tabindex], svg, img, video, canvas {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    // Also kill cursor on every element the mouse enters
    const onMouseOver = (e: MouseEvent) => {
      (e.target as HTMLElement).style?.setProperty("cursor", "none", "important");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!dotRef.current) return;
      dotRef.current.style.transform = `translate(${e.clientX - 7.5}px, ${e.clientY - 7.5}px)`;
      dotRef.current.style.opacity = "1";
    };

    const onMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      style.remove();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 15,
        height: 15,
        borderRadius: "50%",
        backgroundColor: "rgba(189,0,0,1)",
        pointerEvents: "none",
        zIndex: 9999,
        opacity: 0,
        willChange: "transform",
      }}
    />
  );
}
