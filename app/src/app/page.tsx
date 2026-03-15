import Link from "next/link";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

const L = 297; // left padding to match Figma

const designProjects = [
  {
    href: "/mermory",
    img: "/Design/mermory/poster.png",
    name: "Mermory",
    tags: "Product Design · AI-powered study app",
  },
  {
    href: "/jams",
    img: "/Design/jams/poster.png",
    name: "Jams",
    tags: "Product Design · Enterprise job automation platform",
  },
  {
    href: "/portico",
    img: "/Design/portico/thumbnails.png",
    name: "Portico",
    tags: "Product Design · Enterprise job automation platform",
  },
];

function SectionHeader({ title }: { title: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 11,
        marginBottom: 32,
      }}
    >
      <span
        style={{
          fontSize: 24,
          fontWeight: 400,
          color: "#333333",
          letterSpacing: "-0.24px",
        }}
      >
        {title}
      </span>
      {/* Chevron arrow */}
      <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
        <path
          d="M1 1L7 6.5L1 12"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <main style={{ background: "#FFFFF8", minHeight: "100vh" }}>
      <Nav />
      <Hero />

      {/* ── Product Design ── */}
      <section style={{ marginTop: 80 }}>
        <div style={{ paddingLeft: L }}>
          <SectionHeader title="Product Design" />
        </div>
        <div className="scroll-x" style={{ paddingLeft: L }}>
        <div style={{ display: "inline-flex", gap: 50 }}>
          {designProjects.map(({ href, img, name, tags }) => (
            <div
              key={name}
              style={{
                width: 470,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 29,
              }}
            >
              <Link href={href} style={{ display: "block", width: "100%" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={name}
                  style={{
                    width: "100%",
                    height: 644,
                    objectFit: "cover",
                    borderRadius: 24,
                    display: "block",
                  }}
                />
              </Link>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  fontWeight: 400,
                  color: "rgba(38, 36, 33, 0.55)",
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: "#262421" }}>{name}</span>
                {" · "}
                {tags}
              </p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* ── Storytelling ── */}
      <section style={{ marginTop: 80 }}>
        <div style={{ paddingLeft: L }}>
          <SectionHeader title="Storytelling" />
        </div>
        <div className="scroll-x" style={{ paddingLeft: L }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 40 }}>
          {["Instagram", "TikTok", "Youtube"].map((platform) => (
            <span
              key={platform}
              style={{
                fontSize: 18,
                fontWeight: 400,
                color: "rgba(38, 36, 33, 0.55)",
                cursor: "pointer",
              }}
            >
              {platform}
            </span>
          ))}
        </div>
        </div>
      </section>

      {/* ── Art ── */}
      <section style={{ marginTop: 80 }}>
        <div style={{ paddingLeft: L }}>
          <SectionHeader title="Art" />
        </div>
        <div className="scroll-x" style={{ paddingLeft: L }}>
        <div style={{ display: "inline-flex", gap: 50 }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 470,
                height: 644,
                borderRadius: 24,
                background: "#D9D9D9",
              }}
            />
          ))}
        </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{
          paddingLeft: L,
          marginTop: 120,
          paddingBottom: 48,
          fontSize: 13,
          color: "rgba(38, 36, 33, 0.35)",
        }}
      >
        Made with Next.js, Figma, Claude Code
      </footer>
    </main>
  );
}
