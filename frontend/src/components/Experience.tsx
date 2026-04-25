"use client";

import { ResumeData } from "@/types/resume";

export default function Experience({ data }: { data: ResumeData }) {
  return (
    <section id="experience">
      <div className="s-inner">

        {/* Section header */}
        <div className="s-header">
          <div className="s-tag">03 — Experience</div>
          <h2 className="s-title">My Professional Journey</h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>

          {/* Vertical gradient line */}
          <div style={{
            position: "absolute",
            left: "6px",
            top: "6px",
            bottom: 0,
            width: "1px",
            background: "linear-gradient(to bottom, var(--accent), var(--blue), transparent)",
          }} />

          {/* Job entries */}
          {data.experience.map((job, i) => (
            <div key={i} style={{
              position: "relative",
              paddingLeft: "28px",
              marginBottom: "16px",
            }}>

              {/* Timeline node dot */}
              <div style={{
                position: "absolute",
                left: 0,
                top: "14px",
                width: "13px",
                height: "13px",
                borderRadius: "50%",
                border: "2px solid var(--accent)",
                background: "var(--bg)",
              }} />

              {/* Job card */}
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "20px",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.borderColor = "var(--border2)")
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.borderColor = "var(--border)")
                }
              >
                {/* Role + dates */}
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "2px",
                }}>
                  <span style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#fff",
                  }}>
                    {job.role}
                  </span>
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "10px",
                    color: "var(--muted)",
                  }}>
                    {job.dates}
                  </span>
                </div>

                {/* Company + location */}
                <div style={{
                  fontSize: "12px",
                  color: "var(--accent2)",
                  marginBottom: "12px",
                  fontWeight: 400,
                }}>
                  {job.company} · {job.location}
                </div>

                {/* Bullet points */}
                <ul style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  marginBottom: "14px",
                }}>
                  {job.highlights.map((point, j) => (
                    <li key={j} style={{
                      fontSize: "12px",
                      color: "var(--muted)",
                      lineHeight: 1.55,
                      display: "flex",
                      gap: "8px",
                      fontWeight: 300,
                    }}>
                      <span style={{
                        color: "rgba(124,109,250,0.4)",
                        flexShrink: 0,
                        fontSize: "11px",
                        marginTop: "1px",
                      }}>→</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {job.tags.map((tag, k) => (
                    <span key={k} style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "10px",
                      color: "#4a4a66",
                      border: "1px solid var(--faint)",
                      borderRadius: "100px",
                      padding: "2px 9px",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}