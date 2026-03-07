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
      <div
        className="w-full h-full rounded-[69px] flex flex-col justify-end p-[40px]"
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)",
          transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-10px)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
      >
        <span className="text-white/40 text-[12px] uppercase tracking-widest mb-[8px]">Storytelling</span>
        <h3 className="text-white text-[28px] font-normal leading-[1.1]">Choosing</h3>
      </div>
    </Link>
  );
}
