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

const SITE_URL = "https://www.wtfbuilds.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WTFBuilds",
  alternateName: ["wtfbuilds", "Witness The Future Builds"],
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "A builder playground shipping web tools, open source and robots in public. Home of InvertisPrep.",
  foundingDate: "2026",
  sameAs: [
    "https://github.com/WTFBuilds",
    "https://www.instagram.com/wtfbuilds/",
    "https://www.linkedin.com/company/wtfbuilds/",
    "https://www.invertisprep.in",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "wtfbuilds — witness the future builds", template: "%s — wtfbuilds" },
  description:
    "WTFBuilds is a builder playground — web tools, open source and robots, shipped in public. Home of InvertisPrep.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "wtfbuilds — witness the future builds",
    description: "A builder playground shipping web tools, open source and robots in public.",
    url: "/",
    siteName: "wtfbuilds",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "wtfbuilds — witness the future builds" },
      { url: "/logo.png", width: 1040, height: 1040, alt: "the wtfbuilds pixel W" },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "wtfbuilds — witness the future builds",
    description: "A builder playground shipping web tools, open source and robots in public.",
    images: ["/og.png"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
