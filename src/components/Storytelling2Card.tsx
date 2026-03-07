"use client";

import Link from "next/link";

export default function Storytelling2Card() {
  return (
    <Link
      href="/storytelling/2"
      className="w-full h-full rounded-[69px] relative overflow-hidden cursor-pointer block"
      onMouseEnter={() => {
        const main = document.querySelector("main") as HTMLElement | null;
        if (main) { main.style.transition = "background 0.4s ease"; main.style.background = "rgb(243, 243, 252)"; }
      }}
      onMouseLeave={() => {
        const main = document.querySelector("main") as HTMLElement | null;
        if (main) { main.style.background = ""; }
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Storytelling/Storytelling2.png"
        alt="Choosing to Love"
        className="w-full h-full object-cover rounded-[69px]"
        style={{ transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)" }}
        onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = "translateY(-10px)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = "translateY(0)"; }}
      />
    </Link>
  );
}
