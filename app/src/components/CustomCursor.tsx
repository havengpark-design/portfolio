"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device has a touch screen (cursor not needed)
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isZoom = target.closest("[style*='cursor: zoom'], [style*='cursor:zoom']");
      if (isZoom) {
        setIsVisible(false);
        setIsHovering(false);
        return;
      }
      
      if (!isVisible) setIsVisible(true);

      const interactive = target.closest("a, button, [role='button'], input, select, textarea, .card-wrap, [style*='cursor: pointer'], [style*='cursor:pointer']");
      setIsHovering(!!interactive);
    };

    const onMouseOver = (e: MouseEvent) => {
      updateHoverState(e);
    };

    const onMouseOut = (e: MouseEvent) => {
      setTimeout(() => {
        setIsHovering(false);
      }, 50);
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        x: position.x,
        y: position.y,
        width: isHovering ? 31 : 15,
        height: isHovering ? 31 : 15,
        borderRadius: isHovering ? 15.5 : 7.5,
        backgroundColor: isHovering ? "rgba(189,0,0,0.53)" : "rgba(189,0,0,1)",
      }}
      transition={{
        // Define Spring for super smooth following tracking and animation
        type: "spring",
        stiffness: 700,
        damping: 35,
        mass: 0.5,
      }}
    />
  );
}
