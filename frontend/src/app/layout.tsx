import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alua Bootaeva — Platform Engineer",
  description:
    "Platform Engineer with 5 years of experience in AWS, Kubernetes, Terraform, and GitOps.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}