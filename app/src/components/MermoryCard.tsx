"use client";

import Link from "next/link";

export default function MermoryCard() {
  return (
    <Link
      href="/mermory"
      className="w-full h-full rounded-[69px] relative flex items-center justify-center px-[45px] cursor-pointer"
      onMouseEnter={() => {
        const main = document.querySelector("main") as HTMLElement | null;
        if (main) { main.style.transition = "background 0.4s ease"; main.style.background = "rgb(242, 243, 252)"; }
      }}
      onMouseLeave={() => {
        const main = document.querySelector("main") as HTMLElement | null;
        if (main) { main.style.background = ""; }
      }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover rounded-[69px]"
        src="/Design/mermory/mermory.mp4"
      />
      {/* Glass pill */}
      <div
        className="relative z-10 w-full flex items-center justify-center rounded-[106px]"
        style={{
          height: "30%",
          padding: "8%",
          background: "rgba(255, 255, 255, 0.18)",
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
          border: "1px solid rgba(255, 255, 255, 0.45)",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.10), inset 0 1px 0 rgba(255,255,255,0.25)",
          boxSizing: "border-box",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Design/mermory/Mermory Text Logo@3x.png"
          alt="Mermory"
          style={{ width: "80%", height: "80%", objectFit: "contain" }}
        />
      </div>
    </Link>
  );
}
