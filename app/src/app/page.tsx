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

function PeekPanel({ open, onClose, section }: { open: boolean; onClose: () => void; section: Section }) {
  const breadcrumb =
    section === "design" ? "Product Design"
    : section === "storytelling" ? "Storytelling"
    : "Art";

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
      {/* Panel — full height, own nav inside */}
      <div
        style={{
          position: "fixed",
          top: 0, right: 0,
          width: 860,
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
        {/* Breadcrumb — aligns with sticky nav "Haven Park" on the left */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, paddingLeft: 48, paddingTop: 53, paddingBottom: 12 }}>
          <span style={{ fontSize: 17, fontWeight: 400, color: "rgba(38,36,33,0.4)" }}>/</span>
          <span style={{ fontSize: 17, fontWeight: 400, color: "#262421" }}>{breadcrumb}</span>
        </div>

        {/* Decorative avatar circle */}
        <div style={{ position: "absolute", left: -60, top: 110, width: 193, height: 193, borderRadius: "50%", overflow: "hidden", pointerEvents: "none" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", mixBlendMode: "multiply", opacity: 0.20 }} />
        </div>

        {/* Panel content */}
        <div style={{ paddingLeft: 130, paddingRight: 48, paddingTop: 60, paddingBottom: 80 }}>
          {section === "design" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "50px 50px" }}>
              {designProjects.map(({ href, img, name, tags }) => (
                <div key={name} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <Link href={href} style={{ display: "block" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={name}
                      className="thumbnail"
                      style={{ width: "100%", height: 380, objectFit: "cover", borderRadius: 20, display: "block", boxShadow: "0px 4px 38.3px 0px rgba(0,0,0,0.28)" }}
                    />
                  </Link>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 400, color: "rgba(38,36,33,0.55)", lineHeight: 1.5 }}>
                    <span style={{ color: "#262421" }}>{name}</span>{" · "}{tags}
                  </p>
                </div>
              ))}
            </div>
          )}

          {section === "storytelling" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {["Instagram", "TikTok", "Youtube"].map((platform) => (
                <span key={platform} style={{ fontSize: 18, fontWeight: 400, color: "rgba(38,36,33,0.55)", cursor: "pointer" }}>
                  {platform}
                </span>
              ))}
            </div>
          )}

          {section === "art" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "50px 50px" }}>
              {[0, 1, 2].map((i) => (
                <div key={i} className="thumbnail" style={{ width: "100%", height: 380, borderRadius: 20, background: "#D9D9D9", boxShadow: "0px 4px 38.3px 0px rgba(0,0,0,0.28)" }} />
              ))}
            </div>
          )}
        </div>
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

      {/* ── Peek Panel ── */}
      <PeekPanel open={openSection !== null} onClose={() => setOpenSection(null)} section={openSection} />
    </main>
  );
}
