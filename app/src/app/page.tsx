"use client";

import { useState, useRef, useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

const L = 297;

const designProjects = [
  { key: "mermory", href: "/mermory", img: "/Design/mermory/poster.png", name: "Mermory", tags: "Product Design · AI-powered study app" },
  { key: "jams",    href: "/jams",    img: "/Design/jams/poster.png",    name: "Jams",    tags: "Product Design · Enterprise job automation platform" },
  { key: "portico", href: "/portico", img: "/Design/portico/thumbnails.png", name: "Portico", tags: "Product Design · Enterprise job automation platform" },
];

type Section = "design" | "storytelling" | "art" | null;

function SectionHeader({ title, onClick }: { title: string; onClick: () => void }) {
  return (
    <div onClick={onClick} style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 11, marginBottom: 32 }}>
      <span style={{ fontSize: 24, fontWeight: 400, color: "#333333", letterSpacing: "-0.24px" }}>{title}</span>
      <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
        <path d="M1 1L7 6.5L1 12" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
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
      <p style={{ fontSize: 18, color: "rgba(38,36,33,0.5)", marginBottom: 40 }}>Enterprise job automation platform</p>
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
          background: "#FFFFF8",
          boxShadow: "-24px 0 80px rgba(0,0,0,0.18)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          zIndex: 100,
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, paddingLeft: 48, paddingTop: 53, paddingBottom: 12 }}>
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
        <div style={{ paddingLeft: 48, paddingRight: 48, paddingTop: 52, display: "flex", flexDirection: "column", alignItems: "center" }}>

          {/* Case study view */}
          {openProject === "mermory" && <MermoryContent />}
          {openProject === "jams"    && <JamsContent />}
          {openProject === "portico" && <PorticoContent />}

          {/* Section: Design grid */}
          {!openProject && section === "design" && (
            <div style={{ width: "100%" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "50px 50px" }}>
                {designProjects.map(({ key, img, name, tags }) => (
                  <div key={name} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div
                      onClick={(e) => { e.stopPropagation(); setOpenProject(key); }}
                      style={{ cursor: "pointer" }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img} alt={name} className="thumbnail"
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
            <div style={{ width: "100%" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "50px 50px" }}>
                {[0,1,2].map((i) => (
                  <div key={i} className="thumbnail" style={{ width: "100%", aspectRatio: "470 / 644", borderRadius: 20, background: "#D9D9D9", boxShadow: "0px 4px 38.3px 0px rgba(0,0,0,0.28)" }} />
                ))}
              </div>
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
  const navLogoRef = useRef<HTMLAnchorElement>(null);
  const [panelLeft, setPanelLeft] = useState(210);

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
  const [openProject, setOpenProject] = useState<string | null>(null);

  const toggle = (section: Section) => {
    if (openSection === section) {
      setOpenSection(null);
      setOpenProject(null);
    } else {
      setOpenSection(section);
      setOpenProject(null);
    }
  };

  return (
    <main style={{ background: "#FFFFF8", minHeight: "100vh" }}>
      <Nav logoRef={navLogoRef} />
      <Hero />

      {/* ── Product Design ── */}
      <section style={{ marginTop: 80 }}>
        <div style={{ paddingLeft: L }}>
          <SectionHeader title="Product Design" onClick={() => toggle("design")} />
        </div>
        <div className="scroll-x" style={{ paddingLeft: L }}>
          <div style={{ display: "inline-flex", gap: 50, paddingRight: 50 }}>
            {designProjects.map(({ key, img, name, tags }) => (
              <div key={name} style={{ width: 470, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 29 }}>
                <div onClick={() => { setOpenSection("design"); setOpenProject(key); }} style={{ display: "block", width: "100%", cursor: "pointer" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={name} className="thumbnail" style={{ width: "100%", height: 644, objectFit: "cover", borderRadius: 24, display: "block", boxShadow: "0px 4px 38.3px 0px rgba(0,0,0,0.28)" }} />
                </div>
                <p style={{ margin: 0, fontSize: 14, color: "rgba(38,36,33,0.55)", lineHeight: 1.5 }}>
                  <span style={{ color: "#262421" }}>{name}</span>{" · "}{tags}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Storytelling ── */}
      <section style={{ marginTop: 80 }}>
        <div style={{ paddingLeft: L }}>
          <SectionHeader title="Storytelling" onClick={() => toggle("storytelling")} />
        </div>
        <div className="scroll-x" style={{ paddingLeft: L }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 40 }}>
            {["Instagram", "TikTok", "Youtube"].map((p) => (
              <span key={p} style={{ fontSize: 18, color: "rgba(38,36,33,0.55)", cursor: "pointer" }}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Art ── */}
      <section style={{ marginTop: 80 }}>
        <div style={{ paddingLeft: L }}>
          <SectionHeader title="Art" onClick={() => toggle("art")} />
        </div>
        <div className="scroll-x" style={{ paddingLeft: L }}>
          <div style={{ display: "inline-flex", gap: 50, paddingRight: 50 }}>
            {[0,1,2].map((i) => (
              <div key={i} className="thumbnail" style={{ width: 470, height: 644, borderRadius: 24, background: "#D9D9D9", boxShadow: "0px 4px 38.3px 0px rgba(0,0,0,0.28)" }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ paddingLeft: L, marginTop: 120, paddingBottom: 48, fontSize: 13, color: "rgba(38,36,33,0.35)" }}>
        Made with Next.js, Figma, Claude Code
      </footer>

      {/* ── Peek Panel ── */}
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
