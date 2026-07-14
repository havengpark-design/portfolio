import Link from "next/link";
import React from "react";

export default function Nav({ breadcrumb, logoRef }: { breadcrumb?: string; logoRef?: React.RefObject<HTMLAnchorElement | null> } = {}) {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        paddingLeft: 48,
        paddingTop: 46,
        paddingBottom: 12,
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <Link ref={logoRef} href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
        <span
          style={{
            fontSize: 17,
            fontWeight: 400,
            color: "#262421",
          }}
        >
          Haven Park
        </span>
      </Link>

      {breadcrumb && (
        <span style={{ fontSize: 17, fontWeight: 400, color: "rgba(38,36,33,0.45)", display: "flex", alignItems: "center", gap: 12 }}>
          <span>/</span>
          <span style={{ color: "#262421" }}>{breadcrumb}</span>
        </span>
      )}
    </nav>
  );
}
