"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

type ActiveSection = "intro" | "design" | "sidequests" | "about";
export type SubNavItem = { key: string; label: string; disabled?: boolean };

const NAV_ITEMS: { key: ActiveSection; label: string; href?: string }[] = [
  { key: "intro", label: "Intro", href: "/" },
  { key: "design", label: "Design", href: "/design" },
  { key: "sidequests", label: "Side quests", href: "/sidequests" },
  { key: "about", label: "About", href: "/about" },
];

function NavItem({
  label,
  href,
  isActive,
  onClick,
}: {
  label: string;
  href?: string;
  isActive: boolean;
  onClick?: (e: React.MouseEvent) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const style: React.CSSProperties = {
    display: "block",
    textDecoration: "none",
    cursor: (href || onClick) ? "pointer" : "default",
    fontWeight: 400,
    color: isActive ? "#333333" : isHovered ? "#8e8e93" : "#c2c2c2",
    transition: "color 0.2s ease",
  };

  const handlers = {
    onMouseEnter: () => (href || onClick) && setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onClick,
  };

  if (href) {
    return (
      <Link href={href} style={style} {...handlers}>
        {label}
      </Link>
    );
  }
  return (
    <span style={style} {...handlers}>
      {label}
    </span>
  );
}

function SubNavItem({
  label,
  disabled,
  isSelected,
  onSelect,
}: {
  label: string;
  disabled?: boolean;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const style: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
    cursor: disabled ? "default" : "pointer",
    fontWeight: 400, // always regular weight for sub nav
    fontSize: 17,
    color: disabled ? "#d9d9d9" : isSelected ? "#333333" : isHovered ? "#8e8e93" : "#c2c2c2",
    transition: "color 0.2s ease, background-color 0.2s ease",
    background: isSelected ? "#f2f2f2" : "transparent",
    borderRadius: 6,
    padding: "3px 10px",
    marginLeft: isSelected ? 10 : 22, // aligns text of selected and non-selected items
  };

  return (
    <span
      style={style}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={disabled ? undefined : onSelect}
    >
      {isSelected && (
        <span style={{ marginRight: 6, fontSize: 12, display: "inline-flex", alignItems: "center" }}>
          •
        </span>
      )}
      {label}
    </span>
  );
}

export default function SideNav({
  active = "intro",
  navRef,
  submenu,
  selectedSubKey,
  onSelectSub,
  onItemClick,
}: {
  active?: ActiveSection;
  navRef?: React.RefObject<HTMLElement | null>;
  submenu?: SubNavItem[];
  selectedSubKey?: string;
  onSelectSub?: (key: string) => void;
  onItemClick?: (key: ActiveSection, e: React.MouseEvent) => void;
} = {}) {
  const [showSubmenu, setShowSubmenu] = useState(false);

  useEffect(() => {
    if (active !== "design" || !submenu) {
      setShowSubmenu(false);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowSubmenu(true);
      } else {
        setShowSubmenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active, submenu]);

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        left: 48,
        bottom: 56,
        zIndex: 40,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        fontSize: 20,
        lineHeight: 1.196,
      }}
    >
      {NAV_ITEMS.map((item) => {
        const isDesignItem = item.key === "design";
        return (
          <div
            key={item.key}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: isDesignItem && showSubmenu ? 8 : 0,
            }}
          >
            <NavItem
              label={item.label}
              href={item.href}
              isActive={active === item.key}
              onClick={(e) => onItemClick?.(item.key, e)}
            />
            {isDesignItem && submenu && (
              <div
                style={{
                  overflow: "hidden",
                  transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease",
                  maxHeight: showSubmenu ? `${submenu.length * 36}px` : "0px",
                  opacity: showSubmenu ? 1 : 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 8,
                }}
              >
                {submenu.map((sub) => (
                  <SubNavItem
                    key={sub.key}
                    label={sub.label}
                    disabled={sub.disabled}
                    isSelected={selectedSubKey === sub.key}
                    onSelect={() => onSelectSub?.(sub.key)}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}

      <a
        href="mailto:havengpark@gmail.com"
        style={{
          display: "inline-flex",
          alignItems: "center",
          marginTop: 4,
          color: "#c2c2c2",
          transition: "color 0.2s ease",
          width: "fit-content",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#8e8e93";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#c2c2c2";
        }}
      >
        <svg width="24" height="21" viewBox="0 0 27 24" fill="none" style={{ display: "block" }}>
          <path d="M23.999 7.15039L14.5585 13.1637C14.2381 13.3498 13.8742 13.4478 13.5037 13.4478C13.1333 13.4478 12.7694 13.3498 12.449 13.1637L2.99902 7.15039" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21.899 4H5.09902C3.93923 4 2.99902 4.9402 2.99902 6.1V18.7C2.99902 19.8598 3.93923 20.8 5.09902 20.8H21.899C23.0588 20.8 23.999 19.8598 23.999 18.7V6.1C23.999 4.9402 23.0588 4 21.899 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </nav>
  );
}
