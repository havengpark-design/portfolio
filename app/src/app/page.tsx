"use client";

import { useState, useRef, useEffect } from "react";

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
      <span style={{ fontFamily: "'SF Pro Display', sans-serif", fontSize: 17, color, lineHeight: 1.196, whiteSpace: "nowrap" }}>
        {label}
      </span>
    </div>
  );
}

/* ── Project cards ── */

const CARD_SHADOW = "0px 4px 20.4px 3px rgba(0,0,0,0.06)";

const PILL_TEXT = "Something beautiful is in making...";
const OUTER_ZONE = 0.75; // inner 75% = safe, outer 25% = reactive

function PlaceholderCard() {
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
          left: viewportPos.x,
          top: viewportPos.y,
          transform: "translate(-50%, -50%)",
          width: 315,
          height: 97,
          borderRadius: 16,
          background: "#f3f3f3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 9999,
        }}>
          <span style={{ fontSize: 15, color: "#494949", fontFamily: "'SF Pro Display', sans-serif", lineHeight: "119.62%" }}>
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
          left: 112,
          top: 198,
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
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
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
        src="/Design/portico/porticovisual.png"
        alt="Portico"
        style={{
          position: "absolute",
          left: -101,
          top: 396,
          width: 624,
          height: 590,
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
  return (
    <div style={{ maxWidth: 800, paddingBottom: 80 }}>
      <p style={{ fontSize: 13, color: "rgba(38,36,33,0.4)", marginBottom: 18 }}>Product Design · Enterprise Platform</p>
      <h1 style={{ fontSize: 64, fontWeight: 700, color: "#262421", letterSpacing: "-2px", lineHeight: 1, marginBottom: 14 }}>Jams</h1>
      <p style={{ fontSize: 18, color: "rgba(38,36,33,0.5)", marginBottom: 40 }}>Enterprise job automation platform</p>
      <div style={{ background: "#F0EEE8", borderRadius: 20, padding: "32px 48px", marginBottom: 48 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/Design/jams/poster.png" alt="Jams mockup" style={{ width: "100%", borderRadius: 10, display: "block" }} />
      </div>
    </div>
  );
}

function PorticoContent() {
  return (
    <div style={{ maxWidth: 800, paddingBottom: 80 }}>
      <p style={{ fontSize: 13, color: "rgba(38,36,33,0.4)", marginBottom: 18 }}>Product Design · Career Platform</p>
      <h1 style={{ fontSize: 64, fontWeight: 700, color: "#262421", letterSpacing: "-2px", lineHeight: 1, marginBottom: 14 }}>Portico</h1>
      <p style={{ fontSize: 18, color: "rgba(38,36,33,0.5)", marginBottom: 40 }}>Career platform</p>
      <div style={{ background: "#F0EEE8", borderRadius: 20, padding: "32px 48px", marginBottom: 48 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/Design/portico/thumbnails.png" alt="Portico mockup" style={{ width: "100%", borderRadius: 10, display: "block" }} />
      </div>
    </div>
  );
}

/* ── Mermory Case Study (Figma export, ported to inline styles) ── */

const CS_BODY: React.CSSProperties = {
  fontFamily: "-apple-system, 'SF Pro Rounded', sans-serif",
  fontWeight: 300,
  fontSize: 20,
  lineHeight: "32px",
};
const CS_LABEL: React.CSSProperties = {
  fontFamily: "-apple-system, 'SF Pro Display', sans-serif",
  fontWeight: 400,
  fontSize: 16,
};
const CS_W = 793; // content column width (matches Figma)

function MermoryCaseStudy() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 120, paddingBottom: 150, paddingLeft: 40, paddingRight: 40, boxSizing: "border-box" }}>
      <div style={{ width: "100%", maxWidth: CS_W, display: "flex", flexDirection: "column", gap: 110 }}>

        {/* ─── Header ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          {/* Meta row */}
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <span style={{ ...CS_BODY, fontSize: 18, lineHeight: "27px", color: "#a2a2a2", whiteSpace: "nowrap" }}>Product Design</span>
            <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#a2a2a2", flexShrink: 0 }} />
            <span style={{ ...CS_BODY, fontSize: 18, lineHeight: "27px", color: "#a2a2a2", whiteSpace: "nowrap" }}>12 months (2025)</span>
          </div>
          {/* Title + subtitle */}
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            <h1 style={{ fontFamily: "-apple-system, 'SF Pro', sans-serif", fontWeight: 590, fontSize: 64, letterSpacing: "-0.64px", lineHeight: "76.8px", color: "#262421", margin: 0 }}>Mermory</h1>
            <p style={{ ...CS_BODY, fontSize: 24, lineHeight: "36px", color: "#494949", margin: 0, whiteSpace: "nowrap" }}>Flashcards made for creativity.</p>
          </div>
          {/* Divider */}
          <div style={{ width: "100%", height: 1, background: "rgba(38,36,33,0.11)" }} />
          {/* Metadata 4-col */}
          <div style={{ display: "flex", gap: 60 }}>
            {([["Role", "Product Designer"], ["Timeline", "12 months (2025)"], ["Tools", "Figma"], ["Team", "Designers & Engineers"]] as const).map(([l, v]) => (
              <div key={l} style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
                <span style={{ ...CS_LABEL, color: "#a2a2a2", lineHeight: "27px", whiteSpace: "nowrap" }}>{l}</span>
                <span style={{ ...CS_BODY, fontSize: 18, lineHeight: "27px", color: "#262421" }}>{v}</span>
              </div>
            ))}
          </div>
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
          <span style={{ fontFamily: "-apple-system, 'SF Pro Display', sans-serif", fontSize: 24, lineHeight: "48px", color: "#a2a2a2" }}>Overview</span>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>
            As<strong style={{ fontWeight: 500 }}> one of 3 product designers</strong> of Mermory, I got to design an AI-powered flashcard platform that gave students creative autonomy over how they study. Unlike Quizlet or Anki, Mermory let users personalize their cards with stickers, themes, and design elements through a Creator Studio—while maintaining industry-standard learning science through FSRS spaced repetition.
          </p>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>With the nature of the team size, I got to work on lots of different projects as you can see below:</p>
        </div>

        {/* ─── Section 1: Create menu ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 27 }}>
          <div style={{ background: "black", borderRadius: 12, padding: "10%" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src="/Design/mermory/case-study/importflow.png" style={{ width: "100%", display: "block", borderRadius: 18, pointerEvents: "none" }} />
          </div>
          <p style={{ ...CS_BODY, margin: 0 }}>
            <strong style={{ fontWeight: 500, color: "black" }}>I designed & shipped the "Create" menu pop up. </strong>
            <span style={{ color: "#5c5b59" }}>The users can start building their flashcards using the Creator Studio, add terms & definitions, or import a file. </span>
          </p>
        </div>

        {/* ─── Section 2: Explore banners ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          <div style={{ background: "black", borderRadius: 12, padding: "10%", display: "flex", flexDirection: "column", gap: 20 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src="/Design/mermory/case-study/explore.png" style={{ width: "100%", display: "block", borderRadius: 16, pointerEvents: "none" }} />
            <div style={{ display: "flex", gap: 20 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/Design/mermory/case-study/inviteFriends1.png" style={{ flex: 1, width: 0, display: "block", borderRadius: 7, pointerEvents: "none" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/Design/mermory/case-study/inviteFriends2.png" style={{ flex: 1, width: 0, display: "block", borderRadius: 7, pointerEvents: "none" }} />
            </div>
          </div>
          <p style={{ ...CS_BODY, margin: 0 }}>
            <strong style={{ fontWeight: 500, color: "black" }}>I designed the promotional banners for the explore page. </strong>
            <span style={{ color: "#5c5b59" }}>The banners served to market Mermory's latest features.</span>
          </p>
        </div>

        {/* ─── Section 3: Creator Studio exit flow ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          <div style={{ background: "black", borderRadius: 12, padding: "10%" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src="/Design/mermory/case-study/creatorStudioExitFlow.png" style={{ width: "100%", display: "block", borderRadius: 25, pointerEvents: "none" }} />
          </div>
          <p style={{ ...CS_BODY, margin: 0 }}>
            <strong style={{ fontWeight: 500, color: "black" }}>I designed the flow to exit out of the Creator Studio. </strong>
            <span style={{ color: "#5c5b59" }}>The users have the choice to either go to the Library or start learning the flashcard they made.</span>
          </p>
        </div>

        {/* ─── Section 4: Marketing page ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          <div style={{ background: "black", borderRadius: 12, padding: "10%", display: "flex", gap: 20, alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src="/Design/mermory/case-study/marketingPageBefore.png" style={{ flex: 1, width: 0, display: "block", borderRadius: 14, objectFit: "cover", pointerEvents: "none" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src="/Design/mermory/case-study/marketingPageAfter.png" style={{ flex: 1, width: 0, display: "block", borderRadius: 15, pointerEvents: "none" }} />
          </div>
          <p style={{ ...CS_BODY, fontWeight: 500, color: "black", margin: 0 }}>I redesigned the hero section of the landing page to be in horizontal alignment than vertical.</p>
        </div>

        {/* ─── Design Language ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <span style={{ fontFamily: "-apple-system, 'SF Pro Display', sans-serif", fontSize: 24, lineHeight: "48px", color: "#494949" }}>Design Language:</span>
          <p style={{ ...CS_BODY, color: "rgba(38,36,33,0.75)", margin: 0 }}>My vision for Mermory was to support users' creative autonomy. The design language was built around warmth and comfort, a space where creativity could thrive.</p>
        </div>

        {/* ─── Design collage ─── */}
        <div style={{ width: 780, height: 748, position: "relative", flexShrink: 0, alignSelf: "center" }}>
          <div style={{ position: "absolute", background: "black", borderRadius: 29, inset: 0 }} />
          <div style={{ position: "absolute", left: 25.5, top: 60.2, width: 244, height: 304 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src="/Design/mermory/case-study/group427319104.png" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
          </div>
          <div style={{ position: "absolute", left: 291.5, top: 25.2, width: 463, height: 218 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src="/Design/mermory/case-study/importContainer.png" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
          </div>
          <div style={{ position: "absolute", left: 295.5, top: 271.2, width: 459, height: 280, borderRadius: 18, overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src="/Design/mermory/case-study/justKmeepStudying.png" style={{ position: "absolute", height: "100%", left: "-0.1%", top: 0, width: "100.2%", maxWidth: "none", pointerEvents: "none" }} />
          </div>
          <div style={{ position: "absolute", left: 295.5, top: 579.2, width: 459, height: 137 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src="/Design/mermory/case-study/inviteFriends1.png" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
          </div>
          <div style={{ position: "absolute", left: 25.5, top: 408.2, width: 247, height: 240 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src="/Design/mermory/case-study/createFNew.png" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
          </div>
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

  // Reset to partial each time the sheet opens
  useEffect(() => {
    if (open) setSnap("partial");
  }, [open]);

  // Click-outside to close (pointer-events: none on dim overlay lets clicks reach the page,
  // so we detect outside clicks via document listener)
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (sheetRef.current && !sheetRef.current.contains(e.target as Node)) {
        onCloseRef.current();
      }
    };
    // Delay so the opening click that fired this effect doesn't immediately close the sheet
    const timer = setTimeout(() => document.addEventListener("click", handler), 80);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handler);
    };
  }, [open]);

  // Live drag — no React state during drag (avoids re-render fights with direct DOM writes)
  const startDrag = (startClientY: number) => {
    const sheet = sheetRef.current;
    if (!sheet) return;

    const startH = sheet.getBoundingClientRect().height;
    let hasMoved = false;

    // Kill CSS transition so height tracks the finger immediately
    sheet.style.transition = "none";

    const onMove = (e: MouseEvent | TouchEvent) => {
      const currentY =
        "touches" in e
          ? (e as TouchEvent).touches[0].clientY
          : (e as MouseEvent).clientY;
      const delta = startClientY - currentY; // positive = pulled up
      if (Math.abs(delta) > 4) hasMoved = true;
      const newH = Math.max(0, Math.min(window.innerHeight, startH + delta));
      sheet.style.height = `${newH}px`;
    };

    const onUp = () => {
      const finalH = sheet.getBoundingClientRect().height;
      const frac = finalH / window.innerHeight;

      // Clear inline height, explicitly restore transition so snap animates
      sheet.style.height = "";
      sheet.style.transition = SHEET_TRANSITION;

      // Only snap/close if the user actually dragged; plain clicks do nothing
      if (hasMoved) {
        if (frac > 0.89)      setSnap("full");
        else if (frac > 0.35) setSnap("partial");
        else                  onCloseRef.current();
      }

      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("touchmove", onMove as EventListener);
      document.removeEventListener("touchend", onUp);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("touchmove", onMove as EventListener, { passive: false });
    document.addEventListener("touchend", onUp);
  };

  return (
    <>
      {/* Dim overlay — pointer-events: none so the page underneath stays scrollable */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          background: open ? "rgba(0,0,0,0.4)" : "transparent",
          pointerEvents: "none",
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
        {/* Drag handle */}
        <div
          onMouseDown={(e) => { e.preventDefault(); startDrag(e.clientY); }}
          onTouchStart={(e) => startDrag(e.touches[0].clientY)}
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 44,
            cursor: "grab",
            userSelect: "none",
          }}
        >
          <div style={{ width: 36, height: 4, borderRadius: 2, background: "rgba(0,0,0,0.15)" }} />
        </div>
        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>
          {children}
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
          {openProject === "portico" && <PorticoContent />}

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
  };

  const identitySection = (
    <div style={{ paddingTop: 60, paddingBottom: 48 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.png" alt="Haven Park" style={{ width: 59, height: 60, borderRadius: 4, objectFit: "cover", objectPosition: "center top", display: "block", marginBottom: 22, filter: "grayscale(100%)" }} />
      <span ref={navLogoRef} style={{ fontSize: 32, fontWeight: 500, color: "#494949", display: "block", marginBottom: 12, lineHeight: 1 }}>Haven Park</span>
      <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 34 }}>
        <CheckboxRow checked={false} label="Currently designing Folio" color="#4a70bc" />
        <CheckboxRow checked={true} label="Previously @ EdTech & Enterprise" color="#808080" />
      </div>
      <div style={{ width: 336, height: 0.8, background: "rgba(38,36,33,0.11)" }} />
    </div>
  );

  return (
    <main ref={mainRef} style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      {isMobile ? (
        /* ── Mobile: single column, stacked ── */
        <div style={{ width: MOBILE_DESIGN_WIDTH, margin: "0 auto", zoom: scale, paddingLeft: 40, paddingRight: 40, boxSizing: "border-box" }}>
          {identitySection}
          <div style={{ display: "flex", flexDirection: "column", gap: 67, paddingTop: 30, marginTop: -30, paddingLeft: 30, marginLeft: -30, paddingRight: 30, marginRight: -30, paddingBottom: 120 }}>
            <PlaceholderCard />
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
          <div style={{ paddingBottom: 120, paddingTop: 30, marginTop: -30, paddingLeft: 30, marginLeft: -30, paddingRight: 30, marginRight: -30 }}>
            <div style={{ display: "flex", gap: 89, width: "fit-content" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 67 }}>
                <PlaceholderCard />
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
      <BottomSheet open={openSheet !== null} onClose={() => setOpenSheet(null)}>
        {openSheet === "mermory" && <MermoryCaseStudy />}
        {openSheet === "jams"    && <JamsContent />}
        {openSheet === "portico" && <PorticoContent />}
      </BottomSheet>
    </main>
  );
}
