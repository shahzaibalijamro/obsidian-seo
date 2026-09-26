import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { webDevelopment } from "@/data/new-services";

export const metadata: Metadata = {
    title: "Web Development Services in Saudi Arabia | Obsidian Digital",
    description: "Responsive websites, web applications, content systems, and integrations built around clear user journeys and practical business needs.",
};

export default function WebDevelopmentPage() {
    return <ServiceLandingPage content={webDevelopment} />;
}
