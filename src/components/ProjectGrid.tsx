"use client";

import { useState, useEffect } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

interface ProjectGridProps {
  title: string;
  subtitle: string;
  defaultOpen?: boolean;
  sectionId?: string;
  cards?: (string | null)[];
  /** Optional custom React node to replace the first card slot */
  firstCard?: React.ReactNode;
  /** Optional custom React node to replace the second card slot */
  secondCard?: React.ReactNode;
  /** Optional custom React node to replace the third card slot */
  thirdCard?: React.ReactNode;
}

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="15"
      viewBox="0 0 17 15"
      fill="none"
      className="transition-transform duration-300 ease-in-out shrink-0"
      style={{ transform: open ? "rotate(0deg)" : "rotate(-90deg)" }}
    >
      <path d="M6.70686 13.6632C7.48468 14.9519 9.35357 14.9519 10.1314 13.6632L16.5474 3.03351C17.352 1.70056 16.3921 1.05616e-06 14.8351 1.12421e-06L2.00311 1.68512e-06C0.446163 1.75318e-06 -0.513718 1.70056 0.290844 3.03351L6.70686 13.6632Z" fill={open ? "#4583DA" : "black"}/>
    </svg>
  );
}

function PlaceholderCard({
  src,
  delay,
  visible,
}: {
  src?: string | null;
  delay: number;
  visible: boolean;
}) {
  return (
    <div
      className="flex-1 aspect-square relative reveal"
      style={{
        transitionDelay: `${delay}ms`,
        borderRadius: "39px",
        overflow: "visible",
        ...(visible ? { opacity: 1, transform: "translateY(0)" } : {}),
      }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt="Project"
          className="w-full h-full object-cover rounded-[39px]"
          style={{ transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease" }}
          onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = "translateY(-10px)"; (e.currentTarget as HTMLImageElement).style.boxShadow = "0 24px 48px rgba(0,0,0,0.15)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLImageElement).style.boxShadow = "none"; }}
        />
      ) : (
        <div className="w-full h-full bg-[#D9D9D9] rounded-[39px] cursor-pointer" style={{ transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease" }} onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-10px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 24px 48px rgba(0,0,0,0.15)"; }} onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }} />
      )}
    </div>
  );
}

function CustomCardWrapper({
  children,
  delay,
  visible,
}: {
  children: React.ReactNode;
  delay: number;
  visible: boolean;
}) {
  return (
    <div
      className="flex-1 aspect-square relative reveal"
      style={{
        transitionDelay: `${delay}ms`,
        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease`,
        borderRadius: "69px",
        overflow: "visible",
        ...(visible ? { opacity: 1, transform: "translateY(0)" } : {}),
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-10px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 24px 48px rgba(0,0,0,0.15)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
    >
      {children}
    </div>
  );
}

export default function ProjectGrid({
  title,
  subtitle,
  defaultOpen = false,
  sectionId,
  cards = [],
  firstCard,
  secondCard,
  thirdCard,
}: ProjectGridProps) {
  const [open, setOpen] = useState(defaultOpen);
  const { ref, visible } = useFadeIn();

  useEffect(() => {
    if (!sectionId) return;
    const handler = (e: Event) => {
      const { id } = (e as CustomEvent<{ id: string }>).detail;
      if (id === sectionId) setOpen(true);
    };
    window.addEventListener("openSection", handler);
    return () => window.removeEventListener("openSection", handler);
  }, [sectionId]);
  const slots: (string | null)[] = Array.from({ length: 4 }, (_, i) => cards[i] ?? null);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="flex flex-col gap-[51px] transition-[margin] duration-500 ease-in-out w-full"
      style={{ marginBottom: open ? "150px" : "30px" }}
    >
      {/* Section header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-[24px] cursor-pointer text-left w-fit reveal ${visible ? "is-visible" : ""}`}
        style={{
          transitionDelay: "0ms",
          padding: "28px 60px",
          borderRadius: "100px",
          background: open ? "rgba(69, 131, 218, 0.12)" : "rgba(255, 255, 255, 0.22)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: open ? "1px solid rgba(69, 131, 218, 0.15)" : "1px solid rgba(255, 255, 255, 0.60)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08), inset 0 1.5px 0 rgba(255,255,255,0.85), inset 0 -1px 0 rgba(0,0,0,0.05)",
          transition: "background 0.3s ease, border 0.3s ease",
        }}
      >
        <div style={{ marginLeft: "-10px" }}>
          <ToggleIcon open={open} />
        </div>
        <div className="flex flex-col gap-[13px]" style={{ marginLeft: "5px" }}>
          <h2 className="text-black text-[30px] font-normal leading-5">{title}</h2>
          <p className="text-[#4A5565] text-[18px] font-normal leading-5">{subtitle}</p>
        </div>
      </button>

      {/* 2×2 grid */}
      <div
        className="flex flex-col gap-[35px] transition-opacity duration-500 ease-in-out"
        style={{
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          height: open ? "auto" : 0,
          overflow: "visible",
        }}
      >
        <div className="flex gap-[35px]">
          {firstCard ? (
            <CustomCardWrapper delay={100} visible={visible}>
              {firstCard}
            </CustomCardWrapper>
          ) : (
            <PlaceholderCard src={slots[0]} delay={100} visible={visible} />
          )}
          {secondCard ? (
            <CustomCardWrapper delay={200} visible={visible}>
              {secondCard}
            </CustomCardWrapper>
          ) : (
            <PlaceholderCard src={slots[1]} delay={200} visible={visible} />
          )}
        </div>
        {(thirdCard || slots[2] || slots[3]) && (
          <div className="flex gap-[35px]">
            {thirdCard ? (
              <CustomCardWrapper delay={300} visible={visible}>
                {thirdCard}
              </CustomCardWrapper>
            ) : (
              <PlaceholderCard src={slots[2]} delay={300} visible={visible} />
            )}
            {slots[3] ? (
              <PlaceholderCard src={slots[3]} delay={400} visible={visible} />
            ) : (
              <div className="flex-1 aspect-square" />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
