"use client";

import { useState, useEffect } from "react";

// Reference frame this hero was designed at (Figma "MacBook Pro 16" - 14").
// Everything below is positioned at its exact Figma pixel coordinates and
// scaled uniformly via `zoom`, so proportions stay exact at every screen size.
const DESIGN_VIEWPORT_WIDTH = 1728;
const HERO_WIDTH = 1358;
const HERO_HEIGHT = 631;

export default function Hero() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => setScale(Math.min(1, window.innerWidth / DESIGN_VIEWPORT_WIDTH));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "relative", width: HERO_WIDTH, height: HERO_HEIGHT, zoom: scale, flexShrink: 0 }}>
        {/* "Haven" mark */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/haven-mark.png"
          alt="Haven"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 369,
            height: 168,
            objectFit: "contain",
            objectPosition: "left top",
            display: "block",
          }}
        />

        {/* "is a product designer" */}
        <p
          style={{
            position: "absolute",
            left: 398,
            top: 40,
            width: 888,
            margin: 0,
            textAlign: "center",
            whiteSpace: "nowrap",
            fontWeight: 500,
            fontSize: 88,
            lineHeight: 1.196,
            color: "#bdbdbd",
          }}
        >
          {"is a "}
          <span style={{ color: "#454545" }}>product designer</span>
        </p>

        {/* Sentence */}
        <p
          style={{
            position: "absolute",
            left: 37,
            top: 168,
            width: 1284,
            margin: 0,
            textAlign: "center",
            fontWeight: 500,
            fontSize: 64,
            lineHeight: 1.196,
            color: "#bdbdbd",
          }}
        >
          {"who builds at the intersection of "}
          <span style={{ color: "#ae95e1" }}>design</span>
          {", "}
          <span style={{ color: "#6bb0df" }}>function</span>
          {", and "}
          <span style={{ color: "#f2989c" }}>culture.</span>
        </p>

        {/* Previously @ ... */}
        <p
          style={{
            position: "absolute",
            left: 294,
            top: 454,
            width: 791,
            margin: 0,
            textAlign: "center",
            fontWeight: 500,
            fontSize: 32,
            lineHeight: 1.196,
            color: "#454545",
          }}
        >
          {"Previously @ Enterprise, AI & Edtech."}
        </p>

        {/* Bullet */}
        <div
          className="floating-dot"
          style={{
            position: "absolute",
            left: 685,
            top: 384,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#000",
          }}
        />

        {/* Product Ambassador */}
        <p
          style={{
            position: "absolute",
            left: 451,
            top: 539,
            width: 456,
            margin: 0,
            textAlign: "center",
            fontWeight: 200,
            fontSize: 24,
            lineHeight: 1.196,
            color: "#454545",
          }}
        >
          {"Product Ambassador @ "}
          <span style={{ fontWeight: 400 }}>Samsung</span>
          {". "}
        </p>

        {/* Seen by */}
        <p
          style={{
            position: "absolute",
            left: 404,
            top: 578,
            width: 551,
            margin: 0,
            textAlign: "center",
            fontWeight: 200,
            fontSize: 24,
            lineHeight: 1.36,
            color: "#454545",
          }}
        >
          {"Seen by "}
          <span style={{ fontWeight: 400 }}>20M</span>
          {"+ @ TikTok ("}
          <span style={{ fontWeight: 400 }}>300K+</span>
          {" followers). "}
        </p>
      </div>
    </section>
  );
}
