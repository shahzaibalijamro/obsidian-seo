import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Obsidian Digital - Elevating Digital Landscapes",
  description: "Premium Digital Agency",
};

import BackToTop from "@/components/BackToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";
import AmbientBackground from "@/components/AmbientBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${montserrat.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body-md antialiased selection:bg-inverse-primary selection:text-on-primary bg-mesh">
        <ThemeProvider>
          <CustomCursor />
          <AmbientBackground />
          <Header />
          {children}
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
