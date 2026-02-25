"use client";

import Link from "next/link";

export default function JamsCard() {
  return (
    <Link href="/jams" className="w-full h-full rounded-[69px] relative flex items-center justify-center px-[45px] cursor-pointer">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover rounded-[69px]"
        src="/jams-thumbnail.mp4"
      />
      {/* Glass pill */}
      <div
        className="relative z-10 w-full flex items-center justify-center rounded-[106px]"
        style={{
          height: "30%",
          padding: "8%",
          background: "rgba(69, 131, 218, 0.15)",
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
          border: "1px solid rgba(69, 131, 218, 0.40)",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.10), inset 0 1px 0 rgba(255,255,255,0.25)",
          boxSizing: "border-box",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/jams-logo.png"
          alt="JAMS"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://placehold.co/374x101";
          }}
        />
      </div>
    </Link>
  );
}
