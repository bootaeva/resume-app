import { ResumeData } from "@/types/resume";

export default function Credentials({ data }: { data: ResumeData }) {
  return (
    <section id="credentials">
      <div className="s-inner">

        {/* Section header */}
        <div className="s-header">
          <div className="s-tag">04 — Credentials</div>
          <h2 className="s-title">Certifications & Education</h2>
        </div>

        {/* Two column grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
        }}>

          {/* LEFT — Certifications */}
          <div>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              color: "var(--accent)",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "6px",
            }}>
              Certifications
            </div>
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "20px",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "16px",
              letterSpacing: "-0.5px",
            }}>
              Certified
            </div>

            {data.certifications.map((cert, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                marginBottom: "16px",
              }}>
                {/* Badge */}
                <div style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border2)",
                  borderRadius: "8px",
                  padding: "8px 10px",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  color: "var(--accent2)",
                  fontWeight: 500,
                  flexShrink: 0,
                  minWidth: "48px",
                  textAlign: "center",
                }}>
                  {cert.badge}
                </div>

                {/* Name + issuer */}
                <div>
                  <div style={{
                    fontSize: "13px",
                    color: "var(--text)",
                    fontWeight: 500,
                    marginBottom: "2px",
                  }}>
                    {cert.name}
                  </div>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "10px",
                    color: "var(--muted)",
                  }}>
                    {cert.issuer} · {cert.year}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — Education */}
          <div>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              color: "var(--accent)",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "6px",
            }}>
              Education
            </div>
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "20px",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "16px",
              letterSpacing: "-0.5px",
            }}>
              Academic
            </div>

            {data.education.map((edu, i) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "16px",
                paddingBottom: "16px",
                borderBottom: i < data.education.length - 1
                  ? "1px solid var(--border)"
                  : "none",
              }}>
                <div>
                  <div style={{
                    fontSize: "13px",
                    color: "var(--text)",
                    fontWeight: 500,
                    marginBottom: "2px",
                  }}>
                    {edu.degree}
                  </div>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "10px",
                    color: "var(--muted)",
                  }}>
                    {edu.institution}
                  </div>
                </div>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "10px",
                  color: "var(--muted)",
                  flexShrink: 0,
                }}>
                  {edu.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}