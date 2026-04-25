RESUME = {
    # ── Hero ────────────────────────────────────────────────────────────
    "name": "Alua Bootaeva",
    "title": "Platform Engineer",
    "location": "Los Angeles, CA",
    "available": True,
    "tagline": "Building the <strong>self-service infrastructure</strong> that 20+ teams ship on — so engineers deploy independently without waiting on DevOps.",
    "linkedin": "https://linkedin.com/in/aluabootaeva",

    # ── Contact ─────────────────────────────────────────────────────────
    "email": "bootaeva@gmail.com",
    "phone": "(929) 844-1960",

    # ── About ───────────────────────────────────────────────────────────
    "bio": [
        "Platform engineer with 5 years designing scalable, self-service infrastructure on AWS, with deep expertise in Kubernetes, EKS, Terraform, Helm, and GitOps. Built the platform foundations that 20+ product teams at Toast and Flexport ship on.",
        "Supply chain background brings a systems-level instinct for dependencies, resilience, and what downtime actually costs a business. CKAD and Terraform Associate certified.",
    ],
    "stats": [
        {"value": "5+",  "label": "Years"},
        {"value": "20+", "label": "Teams"},
        {"value": "25%", "label": "EC2 saved"},
        {"value": "$40K","label": "Tooling saved"},
    ],

    # ── Skills ──────────────────────────────────────────────────────────
    "skillGroups": [
        {
            "category": "Cloud & Infrastructure",
            "skills": ["AWS EKS", "IAM", "VPC", "Secrets Manager", "ECR", "RDS", "Lambda"],
        },
        {
            "category": "Kubernetes & Containers",
            "skills": ["Kubernetes", "Helm", "Karpenter", "Docker", "RBAC", "IRSA", "OIDC", "HPA"],
        },
        {
            "category": "IaC & GitOps",
            "skills": ["Terraform", "Terragrunt", "ArgoCD", "Flux CD", "GitHub Actions", "GitOps"],
        },
        {
            "category": "Observability",
            "skills": ["Prometheus", "Grafana", "Elasticsearch", "Fluentd", "Kibana", "Linux"],
        },
        {
            "category": "AI & Tooling",
            "skills": ["GitHub Copilot", "Cursor", "Claude", "Claude Code", "MCP", "AI Agents"],
        },
    ],

    # ── Experience ──────────────────────────────────────────────────────
    "experience": [
        {
            "company": "Toast",
            "role": "DevOps Engineer",
            "dates": "Nov 2023 — Present",
            "location": "Los Angeles, CA",
            "highlights": [

                "Built the AWS EKS platform that 80+ engineers across Toast's fintech product build and deploy on, designing for multi-AZ availability, 3-environment parity, and operational patterns that let teams run their own infrastructure day to day.",
                "Cut EC2 costs roughly 25% by implementing Karpenter with a mixed spot/on-demand strategy and HPA for pod-level scaling, eliminating manual ASG management and maintaining cluster stability under variable load.",
                "Reduced new-environment provisioning from 3 to 5 days to under 4 hours by building a modular Terraform and Terragrunt structure with remote state and workspace locking, keeping dev, staging, and prod in sync and eliminating manual configuration drift across environments.",
                "Drove $40K in annual tooling savings by replacing a managed observability stack with self-hosted Prometheus, Grafana, and EFK stack with S3-backed log retention, giving engineering teams direct observability into their own workloads so they could diagnose and resolve incidents without escalating to infrastructure.",
                "Replaced a fragmented CI/CD setup across 35+ services with a standardized GitHub Actions pipeline, introducing branch-based promotion, approval gates, OIDC-based AWS auth, and automated rollback so engineering teams could own and troubleshoot their own deployments without infrastructure involvement.",
                "Hardened platform security posture across all 3 environments, implementing Kubernetes RBAC, AWS Secrets Manager with IRSA and ASCP, TLS at ingress via cert-manager, and least-privilege IAM applied consistently across dev, staging, and prod.",
                "Mentored 2 junior engineers on Terraform, Helm, and Kubernetes; the sessions became the standard onboarding resource for new DevOps hires.",

            ],
            "tags": ["EKS", "Karpenter", "Terraform", "GitHub Actions", "Prometheus", "RBAC", "Helm"],
        },
        {
            "company": "Flexport",
            "role": "DevOps Engineer, Infrastructure",
            "dates": "Feb 2021 — Oct 2023",
            "location": "New York, NY",
            "highlights": [

                "Owned the modular Terraform setup for VPC, EKS, and IAM/IRSA on the Core Infrastructure team, including cluster upgrades and lifecycle management; the provisioning pattern became the standard across all environments.",
                "Designed Helm chart templates and standardized the values structure across dev, staging, and prod so 20+ product teams could onboard and ship services independently, cutting new service onboarding from 3 to 5 days to under a day.",
                "Deployed an EFK logging pipeline on EKS with FluentD dual-shipping to Elasticsearch and S3,  gave engineers on 10+ teams a searchable live view and a 90-day cold backup without requiring any application code changes.",
                "Provisioned RDS MySQL and MongoDB instances via Terraform for application teams, including multi-AZ configuration, automated backups, and IRSA-scoped IAM access; built as reusable modules so new services could get production-ready databases without involving infrastructure each time.",
                "Built Prometheus alerting and Grafana dashboards across 20+ engineering teams covering pod health, resource saturation, and latency, giving every team a self-serve observability layer and removing infrastructure as the bottleneck for incident response.",
                "Eliminated manual DNS management across 20+ services by automating Route 53 updates via external-dns and Ingress annotations,  removing a recurring source of misconfiguration-related risk that comes with platform growth.",

            ],
            "tags": ["Terraform", "EKS", "Helm", "Prometheus", "EFK", "RDS", "Flux CD"],
        },
    ],

    # ── Credentials ─────────────────────────────────────────────────────
    "certifications": [
        {
            "badge": "CKAD",
            "name": "Certified Kubernetes Application Developer",
            "issuer": "Linux Foundation",
            "year": 2026,
        },
        {
            "badge": "TF",
            "name": "Terraform Associate",
            "issuer": "HashiCorp",
            "year": 2025,
        },
    ],
    "education": [
        {
            "degree": "M.P.S. Global Supply Chain Management",
            "institution": "LIM College · New York",
            "year": 2022,
        },
        {
            "degree": "B.S. Fashion Business Management",
            "institution": "Fashion Institute of Technology (FIT)",
            "year": 2020,
        },
    ],
}