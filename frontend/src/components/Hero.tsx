import { ResumeData } from "@/types/resume";

export default function Hero({ data }: { data: ResumeData }) {
  const marqueeItems = [
    "Kubernetes", "AWS EKS", "Terraform", "Helm", "ArgoCD",
    "GitHub Actions", "Karpenter", "Prometheus", "Grafana",
    "Flux CD", "Docker", "GitOps", "Terragrunt", "RBAC", "IRSA",
  ];

  return (
    <section className="hero" style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "120px 32px 80px",
      position: "relative",
      zIndex: 1,
    }}>

      {/* Glowing orb background effect */}
      <div style={{
        position: "absolute",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,109,250,0.12) 0%, rgba(96,165,250,0.05) 50%, transparent 70%)",
        left: "50%",
        top: "45%",
        transform: "translate(-50%,-50%)",
        pointerEvents: "none",
        animation: "pulse 6s ease-in-out infinite",
      }} />

      {/* Tag line */}
      <p style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "11px",
        color: "var(--accent2)",
        letterSpacing: "3px",
        textTransform: "uppercase",
        marginBottom: "20px",
        opacity: 0,
        animation: "fadeUp 0.6s ease 0.1s forwards",
      }}>
        {data.title} · {data.location}
      </p>

      {/* Name */}
      <h1 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(52px, 8vw, 96px)",
        fontWeight: 800,
        lineHeight: 0.95,
        letterSpacing: "-3px",
        color: "#fff",
        marginBottom: "20px",
        opacity: 0,
        animation: "fadeUp 0.6s ease 0.2s forwards",
      }}>
        {data.name.split(" ")[0]}<br />
        <span style={{
          background: "linear-gradient(120deg, var(--accent), var(--blue), var(--teal))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          {data.name.split(" ")[1]}
        </span>
      </h1>

      {/* Available badge */}
      {data.available && (
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "rgba(124,109,250,0.08)",
          border: "1px solid rgba(124,109,250,0.2)",
          color: "var(--accent2)",
          padding: "7px 18px",
          borderRadius: "100px",
          fontSize: "13px",
          marginBottom: "28px",
          opacity: 0,
          animation: "fadeUp 0.6s ease 0.3s forwards",
        }}>
          <span style={{
            width: "6px", height: "6px",
            borderRadius: "50%",
            background: "var(--teal)",
            animation: "blink 2s ease-in-out infinite",
            display: "inline-block",
          }} />
          Available for new opportunities
        </div>
      )}

      {/* Tagline */}
      <p style={{
        fontSize: "16px",
        color: "var(--muted)",
        maxWidth: "480px",
        lineHeight: 1.7,
        marginBottom: "36px",
        fontWeight: 300,
        opacity: 0,
        animation: "fadeUp 0.6s ease 0.4s forwards",
      }}
        dangerouslySetInnerHTML={{ __html: data.tagline }}
      />

      {/* Action buttons */}
      <div style={{
        display: "flex",
        gap: "12px",
        marginBottom: "52px",
        opacity: 0,
        animation: "fadeUp 0.6s ease 0.5s forwards",
      }}>
        <a href="#contact" className="btn-filled">
          Get in touch
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M5 12h14m0 0l-7-7m7 7-7 7" />
          </svg>
        </a>
        <a href={data.linkedin} target="_blank"
          rel="noopener noreferrer" className="btn-outline">
          LinkedIn ↗
        </a>
      </div>

      {/* Scrolling marquee */}
      <div style={{
        width: "100%",
        overflow: "hidden",
        maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        opacity: 0,
        animation: "fadeUp 0.6s ease 0.6s forwards",
      }}>
        <div style={{
          display: "flex",
          gap: "16px",
          width: "max-content",
          animation: "marquee 28s linear infinite",
        }}>
          {/* Duplicated for seamless infinite scroll */}
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              border: "1px solid var(--faint)",
              padding: "5px 14px",
              borderRadius: "100px",
              whiteSpace: "nowrap",
              color: "#3a3a55",
            }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}