export default function ResumeCTA() {
  return (
    <section id="resume">
      <div className="s-inner">
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            padding: "48px 40px",
            textAlign: "center",
            maxWidth: "620px",
            margin: "0 auto",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle glow at top of card */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(124,109,250,0.08) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />

          {/* Tag */}
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              color: "var(--accent)",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            05 — Resume
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "-1px",
              color: "#fff",
              marginBottom: "10px",
            }}
          >
            Want the full picture?
          </h2>

          {/* Subtext */}
          <p
            style={{
              fontSize: "14px",
              color: "var(--muted)",
              fontWeight: 300,
              marginBottom: "28px",
              lineHeight: 1.6,
            }}
          >
            Download my resume for a complete look at my experience,
            <br />
            certifications, and the infrastructure I&apos;ve shipped.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
            }}
          >
            {/* Download button */}
            <a
              href="/resume.pdf"
              download="AluaBootaeva_Resume.pdf"
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--blue))",
                color: "#fff",
                border: "none",
                padding: "12px 28px",
                borderRadius: "6px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="3" x2="12" y2="15" />
                <polyline points="8 11 12 15 16 11" />
                <line x1="3" y1="19" x2="21" y2="19" />
              </svg>
              Download PDF
            </a>

            {/* View online button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                color: "var(--muted)",
                border: "1px solid var(--border2)",
                padding: "11px 24px",
                borderRadius: "6px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <ellipse cx="12" cy="12" rx="10" ry="5" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              View Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
