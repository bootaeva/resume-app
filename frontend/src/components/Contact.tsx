"use client";

import { ResumeData } from "@/types/resume";

export default function Contact({ data }: { data: ResumeData }) {
  return (
    <>
      <section id="contact">
        <div className="s-inner">
          <div className="s-header" style={{ textAlign: "center" }}>
            <div className="s-tag" style={{ textAlign: "center" }}>06 — Contact</div>
            <h2 className="s-title" style={{ textAlign: "center" }}>Get in Touch</h2>
          </div>

          <div style={{ maxWidth: "480px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "13px", color: "var(--muted)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="2,4 12,13 22,4" />
                </svg>
                <a href={`mailto:${data.email}`} style={{ color: "var(--muted)", textDecoration: "none" }}>
                  {data.email}
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "13px", color: "#4a4a66" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a4a66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 2a8 8 0 0 1 8 8c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 8-8z" />
                </svg>
                {data.location}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "24px" }}>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "var(--surface)", border: "1px solid var(--border2)", borderRadius: "6px", padding: "7px 18px", fontSize: "12px", fontFamily: "'DM Mono', monospace", color: "var(--muted)", textDecoration: "none" }}
              >
                LinkedIn ↗
              </a>
              <CopyButton label={data.phone} copyText={data.phone} />
              <CopyButton label="Copy Email" copyText={data.email} />
            </div>

            <a href={`mailto:${data.email}`} className="btn-filled" style={{ justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <polyline points="2,4 12,13 22,4" />
              </svg>
              Send me an email
            </a>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid var(--border)", padding: "20px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 1 }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#2e2e42" }}>
          © 2026 Alua Bootaeva. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#2e2e42", textDecoration: "none" }}>
            LinkedIn
          </a>
          <a href="/resume.pdf" download="AluaBootaeva_Resume.pdf" style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#2e2e42", textDecoration: "none" }}>
            Resume
          </a>
        </div>
      </footer>

      <div id="toast" style={{ position: "fixed", bottom: "28px", left: "50%", transform: "translateX(-50%) translateY(80px)", background: "var(--surface2)", border: "1px solid var(--border2)", borderRadius: "8px", padding: "12px 20px", fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "var(--text)", zIndex: 999, display: "flex", alignItems: "center", gap: "8px", opacity: 0, transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)", whiteSpace: "nowrap", pointerEvents: "none" }}>
        <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--teal)", flexShrink: 0 }} />
        <span id="toast-msg">Copied to clipboard!</span>
      </div>
    </>
  );
}

function CopyButton({ label, copyText }: { label: string; copyText: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(copyText).then(() => {
      const toast = document.getElementById("toast");
      const msg = document.getElementById("toast-msg");
      if (toast && msg) {
        msg.textContent = "Copied to clipboard!";
        toast.style.opacity = "1";
        toast.style.transform = "translateX(-50%) translateY(0)";
        setTimeout(() => {
          toast.style.opacity = "0";
          toast.style.transform = "translateX(-50%) translateY(80px)";
        }, 2800);
      }
    });
  };

  return (
    <button onClick={handleCopy} style={{ background: "var(--surface)", border: "1px solid var(--border2)", borderRadius: "6px", padding: "7px 18px", fontSize: "12px", fontFamily: "'DM Mono', monospace", color: "var(--muted)", cursor: "pointer" }}>
      {label}
    </button>
  );
}
