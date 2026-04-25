import { ResumeData } from "@/types/resume";

// Server-side only — this URL never reaches the browser
// In Kubernetes, this will be the internal service DNS:
// http://resume-backend-svc.default.svc.cluster.local:8000
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";

export async function getResumeData(): Promise<ResumeData> {
  const res = await fetch(`${BACKEND_URL}/resume`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(
      `Failed to fetch resume data from backend: ${res.status} ${res.statusText}`
    );
  }

  return res.json();
}