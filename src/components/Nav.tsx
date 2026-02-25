"use client";

import { useState } from "react";

const links = ["Home", "Design", "Art", "Socials", "About"];

export default function Nav() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 animate-fade-in" style={{ animationDelay: "0s" }}>
      <div
        className="flex items-center gap-1 rounded-[34px] p-2"
        style={{
          background: "rgba(255, 255, 255, 0.18)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.55)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.10), inset 0 1.5px 0 rgba(255,255,255,0.80), inset 0 -1px 0 rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.40)",
        }}
      >
        {links.map((link) => {
          const isActive = active === link;
          return (
            <button
              key={link}
              onClick={() => setActive(link)}
              className={`px-3 py-1.5 rounded-[30px] text-[16px] leading-5 transition-all cursor-pointer ${
                isActive
                  ? "bg-white shadow-[0px_0px_9px_rgba(0,0,0,0.15)] text-[#4583DA] font-bold"
                  : "text-black font-medium hover:bg-white/40"
              }`}
            >
              {link}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
