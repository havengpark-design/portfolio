"use client";

import { useEffect, useState } from "react";

const FULL_TEXT = "Haven is a\nDesigner,\nStoryteller,\n& Artist.";
const TYPE_SPEED = 60;

// Words to make hoverable (without punctuation for matching, punctuation kept in display)
// [word, punctuation]
const HOVER_WORDS: [string, string][] = [["Designer", ","], ["Storyteller", ","], ["Artist", "."]];

function renderLine(line: string) {
  const match = HOVER_WORDS.find(([word, punct]) => line.endsWith(word + punct) || line === word + punct);
  if (match) {
    const [word, punct] = match;
    const full = word + punct;
    const prefix = line.slice(0, line.length - full.length);
    return (
      <>
        {prefix}
        <HoverWord word={word} />
        <span style={{ color: "inherit" }}>{punct}</span>
      </>
    );
  }
  return <>{line}</>;
}

function HoverWord({ word }: { word: string; }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? "rgba(69, 131, 218, 0.55)" : "inherit",
        transition: "color 0.25s ease",
        cursor: "default",
      }}
    >
      {word}
    </span>
  );
}

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

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

  return (
    <section
      className="w-full animate-fade-up flex items-center"
      style={{ animationDelay: "0.1s", minHeight: "calc(100vh - 68px)" }}
    >
      <div className="w-full flex flex-col items-center gap-0">

        {/* Main text — centered, 128px, natural line wrap */}
        <p
          className="text-center text-[#4A5565] w-full"
          style={{
            fontSize: 128,
            fontWeight: 300,
            lineHeight: "128px",
            wordWrap: "break-word",
          }}
        >
          {lines.map((line, i) => (
            <span key={i}>
              {renderLine(line)}
              {i < lines.length - 1 && <br />}
            </span>
          ))}
          {/* Blinking cursor */}
          <span
            className="animate-blink inline-block ml-[3px]"
            style={{
              width: "3px",
              backgroundColor: "#4A5565",
              height: "0.75em",
              verticalAlign: "middle",
            }}
          />
        </p>

        {/* Subtitles */}
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
