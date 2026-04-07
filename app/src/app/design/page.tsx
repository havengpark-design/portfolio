import Link from "next/link";
import Nav from "@/components/Nav";

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

export default function DesignPage() {
  return (
    <main style={{ background: "#FFFFFF", minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      <Nav breadcrumb="Product Design" />

      {/* Decorative avatar circle — partially off left edge */}
      <div
        style={{
          position: "absolute",
          left: -70,
          top: 120,
          width: 193,
          height: 193,
          borderRadius: "50%",
          overflow: "hidden",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            mixBlendMode: "multiply",
            opacity: 0.23,
          }}
        />
      </div>

      {/* Project grid */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          paddingLeft: 297,
          paddingRight: 297,
          marginTop: 60,
          paddingBottom: 120,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 470px)",
            gap: 50,
          }}
        >
          {designProjects.map(({ href, img, name, tags }) => (
            <div key={name} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <Link href={href} style={{ display: "block" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={name}
                  className="thumbnail"
                  style={{
                    width: "100%",
                    height: 580,
                    objectFit: "cover",
                    borderRadius: 24,
                    display: "block",
                    boxShadow: "0px 4px 38.3px 0px rgba(0,0,0,0.28)",
                  }}
                />
              </Link>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 400, color: "rgba(38,36,33,0.55)", lineHeight: 1.5 }}>
                <span style={{ color: "#262421" }}>{name}</span>
                {" · "}
                {tags}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
