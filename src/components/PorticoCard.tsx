"use client";

import { useEffect, useRef } from "react";

export default function PorticoCard() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime > video.duration - 0.6) {
        video.currentTime = 0;
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <div className="w-full h-full rounded-[69px] relative flex items-center justify-center px-[45px]">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover rounded-[69px]"
        src="/portico-thumbnail.mp4"
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
          src="/portico.png"
          alt="Portico"
          style={{ width: "130%", height: "130%", objectFit: "contain" }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://placehold.co/374x101";
          }}
        />
      </div>
    </div>
  );
}
