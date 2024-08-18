import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nashville Intellectual Property Attorney - Hendley & Goodwyn, LLP",
  description: "Nashville Lawyers: Intellectual Property - Business - Entertainment - Esports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </>
        <div id='modal'/>
      </body>
    </html>
  );
}
