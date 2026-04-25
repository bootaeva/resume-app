export default function Nav() {
  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 48px",
      height: "60px",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      background: "rgba(8,8,16,0.85)",
      backdropFilter: "blur(16px)",
    }}>

      {/* Logo */}
      <div style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "17px",
        fontWeight: 800,
        letterSpacing: "-0.5px",
        color: "#fff",
      }}>
        Alua<span style={{
          background: "linear-gradient(120deg, var(--accent), var(--blue))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}> Bootaeva</span>
      </div>

      {/* Nav links */}
      <ul style={{
        display: "flex",
        gap: "32px",
        listStyle: "none",
      }}>
        {["about", "skills", "experience", "credentials", "contact"].map((section) => (
          <li key={section}>
            <a href={`#${section}`} style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              color: "var(--muted)",
              textDecoration: "none",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}>
              {section}
            </a>
          </li>
        ))}
      </ul>

      {/* Resume button */}
      <a href="#resume" style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "11px",
        color: "var(--accent2)",
        textDecoration: "none",
        border: "1px solid rgba(124,109,250,0.3)",
        padding: "6px 14px",
        borderRadius: "4px",
        letterSpacing: "0.5px",
        textTransform: "uppercase",
      }}>
        Resume ↗
      </a>
    </nav>
  );
}