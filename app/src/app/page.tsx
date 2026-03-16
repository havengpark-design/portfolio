"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

const L = 297;

const designProjects = [
  { href: "/mermory", img: "/Design/mermory/poster.png", name: "Mermory", tags: "Product Design · AI-powered study app" },
  { href: "/jams", img: "/Design/jams/poster.png", name: "Jams", tags: "Product Design · Enterprise job automation platform" },
  { href: "/portico", img: "/Design/portico/thumbnails.png", name: "Portico", tags: "Product Design · Enterprise job automation platform" },
];

type Section = "design" | "storytelling" | "art" | null;

function SectionHeader({ title, onClick }: { title: string; onClick: () => void }) {
  return (
    <div onClick={onClick} style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 11, marginBottom: 32 }}>
      <span style={{ fontSize: 24, fontWeight: 400, color: "#333333", letterSpacing: "-0.24px" }}>
        {title}
      </span>
      <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
        <path d="M1 1L7 6.5L1 12" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function PeekPanel({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 90,
          pointerEvents: open ? "auto" : "none",
          background: "transparent",
        }}
      />
      {/* Panel */}
      <div
        style={{
          position: "fixed",
          top: 0, right: 0,
          width: 560,
          height: "100vh",
          background: "#FFFFF8",
          boxShadow: "-24px 0 80px rgba(0,0,0,0.18)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          zIndex: 100,
          overflowY: "auto",
          padding: "48px 48px 80px 48px",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 32, right: 32,
            background: "none", border: "none", cursor: "pointer",
            fontSize: 20, color: "rgba(38,36,33,0.4)", lineHeight: 1,
            padding: 4,
          }}
        >
          ✕
        </button>
        {children}
      </div>
    </>
  );
}

export default function Home() {
  const [openSection, setOpenSection] = useState<Section>(null);

  const toggle = (section: Section) =>
    setOpenSection((prev) => (prev === section ? null : section));

  return (
    <main style={{ background: "#FFFFF8", minHeight: "100vh" }}>
      <Nav />
      <Hero />

      {/* ── Product Design ── */}
      <section style={{ marginTop: 80 }}>
        <div style={{ paddingLeft: L }}>
          <SectionHeader title="Product Design" onClick={() => toggle("design")} />
        </div>
        <div className="scroll-x" style={{ paddingLeft: L }}>
          <div style={{ display: "inline-flex", gap: 50, paddingRight: 50 }}>
            {designProjects.map(({ href, img, name, tags }) => (
              <div key={name} style={{ width: 470, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 29 }}>
                <Link href={href} style={{ display: "block", width: "100%" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={name} className="thumbnail" style={{ width: "100%", height: 644, objectFit: "cover", borderRadius: 24, display: "block", boxShadow: "0px 4px 38.3px 0px rgba(0,0,0,0.28)" }} />
                </Link>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 400, color: "rgba(38,36,33,0.55)", lineHeight: 1.5 }}>
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
            {["Instagram", "TikTok", "Youtube"].map((platform) => (
              <span key={platform} style={{ fontSize: 18, fontWeight: 400, color: "rgba(38,36,33,0.55)", cursor: "pointer" }}>
                {platform}
              </span>
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
            {[0, 1, 2].map((i) => (
              <div key={i} className="thumbnail" style={{ width: 470, height: 644, borderRadius: 24, background: "#D9D9D9", boxShadow: "0px 4px 38.3px 0px rgba(0,0,0,0.28)" }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ paddingLeft: L, marginTop: 120, paddingBottom: 48, fontSize: 13, color: "rgba(38,36,33,0.35)" }}>
        Made with Next.js, Figma, Claude Code
      </footer>

      {/* ── Peek Panels ── */}
      <PeekPanel open={openSection === "design"} onClose={() => setOpenSection(null)}>
        <h2 style={{ fontSize: 22, fontWeight: 500, color: "#262421", marginBottom: 40, marginTop: 0 }}>Product Design</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {designProjects.map(({ href, img, name, tags }) => (
            <Link key={name} href={href} style={{ textDecoration: "none" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={name} style={{ width: "100%", height: 280, objectFit: "cover", borderRadius: 16, display: "block", boxShadow: "0px 4px 24px rgba(0,0,0,0.18)" }} />
                <p style={{ margin: 0, fontSize: 14, color: "rgba(38,36,33,0.55)" }}>
                  <span style={{ color: "#262421" }}>{name}</span>{" · "}{tags}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </PeekPanel>

      <PeekPanel open={openSection === "storytelling"} onClose={() => setOpenSection(null)}>
        <h2 style={{ fontSize: 22, fontWeight: 500, color: "#262421", marginBottom: 40, marginTop: 0 }}>Storytelling</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {["Instagram", "TikTok", "Youtube"].map((platform) => (
            <span key={platform} style={{ fontSize: 18, fontWeight: 400, color: "rgba(38,36,33,0.55)", cursor: "pointer" }}>
              {platform}
            </span>
          ))}
        </div>
      </PeekPanel>

      <PeekPanel open={openSection === "art"} onClose={() => setOpenSection(null)}>
        <h2 style={{ fontSize: 22, fontWeight: 500, color: "#262421", marginBottom: 40, marginTop: 0 }}>Art</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ width: "100%", height: 300, borderRadius: 16, background: "#D9D9D9" }} />
          ))}
        </div>
      </PeekPanel>
    </main>
  );
}
