export interface Stat {
  value: string;   // e.g. "5+"
  label: string;   // e.g. "Years"
}

export interface WorkExperience {
  company: string;      // "Toast"
  role: string;         // "DevOps Engineer"
  dates: string;        // "Nov 2023 — Present"
  location: string;     // "Los Angeles, CA"
  highlights: string[]; // bullet points
  tags: string[];       // ["EKS", "Terraform", ...]
}

export interface Certification {
  badge: string;  // "CKAD"
  name: string;   // "Certified Kubernetes Application Developer"
  issuer: string; // "Linux Foundation"
  year: number;   // 2026
}

export interface Education {
  degree: string;      // "M.P.S. Global Supply Chain Management"
  institution: string; // "LIM College · New York"
  year: number;        // 2022
}

export interface SkillGroup {
  category: string;  // "Cloud & Infrastructure"
  skills: string[];  // ["AWS EKS", "IAM", "VPC", ...]
}

export interface ResumeData {
  // Hero
  name: string;         // "Alua Bootaeva"
  title: string;        // "Platform Engineer"
  location: string;     // "Los Angeles, CA"
  available: boolean;   // true → shows "Available for new opportunities"
  tagline: string;      // "Building the self-service infrastructure..."
  linkedin: string;     // "https://linkedin.com/in/aluabootaeva"

  // About
  bio: string[];        // array of paragraphs
  stats: Stat[];        // the 4 stat boxes

  // Skills
  skillGroups: SkillGroup[];

  // Experience
  experience: WorkExperience[];

  // Credentials
  certifications: Certification[];
  education: Education[];

  // Contact
  email: string;
  phone: string;
}