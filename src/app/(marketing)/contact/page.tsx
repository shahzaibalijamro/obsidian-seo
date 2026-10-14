import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/seo";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Nawa Digital",
  description: "Get in touch with Nawa Digital. Request an audit, discuss your project, or schedule a strategy call with our digital experts.",
  alternates: {
    canonical: getCanonicalUrl("/contact"),
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
