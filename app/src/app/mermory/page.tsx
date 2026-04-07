import Nav from "@/components/Nav";

export default function MermoryPage() {
  return (
    <main style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      <Nav breadcrumb="Product Design" />

      <div style={{ paddingLeft: 150, paddingRight: 150, paddingTop: 64, paddingBottom: 120 }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 13, color: "rgba(38,36,33,0.4)", marginBottom: 18, letterSpacing: "0.01em" }}>
            Product Design · 12 months (2025)
          </p>
          <h1 style={{ fontSize: 72, fontWeight: 700, color: "#262421", letterSpacing: "-2px", lineHeight: 1, marginBottom: 14 }}>
            Mermory
          </h1>
          <p style={{ fontSize: 18, color: "rgba(38,36,33,0.5)" }}>
            AI-powered study app
          </p>
        </div>

        {/* Metadata */}
        <div style={{ display: "flex", gap: 80, paddingTop: 24, paddingBottom: 24, borderTop: "1px solid rgba(38,36,33,0.08)", borderBottom: "1px solid rgba(38,36,33,0.08)", marginBottom: 64 }}>
          {[
            { label: "Role", value: "Product Designer" },
            { label: "Timeline", value: "12 months (2025)" },
            { label: "Tools", value: "Figma, Rive" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p style={{ fontSize: 12, color: "rgba(38,36,33,0.35)", marginBottom: 6, letterSpacing: "0.02em" }}>{label}</p>
              <p style={{ fontSize: 15, color: "#262421" }}>{value}</p>
            </div>
          ))}
        </div>

        {/* Hero image */}
        <div style={{ background: "#F0EEE8", borderRadius: 24, padding: "40px 60px", marginBottom: 80 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Design/mermory/laptopmock.png"
            alt="Mermory app mockup"
            style={{ width: "100%", display: "block", borderRadius: 12 }}
          />
        </div>

        {/* Overview */}
        <div style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: "#262421", marginBottom: 20 }}>Overview</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(38,36,33,0.6)" }}>
            Mermory is an AI-powered flashcard platform that gave students creative autonomy over how they study. Unlike Quizlet or Anki, Mermory let users personalize their cards with stickers, themes, and design elements through a Creator Studio—while maintaining industry-standard learning science through FSRS spaced repetition. The challenge was building frictionless import flows and quick-add tools that felt approachable, not technical.
          </p>
        </div>

        {/* Problem */}
        <div style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: "#262421", marginBottom: 20 }}>Problem</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(38,36,33,0.6)" }}>
            Existing study platforms felt rigid and utilitarian. Students using Quizlet, Anki, and other competitors often encountered three friction points: onboarding required rebuilding entire decks from scratch when switching platforms, card creation was time-consuming and repetitive, and there was no way to express personal style or motivation through design. Users wanted learning tools that felt less like homework and more like spaces they wanted to return to.
          </p>
        </div>

        {/* Solution */}
        <div style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: "#262421", marginBottom: 20 }}>Solution</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(38,36,33,0.6)" }}>
            We designed an end-to-end creative learning platform that combined three core pillars: one-click AI import from competitors and study materials, a template-based quick-add system that reduced deck creation time by 41%, and a Creator Studio where students could personalize cards with themes, stickers, and gradient borders. Behind the scenes, the FSRS algorithm powered spaced repetition, while fill-in-the-blank and other dynamic test modes gave users flexibility in how they practiced. Beta feedback drove continuous iteration on import error handling and feature discovery, increasing new user adoption by 39%.
          </p>
        </div>

        {/* Process */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: "#262421", marginBottom: 32 }}>Process</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[
              { n: 1, title: "Research & Discovery", desc: "Conducted 20+ interviews with students and educators to understand pain points in current study methods. Created user journey maps and identified key intervention points." },
              { n: 2, title: "Ideation & Wireframing", desc: "Explored multiple interaction models for AI-assisted learning. Tested low-fidelity prototypes with target users to validate core concepts." },
              { n: 3, title: "Visual Design", desc: "Developed a warm, approachable design system that balances playfulness with functionality. Created a comprehensive component library for consistency." },
              { n: 4, title: "Prototyping & Testing", desc: "Built high-fidelity prototypes with micro-interactions. Conducted usability testing sessions and iterated based on feedback." },
            ].map(({ n, title, desc }) => (
              <div key={n} style={{ padding: "28px", borderRadius: 16, border: "1px solid rgba(38,36,33,0.08)" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#262421", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <span style={{ fontSize: 12, color: "#FFFFF8", fontWeight: 500 }}>{n}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 500, color: "#262421", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(38,36,33,0.55)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom screenshots */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Design/mermory/laptopmockv2.png"
          alt="Mermory interface detail"
          style={{ width: "100%", borderRadius: 24, display: "block" }}
        />
      </div>
    </main>
  );
}
