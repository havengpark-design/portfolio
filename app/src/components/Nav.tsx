export default function Nav() {
  return (
    <nav
      style={{
        paddingLeft: 48,
        paddingTop: 46,
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      {/* Avatar circle */}
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          overflow: "hidden",
          flexShrink: 0,
          position: "relative",
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
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(38, 36, 33, 0.18)",
          }}
        />
      </div>

      <span
        style={{
          fontSize: 17,
          fontWeight: 400,
          color: "#262421",
        }}
      >
        Haven Park
      </span>
    </nav>
  );
}
