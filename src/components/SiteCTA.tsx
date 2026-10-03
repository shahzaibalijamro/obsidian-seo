"use client";

import { usePathname } from "next/navigation";
import CTASection from "@/components/CTASection";

const excludedPaths = new Set(["/", "/privacy", "/terms"]);

export default function SiteCTA() {
  const pathname = usePathname();

  if (excludedPaths.has(pathname)) {
    return null;
  }

  return (
    <CTASection
      badge="FINAL CALL TO ACTION (CTA)"
      title="Looking to Expand Your Business to Saudi Arabia?"
      description="Partner with a digital marketing agency that can unite traffic, content, AI-driven automation, and development around a single commercial objective."
      buttonText="Start a Conversation"
      buttonHref="/contact"
    />
  );
}
