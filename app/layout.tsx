'use client';

import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
import { useState } from "react";

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Nashville Intellectual Property Attorney - Hendley & Goodwyn, LLP</title>
        <meta name="description" content="Nashville Lawyers: Intellectual Property - Business - Entertainment - Esports."/>
      </head>
      <body className={nunito.className}>
        <>
          <Header
            isContactFormVisible={isContactFormVisible}
            setIsContactFormVisible={setIsContactFormVisible} />
          <main>
            {children}
          </main>
          <Footer
            setIsContactFormVisible={setIsContactFormVisible} />
        </>
        <div id='modal' />
      </body>
    </html>
  );
}
