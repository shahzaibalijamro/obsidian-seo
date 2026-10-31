import type { Metadata } from "next";
import Script from "next/script";
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

import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Nawa Digital - Elevating Digital Landscapes",
  description: "Premium Digital Agency",
};

import GlobalLayoutWrapper from "./GlobalLayoutWrapper";

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
    >
      <head>
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-MCQ4PCTW"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        </script>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body-md antialiased selection:bg-inverse-primary selection:text-on-primary bg-mesh">
        <GlobalLayoutWrapper>
          {children}
        </GlobalLayoutWrapper>
      </body>
    </html>
  );
}
