export default function Hero() {
  return (
    <section style={{ paddingLeft: 270, marginTop: 187 }}>
      {/* Hero container — Frame 427319444: 1051 × 196 */}
      <div style={{ position: "relative", width: 1051, height: 196 }}>

        {/* Avatar circle — logo3: 193 × 196, left=0, top=0 */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 193,
            height: 196,
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Haven Park"
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

        {/* Text row — Frame 427319439: left=27, top=50, flex, gap=35 */}
        <div
          style={{
            position: "absolute",
            left: 27,
            top: 50,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 35,
          }}
        >
          {/* "Haven Park" h1 title overlapping avatar */}
          <h1
            style={{
              fontSize: 64,
              fontWeight: 590,
              color: "#262421",
              letterSpacing: "-0.64px",
              lineHeight: "150%",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            Haven Park
          </h1>

          {/* Bio text */}
          <div
            style={{
              fontFamily:
                "ui-rounded, -apple-system, BlinkMacSystemFont, sans-serif",
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.6,
              color: "rgba(38, 36, 33, 0.55)",
            }}
          >
            <p style={{ margin: 0 }}>
              Product designer currently consulting for{" "}
              <span style={{ color: "#262421" }}>
                EduTech, B2B enterprise applications.
              </span>
            </p>
            <p style={{ margin: 0 }}>
              Storyteller with over{" "}
              <span style={{ color: "#262421" }}>300,000 followers</span>{" "}
              across social platforms.
            </p>
            <p style={{ margin: 0 }}>
              Artist from{" "}
              <span style={{ color: "#262421" }}>@uclaarts.</span>
            </p>
          </div>
        </div>

        {/* Line 51 — divider: left=27, top=163, 1024 × 1 */}
        <div
          style={{
            position: "absolute",
            left: 27,
            top: 163,
            width: 1024,
            height: 1,
            background: "rgba(38, 36, 33, 0.11)",
          }}
        />
      </div>
    </section>
  );
}
