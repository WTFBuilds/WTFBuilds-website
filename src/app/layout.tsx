import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wtfbuilds.com"),
  title: { default: "wtfbuilds — witness the future builds", template: "%s — wtfbuilds" },
  description:
    "WTFBuilds is a builder playground — web tools, open source and robots, shipped in public. Home of InvertisPrep.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "wtfbuilds — witness the future builds",
    description: "A builder playground shipping web tools, open source and robots in public.",
    url: "/",
    siteName: "wtfbuilds",
    images: [{ url: "/logo.png", width: 1040, height: 1040 }],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0e10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body className="bg-bg font-display text-text antialiased">
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
