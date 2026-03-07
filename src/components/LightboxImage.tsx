"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

interface Props {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function LightboxImage({ src, alt, style, className }: Props) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const openLightbox = () => {
    setOpen(true);
    // Double rAF so the element is in the DOM before we start the transition
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  };

  const closeLightbox = useCallback(() => {
    setVisible(false);
    setTimeout(() => setOpen(false), 220);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, closeLightbox]);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{ ...style, cursor: "zoom-in" }}
        className={className}
        onClick={openLightbox}
      />

      {open && createPortal(
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "32px",
            cursor: "zoom-out",
            background: "rgba(0,0,0,0.82)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.22s ease",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "min(88vw, 1280px)",
              maxHeight: "88vh",
              objectFit: "contain",
              borderRadius: "14px",
              cursor: "default",
              boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
              transform: visible ? "scale(1)" : "scale(0.93)",
              transition: "transform 0.28s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        </div>,
        document.body
      )}
    </>
  );
}
