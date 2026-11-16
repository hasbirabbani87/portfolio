import type { Metadata } from "next";
import {
  Newsreader,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
} from "next/font/google";
import { Navbar } from "@/components/layout/navbar"; // 1. Import Navbar
import "./globals.css";
import { Footer } from "@/components/layout/footer";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Nama Lo — Full-Stack Engineer",
    template: "%s | Nama Lo",
  },
  description:
    "Full-stack software engineer focusing on resilient web architecture, thoughtful interfaces, and system performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-canvas text-ink font-sans antialiased selection:bg-accent-subtle selection:text-accent">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        </body>
    </html>
  );
}