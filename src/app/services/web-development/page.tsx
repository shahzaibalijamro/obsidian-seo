import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { webDevelopment } from "@/data/new-services";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Web Development Services in Saudi Arabia | Nawa Digital",
    description: "Responsive websites, web applications, content systems, and integrations built around clear user journeys and practical business needs.",
    alternates: {
        canonical: getCanonicalUrl("/services/web-development"),
    },
};

export default function WebDevelopmentPage() {
    return <ServiceLandingPage content={webDevelopment} />;
}
