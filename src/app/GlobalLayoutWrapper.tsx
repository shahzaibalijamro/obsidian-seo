"use client";

import { usePathname } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import ContactSection from "@/components/ContactSection";
import BackToTop from "@/components/BackToTop";

export default function GlobalLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <AmbientBackground />
      <Header />
      {children}
      <ContactSection />
      <Footer />
      <BackToTop />
    </>
  );
}
