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
      
      const target = e.target as HTMLElement;
      
      setIsVisible(true);

      // Check if interactive
      const interactive = target.closest("a, button, [role='button'], input, select, textarea, .card-wrap, .thumbnail, [style*='cursor: pointer'], [style*='cursor:pointer'], [style*='cursor: zoom'], [style*='cursor:zoom']");
      setIsHovering(!!interactive);
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
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
      }}
      animate={{
        x: position.x - (isHovering ? 15.5 : 7.5),
        y: position.y - (isHovering ? 15.5 : 7.5),
        width: isHovering ? 31 : 15,
        height: isHovering ? 31 : 15,
        borderRadius: isHovering ? 15.5 : 7.5,
        backgroundColor: isHovering ? "rgba(189,0,0,0.33)" : "rgba(189,0,0,1)",
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
