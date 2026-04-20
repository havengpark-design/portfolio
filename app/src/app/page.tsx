"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const artPieces = [
  { src: "/Art/01-gray-cut-blood.png", title: "Gray Cut Blood", year: "2024", medium: "Graphite on paper" },
  { src: "/Art/02-where-are-you.png", title: "where are you", year: "2025", medium: "Oil on canvas" },
  { src: "/Art/03-its-time.png", title: "It's Time", year: "2024", medium: "Oil on canvas" },
  { src: "/Art/04-fleshgreen.png", title: "fleshgreen", year: "2025", medium: "Oil on canvas" },
  { src: "/Art/05-untitled.png", title: "Untitled", year: "2024", medium: "Oil on canvas" },
  { src: "/Art/06-bloom.png", title: "Bloom", year: "2021", medium: "Oil on canvas" },
  { src: "/Art/07-come-again.png", title: "Come again", year: "2021", medium: "Oil on canvas" },
  { src: "/Art/08-umma.png", title: "umma", year: "2024", medium: "Oil on canvas" },
  { src: "/Art/09-na.png", title: "na", year: "2024", medium: "Oil on canvas" },
  { src: "/Art/10-appa.png", title: "appa", year: "2024", medium: "Oil on canvas" },
  { src: "/Art/11-in-threes.png", title: "In threes", year: "2023", medium: "Photo" },
  { src: "/Art/12-blue-mirror.png", title: "Blue mirror", year: "2023", medium: "Photo" },
  { src: "/Art/13-last-hour.png", title: "last hour", year: "2023", medium: "Photo" },
];

const designProjects = [
  { key: "mermory", name: "Mermory", tags: "Product Design · AI-powered study app" },
  { key: "jams",    name: "Jams",    tags: "Product Design · Enterprise job automation platform" },
  { key: "portico", name: "Portico", tags: "Product Design · Career platform" },
];

type Section = "design" | "storytelling" | "art" | null;

/* ── Checkmark SVG ── */
const CHECKMARK_PATH = "M4.99324 8.4882L3.33633 6.83247C3.24705 6.74325 3.12596 6.69313 2.99969 6.69313C2.87343 6.69313 2.75234 6.74325 2.66306 6.83247C2.57378 6.92169 2.52362 7.04269 2.52362 7.16886C2.52362 7.23134 2.53593 7.2932 2.55986 7.35092C2.58378 7.40864 2.61885 7.46108 2.66306 7.50526L4.65899 9.49977C4.84522 9.68586 5.14604 9.68586 5.33226 9.49977L10.3842 4.45146C10.4735 4.36225 10.5236 4.24124 10.5236 4.11507C10.5236 3.9889 10.4735 3.86789 10.3842 3.77867C10.2949 3.68946 10.1738 3.63934 10.0475 3.63934C9.92128 3.63934 9.80019 3.68946 9.71091 3.77867L4.99324 8.4882Z";

function CheckboxRow({ checked, label, color }: { checked: boolean; label: string; color: string }) {
  return (
    <div style={{ display: "flex", gap: 9, alignItems: "center" }}>
      <div style={{ width: 19, height: 19, flexShrink: 0 }}>
        {checked ? (
          /* Checked: plain checkmark, no box */
          <svg width="19" height="19" viewBox="0 0 15 15" fill="none">
            <path d="M2.5 7.5L6 11L12.5 4" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          /* Unchecked: dashed circle */
          <svg width="19" height="19" viewBox="0 0 15 15" fill="none" className="dash-pulse">
            <path d="M6.36621 13.1895C6.73154 13.2617 7.11047 13.2998 7.5 13.2998V15C6.99894 15 6.50969 14.9492 6.03613 14.8555L6.36621 13.1895ZM8.96289 14.8555C8.48963 14.9491 8.00073 15 7.5 15V13.2998C7.88953 13.2998 8.26846 13.2617 8.63379 13.1895L8.96289 14.8555ZM2.67578 10.7217C3.09967 11.3548 3.64521 11.9003 4.27832 12.3242L3.33301 13.7354C2.51517 13.1877 1.81116 12.484 1.26367 11.666L2.67578 10.7217ZM13.7354 11.666C13.1878 12.484 12.484 13.1878 11.666 13.7354L10.7217 12.3242C11.3548 11.9003 11.9003 11.3548 12.3242 10.7217L13.7354 11.666ZM0 7.5C0 6.999 0.049863 6.50963 0.143555 6.03613L1.81055 6.36621C1.73827 6.73154 1.7002 7.11047 1.7002 7.5C1.7002 7.88953 1.73827 8.26846 1.81055 8.63379L0.143555 8.96289C0.0499839 8.48969 0 8.00066 0 7.5ZM15 7.5C15 8.00073 14.9491 8.48963 14.8555 8.96289L13.1895 8.63379C13.2617 8.26846 13.2998 7.88953 13.2998 7.5C13.2998 7.11047 13.2617 6.73154 13.1895 6.36621L14.8555 6.03613C14.9492 6.50969 15 6.99894 15 7.5ZM4.27832 2.67578C3.64521 3.09967 3.09967 3.64521 2.67578 4.27832L1.26367 3.33301C1.8112 2.5152 2.5152 1.8112 3.33301 1.26367L4.27832 2.67578ZM11.666 1.26367C12.484 1.81116 13.1877 2.51517 13.7354 3.33301L12.3242 4.27832C11.9003 3.64521 11.3548 3.09967 10.7217 2.67578L11.666 1.26367ZM7.5 0C8.00066 0 8.48969 0.0499839 8.96289 0.143555L8.63379 1.81055C8.26846 1.73827 7.88953 1.7002 7.5 1.7002C7.11047 1.7002 6.73154 1.73827 6.36621 1.81055L6.03613 0.143555C6.50963 0.049863 6.999 0 7.5 0Z" fill={color} />
          </svg>
        )}
      </div>
      <span style={{ fontSize: 17, color, lineHeight: 1.196, whiteSpace: "nowrap" }}>
        {label}
      </span>
    </div>
  );
}

/* ── Project cards ── */

const CARD_SHADOW = "0px 4px 20.4px 3px rgba(0,0,0,0.06)";

const PILL_TEXT = "Something beautiful is in making...";
const OUTER_ZONE = 0.75; // inner 75% = safe, outer 25% = reactive

function SocialIcon({ src, w, h, href }: { src: string; w: number; h: number; href?: string }) {
  const [hovered, setHovered] = useState(false);
  const inner = (
    <>
      <div style={{
        position: "absolute", top: -6, right: -6, bottom: -6, left: -6, background: "#f3f3f3", borderRadius: 10,
        opacity: hovered ? 1 : 0, transition: "opacity 0.3s ease", pointerEvents: "none",
      }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt="" src={src} style={{ width: w, height: h, position: "relative", zIndex: 1 }} />
    </>
  );
  if (href) return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", textDecoration: "none" }}>
      {inner}
    </a>
  );
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
      {inner}
    </div>
  );
}

function LoadingSpinner() {
  return (
    <>
      <style>{`
        @keyframes spinner-rotate {
          100% { transform: rotate(360deg); }
        }
        @keyframes spinner-dash {
          0%   { stroke-dasharray: 1 28; stroke-dashoffset: 0; }
          50%  { stroke-dasharray: 20 28; stroke-dashoffset: -5; }
          100% { stroke-dasharray: 1 28; stroke-dashoffset: -28; }
        }
      `}</style>
      <svg
        width="14" height="14" viewBox="0 0 14 14" fill="none"
        style={{ flexShrink: 0, opacity: 0.7, animation: "spinner-rotate 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite" }}
      >
        <circle
          cx="7" cy="7" r="4.5"
          stroke="#344e84" strokeWidth="2.6" strokeLinecap="round" strokeOpacity="0.4"
          style={{ animation: "spinner-dash 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite" }}
        />
      </svg>
    </>
  );
}

function PlaceholderCard({ scale = 1 }: { scale?: number }) {
  const [viewportPos, setViewportPos] = useState<{ x: number; y: number } | null>(null);
  const [visibleChars, setVisibleChars] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const charsFloat = useRef(0);
  const typingRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const phaseRef = useRef<"idle" | "typing" | "interactive">("idle");
  const [phase, setPhase] = useState<"idle" | "typing" | "interactive">("idle");

  const setPhaseSync = (p: "idle" | "typing" | "interactive") => {
    phaseRef.current = p;
    setPhase(p);
  };

  const startTyping = () => {
    if (typingRef.current) clearTimeout(typingRef.current);
    setPhaseSync("typing");
    charsFloat.current = 0;
    setVisibleChars(0);
    let i = 0;
    const tick = () => {
      i++;
      charsFloat.current = i;
      setVisibleChars(i);
      if (i < PILL_TEXT.length) {
        typingRef.current = setTimeout(tick, 25);
      } else {
        setPhaseSync("interactive");
      }
    };
    typingRef.current = setTimeout(tick, 25);
  };

  useEffect(() => () => { if (typingRef.current) clearTimeout(typingRef.current); }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setViewportPos({ x: e.clientX, y: e.clientY });
    if (phaseRef.current !== "interactive" || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const W = rect.width / 2;
    const H = rect.height / 2;

    // Normalized rectangular distance from center to edge (0=center, 1=edge)
    const ex = e.clientX - cx;
    const ey = e.clientY - cy;
    const d = Math.sqrt(ex * ex + ey * ey) || 0;
    let normalizedDist = 0;
    if (d > 0) {
      const ac = Math.abs(ex) / d;
      const as_ = Math.abs(ey) / d;
      const dMax = Math.min(ac > 0 ? W / ac : Infinity, as_ > 0 ? H / as_ : Infinity);
      normalizedDist = Math.min(d / dMax, 1);
    }

    if (normalizedDist > OUTER_ZONE) {
      // Outer 25%: linearly map position → chars (full at boundary, 0 at edge)
      const progress = (normalizedDist - OUTER_ZONE) / (1 - OUTER_ZONE); // 0→1
      charsFloat.current = (1 - progress) * PILL_TEXT.length;
    } else {
      // Inner 75%: always full
      charsFloat.current = PILL_TEXT.length;
    }

    setVisibleChars(Math.round(charsFloat.current));
  };

  const handleMouseLeave = () => {
    setViewportPos(null);
    charsFloat.current = 0;
    setVisibleChars(0);
    setPhaseSync("idle");
    if (typingRef.current) clearTimeout(typingRef.current);
  };

  return (
    <>
      <div
        ref={cardRef}
        onMouseEnter={startTyping}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          background: "white",
          borderRadius: 17,
          boxShadow: CARD_SHADOW,
          width: 677,
          height: 910,
          flexShrink: 0,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 26,
          cursor: "none",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div key={i} className="dot-wave" style={{ width: 22, height: 22, borderRadius: "50%", background: "#D9D9D9", animationDelay: `${i * 0.2}s` }} />
        ))}
      </div>
      {viewportPos && phase !== "idle" && (
        <div style={{
          position: "fixed",
          left: viewportPos.x / scale,
          top: viewportPos.y / scale,
          transform: "translate(-50%, -50%)",
          width: 315 / scale,
          height: 97 / scale,
          borderRadius: 16 / scale,
          background: "#f3f3f3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 9999,
        }}>
          <span style={{ fontSize: 15 / scale, color: "#494949", lineHeight: "119.62%" }}>
            {PILL_TEXT.slice(0, visibleChars)}<span className="blink-cursor" style={{ opacity: phase === "interactive" ? undefined : 0 }}>|</span>
          </span>
        </div>
      )}
    </>
  );
}

