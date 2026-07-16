"use client";

import { useState, useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import SideNav from "@/components/SideNav";
import { MermoryCaseStudy, JamsContent, PorticoCaseStudy, SideQuestsSection, AboutSection } from "./design/page";

type ProjectKey = "mermory" | "folio" | "jams" | "portico";

const SUBMENU = [
  { key: "folio", label: "Folio" },
  { key: "mermory", label: "Mermory" },
  { key: "jams", label: "Jams" },
  { key: "portico", label: "Portico" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<"intro" | "design" | "sidequests" | "about">("intro");
  const [selected, setSelected] = useState<ProjectKey>("folio");
  const designRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Track active section (intro vs design vs sidequests vs about)
      const threshold = windowHeight * 0.75;
      const sidequestsEl = document.getElementById("sidequests-section");
      const aboutEl = document.getElementById("about-section");
      if (aboutEl && aboutEl.getBoundingClientRect().top <= windowHeight * 0.4) {
        setActiveSection("about");
      } else if (sidequestsEl && sidequestsEl.getBoundingClientRect().top <= windowHeight * 0.4) {
        setActiveSection("sidequests");
      } else if (scrollY >= threshold) {
        setActiveSection("design");
      } else {
        setActiveSection("intro");
      }

      // Track active case study submenu item
      const sections = ["folio", "mermory", "jams", "portico"] as const;
      let currentActive: ProjectKey = "folio";

      for (const section of sections) {
        const el = document.getElementById(`${section}-section`);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section top is above 40% of the viewport, mark it active
          if (rect.top <= windowHeight * 0.4) {
            currentActive = section;
          }
        }
      }
      setSelected(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleItemClick = (key: string, e: React.MouseEvent) => {
    if (key === "intro") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (key === "design") {
      e.preventDefault();
      document.getElementById("folio-section")?.scrollIntoView({ behavior: "smooth" });
    } else if (key === "sidequests") {
      e.preventDefault();
      document.getElementById("sidequests-section")?.scrollIntoView({ behavior: "smooth" });
    } else if (key === "about") {
      e.preventDefault();
      document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectSub = (key: string) => {
    setSelected(key as ProjectKey);
    const target = document.getElementById(`${key}-section`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main style={{ background: "#FFFFFF", minHeight: "100vh" }}>

      <SideNav
        active={activeSection}
        submenu={SUBMENU}
        selectedSubKey={selected}
        onSelectSub={handleSelectSub}
        onItemClick={handleItemClick}
      />

      <Hero />

      <div
        id="design-section"
        ref={designRef}
        style={{
          paddingLeft: 290,
          paddingRight: "min(140px, 8vw)",
          boxSizing: "border-box",
          paddingTop: 80,
          paddingBottom: 280,
        }}
      >
        <div id="folio-section" style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            <h1 style={{ fontWeight: 600, fontSize: 64, letterSpacing: "-0.64px", lineHeight: "76.8px", color: "#262421", margin: 0 }}>Folio</h1>
            <p style={{ fontWeight: 200, fontSize: 24, lineHeight: "36px", color: "#494949", margin: 0 }}>Your taste, kept over time</p>
          </div>
          <div style={{ width: "100%", height: 1, background: "rgba(38,36,33,0.11)" }} />
          {/* Metadata */}
          <div style={{ display: "flex", gap: 60 }}>
            {([["Role", "Product Designer"], ["Timeline", "Ongoing"], ["Tools", "Figma, Claude Code"], ["Team", "Design, Engineering"]] as const).map(([l, v]) => (
              <div key={l} style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
                <span style={{ fontWeight: 300, fontSize: 16, color: "#a2a2a2", lineHeight: "27px", whiteSpace: "nowrap" }}>{l}</span>
                <span style={{ fontWeight: 300, fontSize: 18, lineHeight: "27px", color: "#262421" }}>{v}</span>
              </div>
            ))}
          </div>
          {/* Hero card */}
          <div style={{ width: "100%", aspectRatio: "793 / 600", background: "#FFFFFF", borderRadius: 23, boxShadow: "0px 4px 24.9px 3px rgba(0,0,0,0.09)", overflow: "hidden", position: "relative" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Folio intro image"
              src="/Design/folio/case-study/hero.png"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                pointerEvents: "none"
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <span style={{ fontSize: 24, lineHeight: "48px", color: "#a2a2a2" }}>About</span>
            <p style={{ fontWeight: 300, fontSize: 20, lineHeight: "32px", color: "#333333", margin: 0 }}>
              Every person who has ever built a collection — of bags, ceramics, vintage clothing, sneakers, beauty products, books, or anything else — knows that the collection tells a story. It represents years of taste, intention, and identity. Yet there is no dignified home for that story on the internet. Folio is that home. It is a personal, permanent, shareable portfolio of the objects you own and are proud of. Not a marketplace. Not a feed optimised for engagement. A portrait of who you are through the things you have chosen to keep.
            </p>
            <p style={{ fontWeight: 300, fontSize: 20, lineHeight: "32px", color: "#333333", margin: 0 }}>
              You carry your Folio link with you. When you meet someone whose taste you admire, you share it. When you want to browse the collections of people you trust, you open theirs. Folio is slow, deliberate, and deeply personal — a space for people who collect with intention.
            </p>
          </div>
        </div>
        <div id="mermory-section" style={{ paddingTop: 140 }}>
          <MermoryCaseStudy />
        </div>
        <div id="jams-section" style={{ paddingTop: 140 }}>
          <JamsContent />
        </div>
        <div id="portico-section" style={{ paddingTop: 140 }}>
          <PorticoCaseStudy />
        </div>
        <div style={{ paddingTop: 140 }}>
          <SideQuestsSection />
        </div>
        <div style={{ paddingTop: 140 }}>
          <AboutSection />
        </div>
      </div>
    </main>
  );
}
