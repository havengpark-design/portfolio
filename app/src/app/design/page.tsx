"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import SideNav from "@/components/SideNav";
import LightboxImage from "@/components/LightboxImage";

export function JamsContent() {
  const [expandedFrame, setExpandedFrame] = useState<string | null>(null);
  const [iconHovered, setIconHovered] = useState(false);
  const [jamsTeamPos, setJamsTeamPos] = useState<{ x: number; y: number } | null>(null);
  const jamsPillLeft = jamsTeamPos ? jamsTeamPos.x : 0;
  const BASE = "/Design/jams/case-study";
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", paddingTop: 140, paddingBottom: 140, paddingLeft: 0, paddingRight: 0, boxSizing: "border-box" }}>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 110 }}>

        {/* ─── Header ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          {/* Title */}
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <h1 style={{ fontWeight: 600, fontSize: 64, letterSpacing: "-0.64px", lineHeight: "76.8px", color: "#262421", margin: 0 }}>Jams</h1>
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
                <span style={{ ...CS_BODY, fontWeight: 300, fontSize: 18, lineHeight: "27px", color: "#262421" }}>{v}</span>
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
              <span style={{ ...CS_BODY, fontWeight: 300, fontSize: 18, lineHeight: "27px", color: "#262421" }}>Cross-Functional</span>
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
          <div style={{ width: "100%", aspectRatio: "793 / 600", position: "relative", boxShadow: "0px 4px 24.9px 3px rgba(0, 0, 0, 0.09)", borderRadius: 23, backgroundColor: "#F5F5F7", overflow: "hidden", flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Design/jams/Create a new job - AI Prompt 2@4x.png" alt="" style={{ position: "absolute", top: "11.2%", left: "9.77%", width: "29.51%", height: "100.67%", objectFit: "contain", pointerEvents: "none" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Design/jams/laptopmock.png" alt="" style={{ position: "absolute", top: "22.53%", left: "37.77%", width: "111.48%", height: "89.33%", objectFit: "contain", pointerEvents: "none" }} />
          </div>
        </div>

        {/* ─── Overview ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <span style={{ fontSize: 24, lineHeight: "48px", color: "#a2a2a2" }}>Overview</span>
          <p style={{ ...CS_BODY, color: "#333333", margin: 0 }}>JAMS Scheduler is an enterprise workload automation and job scheduling platform — essentially software that helps large IT organizations automate, orchestrate, and monitor critical backend processes across their entire tech stack.</p>
          <p style={{ ...CS_BODY, margin: 0 }}>
            Notable users of JAMS: <strong style={{ fontWeight: 400 }}>Bank of America, Coca-Cola Canada, CVS Health, Comcast.</strong>
          </p>
          <p style={{ ...CS_BODY, color: "#333333", margin: 0 }}>
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
          <p style={{ ...CS_BODY, color: "#333333", margin: 0 }}>
            JAMS is an enterprise workload automation platform built for complex, data-heavy operations. Despite its power, the product had accumulated <Highlight color="pink"><strong style={{ fontWeight: 400, color: "black" }}>significant usability debt</strong></Highlight>, making it especially hard for new users to get up to speed. Through collaborative sessions with JAMS's long-tenured staff, we surfaced <strong style={{ fontWeight: 400, color: "black" }}>two recurring pain points</strong>: <Highlight color="pink"><strong style={{ fontWeight: 300, color: "black" }}>a steep first-time user experience</strong></Highlight>{" and "}<Highlight color="pink" delay={150}><strong style={{ fontWeight: 300, color: "black" }}>interfaces that obscured</strong></Highlight>{" rather than clarified."}
          </p>
          <p style={{ ...CS_BODY, color: "#333333", margin: 0 }}>Here's what we did:</p>
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
          <p style={{ ...CS_BODY, color: "#333333", margin: 0 }}>
            The redesigned job creation flow was incorporated into JAMS' roadmap for their 2026 web app release. The execution method selector, AI job creation feature, and quick-win usability fixes were all identified as priority items for the MVP — directly shaping the product direction for a platform used by enterprise clients across finance, retail, and manufacturing.
          </p>
        </div>


      </div>
    </div>
  );
}


function PorticoLanguageVisual() {
  // Track viewport width so the diagram rescales on resize.
  const [windowW, setWindowW] = useState(1440);
  useEffect(() => {
    setWindowW(window.innerWidth);
    const handler = () => setWindowW(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Available content width = 50% of the case-study column width.
  const availW = Math.max(320, (windowW - 290 - 2 * CS_PAD) * 0.5);
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

export function PorticoCaseStudy() {
  const [expandedFrame, setExpandedFrame] = useState<string | null>(null);
  const [iconHovered, setIconHovered] = useState(false);
  const [porticoTeamPos, setPorticoTeamPos] = useState<{ x: number; y: number } | null>(null);
  const porticoPillLeft = porticoTeamPos ? porticoTeamPos.x : 0;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", paddingTop: 140, paddingBottom: 140, paddingLeft: 0, paddingRight: 0, boxSizing: "border-box" }}>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 110 }}>

        {/* ─── Header ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          {/* Title + subtitle */}
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <h1 style={{ fontWeight: 600, fontSize: 64, letterSpacing: "-0.64px", lineHeight: "76.8px", color: "#262421", margin: 0 }}>Portico</h1>
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
                <span style={{ ...CS_BODY, fontWeight: 300, fontSize: 18, lineHeight: "27px", color: "#262421" }}>{v}</span>
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
              <span style={{ ...CS_BODY, fontWeight: 300, fontSize: 18, lineHeight: "27px", color: "#262421" }}>Cross-functional</span>
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
          <div style={{ width: "100%", aspectRatio: "793 / 600", background: "#F5F5F7", borderRadius: 23, boxShadow: "0px 4px 24.9px 3px rgba(0,0,0,0.09)", overflow: "hidden", position: "relative" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Portico" src="/Design/portico/case-study/hero.png"
              style={{ position: "absolute", left: "50%", top: "20.33%", transform: "translateX(-50%)", width: "47.54%", height: "59.33%", objectFit: "cover", pointerEvents: "none" }} />
          </div>
        </div>

        {/* ─── Overview ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <span style={{ fontSize: 24, lineHeight: "48px", color: "#a2a2a2" }}>Overview</span>
          <p style={{ ...CS_BODY, color: "#333333", margin: 0 }}>
            <strong style={{ fontWeight: 400, color: "black" }}>Portico</strong> — formed through the merger of Campus Ivy, CourseKey, and Verity IQ — <Highlight color="pink">inherited a fragmented ecosystem of tools</Highlight>. Career school students were forced to navigate 4 separate web portals and 2 mobile apps to complete basic daily tasks like logging skills, checking attendance, and making payments.
          </p>
          <p style={{ ...CS_BODY, color: "#333333", margin: 0 }}>
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
          <p style={{ ...CS_BODY, color: "#333333", margin: 0 }}>
            <strong style={{ fontWeight: 400, color: "black" }}>Portico was built from multiple acquired platforms</strong>{" — meaning students had to "}<Highlight color="pink">navigate different apps to complete basic tasks</Highlight>{" like logging attendance, tracking skills, and making payments."}
          </p>
          <p style={{ ...CS_BODY, color: "#333333", margin: 0 }}>
            {"But the fragmentation went deeper than just the number of apps. "}<Highlight color="pink" delay={300}>Each platform had developed its own language and structure for the same underlying concepts</Highlight>{". As shown below, one platform organized skill tracking under a Major Study hierarchy and called the primary input \u201cAmount,\u201d while the other used a Checklist structure and called it \u201cCount\u201d \u2014 two different words for the same thing, in two different systems, that students were expected to use simultaneously."}
          </p>
          <p style={{ ...CS_BODY, color: "#333333", margin: 0 }}>
            {"This created a core design challenge: "}<strong style={{ fontWeight: 400, color: "black" }}>before we could unify the experience visually, we had to unify it conceptually.</strong>
          </p>
        </div>

        {/* ─── Language Visual ─── */}
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <PorticoLanguageVisual />
        </div>

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
          <p style={{ ...CS_BODY, color: "#333333", margin: 0 }}>
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
          <p style={{ ...CS_BODY, color: "#333333", margin: 0 }}>
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
          <p style={{ ...CS_BODY, color: "#333333", margin: 0 }}>
            <Highlight color="pink">Previously, messages were siloed at the course level</Highlight>{" \u2014 meaning students could miss critical updates from other parts of their program. The unified messaging center "}<Highlight color="green" delay={200}><strong style={{ fontWeight: 400, color: "black" }}>brings together communications from all departments and instructors in one place</strong>, with read status and message type filters to help students prioritize what needs their attention</Highlight>
          </p>
        </div>

        {/* ─── Impact ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <span style={{ fontSize: 24, lineHeight: "48px", color: "#a2a2a2" }}>Impact</span>
          <p style={{ ...CS_BODY, color: "#333333", margin: 0 }}>
            {"Students were bouncing between four portals and two apps to do basic things like check grades or log a skill. In 8 weeks, we gave Portico a north star for "}<strong style={{ fontWeight: 400, color: "black" }}>one unified experience</strong>{", plus the tactical design work to start closing the gap this quarter."}
          </p>
        </div>


      </div>
    </div>
  );
}

/* ── Mermory Case Study (Figma export, ported to inline styles) ── */

const CS_BODY: React.CSSProperties = {
  fontWeight: 300,
  fontSize: 20,
  lineHeight: "32px",
  color: "#333333",
};
const CS_LABEL: React.CSSProperties = {
  fontWeight: 400,
  fontSize: 16,
};
const CS_W = 793; // content column width (matches Figma)
const CS_PAD = 40; // horizontal padding of case study outer container

function ExpandableBlackFrame({
  id, expandedId, setExpandedId, style, children, bg = "black",
}: {
  id: string; expandedId: string | null; setExpandedId: (id: string | null) => void;
  style?: React.CSSProperties; children: React.ReactNode; bg?: string;
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
  const [windowW, setWindowW] = useState(1440);
  useEffect(() => {
    setWindowW(window.innerWidth);
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

  // Expand to available content width (viewport minus sidebar width) minus padding
  const SIDEBAR_WIDTH = 290;
  const contentW = windowW - SIDEBAR_WIDTH;
  const natW = natWRef.current || CS_W;
  const maxExpandedPx = Math.max(natW, contentW - 2 * CS_PAD);
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
        background: bg,
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

export function MermoryCaseStudy() {
  const [expandedFrame, setExpandedFrame] = useState<string | null>(null);
  const [teamPos, setTeamPos] = useState<{ x: number; y: number } | null>(null);
  const mermoryPillLeft = teamPos ? teamPos.x : 0;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", paddingTop: 140, paddingBottom: 140, paddingLeft: 0, paddingRight: 0, boxSizing: "border-box" }}>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 110 }}>

        {/* ─── Header ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          {/* Title + subtitle */}
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            <h1 style={{ fontWeight: 600, fontSize: 64, letterSpacing: "-0.64px", lineHeight: "76.8px", color: "#262421", margin: 0 }}>Mermory</h1>
            <p style={{ ...CS_BODY, fontWeight: 200, fontSize: 24, lineHeight: "36px", color: "#494949", margin: 0, whiteSpace: "nowrap" }}>Where studying gets a creative identity.</p>
          </div>
          {/* Divider */}
          <div style={{ width: "100%", height: 1, background: "rgba(38,36,33,0.11)" }} />
          {/* Metadata 4-col */}
          <div style={{ display: "flex", gap: 60 }}>
            {([["Role", "Product Designer"], ["Timeline", "12 months (2025)"], ["Tools", "Figma"]] as const).map(([l, v]) => (
              <div key={l} style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
                <span style={{ ...CS_LABEL, fontWeight: 300, color: "#a2a2a2", lineHeight: "27px", whiteSpace: "nowrap" }}>{l}</span>
                <span style={{ ...CS_BODY, fontWeight: 300, fontSize: 18, lineHeight: "27px", color: "#262421" }}>{v}</span>
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
              <span style={{ ...CS_BODY, fontWeight: 300, fontSize: 18, lineHeight: "27px", color: "#262421" }}>Design, Engineering & ML</span>
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
          <div style={{ width: "100%", aspectRatio: "793 / 600", background: "#F5F5F7", borderRadius: 23, boxShadow: "0px 4px 24.9px 3px rgba(0,0,0,0.09)", overflow: "hidden", position: "relative" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Mermory laptop mockup"
              src="/Design/mermory/case-study/laptopmockv2.png"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                padding: "24px 48px 64px 48px",
                boxSizing: "border-box",
                filter: "drop-shadow(0px 24px 32px rgba(0, 0, 0, 0.12))",
                pointerEvents: "none"
              }}
            />
          </div>
        </div>

        {/* ─── Overview ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <span style={{ fontSize: 24, lineHeight: "48px", color: "#a2a2a2" }}>Overview</span>
          <p style={{ ...CS_BODY, color: "#333333", margin: 0 }}>
            As <strong style={{ fontWeight: 400, color: "black" }}>one of 3 product designers</strong> of Mermory, I got to design an <Highlight color="green">AI-powered flashcard platform that gave students creative autonomy over how they study.</Highlight> Unlike Quizlet or Anki, Mermory let users personalize their cards with stickers, themes, and design elements through a Creator Studio—while maintaining industry-standard learning science through FSRS spaced repetition.
          </p>
          <p style={{ ...CS_BODY, color: "#333333", margin: 0 }}>With the nature of the team size, I got to work on lots of different projects as you can see below:</p>
        </div>

        {/* ─── Section 1: Create menu ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 27 }}>
          <ExpandableBlackFrame id="s1" expandedId={expandedFrame} setExpandedId={setExpandedFrame}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src="/Design/mermory/case-study/importflow.png" style={{ width: "100%", display: "block", borderRadius: "1.5%", pointerEvents: "none" }} />
          </ExpandableBlackFrame>
          <p style={{ ...CS_BODY, color: "#333333", margin: 0 }}>
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
          <p style={{ ...CS_BODY, color: "#333333", margin: 0 }}>
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
          <p style={{ ...CS_BODY, color: "#333333", margin: 0 }}>
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
          <p style={{ ...CS_BODY, color: "#333333", margin: 0 }}>
            <strong style={{ fontWeight: 400, color: "black" }}>I redesigned the hero section of the landing page. </strong>
            <Highlight color="green">Shifting from a vertical to a horizontal layout gave the section more visual balance,</Highlight> letting the product preview and the headline share the stage and make a stronger first impression.
          </p>
        </div>

        {/* ─── Design Language ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <span style={{ fontSize: 24, lineHeight: "48px", color: "#a2a2a2" }}>Design Language</span>
          <p style={{ ...CS_BODY, color: "#333333", margin: 0 }}>My vision for Mermory was to support users' creative autonomy. The design language was built around warmth and comfort, a space where creativity could thrive.</p>
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


      </div>
    </div>
  );
}

export function SideQuestsSection() {
  return (
    <div id="sidequests-section" style={{ display: "flex", flexDirection: "column", gap: 0, paddingBottom: 140 }}>
      {/* Centered Heading */}
      <div style={{ display: "flex", justifyContent: "center", width: "100%", paddingBottom: 280 }}>
        <h1
          style={{
            fontWeight: 800,
            fontSize: 128,
            letterSpacing: "-1.28px",
            lineHeight: "140px",
            color: "#e2e2e2",
            margin: 0,
            textAlign: "center",
          }}
        >
          Side Quests ✨
        </h1>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
        {/* Title and Theme */}
        <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
          <h1
            style={{
              fontWeight: 800,
              fontSize: 64,
              letterSpacing: "-0.64px",
              lineHeight: "76.8px",
              color: "#262421",
              margin: 0,
            }}
          >
            2026 UCI Design-a-thon Judge
          </h1>
          <p
            style={{
              fontWeight: 200,
              fontSize: 24,
              lineHeight: "36px",
              color: "#494949",
              margin: 0,
            }}
          >
            Theme: Chaos into Clarity
          </p>
        </div>

        <div style={{ width: "100%", height: 1, background: "rgba(38,36,33,0.11)" }} />

        {/* Metadata */}
        <div style={{ display: "flex", gap: 60, flexWrap: "wrap" }}>
          {([
            ["Role", "Judge"],
            ["Timeline", "April 26, 2026"],
            ["Tools", "Rubric, Red Pen"],
            ["Team", "Hot Designers"],
          ] as const).map(([l, v]) => (
            <div key={l} style={{ display: "flex", flexDirection: "column", gap: 6, flex: "1 1 120px" }}>
              <span
                style={{
                  ...CS_LABEL,
                  fontWeight: 300,
                  color: "#a2a2a2",
                  lineHeight: "27px",
                  whiteSpace: "nowrap",
                }}
              >
                {l}
              </span>
              <span
                style={{
                  ...CS_BODY,
                  fontWeight: 300,
                  fontSize: 18,
                  lineHeight: "27px",
                  color: "#262421",
                }}
              >
                {v}
              </span>
            </div>
          ))}
        </div>

        {/* Horizontal Scroll Pictures Gallery */}
        <div
          className="scroll-x"
          style={{
            display: "flex",
            gap: 24,
            width: "100%",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {[
            {
              src: "/Design/side-quests/group.jpg",
              alt: "Haven and other design judges on stage at the 2026 UCI Design-a-thon",
            },
            {
              src: "/Design/side-quests/selfie.jpg",
              alt: "Haven taking a selfie showing her judge badge",
            },
            {
              src: "/Design/side-quests/judges-screen.jpg",
              alt: "UCI Design-a-thon Judges slide showing Haven and other judges",
            },
          ].map((img, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: "min(580px, 85vw)",
                aspectRatio: "1024 / 682",
                background: "#F5F5F7",
                borderRadius: 23,
                boxShadow: "0px 4px 24.9px 3px rgba(0,0,0,0.09)",
                overflow: "hidden",
                position: "relative",
                scrollSnapAlign: "start",
              }}
            >
              <LightboxImage
                src={img.src}
                alt={img.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>

        {/* Description Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <p style={{ ...CS_BODY, margin: 0 }}>
            I got to be one of the design judges for UCI's 2026 Design-a-thon! Truly an amazing
            experience I got to share with not only the students but also the incredible judges I got
            to connect with.
          </p>
        </div>
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <div id="about-section" style={{ display: "flex", flexDirection: "column", gap: 0, paddingBottom: 140 }}>
      {/* Centered Heading */}
      <div style={{ display: "flex", justifyContent: "center", width: "100%", paddingBottom: 280 }}>
        <h1
          style={{
            fontWeight: 800,
            fontSize: 128,
            letterSpacing: "-1.28px",
            lineHeight: "140px",
            color: "#e2e2e2",
            margin: 0,
            textAlign: "center",
          }}
        >
          About 🧍‍♀️
        </h1>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
        {/* Title and Theme */}
        <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
          <h1
            style={{
              fontWeight: 600,
              fontSize: 64,
              letterSpacing: "-0.64px",
              lineHeight: "76.8px",
              color: "#262421",
              margin: 0,
            }}
          >
            Haven Park
          </h1>
          <p
            style={{
              fontWeight: 200,
              fontSize: 24,
              lineHeight: "36px",
              color: "#494949",
              margin: 0,
            }}
          >
            Here for the books, the brushes, and unsolicited takes on humanity
          </p>
        </div>

        <div style={{ width: "100%", height: 1, background: "rgba(38,36,33,0.11)" }} />

        {/* Horizontal Scroll Pictures Gallery */}
        <div
          className="scroll-x"
          style={{
            display: "flex",
            gap: 24,
            width: "100%",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {[
            {
              src: "/about/grad.jpg",
              alt: "Haven Park graduation photo at UCLA",
            },
            {
              src: "/about/painting.jpg",
              alt: "Haven standing next to her canvas painting",
            },
            {
              src: "/about/cat.jpg",
              alt: "Haven holding her black cat Rainy with text rainy 💜",
            },
          ].map((img, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: "min(448px, 80vw)",
                aspectRatio: "834 / 1024",
                background: "#F5F5F7",
                borderRadius: 23,
                boxShadow: "0px 4px 24.9px 3px rgba(0,0,0,0.09)",
                overflow: "hidden",
                position: "relative",
                scrollSnapAlign: "start",
              }}
            >
              <LightboxImage
                src={img.src}
                alt={img.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>

        {/* Description Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <p style={{ ...CS_BODY, margin: 0 }}>
            I’m a recent graduate from UCLA aspiring to leave a positive mark on this world, my community, and family through my design craft. I came to design as an art major, a creative mind looking for a career that could actually use that instinct and I hope to continue to get better at this craft. A career is just one part of who someone is, and I hope my work in product design is one of many windows into mine. I’m a fast learner, and I’ll do whatever it takes to keep moving forward :)
          </p>
        </div>
      </div>
    </div>
  );
}

type ProjectKey = "mermory" | "folio" | "jams" | "portico";

const SUBMENU = [
  { key: "folio", label: "Folio" },
  { key: "mermory", label: "Mermory" },
  { key: "jams", label: "Jams" },
  { key: "portico", label: "Portico" },
];

export default function DesignPage() {
  const [activeSection, setActiveSection] = useState<"design" | "sidequests" | "about">("design");
  const [selected, setSelected] = useState<ProjectKey>("folio");

  // On mount, if the URL slug matches a project, scroll to it instantly
  useEffect(() => {
    const slug = window.location.pathname.replace("/", "");
    if (slug === "mermory" || slug === "folio" || slug === "jams" || slug === "portico") {
      setTimeout(() => {
        document.getElementById(`${slug}-section`)?.scrollIntoView({ behavior: "instant" as any });
      }, 100);
    } else if (slug === "sidequests") {
      setTimeout(() => {
        document.getElementById("sidequests-section")?.scrollIntoView({ behavior: "instant" as any });
      }, 100);
    } else if (slug === "about") {
      setTimeout(() => {
        document.getElementById("about-section")?.scrollIntoView({ behavior: "instant" as any });
      }, 100);
    }
  }, []);

  // Scroll spy to update the selected submenu item based on viewport position
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // Track top level section (design vs sidequests vs about)
      const sidequestsEl = document.getElementById("sidequests-section");
      const aboutEl = document.getElementById("about-section");
      if (aboutEl && aboutEl.getBoundingClientRect().top <= windowHeight * 0.4) {
        setActiveSection("about");
      } else if (sidequestsEl && sidequestsEl.getBoundingClientRect().top <= windowHeight * 0.4) {
        setActiveSection("sidequests");
      } else {
        setActiveSection("design");
      }

      // Track active case study submenu item
      const sections = ["folio", "mermory", "jams", "portico"] as const;
      let currentActive: ProjectKey = "folio";

      for (const section of sections) {
        const el = document.getElementById(`${section}-section`);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section top is above 40% of the viewport height, mark it active
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

  const handleSelectSub = (key: string) => {
    setSelected(key as ProjectKey);
    const target = document.getElementById(`${key}-section`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleItemClick = (key: string, e: React.MouseEvent) => {
    if (key === "design") {
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

  return (
    <main style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      <SideNav
        active={activeSection}
        submenu={SUBMENU}
        selectedSubKey={selected}
        onSelectSub={handleSelectSub}
        onItemClick={handleItemClick}
      />
      <div style={{ paddingLeft: 290, paddingRight: "min(140px, 8vw)", boxSizing: "border-box", paddingBottom: 280 }}>
        <div id="folio-section" style={{ paddingTop: 80, display: "flex", flexDirection: "column", gap: 56 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            <h1 style={{ fontWeight: 600, fontSize: 64, letterSpacing: "-0.64px", lineHeight: "76.8px", color: "#262421", margin: 0 }}>Folio</h1>
            <p style={{ ...CS_BODY, fontWeight: 200, fontSize: 24, lineHeight: "36px", color: "#494949", margin: 0 }}>Your taste, kept over time</p>
          </div>
          <div style={{ width: "100%", height: 1, background: "rgba(38,36,33,0.11)" }} />
          {/* Metadata */}
          <div style={{ display: "flex", gap: 60 }}>
            {([["Role", "Product Designer"], ["Timeline", "Ongoing"], ["Tools", "Figma"], ["Team", "Design, Engineering"]] as const).map(([l, v]) => (
              <div key={l} style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
                <span style={{ ...CS_LABEL, fontWeight: 300, color: "#a2a2a2", lineHeight: "27px", whiteSpace: "nowrap" }}>{l}</span>
                <span style={{ ...CS_BODY, fontWeight: 300, fontSize: 18, lineHeight: "27px", color: "#262421" }}>{v}</span>
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
            <p style={{ ...CS_BODY, color: "#333333", margin: 0 }}>
              Every person who has ever built a collection — of bags, ceramics, vintage clothing, sneakers, beauty products, books, or anything else — knows that the collection tells a story. It represents years of taste, intention, and identity. Yet there is no dignified home for that story on the internet. Folio is that home. It is a personal, permanent, shareable portfolio of the objects you own and are proud of. Not a marketplace. Not a feed optimised for engagement. A portrait of who you are through the things you have chosen to keep.
            </p>
            <p style={{ ...CS_BODY, color: "#333333", margin: 0 }}>
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
