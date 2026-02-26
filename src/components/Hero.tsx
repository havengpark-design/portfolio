"use client";

import { useEffect, useLayoutEffect, useState, useRef, useCallback } from "react";

const LINE_1 = "Haven is a Designer,";
const LINE_2 = "Storyteller & Artist.";
const FULL_TEXT = LINE_1 + "\n" + LINE_2;
const TYPE_SPEED = 60;
const BASE_SIZE = 100; // reference px size used for measurement

const HOVER_WORDS: [string, string][] = [
  ["Designer", ","],
  ["Storyteller", ""],
  ["Artist", "."],
];

const SCROLL_TARGETS: Record<string, string> = {
  Designer: "design",
  Storyteller: "storytelling",
  Artist: "creating",
};

function renderLine(line: string): React.ReactNode {
  let earliest: { idx: number; word: string; punct: string } | null = null;
  for (const [word, punct] of HOVER_WORDS) {
    const idx = line.indexOf(word + punct);
    if (idx !== -1 && (earliest === null || idx < earliest.idx)) {
      earliest = { idx, word, punct };
    }
  }
  if (!earliest) return <>{line}</>;
  const { idx, word, punct } = earliest;
  const prefix = line.slice(0, idx);
  const suffix = line.slice(idx + word.length + punct.length);
  return (
    <>
      {prefix}
      <HoverWord word={word} />
      <span style={{ color: "inherit" }}>{punct}</span>
      {suffix && renderLine(suffix)}
    </>
  );
}

function HoverWord({ word }: { word: string }) {
  const [hovered, setHovered] = useState(false);
  const scrollTarget = SCROLL_TARGETS[word];

  const handleClick = () => {
    if (!scrollTarget) return;
    window.dispatchEvent(new CustomEvent("openSection", { detail: { id: scrollTarget } }));
    const el = document.getElementById(scrollTarget);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{
        color: hovered ? "rgba(69, 131, 218, 0.55)" : "inherit",
        transition: "color 0.25s ease",
        cursor: scrollTarget ? "pointer" : "default",
        textDecoration: "none",
      }}
    >
      {word}
    </span>
  );
}

const Cursor = ({ fontSize }: { fontSize: number }) => (
  <span
    className="animate-blink inline-block"
    style={{
      width: Math.max(2, fontSize * 0.02),
      backgroundColor: "#4A5565",
      height: "0.75em",
      verticalAlign: "middle",
      marginLeft: Math.max(2, fontSize * 0.015),
    }}
  />
);

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const [fontSize, setFontSize] = useState(BASE_SIZE);

  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

  // Calculate font size so LINE_1 (the longer line) fills the container exactly
  const calcFontSize = useCallback(() => {
    if (!containerRef.current || !measureRef.current) return;
    const containerWidth = containerRef.current.getBoundingClientRect().width;
    const textWidth = measureRef.current.getBoundingClientRect().width;
    if (textWidth === 0) return;
    setFontSize(BASE_SIZE * (containerWidth / textWidth));
  }, []);

  useLayoutEffect(() => {
    calcFontSize();
    const observer = new ResizeObserver(calcFontSize);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [calcFontSize]);

  // Typewriter
  useEffect(() => {
    if (done) return;
    if (displayed.length < FULL_TEXT.length) {
      const t = setTimeout(
        () => setDisplayed(FULL_TEXT.slice(0, displayed.length + 1)),
        TYPE_SPEED
      );
      return () => clearTimeout(t);
    } else {
      setDone(true);
    }
  }, [displayed, done]);

  const lines = displayed.split("\n");
  const firstLine = lines[0] ?? "";
  const secondLine = lines[1] ?? "";
  const isOnSecondLine = lines.length > 1;

  const textStyle: React.CSSProperties = {
    fontSize,
    fontWeight: 300,
    lineHeight: 1,
    whiteSpace: "nowrap",
    color: "#4A5565",
    display: "block",
    width: "100%",
  };

  return (
    <section
      className="w-full animate-fade-up flex items-center overflow-hidden px-[50px]"
      style={{ animationDelay: "0.1s", minHeight: "calc(100vh - 68px)" }}
    >
      {/* Hidden span to measure LINE_1 at BASE_SIZE — used for font scaling */}
      <span
        ref={measureRef}
        aria-hidden
        style={{
          position: "fixed",
          visibility: "hidden",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          fontSize: BASE_SIZE,
          fontWeight: 300,
        }}
      >
        {LINE_1}
      </span>

      <div ref={containerRef} className="w-full flex flex-col items-center">

        {/* Line 1: "Haven is a Designer," — animated */}
        <p style={textStyle} className="text-center">
          {renderLine(firstLine)}
          {!isOnSecondLine && <Cursor fontSize={fontSize} />}
        </p>

        {/* Static middle text — always visible */}
        <p
          className="text-center mt-[40px] animate-shimmer"
          style={{
            fontSize: 40,
            fontWeight: 300,
            lineHeight: "64px",
          }}
        >
          With{" "}
          <span style={{ fontWeight: 600 }}>300,000</span>{" "}
          followers, she learned that empathy scales —<br />
          and she designs products the same way she tells stories: human first.
        </p>

        {/* Line 2: "Storyteller & Artist." — animated */}
        <p style={textStyle} className="text-center mt-[40px]">
          {renderLine(secondLine)}
          {isOnSecondLine && <Cursor fontSize={fontSize} />}
        </p>

        {/* Bottom subtitles */}
        <div className="flex flex-col items-center mt-[60px]">
          <p
            className="text-center text-[#4A5565]"
            style={{ fontSize: 24, fontWeight: 400, lineHeight: "32px" }}
          >
            Previously @ EdTech
          </p>
          <p
            className="text-center text-[#4A5565]"
            style={{ fontSize: 24, fontWeight: 400, lineHeight: "32px" }}
          >
            Currently @ Design Consulting
          </p>
        </div>

      </div>
    </section>
  );
}
