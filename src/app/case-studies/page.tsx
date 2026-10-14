import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/seo";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Proven Impact & Case Studies | Nawa Digital",
  description: "Explore how we've helped industry leaders achieve technical precision and market dominance through data-driven digital strategies.",
  alternates: {
    canonical: getCanonicalUrl("/case-studies"),
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
