import { ResumeData } from "@/types/resume";

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

// To change an icon: update the URL
// To find URLs: go to devicon.dev, search the tool, copy the img src
// Format: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/{tool}/{tool}-{style}.svg
const iconMap: Record<string, string> = {
  // Cloud & Infrastructure
  "AWS EKS":         "/icons/aws/aws-eks.svg",
  "IAM":             "/icons/aws/iam.svg",
  "VPC":             "/icons/aws/vpc.svg",
  "Secrets Manager": "/icons/aws/sm.svg",
  "ECR":             "/icons/aws/ecr.svg",
  "RDS":             "/icons/aws/rds.svg",
  "Lambda":          "/icons/aws/lambda.svg",
  // Kubernetes & Containers
  "Kubernetes":      `${CDN}/kubernetes/kubernetes-plain.svg`,
  "Helm":            `${CDN}/helm/helm-original.svg`,
  "Karpenter":       "/icons/karpenter.svg",
  "Docker":          `${CDN}/docker/docker-plain.svg`,
  "RBAC":            `${CDN}/kubernetes/kubernetes-plain.svg`,
  "IRSA":            `${CDN}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
  "OIDC":            `${CDN}/kubernetes/kubernetes-plain.svg`,
  "HPA":             `${CDN}/kubernetes/kubernetes-plain.svg`,
  // IaC & GitOps
  "Terraform":       `${CDN}/terraform/terraform-original.svg`,
  "Terragrunt":      `${CDN}/terraform/terraform-original.svg`,
  "ArgoCD":          `${CDN}/argocd/argocd-original.svg`,
  "Flux CD":         "/icons/flux-cd.svg",
  "GitHub Actions":  `${CDN}/githubactions/githubactions-original.svg`,
  "GitOps":          `${CDN}/git/git-plain.svg`,
  // Observability
  "Prometheus":      `${CDN}/prometheus/prometheus-original.svg`,
  "Grafana":         `${CDN}/grafana/grafana-original.svg`,
  "Elasticsearch":   `${CDN}/elasticsearch/elasticsearch-original.svg`,
  "Fluentd":         `${CDN}/kubernetes/kubernetes-plain.svg`,
  "Kibana":          `${CDN}/kibana/kibana-plain.svg`,
  "Linux":           `${CDN}/linux/linux-original.svg`,
  // AI & Tooling
  "GitHub Copilot":  "/icons/github-copilot.svg",
  "Cursor":          "/icons/cursor.svg",
  "Claude":          "/icons/claude.svg",
  "Claude Code":     "/icons/claude.svg",
  "MCP":             `${CDN}/python/python-original.svg`,
  "AI Agents":       `${CDN}/python/python-original.svg`,
};

export default function Skills({ data }: { data: ResumeData }) {
  return (
    <section id="skills">
      <div className="s-inner">
        <div className="s-header">
          <div className="s-tag">02 — Skills</div>
          <h2 className="s-title">Expertise</h2>
        </div>
        <div className="skill-groups">
          {data.skillGroups.map((group, i) => (
            <div key={i}>
              <div className="sg-name">{group.category}</div>
              <div className="skill-chips">
                {group.skills.map((skill, j) => {
                  const iconUrl = iconMap[skill];
                  return (
                    <span key={j} className="sk sk-icon">
                      {iconUrl && (
                        <img
                          src={iconUrl}
                          width={16}
                          height={16}
                          alt={skill}
                          style={{ flexShrink: 0 }}
                        />
                      )}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
