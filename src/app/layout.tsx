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
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MCQ4PCTW');`}
      </Script>
      <body className="font-body-md antialiased selection:bg-inverse-primary selection:text-on-primary bg-mesh">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MCQ4PCTW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <GlobalLayoutWrapper>
          {children}
        </GlobalLayoutWrapper>
      </body>
    </html>
  );
}
