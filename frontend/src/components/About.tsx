import { ResumeData } from "@/types/resume";

export default function About({ data }: { data: ResumeData }) {
  return (
    <section id="about">
      <div className="s-inner">

        {/* Section header */}
        <div className="s-header">
          <div className="s-tag">01 — About</div>
          <h2 className="s-title">Background</h2>
        </div>

        {/* Two-column grid: photo + bio */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "200px 1fr",
          gap: "40px",
          alignItems: "start",
        }}>

          {/* Photo placeholder */}
          <div style={{
            aspectRatio: "1",
            background: "var(--surface)",
            border: "1px solid var(--border2)",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--faint)",
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
          }}>
            []
          </div>

          {/* Bio + stats */}
          <div>
            {/* Bio paragraphs — driven by backend array */}
            {data.bio.map((paragraph, i) => (
              <p key={i} style={{
                color: "var(--muted)",
                fontSize: "14px",
                lineHeight: 1.8,
                marginBottom: "24px",
                fontWeight: 300,
              }}>
                {paragraph}
              </p>
            ))}

            {/* Stat boxes */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "10px",
            }}>
              {data.stats.map((stat, i) => (
                <div key={i} style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "14px 10px",
                  textAlign: "center",
                }}>
                  <div style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "-1px",
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: "10px",
                    color: "var(--muted)",
                    marginTop: "4px",
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "0.5px",
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}