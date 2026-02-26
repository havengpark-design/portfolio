"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = ["Home", "Design", "Art", "Socials", "About"];

const NAV_SECTION: Record<string, string> = {
  Design: "design",
  Art: "creating",
  Socials: "storytelling",
};

function openSection(id: string) {
  window.dispatchEvent(new CustomEvent("openSection", { detail: { id } }));
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();

  const activeLink = (() => {
    if (pathname === "/") return "Home";
    if (pathname.startsWith("/jams") || pathname.startsWith("/portico") || pathname.startsWith("/mermory")) return "Design";
    if (pathname.startsWith("/storytelling")) return "Socials";
    return null;
  })();

  const handleNavClick = (link: string) => {
    const sectionId = NAV_SECTION[link];
    if (!sectionId) return;
    if (pathname === "/") {
      openSection(sectionId);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

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
          const isActive = activeLink === link;
          const buttonClass = `px-3 py-1.5 rounded-[30px] text-[16px] leading-5 transition-all cursor-pointer ${
            isActive
              ? "bg-white shadow-[0px_0px_9px_rgba(0,0,0,0.15)] text-[#4583DA] font-bold"
              : "text-black font-medium hover:bg-white/40"
          }`;

          if (link === "Home") {
            return (
              <Link key={link} href="/" className={buttonClass}>
                {link}
              </Link>
            );
          }

          if (link === "About") {
            return (
              <button key={link} className={buttonClass}>
                {link}
              </button>
            );
          }

          return (
            <button key={link} className={buttonClass} onClick={() => handleNavClick(link)}>
              {link}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