function MermoryCard({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "white",
        borderRadius: 17,
        boxShadow: CARD_SHADOW,
        width: 677,
        height: 910,
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Design/mermory/laptopmockv2.png"
        alt="Mermory"
        style={{
          position: "absolute",
          top: 198,
          left: 112,
          width: 961,
          height: 601,
          maxWidth: "none",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

function JamsCard({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "white",
        borderRadius: 17,
        boxShadow: CARD_SHADOW,
        width: 677,
        height: 910,
        cursor: "pointer",
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Design/jams/Dashboard/Home - Future.png"
        alt="Jams dashboard"
        style={{
          position: "absolute",
          left: 52,
          top: 60,
          width: 466,
          height: 440,
          borderRadius: 9,
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Design/jams/Create a new job - AI Prompt 2@4x.png"
        alt="Jams AI prompt"
        style={{
          position: "absolute",
          left: 398,
          top: 190,
          width: 240,
          height: 620,
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

function PorticoCard({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "white",
        borderRadius: 17,
        boxShadow: "0px 4px 18.1px 4px rgba(0,0,0,0.1)",
        border: "1px solid #e7e7e7",
        boxSizing: "border-box",
        width: 677,
        height: 910,
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Design/portico/porticothumbnila.png"
        alt="Portico"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

/* ── Case study content components ── */

function MermoryContent() {
  return (
    <div style={{ maxWidth: 800, paddingBottom: 80 }}>
      <p style={{ fontSize: 13, color: "rgba(38,36,33,0.4)", marginBottom: 18 }}>Product Design · 12 months (2025)</p>
      <h1 style={{ fontSize: 64, fontWeight: 700, color: "#262421", letterSpacing: "-2px", lineHeight: 1, marginBottom: 14 }}>Mermory</h1>
      <p style={{ fontSize: 18, color: "rgba(38,36,33,0.5)", marginBottom: 40 }}>AI-powered study app</p>

      <div style={{ display: "flex", gap: 64, paddingTop: 20, paddingBottom: 20, borderTop: "1px solid rgba(38,36,33,0.08)", borderBottom: "1px solid rgba(38,36,33,0.08)", marginBottom: 56 }}>
        {[["Role","Product Designer"],["Timeline","12 months (2025)"],["Tools","Figma, Rive"]].map(([l,v]) => (
          <div key={l}>
            <p style={{ fontSize: 12, color: "rgba(38,36,33,0.35)", marginBottom: 5 }}>{l}</p>
            <p style={{ fontSize: 14, color: "#262421" }}>{v}</p>
          </div>
        ))}
      </div>

      <div style={{ background: "#F0EEE8", borderRadius: 20, padding: "32px 48px", marginBottom: 64 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/Design/mermory/laptopmock.png" alt="Mermory mockup" style={{ width: "100%", borderRadius: 10, display: "block" }} />
      </div>

      {[
        ["Overview", "Mermory is an AI-powered flashcard platform that gave students creative autonomy over how they study. Unlike Quizlet or Anki, Mermory let users personalize their cards with stickers, themes, and design elements through a Creator Studio—while maintaining industry-standard learning science through FSRS spaced repetition. The challenge was building frictionless import flows and quick-add tools that felt approachable, not technical."],
        ["Problem", "Existing study platforms felt rigid and utilitarian. Students using Quizlet, Anki, and other competitors often encountered three friction points: onboarding required rebuilding entire decks from scratch when switching platforms, card creation was time-consuming and repetitive, and there was no way to express personal style or motivation through design. Users wanted learning tools that felt less like homework and more like spaces they wanted to return to."],
        ["Solution", "We designed an end-to-end creative learning platform that combined three core pillars: one-click AI import from competitors and study materials, a template-based quick-add system that reduced deck creation time by 41%, and a Creator Studio where students could personalize cards with themes, stickers, and gradient borders. Beta feedback drove continuous iteration on import error handling and feature discovery, increasing new user adoption by 39%."],
      ].map(([heading, body]) => (
        <div key={heading} style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 600, color: "#262421", marginBottom: 16 }}>{heading}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(38,36,33,0.6)" }}>{body}</p>
        </div>
      ))}

      <div style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 26, fontWeight: 600, color: "#262421", marginBottom: 24 }}>Process</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {[
            [1, "Research & Discovery", "Conducted 20+ interviews with students and educators to understand pain points in current study methods. Created user journey maps and identified key intervention points."],
            [2, "Ideation & Wireframing", "Explored multiple interaction models for AI-assisted learning. Tested low-fidelity prototypes with target users to validate core concepts."],
            [3, "Visual Design", "Developed a warm, approachable design system that balances playfulness with functionality. Created a comprehensive component library for consistency."],
            [4, "Prototyping & Testing", "Built high-fidelity prototypes with micro-interactions. Conducted usability testing sessions and iterated based on feedback."],
          ].map(([n, title, desc]) => (
            <div key={n} style={{ padding: "24px", borderRadius: 14, border: "1px solid rgba(38,36,33,0.08)" }}>
              <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#262421", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                <span style={{ fontSize: 11, color: "#FFFFF8", fontWeight: 500 }}>{n}</span>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 500, color: "#262421", marginBottom: 8 }}>{title as string}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: "rgba(38,36,33,0.55)" }}>{desc as string}</p>
            </div>
          ))}
        </div>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/Design/mermory/laptopmockv2.png" alt="Mermory detail" style={{ width: "100%", borderRadius: 20, display: "block" }} />
    </div>
  );
}

function JamsContent() {
  const [expandedFrame, setExpandedFrame] = useState<string | null>(null);
  const [iconHovered, setIconHovered] = useState(false);
  const [jamsTeamPos, setJamsTeamPos] = useState<{ x: number; y: number } | null>(null);
  const jamsPillLeft = jamsTeamPos ? jamsTeamPos.x : 0;
  const BASE = "/Design/jams/case-study";
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 120, paddingBottom: 150, paddingLeft: 40, paddingRight: 40, boxSizing: "border-box" }}>
      <div style={{ width: "100%", maxWidth: CS_W, display: "flex", flexDirection: "column", gap: 110 }}>

        {/* ─── Header ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          {/* Meta row */}
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <span style={{ ...CS_BODY, fontWeight: 200, fontSize: 18, lineHeight: "27px", color: "#a2a2a2", whiteSpace: "nowrap" }}>Product Design</span>
            <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#a2a2a2", flexShrink: 0 }} />
            <span style={{ ...CS_BODY, fontWeight: 200, fontSize: 18, lineHeight: "27px", color: "#a2a2a2", whiteSpace: "nowrap" }}>8 weeks (2025)</span>
          </div>
          {/* Title */}
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <h1 style={{ fontWeight: 400, fontSize: 64, letterSpacing: "-0.64px", lineHeight: "76.8px", color: "#262421", margin: 0 }}>Jams</h1>
              <a
                href="https://www.jamsscheduler.com/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIconHovered(true)}
                onMouseLeave={() => setIconHovered(false)}
                style={{ position: "relative", flexShrink: 0, marginTop: 8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", textDecoration: "none" }}
              >
                <div style={{ position: "absolute", top: -8, right: -8, bottom: -8, left: -8, background: "#f3f3f3", borderRadius: 10, opacity: iconHovered ? 1 : 0, transition: "opacity 0.3s ease", pointerEvents: "none" }} />
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" style={{ position: "relative", zIndex: 1 }}>
                  <path d="M9.75 3.75H4.75C2.54086 3.75 0.75 5.54086 0.75 7.75V13.75C0.75 15.9591 2.54086 17.75 4.75 17.75H10.75C12.9591 17.75 14.75 15.9591 14.75 13.75V8.75" stroke="#A2A2A2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.21967 9.21967C7.92678 9.51256 7.92678 9.98744 8.21967 10.2803C8.51256 10.5732 8.98744 10.5732 9.28033 10.2803L8.75 9.75L8.21967 9.21967ZM18.5 0.75C18.5 0.335786 18.1642 3.87003e-08 17.75 1.86214e-07L11 -2.35254e-07C10.5858 -2.35254e-07 10.25 0.335786 10.25 0.75C10.25 1.16421 10.5858 1.5 11 1.5H17V7.5C17 7.91421 17.3358 8.25 17.75 8.25C18.1642 8.25 18.5 7.91421 18.5 7.5L18.5 0.75ZM8.75 9.75L9.28033 10.2803L18.2803 1.28033L17.75 0.75L17.2197 0.21967L8.21967 9.21967L8.75 9.75Z" fill="#A2A2A2" />
                </svg>
              </a>
            </div>
            <p style={{ ...CS_BODY, fontWeight: 200, fontSize: 24, lineHeight: "36px", color: "#494949", margin: 0 }}>Enterprise job automation platform.</p>
          </div>
          {/* Divider */}
          <div style={{ width: "100%", height: 1, background: "rgba(38,36,33,0.11)" }} />
          {/* Metadata */}
          <div style={{ display: "flex", gap: 60 }}>
            {([["Role", "Product Designer"], ["Timeline", "8 weeks (2025)"], ["Tools", "Figma"]] as const).map(([l, v]) => (
              <div key={l} style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
                <span style={{ ...CS_LABEL, fontWeight: 300, color: "#a2a2a2", lineHeight: "27px" }}>{l}</span>
                <span style={{ ...CS_BODY, fontWeight: 200, fontSize: 18, lineHeight: "27px", color: "#262421" }}>{v}</span>
              </div>
            ))}
            {/* Team — pill on hover */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1, cursor: "none" }}
              onMouseEnter={(e) => setJamsTeamPos({ x: e.clientX, y: e.clientY })}
              onMouseMove={(e) => setJamsTeamPos({ x: e.clientX, y: e.clientY })}
              onMouseLeave={() => setJamsTeamPos(null)}
            >
              <span style={{ ...CS_LABEL, fontWeight: 300, color: "#a2a2a2", lineHeight: "27px" }}>Team</span>
              <span style={{ ...CS_BODY, fontWeight: 200, fontSize: 18, lineHeight: "27px", color: "#262421" }}>Cross-Functional</span>
            </div>
          </div>
          {jamsTeamPos && typeof document !== "undefined" && createPortal(
            <div style={{
              position: "fixed",
              left: jamsPillLeft,
              top: jamsTeamPos.y,
              transform: "translate(-50%, -50%)",
              maxWidth: 320,
              borderRadius: 16,
              background: "#f3f3f3",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px 50px",
              pointerEvents: "none",
              zIndex: 9999,
            }}>
              <span style={{ fontSize: 15, color: "#494949", lineHeight: "119.62%" }}>
                PM, 2 designers, 4 In-house engineers<span className="blink-cursor">|</span>
              </span>
            </div>,
            document.body
          )}
          {/* Hero card */}
          <div style={{ width: "100%", height: 600, position: "relative", boxShadow: "0px 4px 24.9px 3px rgba(0, 0, 0, 0.09)", borderRadius: 23, backgroundColor: "#fff", overflow: "hidden", flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <div style={{ alignSelf: "stretch", height: 600, position: "relative", overflow: "hidden", flexShrink: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Design/jams/Create a new job - AI Prompt 2@4x.png" alt="" style={{ position: "absolute", top: 67.2, left: 77.5, width: 234, height: 604, objectFit: "cover", flexShrink: 0, pointerEvents: "none" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Design/jams/laptopmock.png" alt="" style={{ position: "absolute", top: 135.2, left: 299.5, width: 884, height: 536, objectFit: "cover", flexShrink: 0, pointerEvents: "none" }} />
            </div>
          </div>
        </div>

        {/* ─── Overview ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <span style={{ fontSize: 24, lineHeight: "48px", color: "#a2a2a2" }}>Overview</span>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>JAMS Scheduler is an enterprise workload automation and job scheduling platform — essentially software that helps large IT organizations automate, orchestrate, and monitor critical backend processes across their entire tech stack.</p>
          <p style={{ ...CS_BODY, margin: 0 }}>
            Notable users of JAMS: <strong style={{ fontWeight: 400 }}>Bank of America, Coca-Cola Canada, CVS Health, Comcast.</strong>
          </p>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>
            ThisWaay UX studio was brought in to <Highlight color="green"><strong style={{ fontWeight: 400, color: "black" }}>reduce friction in critical workflows while increasing user confidence and speed.</strong></Highlight>
          </p>
        </div>

        {/* ─── Personas frame ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 27 }}>
          <ExpandableBlackFrame id="j1" expandedId={expandedFrame} setExpandedId={setExpandedFrame} style={{ display: "flex", gap: "3%", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src={`${BASE}/persona-1.png`} style={{ flex: 1, width: 0, display: "block", borderRadius: "1.5%", objectFit: "cover", pointerEvents: "none" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src={`${BASE}/persona-2.png`} style={{ flex: 1, width: 0, display: "block", borderRadius: "1.5%", objectFit: "cover", pointerEvents: "none" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src={`${BASE}/persona-3.png`} style={{ flex: 1, width: 0, display: "block", borderRadius: "1.5%", objectFit: "cover", pointerEvents: "none" }} />
          </ExpandableBlackFrame>
          <p style={{ ...CS_BODY, margin: 0 }}>
            <strong style={{ fontWeight: 400, color: "black" }}>We identified 3 primary user personas of JAMS.</strong>
          </p>
        </div>

        {/* ─── Complex Systems ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <span style={{ fontSize: 24, lineHeight: "48px", color: "#a2a2a2" }}>Complex, Outdated Systems</span>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>
            JAMS is an enterprise workload automation platform built for complex, data-heavy operations. Despite its power, the product had accumulated <Highlight color="pink"><strong style={{ fontWeight: 400, color: "black" }}>significant usability debt</strong></Highlight>, making it especially hard for new users to get up to speed. Through collaborative sessions with JAMS's long-tenured staff, we surfaced <strong style={{ fontWeight: 400, color: "black" }}>two recurring pain points</strong>: <Highlight color="pink"><strong style={{ fontWeight: 300, color: "black" }}>a steep first-time user experience</strong></Highlight>{" and "}<Highlight color="pink" delay={150}><strong style={{ fontWeight: 300, color: "black" }}>interfaces that obscured</strong></Highlight>{" rather than clarified."}
          </p>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>Here's what we did:</p>
        </div>

        {/* ─── Home dashboard frame ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          <ExpandableBlackFrame id="j2" expandedId={expandedFrame} setExpandedId={setExpandedFrame} style={{ display: "flex", gap: "3%", alignItems: "center" }}>
            <div style={{ flex: 1, width: 0, position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src={`${BASE}/9588850c5c33fbd3fdef6c1599eddfc3bfff4cfa.png`} style={{ width: "100%", display: "block", borderRadius: "1.5%", objectFit: "cover", pointerEvents: "none" }} />
              <span style={{ position: "absolute", top: "calc(100% + 12px)", left: 0, fontSize: 16, fontWeight: 400, color: "rgba(255,255,255,0.45)", whiteSpace: "nowrap" }}>Before</span>
            </div>
            <div style={{ flex: 1, width: 0, position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src={`${BASE}/1f12448c836a8127ec39ad3cfac674d94fa11df2.png`} style={{ width: "100%", display: "block", borderRadius: "1.5%", objectFit: "cover", pointerEvents: "none" }} />
              <span style={{ position: "absolute", top: "calc(100% + 12px)", left: 0, fontSize: 16, fontWeight: 400, color: "rgba(255,255,255,0.45)", whiteSpace: "nowrap" }}>After</span>
            </div>
          </ExpandableBlackFrame>
          <p style={{ ...CS_BODY, margin: 0 }}>
            The original Home screen offered little beyond documentation links. <strong style={{ fontWeight: 400, color: "black" }}>We rebuilt it into a live dashboard:</strong> job status, schedule projections, quick actions, and agent health all visible on arrival.
          </p>
        </div>

        {/* ─── Monitor view frame ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          <ExpandableBlackFrame id="j3" expandedId={expandedFrame} setExpandedId={setExpandedFrame} style={{ display: "flex", flexDirection: "column", gap: 40, alignItems: "center" }}>
            <div style={{ width: "100%", position: "relative", marginBottom: 32 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src={`${BASE}/jams-monitor-before.png`} style={{ width: "100%", display: "block", borderRadius: "1.5%", objectFit: "cover", pointerEvents: "none" }} />
              <span style={{ position: "absolute", top: "calc(100% + 12px)", left: 0, fontSize: 16, fontWeight: 400, color: "rgba(255,255,255,0.45)", whiteSpace: "nowrap" }}>Before</span>
            </div>
            <div style={{ width: "100%", position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src={`${BASE}/jams-monitor-after.png`} style={{ width: "100%", display: "block", borderRadius: "1.5%", objectFit: "cover", pointerEvents: "none" }} />
              <span style={{ position: "absolute", top: "calc(100% + 12px)", left: 0, fontSize: 16, fontWeight: 400, color: "rgba(255,255,255,0.45)", whiteSpace: "nowrap" }}>After</span>
            </div>
          </ExpandableBlackFrame>
          <p style={{ ...CS_BODY, margin: 0 }}>
            The original Monitor view had no entry point — just rows. <strong style={{ fontWeight: 400, color: "black" }}>We added a live status summary</strong> so operators could orient immediately: what's running, what failed, what's queued. Faster triage, less cognitive load, same underlying data.
          </p>
        </div>

        {/* ─── Job creation frame ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          <ExpandableBlackFrame id="j4" expandedId={expandedFrame} setExpandedId={setExpandedFrame} style={{ display: "flex", gap: "3%", alignItems: "center" }}>
            <div style={{ flex: 1, width: 0, position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src={`${BASE}/d7f4968da51e6798db95e3ef6c7ff36a6e246b47.png`} style={{ width: "100%", display: "block", borderRadius: "1.5%", objectFit: "cover", pointerEvents: "none" }} />
              <span style={{ position: "absolute", top: "calc(100% + 12px)", left: 0, fontSize: 16, fontWeight: 400, color: "rgba(255,255,255,0.45)", whiteSpace: "nowrap" }}>Before</span>
            </div>
            <div style={{ flex: 1, width: 0, position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src={`${BASE}/94c9012ae8f352b669443f668109cdf65dcc2d04.png`} style={{ width: "100%", display: "block", borderRadius: "1.5%", objectFit: "cover", pointerEvents: "none" }} />
            </div>
            <div style={{ flex: 1, width: 0, position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src={`${BASE}/01673452f741297cbaf8ed58458be5c9e4eb8242.png`} style={{ width: "100%", display: "block", borderRadius: "1.5%", objectFit: "cover", pointerEvents: "none" }} />
              <span style={{ position: "absolute", top: "calc(100% + 12px)", left: 0, fontSize: 16, fontWeight: 400, color: "rgba(255,255,255,0.45)", whiteSpace: "nowrap" }}>After</span>
            </div>
            <div style={{ flex: 1, width: 0, position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src={`${BASE}/08d6c53be76e1d7e8ba5e0fb8ae7f47d07b9c15a.png`} style={{ width: "100%", display: "block", borderRadius: "1.5%", objectFit: "cover", pointerEvents: "none" }} />
            </div>
          </ExpandableBlackFrame>
          <p style={{ ...CS_BODY, margin: 0 }}>
            Picking an execution method meant scrolling a long, context-free list with no guidance. <strong style={{ fontWeight: 400, color: "black" }}>We redesigned it with search, categorization, and descriptions</strong> — so users can choose with confidence, not guesswork.
          </p>
        </div>

        {/* ─── Impact ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <span style={{ fontSize: 24, lineHeight: "48px", color: "#a2a2a2" }}>Impact</span>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>
            The redesigned job creation flow was incorporated into JAMS' roadmap for their 2026 web app release. The execution method selector, AI job creation feature, and quick-win usability fixes were all identified as priority items for the MVP — directly shaping the product direction for a platform used by enterprise clients across finance, retail, and manufacturing.
          </p>
        </div>

        {/* ─── Footer ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ width: "100%", height: 1, background: "rgba(38,36,33,0.11)" }} />
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>For more work samples, feel free to contact me at <a href="mailto:gaeunpark@g.ucla.edu" style={{ color: "inherit" }}>gaeunpark@g.ucla.edu</a>.</p>
        </div>

      </div>
    </div>
  );
}


function PorticoLanguageVisual() {
  // Track viewport width so the diagram rescales on resize.
  const [windowW, setWindowW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 9999
  );
  useEffect(() => {
    const handler = () => setWindowW(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Available content width = case-study column width capped by viewport minus padding.
  const availW = Math.min(CS_W, windowW - 2 * CS_PAD);
  const SC = availW / 893;
  const s = (n: number) => n * SC;

  // Uniform gap between every element
  const G = 32; // gap
  const BOX_A_H = 243, BOX_B_H = 96, ARROW_H = 32, ROW_H = 43;
  const y_arrowUp   = BOX_A_H + G;                         // 275
  const y_row1      = y_arrowUp + ARROW_H + G;             // 339
  const y_sep       = y_row1 + ROW_H + G;                  // 414
  const y_row2      = y_sep + 1 + G;                       // 447
  const y_arrowDown = y_row2 + ROW_H + G;                  // 522
  const y_boxB      = y_arrowDown + ARROW_H + G;           // 586
  const TOTAL_H     = y_boxB + BOX_B_H;                    // 682

  const Chip2 = ({ lines, bg, left, top, w, h, fs }: { lines: string[]; bg: string; left: number; top: number; w: number; h: number; fs: number }) => (
    <div style={{ position: "absolute", background: bg, display: "flex", alignItems: "center", justifyContent: "center", left: s(left), top: s(top), width: s(w), height: s(h), borderRadius: s(5) }}>
      <div style={{ fontSize: s(fs), color: "#494949", textAlign: "center", lineHeight: `${s(20)}px` }}>
        {lines.map((l, i) => <p key={i} style={{ margin: 0 }}>{l}</p>)}
      </div>
    </div>
  );

  const chipStyle = (bg: string, h: number) => ({
    background: bg, display: "flex", alignItems: "center", justifyContent: "center",
    height: s(h), borderRadius: s(5), paddingLeft: s(24), paddingRight: s(24),
  } as React.CSSProperties);
  const chipTxt = (fs: number) => ({
    fontSize: s(fs), color: "#494949", whiteSpace: "nowrap" as const, margin: 0,
  });

  return (
    <div style={{ position: "relative", width: s(893), height: s(TOTAL_H) }}>
      {/* Dark box A */}
      <div style={{ position: "absolute", background: "#f0f0f0", left: s(345), top: 0, width: s(548), height: s(BOX_A_H), borderRadius: s(11) }} />
      {/* Skill Attributes + Platform A label */}
      <p style={{ position: "absolute", fontSize: s(14), color: "#a2a2a2", left: s(112), top: s(80), margin: 0, whiteSpace: "nowrap" }}>Skill Attributes</p>
      <p style={{ position: "absolute", fontSize: s(20), color: "#262421", left: s(112), top: s(107), margin: 0, whiteSpace: "nowrap" }}>Acquired platform A</p>
      {/* Platform A chips inside dark box */}
      <div style={{ position: "absolute", left: s(501), top: s(46), ...chipStyle("#e0e0e0", 43) }}><p style={chipTxt(16)}>Key</p></div>
      <Chip2 lines={["Participation", "Level"]} bg="#e0e0e0" left={634} top={20} w={109} h={56} fs={16} />
      <div style={{ position: "absolute", left: s(368), top: s(113), ...chipStyle("#e0e0e0", 43) }}><p style={chipTxt(16)}>Total Time</p></div>
      <div style={{ position: "absolute", left: s(501), top: s(113), ...chipStyle("#e0e0e0", 43) }}><p style={chipTxt(16)}>Pathology</p></div>
      <Chip2 lines={["Supervising", "Employee"]} bg="#e0e0e0" left={634} top={100} w={108} h={56} fs={15} />
      <div style={{ position: "absolute", left: s(365), top: s(180), ...chipStyle("#93afd4", 43) }}><p style={chipTxt(16)}>Amount</p></div>
      <div style={{ position: "absolute", left: s(498), top: s(180), ...chipStyle("#e0e0e0", 43) }}><p style={chipTxt(16)}>Date</p></div>
      <div style={{ position: "absolute", left: s(631), top: s(180), ...chipStyle("#e0e0e0", 43) }}><p style={chipTxt(16)}>Repeats</p></div>
      <div style={{ position: "absolute", left: s(759), top: s(180), ...chipStyle("#e0e0e0", 43) }}><p style={chipTxt(16)}>Site</p></div>

      {/* Up arrow */}
      <div style={{ position: "absolute", left: s(404), top: s(y_arrowUp), width: s(32), height: s(ARROW_H), display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width={s(10)} height={s(28)} viewBox="0 0 10 28" fill="none">
          <path d="M5 26 L5 2 M1 8 L5 2 L9 8" stroke="#a0a0a0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Rows 1 & 2 in shared grid so "Skill" aligns across both rows */}
      <div style={{ position: "absolute", left: 0, top: s(y_row1), display: "grid", gridTemplateColumns: "auto auto auto", columnGap: s(31), rowGap: s(y_row2 - y_row1 - 43) }}>
        {([["Program","#e0e0e0"],["Major Study","#93afd4"],["Skill","#e0e0e0"],
           ["Program","#e0e0e0"],["Checklist Name","#93afd4"],["Skill","#e0e0e0"]] as [string,string][]).map(([label, bg], i) => (
          <div key={i} style={{ ...chipStyle(bg, 43) }}>
            <p style={chipTxt(20)}>{label}</p>
          </div>
        ))}
      </div>

      {/* Separator */}
      <div style={{ position: "absolute", left: 0, top: s(y_sep), width: "100%", height: 1, background: "rgba(38,36,33,0.16)" }} />

      {/* Down arrow */}
      <div style={{ position: "absolute", left: s(404), top: s(y_arrowDown), width: s(32), height: s(ARROW_H), display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width={s(10)} height={s(28)} viewBox="0 0 10 28" fill="none">
          <path d="M5 2 L5 26 M1 20 L5 26 L9 20" stroke="#a0a0a0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Dark box B */}
      <div style={{ position: "absolute", background: "#f0f0f0", left: s(345), top: s(y_boxB), width: s(548), height: s(BOX_B_H), borderRadius: s(11) }} />
      {/* Skill Attributes + Platform B label */}
      <p style={{ position: "absolute", fontSize: s(14), color: "#a2a2a2", left: s(106), top: s(y_boxB - 10), margin: 0, whiteSpace: "nowrap" }}>Skill Attributes</p>
      <p style={{ position: "absolute", fontSize: s(20), color: "#262421", left: s(106), top: s(y_boxB + 17), margin: 0, whiteSpace: "nowrap" }}>Acquired platform B</p>
      {/* Platform B chips inside dark box */}
      <div style={{ position: "absolute", left: s(365), top: s(y_boxB + 20), ...chipStyle("#93afd4", 43) }}><p style={chipTxt(16)}>Count</p></div>
      <div style={{ position: "absolute", left: s(499), top: s(y_boxB + 20), ...chipStyle("#e0e0e0", 43) }}><p style={chipTxt(16)}>Date</p></div>
      <Chip2 lines={["Media", "(Attachment)"]} bg="#e0e0e0" left={632} top={y_boxB + 20} w={108} h={56} fs={15} />
      <Chip2 lines={["Supervising", "Employee"]} bg="#e0e0e0" left={765} top={y_boxB + 20} w={108} h={56} fs={15} />
    </div>
  );
}

function Highlight({ color, children, delay = 0 }: { color: "green" | "pink"; children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <span ref={ref} className={visible ? (color === "green" ? "hl-green" : "hl-pink") : ""}
          style={delay && visible ? { animationDelay: `${delay}ms` } : undefined}>
      {children}
    </span>
  );
}

const PORTICO_TEAM_TEXT = "PM, In-house Designer, Engineers, Stakeholders & CEO";

function PorticoCaseStudy() {
  const [expandedFrame, setExpandedFrame] = useState<string | null>(null);
  const [iconHovered, setIconHovered] = useState(false);
  const [porticoTeamPos, setPorticoTeamPos] = useState<{ x: number; y: number } | null>(null);
  const porticoPillLeft = porticoTeamPos ? porticoTeamPos.x : 0;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 120, paddingBottom: 150, paddingLeft: 40, paddingRight: 40, boxSizing: "border-box" }}>
      <div style={{ width: "100%", maxWidth: CS_W, display: "flex", flexDirection: "column", gap: 110 }}>

        {/* ─── Header ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          {/* Meta row */}
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <span style={{ ...CS_BODY, fontWeight: 200, fontSize: 18, lineHeight: "27px", color: "#a2a2a2", whiteSpace: "nowrap" }}>Product Design</span>
            <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#a2a2a2", flexShrink: 0 }} />
            <span style={{ ...CS_BODY, fontWeight: 200, fontSize: 18, lineHeight: "27px", color: "#a2a2a2", whiteSpace: "nowrap" }}>8 weeks (2025)</span>
          </div>
          {/* Title + subtitle */}
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <h1 style={{ fontWeight: 400, fontSize: 64, letterSpacing: "-0.64px", lineHeight: "76.8px", color: "#262421", margin: 0 }}>Portico</h1>
              <a
                href="https://porticoedu.com"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIconHovered(true)}
                onMouseLeave={() => setIconHovered(false)}
                style={{ position: "relative", flexShrink: 0, marginTop: 8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", textDecoration: "none" }}
              >
                <div style={{ position: "absolute", top: -8, right: -8, bottom: -8, left: -8, background: "#f3f3f3", borderRadius: 10, opacity: iconHovered ? 1 : 0, transition: "opacity 0.3s ease", pointerEvents: "none" }} />
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" style={{ position: "relative", zIndex: 1 }}>
                  <path d="M9.75 3.75H4.75C2.54086 3.75 0.75 5.54086 0.75 7.75V13.75C0.75 15.9591 2.54086 17.75 4.75 17.75H10.75C12.9591 17.75 14.75 15.9591 14.75 13.75V8.75" stroke="#A2A2A2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.21967 9.21967C7.92678 9.51256 7.92678 9.98744 8.21967 10.2803C8.51256 10.5732 8.98744 10.5732 9.28033 10.2803L8.75 9.75L8.21967 9.21967ZM18.5 0.75C18.5 0.335786 18.1642 3.87003e-08 17.75 1.86214e-07L11 -2.35254e-07C10.5858 -2.35254e-07 10.25 0.335786 10.25 0.75C10.25 1.16421 10.5858 1.5 11 1.5H17V7.5C17 7.91421 17.3358 8.25 17.75 8.25C18.1642 8.25 18.5 7.91421 18.5 7.5L18.5 0.75ZM8.75 9.75L9.28033 10.2803L18.2803 1.28033L17.75 0.75L17.2197 0.21967L8.21967 9.21967L8.75 9.75Z" fill="#A2A2A2" />
                </svg>
              </a>
            </div>
            <p style={{ ...CS_BODY, fontWeight: 200, fontSize: 24, lineHeight: "36px", color: "#494949", margin: 0 }}>Unifying the fragmented student experience.</p>
          </div>
          {/* Divider */}
          <div style={{ width: "100%", height: 1, background: "rgba(38,36,33,0.11)" }} />
          {/* Metadata 4-col */}
          <div style={{ display: "flex", gap: 60 }}>
            {([["Role", "Product Designer"], ["Timeline", "8 weeks (2025)"], ["Tools", "Figma"]] as const).map(([l, v]) => (
              <div key={l} style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
                <span style={{ ...CS_LABEL, fontWeight: 300, color: "#a2a2a2", lineHeight: "27px" }}>{l}</span>
                <span style={{ ...CS_BODY, fontWeight: 200, fontSize: 18, lineHeight: "27px", color: "#262421" }}>{v}</span>
              </div>
            ))}
            {/* Team — pill on hover */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1, cursor: "none" }}
              onMouseEnter={(e) => setPorticoTeamPos({ x: e.clientX, y: e.clientY })}
              onMouseMove={(e) => setPorticoTeamPos({ x: e.clientX, y: e.clientY })}
              onMouseLeave={() => setPorticoTeamPos(null)}
            >
              <span style={{ ...CS_LABEL, fontWeight: 300, color: "#a2a2a2", lineHeight: "27px" }}>Team</span>
              <span style={{ ...CS_BODY, fontWeight: 200, fontSize: 18, lineHeight: "27px", color: "#262421" }}>Cross-functional</span>
            </div>
          </div>
          {porticoTeamPos && typeof document !== "undefined" && createPortal(
            <div style={{
              position: "fixed",
              left: porticoPillLeft,
              top: porticoTeamPos.y,
              transform: "translate(-50%, -50%)",
              maxWidth: 320,
              borderRadius: 16,
              background: "#f3f3f3",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px 50px",
              pointerEvents: "none",
              zIndex: 9999,
            }}>
              <span style={{ fontSize: 15, color: "#494949", lineHeight: "119.62%" }}>
                {PORTICO_TEAM_TEXT}<span className="blink-cursor">|</span>
              </span>
            </div>,
            document.body
          )}
          {/* Hero card */}
          <div style={{ background: "white", borderRadius: 23, boxShadow: "0px 4px 24.9px 3px rgba(0,0,0,0.09)", height: 600, overflow: "hidden", position: "relative" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Portico" src="/Design/portico/case-study/hero.png"
              style={{ position: "absolute", left: "50%", top: 122, transform: "translateX(-50%)", width: 377, height: 356, objectFit: "cover", pointerEvents: "none" }} />
          </div>
        </div>

        {/* ─── Overview ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <span style={{ fontSize: 24, lineHeight: "48px", color: "#a2a2a2" }}>Overview</span>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>
            <strong style={{ fontWeight: 400, color: "black" }}>Portico</strong> — formed through the merger of Campus Ivy, CourseKey, and Verity IQ — <Highlight color="pink">inherited a fragmented ecosystem of tools</Highlight>. Career school students were forced to navigate 4 separate web portals and 2 mobile apps to complete basic daily tasks like logging skills, checking attendance, and making payments.
          </p>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>
            This Waay Design Studio was brought in to <strong style={{ fontWeight: 400, color: "black" }}><Highlight color="green">define the north star for a unified student mobile experience, delivering both a long-term vision and tactical design guidance for Q4 execution</Highlight></strong>.
          </p>
        </div>

        {/* ─── Section 1: Fragmented platforms ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 27 }}>
          <ExpandableBlackFrame id="p1" expandedId={expandedFrame} setExpandedId={setExpandedFrame}>
            <div style={{ position: "relative", display: "flex", gap: "3%", alignItems: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/Design/portico/case-study/fragmented-wide.png" style={{ flex: 3, width: 0, display: "block", borderRadius: "1.5%", objectFit: "cover", pointerEvents: "none" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/Design/portico/case-study/fragmented-2.png" style={{ flex: 1, width: 0, display: "block", borderRadius: "1.5%", objectFit: "cover", pointerEvents: "none" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/Design/portico/case-study/fragmented-3.png" style={{ flex: 1, width: 0, display: "block", borderRadius: "1.5%", objectFit: "cover", pointerEvents: "none" }} />
              <span style={{ position: "absolute", top: "calc(100% + 12px)", left: 0, fontSize: 16, fontWeight: 400, color: "rgba(255,255,255,0.45)", whiteSpace: "nowrap" }}>Before</span>
            </div>
          </ExpandableBlackFrame>
          <p style={{ ...CS_BODY, margin: 0 }}>
            <strong style={{ fontWeight: 400, color: "black" }}>Combining multiple platforms creates <Highlight color="pink">fragmented experiences</Highlight>. </strong>
            <span style={{ color: "#5c5b59" }}>Credit-based students had to use one platform and traditional students had to use another. The payments and attendance logging were all separated.</span>
          </p>
        </div>

        {/* ─── Fragmented Language ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <span style={{ fontSize: 24, lineHeight: "48px", color: "#a2a2a2" }}>Fragmented Experience</span>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>
            <strong style={{ fontWeight: 400, color: "black" }}>Portico was built from multiple acquired platforms</strong>{" — meaning students had to "}<Highlight color="pink">navigate different apps to complete basic tasks</Highlight>{" like logging attendance, tracking skills, and making payments."}
          </p>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>
            {"But the fragmentation went deeper than just the number of apps. "}<Highlight color="pink" delay={300}>Each platform had developed its own language and structure for the same underlying concepts</Highlight>{". As shown below, one platform organized skill tracking under a Major Study hierarchy and called the primary input \u201cAmount,\u201d while the other used a Checklist structure and called it \u201cCount\u201d \u2014 two different words for the same thing, in two different systems, that students were expected to use simultaneously."}
          </p>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>
            {"This created a core design challenge: "}<strong style={{ fontWeight: 400, color: "black" }}>before we could unify the experience visually, we had to unify it conceptually.</strong>
          </p>
        </div>

        {/* ─── Language Visual ─── */}
        <PorticoLanguageVisual />

        {/* ─── Section 2: Course listings solution ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          <ExpandableBlackFrame id="p2" expandedId={expandedFrame} setExpandedId={setExpandedFrame}>
            <div style={{ position: "relative", display: "flex", gap: "3%", alignItems: "flex-end" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/Design/portico/case-study/course-listing-1.png" style={{ flex: 1, width: 0, display: "block", borderRadius: "1.5%", objectFit: "cover", pointerEvents: "none" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/Design/portico/case-study/course-listing-2.png" style={{ flex: 1, width: 0, display: "block", borderRadius: "1.5%", objectFit: "cover", pointerEvents: "none" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/Design/portico/case-study/course-listing-3.png" style={{ flex: 1, width: 0, display: "block", borderRadius: "1.5%", objectFit: "cover", pointerEvents: "none" }} />
              <span style={{ position: "absolute", top: "calc(100% + 12px)", left: 0, fontSize: 16, fontWeight: 400, color: "rgba(255,255,255,0.45)", whiteSpace: "nowrap" }}>After</span>
            </div>
          </ExpandableBlackFrame>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>
            <strong style={{ fontWeight: 400, color: "black" }}>The redesigned Courses experience unified attendance, grades, and course progression</strong>{" into a single coherent view, "}<Highlight color="green">so students could understand where they stood in their program without switching between apps.</Highlight>
          </p>
        </div>

        {/* ─── Section 3: Task tracking ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          <ExpandableBlackFrame id="p3" expandedId={expandedFrame} setExpandedId={setExpandedFrame} style={{ display: "flex", gap: "3%", alignItems: "center" }}>
            {/* Image 1 — Before */}
            <div style={{ flex: 1.5, width: 0, position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/Design/portico/case-study/fragmented-wide.png" style={{ width: "100%", display: "block", borderRadius: "1.5%", objectFit: "cover", pointerEvents: "none" }} />
              <span style={{ position: "absolute", top: "calc(100% + 12px)", left: 0, fontSize: 16, fontWeight: 400, color: "rgba(255,255,255,0.45)" }}>Before</span>
            </div>
            {/* Images 2 & 3 — single After label centred below both */}
            <div style={{ flex: 2, width: 0, position: "relative", display: "flex", gap: "5%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/Design/portico/case-study/task-log-1.png" style={{ flex: 1, width: 0, display: "block", borderRadius: "1.5%", objectFit: "cover", pointerEvents: "none" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/Design/portico/case-study/task-log-2.png" style={{ flex: 1, width: 0, display: "block", borderRadius: "1.5%", objectFit: "cover", pointerEvents: "none" }} />
              <span style={{ position: "absolute", top: "calc(100% + 12px)", left: 0, fontSize: 16, fontWeight: 400, color: "rgba(255,255,255,0.45)", whiteSpace: "nowrap" }}>After</span>
            </div>
          </ExpandableBlackFrame>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>
            {"The existing experience required students to log clinical tasks through a "}<Highlight color="pink">desktop-first interface with no mobile consideration</Highlight>{". We "}<Highlight color="green" delay={200}><strong style={{ fontWeight: 400, color: "black" }}>redesigned the task logging flow as a guided mobile experience</strong>{" \u2014 step-by-step inputs, clear progress tracking, and an AI assistant on hand"}</Highlight>{" \u2014 so students could log in the moment, not after the fact."}
          </p>
        </div>

        {/* ─── Section 4: Messages ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          <ExpandableBlackFrame id="p4" expandedId={expandedFrame} setExpandedId={setExpandedFrame} style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: "40%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/Design/portico/case-study/messages.png" style={{ width: "100%", display: "block", borderRadius: "1.5%", objectFit: "cover", pointerEvents: "none" }} />
              <span style={{ position: "absolute", top: "calc(100% + 12px)", left: 0, fontSize: 16, fontWeight: 400, color: "rgba(255,255,255,0.45)", whiteSpace: "nowrap" }}>After</span>
            </div>
          </ExpandableBlackFrame>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>
            <Highlight color="pink">Previously, messages were siloed at the course level</Highlight>{" \u2014 meaning students could miss critical updates from other parts of their program. The unified messaging center "}<Highlight color="green" delay={200}><strong style={{ fontWeight: 400, color: "black" }}>brings together communications from all departments and instructors in one place</strong>, with read status and message type filters to help students prioritize what needs their attention</Highlight>
          </p>
        </div>

        {/* ─── Impact ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <span style={{ fontSize: 24, lineHeight: "48px", color: "#a2a2a2" }}>Impact</span>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>
            {"Students were bouncing between four portals and two apps to do basic things like check grades or log a skill. In 8 weeks, we gave Portico a north star for "}<strong style={{ fontWeight: 400, color: "black" }}>one unified experience</strong>{", plus the tactical design work to start closing the gap this quarter."}
          </p>
        </div>

        {/* ─── Footer ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          <div style={{ width: "100%", height: 1, background: "rgba(38,36,33,0.11)" }} />
          <p style={{ ...CS_BODY, color: "#494949", margin: 0 }}>For more work samples, feel free to contact me at gaeunpark@g.ucla.edu.</p>
        </div>

      </div>
    </div>
  );
}

/* ── Mermory Case Study (Figma export, ported to inline styles) ── */

const CS_BODY: React.CSSProperties = {
  fontWeight: 200,
  fontSize: 20,
  lineHeight: "32px",
};
const CS_LABEL: React.CSSProperties = {
  fontWeight: 400,
  fontSize: 16,
};
const CS_W = 793; // content column width (matches Figma)
const CS_PAD = 40; // horizontal padding of case study outer container

function ExpandableBlackFrame({
  id, expandedId, setExpandedId, style, children,
}: {
  id: string; expandedId: string | null; setExpandedId: (id: string | null) => void;
  style?: React.CSSProperties; children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const expanded = expandedId === id;

  // Track natural (un-expanded) width so we can compute the clamped expansion.
  const natWRef = useRef(0);
  useEffect(() => {
    if (ref.current && !expanded) {
      natWRef.current = ref.current.offsetWidth;
    }
  }); // intentionally no dep-array — runs after every render

  // Track viewport width so expansion re-clamps on resize.
  const [windowW, setWindowW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 9999
  );
  useEffect(() => {
    const handler = () => setWindowW(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Collapse when scrolled out of view.
  useEffect(() => {
    if (!expanded) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (!entry.isIntersecting) setExpandedId(null); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [expanded, setExpandedId]);

  // Collapse on outside click.
  useEffect(() => {
    if (!expanded) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setExpandedId(null);
    };
    const t = setTimeout(() => document.addEventListener("click", handler), 80);
    return () => { clearTimeout(t); document.removeEventListener("click", handler); };
  }, [expanded, setExpandedId]);

  // Expand to full viewport minus the home-screen edge padding (CS_PAD each side).
  const natW = natWRef.current || CS_W;
  const maxExpandedPx = Math.max(natW, windowW - 2 * CS_PAD);
  const expandedWidthPct  = `${(maxExpandedPx / natW) * 100}%`;
  const expandedMLPct     = `-${((maxExpandedPx - natW) / 2 / natW) * 100}%`;

  return (
    <div
      ref={ref}
      onClick={() => {
        if (!expanded) setExpandedId(id);
        else setExpandedId(null);
      }}
      style={{
        background: "black",
        borderRadius: expanded ? 0 : 12,
        padding: "10%",
        width: expanded ? expandedWidthPct : "100%",
        marginLeft: expanded ? expandedMLPct : 0,
        zIndex: expanded ? 50 : 1,
        position: "relative",
        transition: "width 0.45s cubic-bezier(0.25,0.46,0.45,0.94), margin-left 0.45s cubic-bezier(0.25,0.46,0.45,0.94), border-radius 0.45s cubic-bezier(0.25,0.46,0.45,0.94), padding 0.45s cubic-bezier(0.25,0.46,0.45,0.94)",
        cursor: expanded ? "zoom-out" : "zoom-in",
        ...(style || {}),
      }}
    >
      {children}
    </div>
  );
}

const MERMORY_TEAM_TEXT = "3 Designers, 3 Engineers, 1 ML Engineer, 1 Graphic Designer, 1 Animator";

function MermoryCaseStudy() {
  const [expandedFrame, setExpandedFrame] = useState<string | null>(null);
  const [teamPos, setTeamPos] = useState<{ x: number; y: number } | null>(null);
  const mermoryPillLeft = teamPos ? teamPos.x : 0;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 120, paddingBottom: 150, paddingLeft: 40, paddingRight: 40, boxSizing: "border-box" }}>
      <div style={{ width: "100%", maxWidth: CS_W, display: "flex", flexDirection: "column", gap: 110 }}>

        {/* ─── Header ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          {/* Meta row */}
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <span style={{ ...CS_BODY, fontWeight: 200, fontSize: 18, lineHeight: "27px", color: "#a2a2a2", whiteSpace: "nowrap" }}>Product Design</span>
            <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#a2a2a2", flexShrink: 0 }} />
            <span style={{ ...CS_BODY, fontWeight: 200, fontSize: 18, lineHeight: "27px", color: "#a2a2a2", whiteSpace: "nowrap" }}>12 months (2025)</span>
          </div>
          {/* Title + subtitle */}
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            <h1 style={{ fontWeight: 400, fontSize: 64, letterSpacing: "-0.64px", lineHeight: "76.8px", color: "#262421", margin: 0 }}>Mermory</h1>
            <p style={{ ...CS_BODY, fontWeight: 200, fontSize: 24, lineHeight: "36px", color: "#494949", margin: 0, whiteSpace: "nowrap" }}>Where studying gets a creative identity.</p>
          </div>
          {/* Divider */}
          <div style={{ width: "100%", height: 1, background: "rgba(38,36,33,0.11)" }} />
          {/* Metadata 4-col */}
          <div style={{ display: "flex", gap: 60 }}>
            {([["Role", "Product Designer"], ["Timeline", "12 months (2025)"], ["Tools", "Figma"]] as const).map(([l, v]) => (
              <div key={l} style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
                <span style={{ ...CS_LABEL, fontWeight: 300, color: "#a2a2a2", lineHeight: "27px", whiteSpace: "nowrap" }}>{l}</span>
                <span style={{ ...CS_BODY, fontWeight: 200, fontSize: 18, lineHeight: "27px", color: "#262421" }}>{v}</span>
              </div>
            ))}
            {/* Team — pill on hover, full text + blinking cursor only */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1, cursor: "none" }}
              onMouseEnter={(e) => setTeamPos({ x: e.clientX, y: e.clientY })}
              onMouseMove={(e) => setTeamPos({ x: e.clientX, y: e.clientY })}
              onMouseLeave={() => setTeamPos(null)}
            >
              <span style={{ ...CS_LABEL, fontWeight: 300, color: "#a2a2a2", lineHeight: "27px", whiteSpace: "nowrap" }}>Team</span>
              <span style={{ ...CS_BODY, fontWeight: 200, fontSize: 18, lineHeight: "27px", color: "#262421" }}>Design, Engineering & ML</span>
            </div>
          </div>
          {teamPos && typeof document !== "undefined" && createPortal(
            <div style={{
              position: "fixed",
              left: mermoryPillLeft,
              top: teamPos.y,
              transform: "translate(-50%, -50%)",
              maxWidth: 320,
              borderRadius: 16,
              background: "#f3f3f3",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px 50px",
              pointerEvents: "none",
              zIndex: 9999,
            }}>
              <span style={{ fontSize: 15, color: "#494949", lineHeight: "119.62%" }}>
                {MERMORY_TEAM_TEXT}<span className="blink-cursor">|</span>
              </span>
            </div>,
            document.body
          )}
          {/* Hero card */}
          <div style={{ background: "white", borderRadius: 23, boxShadow: "0px 4px 24.9px 3px rgba(0,0,0,0.09)", height: 600, overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: 0, top: 71, width: 974, height: 609 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Mermory laptop mockup" src="/Design/mermory/case-study/laptopmockv2.png" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
            </div>
          </div>
        </div>

        {/* ─── Overview ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <span style={{ fontSize: 24, lineHeight: "48px", color: "#a2a2a2" }}>Overview</span>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>
            As <strong style={{ fontWeight: 400, color: "black" }}>one of 3 product designers</strong> of Mermory, I got to design an <Highlight color="green">AI-powered flashcard platform that gave students creative autonomy over how they study.</Highlight> Unlike Quizlet or Anki, Mermory let users personalize their cards with stickers, themes, and design elements through a Creator Studio—while maintaining industry-standard learning science through FSRS spaced repetition.
          </p>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>With the nature of the team size, I got to work on lots of different projects as you can see below:</p>
        </div>

        {/* ─── Section 1: Create menu ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 27 }}>
          <ExpandableBlackFrame id="s1" expandedId={expandedFrame} setExpandedId={setExpandedFrame}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src="/Design/mermory/case-study/importflow.png" style={{ width: "100%", display: "block", borderRadius: "1.5%", pointerEvents: "none" }} />
          </ExpandableBlackFrame>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>
            <strong style={{ fontWeight: 400, color: "black" }}>I designed & shipped the &ldquo;Create&rdquo; menu pop up. </strong>
            Users <Highlight color="green">needed a clear starting point for building flashcard decks.</Highlight> The modal gives them three distinct paths — Creative Mode, Quick-Add, or Upload — so they can choose the workflow that fits how they work.
          </p>
        </div>

        {/* ─── Section 2: Explore banners ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          <ExpandableBlackFrame id="s2" expandedId={expandedFrame} setExpandedId={setExpandedFrame} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src="/Design/mermory/case-study/explore.png" style={{ width: "100%", display: "block", borderRadius: "1.5%", pointerEvents: "none" }} />
            <div style={{ display: "flex", gap: 20 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/Design/mermory/case-study/inviteFriends1.png" style={{ flex: 1, width: 0, display: "block", borderRadius: "1.5%", pointerEvents: "none" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/Design/mermory/case-study/inviteFriends2.png" style={{ flex: 1, width: 0, display: "block", borderRadius: "1.5%", pointerEvents: "none" }} />
            </div>
          </ExpandableBlackFrame>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>
            <strong style={{ fontWeight: 400, color: "black" }}>I designed the promotional banners for the Explore page. </strong>
            The banners surface Mermory&rsquo;s latest features like Import AI, Creator Studio, and social invites, giving users a reason to discover more every time they browse.
          </p>
        </div>

        {/* ─── Section 3: Creator Studio exit flow ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          <ExpandableBlackFrame id="s3" expandedId={expandedFrame} setExpandedId={setExpandedFrame}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src="/Design/mermory/case-study/creatorStudioExitFlow.png" style={{ width: "100%", display: "block", borderRadius: "1.5%", pointerEvents: "none" }} />
          </ExpandableBlackFrame>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>
            <strong style={{ fontWeight: 400, color: "black" }}>I designed the flow to exit out of the Creator Studio. </strong>
            After publishing a deck, users are celebrated with a congrats moment and guided toward their next step, either heading to their Library or jumping straight into studying.
          </p>
        </div>

        {/* ─── Section 4: Marketing page ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          <ExpandableBlackFrame id="s4" expandedId={expandedFrame} setExpandedId={setExpandedFrame} style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <div style={{ flex: 1, width: 0, position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/Design/mermory/case-study/marketingPageBefore.png" style={{ width: "100%", display: "block", borderRadius: "1.5%", objectFit: "cover", pointerEvents: "none" }} />
              <span style={{ position: "absolute", top: "calc(100% + 12px)", left: 0, fontSize: 16, fontWeight: 400, color: "rgba(255,255,255,0.45)", whiteSpace: "nowrap" }}>Before</span>
            </div>
            <div style={{ flex: 1, width: 0, position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/Design/mermory/case-study/marketingPageAfter.png" style={{ width: "100%", display: "block", borderRadius: "1.5%", pointerEvents: "none" }} />
              <span style={{ position: "absolute", top: "calc(100% + 12px)", left: 0, fontSize: 16, fontWeight: 400, color: "rgba(255,255,255,0.45)", whiteSpace: "nowrap" }}>After</span>
            </div>
          </ExpandableBlackFrame>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>
            <strong style={{ fontWeight: 400, color: "black" }}>I redesigned the hero section of the landing page. </strong>
            <Highlight color="green">Shifting from a vertical to a horizontal layout gave the section more visual balance,</Highlight> letting the product preview and the headline share the stage and make a stronger first impression.
          </p>
        </div>

        {/* ─── Design Language ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <span style={{ fontSize: 24, lineHeight: "48px", color: "#a2a2a2" }}>Design Language</span>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>My vision for Mermory was to support users' creative autonomy. The design language was built around warmth and comfort, a space where creativity could thrive.</p>
        </div>

        {/* ─── Design collage ─── */}
        <ExpandableBlackFrame id="s5" expandedId={expandedFrame} setExpandedId={setExpandedFrame}>
          {/* aspect-ratio container: 748/780 = 95.9% */}
          <div style={{ position: "relative", width: "100%", paddingTop: "95.9%" }}>
            <div style={{ position: "absolute", left: "3.27%", top: "8.05%", width: "31.28%", height: "40.64%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/Design/mermory/case-study/group427319104.png" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }} />
            </div>
            <div style={{ position: "absolute", left: "37.37%", top: "3.37%", width: "59.36%", height: "29.14%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/Design/mermory/case-study/importContainer.png" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }} />
            </div>
            <div style={{ position: "absolute", left: "37.88%", top: "36.26%", width: "58.85%", height: "37.43%", borderRadius: 18, overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/Design/mermory/case-study/justKmeepStudying.png" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }} />
            </div>
            <div style={{ position: "absolute", left: "37.88%", top: "77.43%", width: "58.85%", height: "18.32%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/Design/mermory/case-study/inviteFriends1_collage.png" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }} />
            </div>
            <div style={{ position: "absolute", left: "3.27%", top: "54.57%", width: "31.67%", height: "32.09%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/Design/mermory/case-study/createFNew.png" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }} />
            </div>
          </div>
        </ExpandableBlackFrame>

        {/* ─── Footer ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          <div style={{ width: "100%", height: 1, background: "rgba(38,36,33,0.11)" }} />
          <p style={{ ...CS_BODY, color: "#494949", margin: 0 }}>For more work samples, feel free to contact me at gaeunpark@g.ucla.edu.</p>
        </div>

      </div>
    </div>
  );
}

/* ── Bottom Sheet ── */

type SheetSnap = "partial" | "full";

// Transition string used both in the style prop and restored after drag
const SHEET_TRANSITION =
  "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), border-radius 0.35s ease";

function BottomSheet({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const [snap, setSnap] = useState<SheetSnap>("partial");
  const sheetRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const [delayedChildren, setDelayedChildren] = useState<React.ReactNode>(null);

  useEffect(() => {
    if (open) {
      setDelayedChildren(children);
    } else {
      // Allow CSS unmount translation to complete before dropping the layout nodes, automatically resetting scroll depths next mount
      const timer = setTimeout(() => {
        setDelayedChildren(null);
      }, 450);
      return () => clearTimeout(timer);
    }
  }, [open, children]);

  // Reset to partial each time the sheet opens
  useEffect(() => {
    if (open) setSnap("partial");
  }, [open]);

  // Pointerdown-outside to close
  useEffect(() => {
    if (!open) return;
    const handler = (e: PointerEvent) => {
      if (sheetRef.current && !sheetRef.current.contains(e.target as Node)) {
        onCloseRef.current();
      }
    };
    // Delay so the opening click that fired this effect doesn't immediately close the sheet
    const timer = setTimeout(() => document.addEventListener("pointerdown", handler), 150);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("pointerdown", handler);
    };
  }, [open]);

  const startDrag = (startClientY: number) => {
    const sheet = sheetRef.current;
    if (!sheet) return;

    const startH = sheet.getBoundingClientRect().height;
    let hasMoved = false;
    let lastDelta = 0;

    // Kill CSS transition so height tracks the finger immediately
    sheet.style.transition = "none";

    const onMove = (e: MouseEvent | TouchEvent) => {
      const currentY =
        "touches" in e
          ? (e as TouchEvent).touches[0].clientY
          : (e as MouseEvent).clientY;
      const delta = startClientY - currentY; // positive = pulled up
      lastDelta = delta;
      if (Math.abs(delta) > 4) hasMoved = true;
      const newH = Math.max(0, Math.min(window.innerHeight, startH + delta));
      sheet.style.height = `${newH}px`;
    };

    const onUp = (e: MouseEvent | TouchEvent) => {
      // Only snap/close if the user actually dragged; plain clicks do nothing
      if (hasMoved) {
        // Prevent the mouseup from being treated as a click by the click-outside handler
        e.stopPropagation();
        if (lastDelta > 0) {
          // Clear inline height, explicitly restore transition so snap animates
          sheet.style.height = "";
          sheet.style.transition = SHEET_TRANSITION;
          setSnap("full");
        } else {
          // Pulled down -> Closing! Keep height frozen during drop to prevent scroll explosions
          sheet.style.transition = "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
          onCloseRef.current();
          setTimeout(() => { if (sheetRef.current) sheetRef.current.style.height = ""; }, 450);
        }
      } else {
        // If they didn't drag, it was just a tap. Toggle the snap state.
        sheet.style.height = "";
        sheet.style.transition = SHEET_TRANSITION;
        setSnap(s => s === "full" ? "partial" : "full");
      }

      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp as EventListener);
      document.removeEventListener("touchmove", onMove as EventListener);
      document.removeEventListener("touchend", onUp as EventListener);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp as EventListener);
    document.addEventListener("touchmove", onMove as EventListener, { passive: false });
    document.addEventListener("touchend", onUp as EventListener);
  };

  return (
    <>
      {/* Dim overlay — blocks clicks to content behind when sheet is open */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          background: open ? "rgba(0,0,0,0.4)" : "transparent",
          pointerEvents: open ? "auto" : "none",
          transition: "background 0.4s ease",
        }}
      />
      {/* Sheet */}
      <div
        ref={sheetRef}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: snap === "full" ? "100vh" : "78vh",
          background: "#FFFFFF",
          borderRadius: snap === "full" ? 0 : "20px 20px 0 0",
          zIndex: 201,
          transform: open ? "translateY(0)" : "translateY(105%)",
          transition: SHEET_TRANSITION,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 -4px 40px rgba(0,0,0,0.1)",
        }}
      >
        {/* Drag handle — click toggles partial/full, drag adjusts freely */}
        <div
          onMouseDown={(e) => { e.preventDefault(); startDrag(e.clientY); }}
          onTouchStart={(e) => startDrag(e.touches[0].clientY)}
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 44,
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          <div style={{ width: 36, height: 4, borderRadius: 2, background: "rgba(0,0,0,0.15)" }} />
        </div>
        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>
          {open ? children : delayedChildren}
        </div>
      </div>
    </>
  );
}

/* ── Peek Panel ── */

function PeekPanel({
  open, onClose, section, openProject, setOpenProject, panelLeft,
}: {
  open: boolean;
  onClose: () => void;
  section: Section;
  openProject: string | null;
  setOpenProject: (p: string | null) => void;
  panelLeft: number;
}) {
  const sectionLabel =
    section === "design" ? "Product Design"
    : section === "storytelling" ? "Storytelling"
    : "Art";

  const projectLabel = openProject
    ? designProjects.find((p) => p.key === openProject)?.name ?? ""
    : null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 90,
          pointerEvents: open ? "auto" : "none",
          background: open ? "rgba(38,36,33,0.18)" : "transparent",
          transition: "background 0.45s ease",
        }}
      />
      {/* Panel */}
      <div
        style={{
          position: "fixed",
          top: 0, right: 0, left: panelLeft,
          height: "100vh",
          background: "#FFFFFF",
          boxShadow: "-24px 0 80px rgba(0,0,0,0.18)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          zIndex: 100,
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, paddingLeft: 24, paddingTop: 53, paddingBottom: 12 }}>
          <span style={{ fontSize: 17, color: "rgba(38,36,33,0.4)" }}>/</span>
          {projectLabel ? (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); setOpenProject(null); }}
                style={{ fontSize: 17, fontWeight: 400, color: "rgba(38,36,33,0.4)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
              >
                {sectionLabel}
              </button>
              <span style={{ fontSize: 17, color: "rgba(38,36,33,0.4)" }}>/</span>
              <span style={{ fontSize: 17, fontWeight: 400, color: "#262421" }}>{projectLabel}</span>
            </>
          ) : (
            <span style={{ fontSize: 17, fontWeight: 400, color: "#262421" }}>{sectionLabel}</span>
          )}
        </div>

        {/* Content */}
        <div style={{ paddingLeft: 48, paddingRight: 48, paddingTop: 80, display: "flex", flexDirection: "column", alignItems: "center" }}>

          {/* Case study view */}
          {openProject === "mermory" && <MermoryContent />}
          {openProject === "jams"    && <JamsContent />}
          {openProject === "portico" && <PorticoCaseStudy />}

          {/* Section: Design grid */}
          {!openProject && section === "design" && (
            <div style={{ width: "100%" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "50px 50px" }}>
                {designProjects.map(({ key, name, tags }) => (
                  <div key={name} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div
                      onClick={(e) => { e.stopPropagation(); setOpenProject(key); }}
                      style={{ cursor: "pointer" }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={key === "mermory" ? "/Design/mermory/poster.png" : key === "jams" ? "/Design/jams/poster.png" : "/Design/portico/thumbnails.png"}
                        alt={name}
                        className="thumbnail"
                        style={{ width: "100%", aspectRatio: "470 / 644", objectFit: "cover", borderRadius: 20, display: "block", boxShadow: "0px 4px 38.3px 0px rgba(0,0,0,0.28)" }}
                      />
                    </div>
                    <p style={{ margin: 0, fontSize: 14, color: "rgba(38,36,33,0.55)", lineHeight: 1.5 }}>
                      <span style={{ color: "#262421" }}>{name}</span>{" · "}{tags}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Storytelling */}
          {!openProject && section === "storytelling" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {["Instagram", "TikTok", "Youtube"].map((p) => (
                <span key={p} style={{ fontSize: 18, color: "rgba(38,36,33,0.55)", cursor: "pointer" }}>{p}</span>
              ))}
            </div>
          )}

          {/* Section: Art */}
          {!openProject && section === "art" && (
            <div style={{ width: "100%", columnCount: 2, columnGap: 24 }}>
              {artPieces.map(({ src, title, year, medium }) => (
                <div key={src} style={{ breakInside: "avoid", marginBottom: 24 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={title}
                    style={{ width: "100%", display: "block", borderRadius: 16, boxShadow: "0px 4px 20px rgba(0,0,0,0.14)" }}
                  />
                  <p style={{ margin: "8px 0 0 4px", fontSize: 13, color: "rgba(38,36,33,0.55)" }}>
                    <span style={{ color: "#262421" }}>{title}</span>{" · "}{year} · {medium}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

/* ── Page ── */

const DESIGN_WIDTH = 1723;        // 2-col: 1443px cards + 2×140px padding
const MOBILE_DESIGN_WIDTH = 757;  // 1-col: 677px card + 2×40px padding
const MOBILE_BREAKPOINT = 768;

export default function Home() {
  const [openSection, setOpenSection] = useState<Section>(null);
  const [openSheet, setOpenSheet] = useState<string | null>(null);
  const navLogoRef = useRef<HTMLSpanElement>(null);
  const [panelLeft, setPanelLeft] = useState(210);
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = (width: number) => {
      const mob = width < MOBILE_BREAKPOINT;
      setIsMobile(mob);
      // Mobile: scale single column (757px design). Desktop: scale card grid (1723px total with padding)
      setScale(Math.min(1, width / (mob ? MOBILE_DESIGN_WIDTH : DESIGN_WIDTH)));
      if (navLogoRef.current) {
        const rect = navLogoRef.current.getBoundingClientRect();
        setPanelLeft(rect.right + 20);
      }
    };
    const ro = new ResizeObserver(entries => update(entries[0].contentRect.width));
    if (mainRef.current) ro.observe(mainRef.current);
    return () => ro.disconnect();
  }, []);

  const openDesignProject = (key: string) => {
    setOpenSheet(key);
    window.history.pushState(null, "", `/${key}`);
  };

  // Sync URL → sheet state (handles direct links + back/forward)
  useEffect(() => {
    const slug = window.location.pathname.replace("/", "");
    if (slug === "mermory" || slug === "portico") {
      setOpenSheet(slug);
    }
    const onPop = () => {
      const s = window.location.pathname.replace("/", "");
      setOpenSheet(s === "mermory" || s === "portico" ? s : null);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const isSafari = typeof navigator !== "undefined" && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  const identitySection = (
    <div style={{ paddingTop: 150, paddingBottom: 150 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div style={{ width: "100%", height: 161, position: "relative", textAlign: "center", fontSize: 32, color: "#494949" }}>
        {/* Haven Park */}
        <span ref={navLogoRef} style={{ position: "absolute", top: 0, left: 206, fontWeight: 500, color: "black" }}>Haven Park</span>
        {/* Identity labels */}
        <div style={{ position: "absolute", top: 54, left: 206, width: 307, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 6, textAlign: "left", fontSize: 17, color: "#4a70bc", fontWeight: 300 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ position: "relative", lineHeight: "119.62%", display: "inline-block", flexShrink: 0 }}>Currently designing Folio</div>
            <LoadingSpinner />
          </div>
          <div style={{ width: 303, display: "flex", alignItems: "center", color: "#808080" }}>
            <div style={{ width: 307, position: "relative", lineHeight: "119.62%", display: "inline-block", flexShrink: 0 }}>{`Previously @ EdTech & Enterprise`}</div>
          </div>
        </div>
        {/* Profile image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/logmo2.png" style={{ position: "absolute", top: 0, left: 0, width: 158, height: 161, objectFit: "cover", filter: "grayscale(100%)", borderRadius: "50%" }} />
        {/* Social icons group */}
        <div style={{ position: "absolute", top: 132, left: 206, display: "flex", alignItems: "center", gap: 12 }}>
          {[
            { src: "/email_icon.svg", w: 27, h: 24, href: "mailto:gaeunpark@g.ucla.edu" },
            { src: "/mdi_instagram.svg", w: 24, h: 24, href: "https://instagram.com/hvnpark" },
            { src: "/uil_linkedin.svg", w: 24, h: 24, href: "https://www.linkedin.com/in/havenpark/" },
          ].map(({ src, w, h, href }) => (
            <SocialIcon key={src} src={src} w={w} h={h} href={href} />
          ))}
        </div>
        {/* Separator */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/separator.svg" style={{ position: "absolute", top: 0, left: 182, width: 1, height: 157, objectFit: "contain" }} />
      </div>
    </div>
  );

  return (
    <main ref={mainRef} style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      {isMobile ? (
        /* ── Mobile: single column, stacked ── */
        <div style={{ width: MOBILE_DESIGN_WIDTH, margin: "0 auto", zoom: scale, paddingLeft: 40, paddingRight: 40, boxSizing: "border-box" }}>
          {identitySection}
          <div style={{ display: "flex", flexDirection: "column", gap: 67, paddingTop: 30, marginTop: -30, paddingLeft: 30, marginLeft: -30, paddingRight: 30, marginRight: -30, paddingBottom: 150 }}>
            <PlaceholderCard scale={scale} />
            <div className="card-wrap"><MermoryCard onClick={() => openDesignProject("mermory")} /></div>
            <div className="card-wrap"><JamsCard onClick={() => openDesignProject("jams")} /></div>
            <div className="card-wrap"><PorticoCard onClick={() => openDesignProject("portico")} /></div>
          </div>
        </div>
      ) : (
        /* ── Desktop: identity unzoomed (fonts fixed), cards zoomed ── */
        <>
          {/* Identity — outside zoom so fonts stay full size; padding tracks card position */}
          <div style={{ paddingLeft: "min(140px, 8.13vw)", paddingRight: "min(140px, 8.13vw)", maxWidth: DESIGN_WIDTH, margin: "0 auto", boxSizing: "border-box" }}>
            {identitySection}
          </div>

          {/* Card grid — zoomed to scale proportionally */}
          <div style={{ width: 1443, margin: "0 auto", zoom: scale }}>
          <div style={{ paddingBottom: 150, paddingTop: 30, marginTop: -30, paddingLeft: 30, marginLeft: -30, paddingRight: 30, marginRight: -30 }}>
            <div style={{ display: "flex", gap: 89, width: "fit-content" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 67 }}>
                <PlaceholderCard scale={scale} />
                <div className="card-wrap"><JamsCard onClick={() => openDesignProject("jams")} /></div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 67 }}>
                <div className="card-wrap"><MermoryCard onClick={() => openDesignProject("mermory")} /></div>
                <div className="card-wrap"><PorticoCard onClick={() => openDesignProject("portico")} /></div>
              </div>
            </div>
          </div>
          </div>{/* end zoom wrapper */}
        </>
      )}

      {/* Peek Panel — kept for section browsing (art / storytelling) */}
      <PeekPanel
        open={openSection !== null}
        onClose={() => { setOpenSection(null); setOpenProject(null); }}
        section={openSection}
        openProject={openProject}
        setOpenProject={setOpenProject}
        panelLeft={panelLeft}
      />

      {/* Bottom Sheet — slides up from bottom when a project card is clicked */}
      <BottomSheet open={openSheet !== null} onClose={() => { setOpenSheet(null); window.history.pushState(null, "", "/"); }}>
        {openSheet === "mermory" && <MermoryCaseStudy />}
        {openSheet === "jams"    && <JamsContent />}
        {openSheet === "portico" && <PorticoCaseStudy />}
      </BottomSheet>
    </main>
  );
}
