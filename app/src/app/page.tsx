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
      <div style={{ width: 15, height: 15, flexShrink: 0 }}>
        {checked ? (
          /* Checked: plain checkmark, no box */
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M2.5 7.5L6 11L12.5 4" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          /* Unchecked: dashed circle */
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="dash-pulse">
            <path d="M6.36621 13.1895C6.73154 13.2617 7.11047 13.2998 7.5 13.2998V15C6.99894 15 6.50969 14.9492 6.03613 14.8555L6.36621 13.1895ZM8.96289 14.8555C8.48963 14.9491 8.00073 15 7.5 15V13.2998C7.88953 13.2998 8.26846 13.2617 8.63379 13.1895L8.96289 14.8555ZM2.67578 10.7217C3.09967 11.3548 3.64521 11.9003 4.27832 12.3242L3.33301 13.7354C2.51517 13.1877 1.81116 12.484 1.26367 11.666L2.67578 10.7217ZM13.7354 11.666C13.1878 12.484 12.484 13.1878 11.666 13.7354L10.7217 12.3242C11.3548 11.9003 11.9003 11.3548 12.3242 10.7217L13.7354 11.666ZM0 7.5C0 6.999 0.049863 6.50963 0.143555 6.03613L1.81055 6.36621C1.73827 6.73154 1.7002 7.11047 1.7002 7.5C1.7002 7.88953 1.73827 8.26846 1.81055 8.63379L0.143555 8.96289C0.0499839 8.48969 0 8.00066 0 7.5ZM15 7.5C15 8.00073 14.9491 8.48963 14.8555 8.96289L13.1895 8.63379C13.2617 8.26846 13.2998 7.88953 13.2998 7.5C13.2998 7.11047 13.2617 6.73154 13.1895 6.36621L14.8555 6.03613C14.9492 6.50969 15 6.99894 15 7.5ZM4.27832 2.67578C3.64521 3.09967 3.09967 3.64521 2.67578 4.27832L1.26367 3.33301C1.8112 2.5152 2.5152 1.8112 3.33301 1.26367L4.27832 2.67578ZM11.666 1.26367C12.484 1.81116 13.1877 2.51517 13.7354 3.33301L12.3242 4.27832C11.9003 3.64521 11.3548 3.09967 10.7217 2.67578L11.666 1.26367ZM7.5 0C8.00066 0 8.48969 0.0499839 8.96289 0.143555L8.63379 1.81055C8.26846 1.73827 7.88953 1.7002 7.5 1.7002C7.11047 1.7002 6.73154 1.73827 6.36621 1.81055L6.03613 0.143555C6.50963 0.049863 6.999 0 7.5 0Z" fill={color} />
          </svg>
        )}
      </div>
      <span style={{ fontFamily: "'SF Pro Display', sans-serif", fontSize: 15, color, lineHeight: 1.196, whiteSpace: "nowrap" }}>
        {label}
      </span>
    </div>
  );
}

/* ── Project cards ── */

const CARD_SHADOW = "0px 4px 20.4px 3px rgba(0,0,0,0.06)";

const PILL_TEXT = "Something beautiful is in making...";

function PlaceholderCard() {
  const [viewportPos, setViewportPos] = useState<{ x: number; y: number } | null>(null);
  const [typedText, setTypedText] = useState("");
  const [doneTyping, setDoneTyping] = useState(false);
  const typingRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startTyping = () => {
    if (typingRef.current) clearTimeout(typingRef.current);
    setTypedText("");
    setDoneTyping(false);
    let i = 0;
    const tick = () => {
      i++;
      setTypedText(PILL_TEXT.slice(0, i));
      if (i < PILL_TEXT.length) {
        typingRef.current = setTimeout(tick, 25);
      } else {
        setDoneTyping(true);
      }
    };
    typingRef.current = setTimeout(tick, 25);
  };

  useEffect(() => () => { if (typingRef.current) clearTimeout(typingRef.current); }, []);

  const handleMouseEnter = () => startTyping();

  const handleMouseMove = (e: React.MouseEvent) => {
    setViewportPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { setViewportPos(null); if (typingRef.current) clearTimeout(typingRef.current); }}
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
      {viewportPos && (
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
            {typedText}<span className="blink-cursor" style={{ opacity: doneTyping ? undefined : 0 }}>|</span>
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

export default function Home() {
  const [openSection, setOpenSection] = useState<Section>(null);
  const navLogoRef = useRef<HTMLSpanElement>(null);
  const [panelLeft, setPanelLeft] = useState(210);
  const [openProject, setOpenProject] = useState<string | null>(null);

  useEffect(() => {
    const measure = () => {
      if (navLogoRef.current) {
        const rect = navLogoRef.current.getBoundingClientRect();
        setPanelLeft(rect.right + 20);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const openDesignProject = (key: string) => {
    setOpenSection("design");
    setOpenProject(key);
  };

  return (
    <main style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      {/* Identity header — matches Figma MacBookPro16 layout */}
      <div style={{ paddingLeft: 144, paddingTop: 60, paddingBottom: 48 }}>
        {/* Square portrait photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="Haven Park"
          style={{ width: 59, height: 60, borderRadius: 4, objectFit: "cover", objectPosition: "center top", display: "block", marginBottom: 22, filter: "grayscale(100%)" }}
        />
        {/* Name — ref used to position peek panel */}
        <span
          ref={navLogoRef}
          style={{ fontSize: 32, fontWeight: 500, color: "#494949", display: "block", marginBottom: 12, lineHeight: 1 }}
        >
          Haven Park
        </span>
        {/* Checkboxes */}
        <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 34 }}>
          <CheckboxRow checked={false} label="Currently designing Folio" color="#4a70bc" />
          <CheckboxRow checked={true} label="Previously @ EdTech & Enterprise" color="#a2a2a2" />
        </div>
        {/* Divider */}
        <div style={{ width: 336, height: 0.8, background: "rgba(38,36,33,0.11)" }} />
      </div>

      {/* 2-column card grid */}
      <div style={{ paddingLeft: 141, paddingBottom: 120, overflowX: "auto", paddingTop: 30, marginTop: -30 }}>
        <div style={{ display: "flex", gap: 89, width: "fit-content" }}>

          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 67 }}>
            <PlaceholderCard />
            <div className="card-wrap"><JamsCard onClick={() => openDesignProject("jams")} /></div>
          </div>

          {/* Right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 67 }}>
            <div className="card-wrap"><MermoryCard onClick={() => openDesignProject("mermory")} /></div>
            <div className="card-wrap"><PorticoCard onClick={() => openDesignProject("portico")} /></div>
          </div>

        </div>
      </div>

      {/* Peek Panel */}
      <PeekPanel
        open={openSection !== null}
        onClose={() => { setOpenSection(null); setOpenProject(null); }}
        section={openSection}
        openProject={openProject}
        setOpenProject={setOpenProject}
        panelLeft={panelLeft}
      />
    </main>
  );
}
