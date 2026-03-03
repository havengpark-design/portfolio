"use client";

import { useState, useEffect } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const artPieces = [
  { src: "/Art/01a-gray-cut-blood-top.png", title: "Gray Cut Blood I", year: "2024", medium: "Graphite on paper", size: '16" × 24"' },
  { src: "/Art/01b-gray-cut-blood-bottom.png", title: "Gray Cut Blood II", year: "2024", medium: "Graphite on paper", size: '16" × 24"' },
  { src: "/Art/02-where-are-you.png", title: "where are you", year: "2025", medium: "Oil on canvas", size: "8′ × 6′" },
  { src: "/Art/03-its-time.png", title: "It's Time", year: "2024", medium: "Oil on canvas", size: '24" × 24"' },
  { src: "/Art/04-fleshgreen.png", title: "fleshgreen", year: "2025", medium: "Oil on canvas", size: '24" × 30"' },
  { src: "/Art/05-untitled.png", title: "Untitled", year: "2024", medium: "Oil on canvas", size: '24" × 24"' },
  { src: "/Art/06-bloom.png", title: "Bloom", year: "2021", medium: "Oil on canvas", size: '16" × 24"' },
  { src: "/Art/07-come-again.png", title: "Come again", year: "2021", medium: "Oil on canvas", size: '24" × 16"' },
  { src: "/Art/08-umma.png", title: "umma", year: "2024", medium: "Oil on canvas", size: "4′ × 7′" },
  { src: "/Art/09-na.png", title: "na", year: "2024", medium: "Oil on canvas", size: "4′ × 7′" },
  { src: "/Art/10-appa.png", title: "appa", year: "2024", medium: "Oil on canvas", size: "4′ × 7′" },
  { src: "/Art/11-in-threes.png", title: "In threes", year: "2023", medium: "Photo" },
  { src: "/Art/12-blue-mirror.png", title: "Blue mirror", year: "2023", medium: "Photo" },
  { src: "/Art/13-last-hour.png", title: "last hour", year: "2023", medium: "Photo" },
];

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="15"
      viewBox="0 0 17 15"
      fill="none"
      className="transition-transform duration-300 ease-in-out shrink-0"
      style={{ transform: open ? "rotate(0deg)" : "rotate(-90deg)" }}
    >
      <path
        d="M6.70686 13.6632C7.48468 14.9519 9.35357 14.9519 10.1314 13.6632L16.5474 3.03351C17.352 1.70056 16.3921 1.05616e-06 14.8351 1.12421e-06L2.00311 1.68512e-06C0.446163 1.75318e-06 -0.513718 1.70056 0.290844 3.03351L6.70686 13.6632Z"
        fill={open ? "#4583DA" : "black"}
      />
    </svg>
  );
}

export default function ArtGallery() {
  const [open, setOpen] = useState(false);
  const { ref, visible } = useFadeIn();

  useEffect(() => {
    const handler = (e: Event) => {
      const { id } = (e as CustomEvent<{ id: string }>).detail;
      if (id === "creating") setOpen(true);
    };
    window.addEventListener("openSection", handler);
    return () => window.removeEventListener("openSection", handler);
  }, []);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="flex flex-col gap-[51px] transition-[margin] duration-500 ease-in-out w-full"
      style={{ marginBottom: open ? "150px" : "30px" }}
    >
      {/* Section header — identical style to ProjectGrid */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-[24px] cursor-pointer text-left w-fit reveal ${visible ? "is-visible" : ""}`}
        style={{
          transitionDelay: "0ms",
          padding: "28px 60px",
          borderRadius: "100px",
          background: open ? "rgba(69, 131, 218, 0.12)" : "rgba(255, 255, 255, 0.22)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: open
            ? "1px solid rgba(69, 131, 218, 0.15)"
            : "1px solid rgba(255, 255, 255, 0.60)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.08), inset 0 1.5px 0 rgba(255,255,255,0.85), inset 0 -1px 0 rgba(0,0,0,0.05)",
          transition: "background 0.3s ease, border 0.3s ease",
        }}
      >
        <div style={{ marginLeft: "-10px" }}>
          <ToggleIcon open={open} />
        </div>
        <div className="flex flex-col gap-[13px]" style={{ marginLeft: "5px" }}>
          <h2 className="text-black text-[30px] font-normal leading-5">Creating</h2>
          <p className="text-[#4A5565] text-[18px] font-normal leading-5">Making art to feel.</p>
        </div>
      </button>

      {/* Masonry gallery */}
      <div
        style={{
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          height: open ? "auto" : 0,
          overflow: "hidden",
          transition: "opacity 0.5s ease",
        }}
      >
        <div
          style={{
            columnCount: 3,
            columnGap: "16px",
          }}
        >
          {artPieces.map((piece, i) => (
            // art-reveal uses CSS animation (not transition) for the reveal,
            // so animationDelay only delays the keyframe — hover transitions are always instant
            <div
              key={i}
              className={`art-reveal ${visible ? "is-visible" : ""}`}
              style={{
                breakInside: "avoid",
                marginBottom: "16px",
                animationDelay: `${i * 70}ms`,
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 20px 44px rgba(0,0,0,0.22)";
                const overlay = el.querySelector(".art-overlay") as HTMLElement;
                if (overlay) overlay.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                const overlay = el.querySelector(".art-overlay") as HTMLElement;
                if (overlay) overlay.style.opacity = "0";
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={piece.src}
                alt={piece.title}
                style={{ width: "100%", display: "block" }}
              />
              <div
                className="art-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.28) 45%, transparent 72%)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "20px",
                }}
              >
                <p
                  style={{
                    color: "white",
                    fontSize: "15px",
                    fontWeight: 500,
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {piece.title}
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "12px",
                    margin: "5px 0 0 0",
                    lineHeight: 1.4,
                  }}
                >
                  {piece.year} · {piece.medium}
                  {piece.size ? ` · ${piece.size}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
